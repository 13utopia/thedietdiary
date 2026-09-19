import os
import re
import shutil
import urllib.request
from PIL import Image

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
OUTPUT_DIR = os.path.join(ROOT_DIR, "website-images")
os.makedirs(OUTPUT_DIR, exist_ok=True)

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

# Regex to capture any wp-content/uploads image reference
WP_UPLOAD_PATTERN = re.compile(
    r'(?:https?://[^/]+/(?:[^"\'\s>]+/)*|(?:\.\./)*|\./|/)?wp-content/uploads/([^"\'\s>#\?]+?\.(?:png|jpg|jpeg|gif|webp|svg|ico|bmp))',
    re.IGNORECASE
)

def fix_all_wp_uploads():
    html_files = []
    for root, dirs, files in os.walk(ROOT_DIR):
        if 'scripts' in root or 'website-images' in root:
            continue
        for file in files:
            if file.endswith('.html'):
                filepath = os.path.join(root, file)
                rel = os.path.relpath(filepath, ROOT_DIR)
                depth = len([p for p in rel.split(os.sep) if p]) - 1
                html_files.append((filepath, depth, rel))

    image_map = {} # upload_subpath -> out_name

    # First pass: find all upload image matches in HTML
    for filepath, depth, rel in html_files:
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()

        matches = WP_UPLOAD_PATTERN.findall(content)
        for upload_rel_path in set(matches):
            if upload_rel_path not in image_map:
                # Find local file or download
                local_path = os.path.join(ROOT_DIR, "wp-content", "uploads", upload_rel_path.replace('/', os.sep))
                if not os.path.exists(local_path):
                    url = f"https://thedietdiary.in/wp-content/uploads/{upload_rel_path}"
                    os.makedirs(os.path.dirname(local_path), exist_ok=True)
                    try:
                        req = urllib.request.Request(url, headers=HEADERS)
                        with urllib.request.urlopen(req) as resp, open(local_path, 'wb') as out_f:
                            out_f.write(resp.read())
                        print(f"Downloaded missing upload image: {url}")
                    except Exception as e:
                        print(f"Failed to fetch {url}: {e}")
                        continue
                
                # Convert to webp/copy to website-images
                ext = os.path.splitext(local_path)[1].lower()
                basename = os.path.splitext(os.path.basename(local_path))[0]
                basename = re.sub(r'[^a-zA-Z0-9_\-]', '_', basename)
                
                out_name = f"{basename}.svg" if ext == '.svg' else f"{basename}.webp"
                out_path = os.path.join(OUTPUT_DIR, out_name)
                
                if ext == '.svg':
                    shutil.copy2(local_path, out_path)
                elif ext in ('.png', '.jpg', '.jpeg', '.gif', '.bmp', '.ico', '.webp'):
                    if ext == '.webp':
                        shutil.copy2(local_path, out_path)
                    else:
                        try:
                            img = Image.open(local_path)
                            if img.mode in ('RGBA', 'LA', 'P'):
                                img = img.convert('RGBA')
                            else:
                                img = img.convert('RGB')
                            img.save(out_path, 'WEBP', quality=82, method=4)
                        except Exception as e:
                            print(f"Pillow error on {local_path}: {e}")
                            shutil.copy2(local_path, out_path)
                
                image_map[upload_rel_path] = out_name
                print(f"Processed: wp-content/uploads/{upload_rel_path} -> website-images/{out_name}")

    # Second pass: replace all wp-content/uploads references in HTML files
    for filepath, depth, rel in html_files:
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()

        prefix = "../" * depth if depth > 0 else ""
        web_img_prefix = f"{prefix}website-images/"

        def sub_func(m):
            upload_rel_path = m.group(1)
            out_name = image_map.get(upload_rel_path)
            if out_name:
                return f"{web_img_prefix}{out_name}"
            return m.group(0)

        new_content = WP_UPLOAD_PATTERN.sub(sub_func, content)

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Cleaned all remaining upload image references in {rel}")

if __name__ == '__main__':
    fix_all_wp_uploads()
