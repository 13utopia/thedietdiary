import os
import re
import urllib.request
from urllib.parse import unquote

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
LIVE_BASE = "https://thedietdiary.in/"

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

def fix_all_missing_assets():
    html_files = []
    for root, dirs, files in os.walk(ROOT_DIR):
        if 'scripts' in root or 'website-images' in root:
            continue
        for file in files:
            if file.endswith('.html'):
                html_files.append(os.path.join(root, file))

    pattern = re.compile(r'(?:href|src)=["\']([^"\']+)["\']', re.IGNORECASE)

    missing_count = 0
    fetched_count = 0

    for filepath in html_files:
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()

        matches = pattern.findall(content)
        for asset in set(matches):
            if asset.startswith('#') or asset.startswith('javascript:') or asset.startswith('data:') or asset.startswith('tel:') or asset.startswith('mailto:'):
                continue
            
            clean = asset.split('?')[0].split('#')[0]
            if clean.startswith('http://') or clean.startswith('https://'):
                if 'thedietdiary.in' not in clean:
                    continue
                clean_rel = re.sub(r'^https?://(?:www\.)?thedietdiary\.in/?', '', clean).lstrip('/')
            else:
                clean_rel = re.sub(r'^(\.\./|\./)+', '', clean).lstrip('/')

            if not clean_rel:
                continue

            local_path = os.path.normpath(os.path.join(ROOT_DIR, clean_rel))
            if not os.path.exists(local_path):
                missing_count += 1
                download_url = f"https://thedietdiary.in/{clean_rel}"
                os.makedirs(os.path.dirname(local_path), exist_ok=True)
                try:
                    req = urllib.request.Request(download_url, headers=HEADERS)
                    with urllib.request.urlopen(req) as resp, open(local_path, 'wb') as out_f:
                        out_f.write(resp.read())
                    fetched_count += 1
                    print(f"Downloaded missing CSS/JS asset: {clean_rel}")
                except Exception as e:
                    print(f"Could not download {download_url}: {e}")

    print(f"\nScanned all pages: Found {missing_count} missing assets, successfully downloaded {fetched_count}.")

if __name__ == '__main__':
    fix_all_missing_assets()
