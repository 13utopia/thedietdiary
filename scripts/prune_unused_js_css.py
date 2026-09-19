import os
import re

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

def get_referenced_js_css_files():
    referenced = set()

    script_pattern = re.compile(r'<script[^>]+src=["\']([^"\']+)["\']', re.IGNORECASE)
    link_pattern = re.compile(r'<link[^>]+href=["\']([^"\']+\.(?:css|js))["\']', re.IGNORECASE)

    for root, dirs, files in os.walk(ROOT_DIR):
        if 'scripts' in root or 'website-images' in root:
            continue
        for file in files:
            if file.endswith('.html'):
                filepath = os.path.join(root, file)
                rel_html = os.path.relpath(filepath, ROOT_DIR)

                with open(filepath, 'r', encoding='utf-8', errors='ignore') as fp:
                    content = fp.read()

                matches = script_pattern.findall(content) + link_pattern.findall(content)
                for m in matches:
                    clean = m.split('?')[0].split('#')[0]
                    if clean.startswith('http://') or clean.startswith('https://'):
                        continue
                    clean_rel = re.sub(r'^(\.\./|\./)+', '', clean).lstrip('/')
                    norm = os.path.normpath(os.path.join(ROOT_DIR, clean_rel))
                    referenced.add(norm)
    return referenced

def main():
    referenced = get_referenced_js_css_files()
    print(f"Extracted {len(referenced)} explicitly referenced JS & CSS files across site HTML pages.")

    removed_files = 0
    saved_bytes = 0

    for target_dir in [os.path.join(ROOT_DIR, "wp-content"), os.path.join(ROOT_DIR, "wp-includes")]:
        if not os.path.exists(target_dir):
            continue
        for root, dirs, files in os.walk(target_dir, topdown=False):
            for f in files:
                ext = os.path.splitext(f)[1].lower()
                if ext in ('.js', '.css'):
                    full_path = os.path.normpath(os.path.join(root, f))
                    if full_path not in referenced:
                        try:
                            sz = os.path.getsize(full_path)
                            os.remove(full_path)
                            removed_files += 1
                            saved_bytes += sz
                        except Exception:
                            pass

            # Remove empty folders
            for d in dirs:
                dp = os.path.join(root, d)
                try:
                    if not os.listdir(dp):
                        os.rmdir(dp)
                except Exception:
                    pass

    print(f"Removed {removed_files} unreferenced JS & CSS files ({saved_bytes / (1024 * 1024):.2f} MB saved).")

if __name__ == '__main__':
    main()
