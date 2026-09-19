import os
import re
import urllib.request
from urllib.parse import urlparse, unquote

BASE_URL = "https://thedietdiary.in/"
ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

# Directory to save HTML files
print(f"Target Root Directory: {ROOT_DIR}")

# Known page list (from discovery & sitemap)
PAGE_URLS = [
    "https://thedietdiary.in/",
    "https://thedietdiary.in/about/",
    "https://thedietdiary.in/my-services/",
    "https://thedietdiary.in/programs/",
    "https://thedietdiary.in/diet-plan/",
    "https://thedietdiary.in/pricing/",
    "https://thedietdiary.in/shop/",
    "https://thedietdiary.in/testimonial/",
    "https://thedietdiary.in/blog/",
    "https://thedietdiary.in/gorgeous-peach-salad/",
    "https://thedietdiary.in/how-you-should-be-doing-oat-bran-for-breakfast/",
    "https://thedietdiary.in/two-huge-double-chocolate-cookies/",
    "https://thedietdiary.in/product/family-counselling/",
    "https://thedietdiary.in/product/food-sensitivities/",
    "https://thedietdiary.in/product/personal-counselling/",
    "https://thedietdiary.in/author/geromantex/",
    "https://thedietdiary.in/category/uncategorized/",
]

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

def get_local_html_path(url):
    parsed = urlparse(url)
    path = parsed.path.strip('/')
    if not path:
        return os.path.join(ROOT_DIR, "index.html")
    else:
        return os.path.join(ROOT_DIR, path, "index.html")

def download_page(url):
    save_path = get_local_html_path(url)
    os.makedirs(os.path.dirname(save_path), exist_ok=True)
    print(f"Downloading {url} -> {save_path}")
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8', errors='ignore')
            with open(save_path, 'w', encoding='utf-8') as f:
                f.write(html)
            return html
    except Exception as e:
        print(f"Failed to download {url}: {e}")
        return None

downloaded_pages = []
for page_url in PAGE_URLS:
    html = download_page(page_url)
    if html:
        downloaded_pages.append((page_url, get_local_html_path(page_url)))

print(f"Successfully mirrored {len(downloaded_pages)} HTML pages.")
