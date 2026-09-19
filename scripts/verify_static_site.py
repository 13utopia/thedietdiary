import os
import re
import sys
import threading
import http.server
import socketserver
import urllib.request

PORT = 8888
ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT_DIR, **kwargs)

    def log_message(self, format, *args):
        pass # Silence verbose server logs during testing

def run_server():
    with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
        httpd.serve_forever()

def verify_site():
    server_thread = threading.Thread(target=run_server, daemon=True)
    server_thread.start()
    print(f"Local server started on http://localhost:{PORT}")

    test_pages = [
        "http://localhost:8888/index.html",
        "http://localhost:8888/about/index.html",
        "http://localhost:8888/my-services/index.html",
        "http://localhost:8888/programs/index.html",
        "http://localhost:8888/diet-plan/index.html",
        "http://localhost:8888/pricing/index.html",
        "http://localhost:8888/shop/index.html",
        "http://localhost:8888/testimonial/index.html",
        "http://localhost:8888/blog/index.html",
        "http://localhost:8888/gorgeous-peach-salad/index.html",
        "http://localhost:8888/how-you-should-be-doing-oat-bran-for-breakfast/index.html",
        "http://localhost:8888/two-huge-double-chocolate-cookies/index.html",
        "http://localhost:8888/product/family-counselling/index.html",
        "http://localhost:8888/product/food-sensitivities/index.html",
        "http://localhost:8888/product/personal-counselling/index.html",
    ]

    total_checks = 0
    errors = []

    url_pattern = re.compile(r'(?:src|href)=["\']([^"\']+)["\']', re.IGNORECASE)

    for page in test_pages:
        try:
            req = urllib.request.Request(page)
            with urllib.request.urlopen(req) as resp:
                if resp.status != 200:
                    errors.append(f"Page error {resp.status}: {page}")
                    continue
                html = resp.read().decode('utf-8', errors='ignore')
                total_checks += 1

                # Extract referenced assets
                assets = url_pattern.findall(html)
                for asset in set(assets):
                    if asset.startswith('#') or asset.startswith('javascript:') or asset.startswith('data:'):
                        continue
                    if asset.startswith('http://') or asset.startswith('https://'):
                        if 'localhost' not in asset:
                            continue
                        asset_url = asset
                    else:
                        # Build absolute URL relative to page
                        base_url = page.rsplit('/', 1)[0] + '/'
                        asset_url = urllib.parse.urljoin(base_url, asset)

                    # Test fetching asset
                    try:
                        a_req = urllib.request.Request(asset_url)
                        with urllib.request.urlopen(a_req) as a_resp:
                            if a_resp.status != 200:
                                errors.append(f"Asset error {a_resp.status} on {page}: {asset_url}")
                            else:
                                total_checks += 1
                    except Exception as e:
                        errors.append(f"Asset fetch failed on {page}: {asset_url} ({e})")

        except Exception as e:
            errors.append(f"Failed to fetch page {page}: {e}")

    print(f"\nCompleted Verification Test across {len(test_pages)} pages ({total_checks} successful checks).")
    if errors:
        print(f"FOUND {len(errors)} ERRORS:")
        for err in errors[:20]:
            print("  -", err)
    else:
        print("ALL PAGES AND ASSETS LOADED WITH ZERO 404 ERRORS!")

if __name__ == '__main__':
    verify_site()
