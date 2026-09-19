import os
import re
from PIL import Image

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
WEB_IMG_DIR = os.path.join(ROOT_DIR, "website-images")
os.makedirs(WEB_IMG_DIR, exist_ok=True)

# Find Shivangi-Pancholi-Logo.png in uploads
logo_src = None
for root, dirs, files in os.walk(os.path.join(ROOT_DIR, "wp-content", "uploads")):
    for f in files:
        if f.lower() == 'shivangi-pancholi-logo.png':
            logo_src = os.path.join(root, f)
            break

if logo_src and os.path.exists(logo_src):
    img = Image.open(logo_src).convert('RGBA')
    logo_out = os.path.join(WEB_IMG_DIR, 'Shivangi-Pancholi-Logo.webp')
    img.save(logo_out, 'WEBP', quality=82)
    print("Converted logo to WebP:", logo_out)

for root, dirs, files in os.walk(ROOT_DIR):
    if 'scripts' in root or 'wp-content' in root or 'website-images' in root:
        continue
    for file in files:
        if file.endswith('.html'):
            filepath = os.path.join(root, file)
            rel = os.path.relpath(filepath, ROOT_DIR)
            depth = len([p for p in rel.split(os.sep) if p]) - 1
            prefix = "../" * depth if depth > 0 else ""

            with open(filepath, 'r', encoding='utf-8', errors='ignore') as fp:
                content = fp.read()

            new_content = re.sub(
                r'(?:\.\./|\./|/)*wp-content/uploads/[^"\'\s>]*Shivangi-Pancholi-dititian-1-1\.png',
                f'{prefix}website-images/Shivangi-Pancholi-Logo.webp',
                content,
                flags=re.IGNORECASE
            )

            with open(filepath, 'w', encoding='utf-8') as fp:
                fp.write(new_content)

print("Fixed broken logo image references across all HTML files.")
