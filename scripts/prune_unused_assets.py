import os
import re
import shutil

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

# Extract all referenced paths from all HTML files
def get_all_referenced_files():
    referenced = set()
    url_pattern = re.compile(r'(?:href|src|data-src|action)\s*=\s*["\']([^"\']+)["\']', re.IGNORECASE)
    css_url_pattern = re.compile(r'url\(\s*["\']?([^"\'\)\s]+)["\']?\s*\)', re.IGNORECASE)

    for root, dirs, files in os.walk(ROOT_DIR):
        if 'scripts' in root:
            continue
        for file in files:
            if file.endswith('.html') or file.endswith('.css'):
                filepath = os.path.join(root, file)
                rel_html = os.path.relpath(filepath, ROOT_DIR)
                depth = len([p for p in rel_html.split(os.sep) if p]) - 1

                with open(filepath, 'r', encoding='utf-8', errors='ignore') as fp:
                    content = fp.read()

                matches = url_pattern.findall(content) + css_url_pattern.findall(content)
                for m in matches:
                    clean = m.split('?')[0].split('#')[0]
                    # Convert relative path to project root relative path
                    if clean.startswith('http://') or clean.startswith('https://'):
                        continue
                    clean_rel = re.sub(r'^(\.\./|\./)+', '', clean).lstrip('/')
                    norm = os.path.normpath(os.path.join(ROOT_DIR, clean_rel))
                    referenced.add(norm)
    return referenced

def prune_directory(target_dir, referenced_set):
    removed_bytes = 0
    removed_files = 0
    for root, dirs, files in os.walk(target_dir, topdown=False):
        for f in files:
            full_path = os.path.normpath(os.path.join(root, f))
            # Keep if in referenced set or if it's an essential theme CSS/JS
            if full_path not in referenced_set:
                # Extra check: keep theme CSS and JS files that might be imported by CSS
                ext = os.path.splitext(f)[1].lower()
                if ext in ('.css', '.js', '.woff', '.woff2', '.ttf', '.eot', '.svg'):
                    continue
                try:
                    size = os.path.getsize(full_path)
                    os.remove(full_path)
                    removed_bytes += size
                    removed_files += 1
                except Exception as e:
                    pass

        # Remove empty directories
        for d in dirs:
            dir_path = os.path.join(root, d)
            try:
                if not os.listdir(dir_path):
                    os.rmdir(dir_path)
            except Exception:
                pass

    return removed_files, removed_bytes / (1024 * 1024)

def main():
    referenced = get_all_referenced_files()
    print(f"Collected {len(referenced)} referenced asset paths across site HTML & CSS files.")

    uploads_dir = os.path.join(ROOT_DIR, "wp-content", "uploads")
    if os.path.exists(uploads_dir):
        files_removed, mb_removed = prune_directory(uploads_dir, referenced)
        print(f"Pruned unreferenced raw images from wp-content/uploads: Removed {files_removed} files ({mb_removed:.2f} MB).")

    plugins_dir = os.path.join(ROOT_DIR, "wp-content", "plugins")
    if os.path.exists(plugins_dir):
        files_removed, mb_removed = prune_directory(plugins_dir, referenced)
        print(f"Pruned unreferenced assets from wp-content/plugins: Removed {files_removed} files ({mb_removed:.2f} MB).")

if __name__ == '__main__':
    main()
