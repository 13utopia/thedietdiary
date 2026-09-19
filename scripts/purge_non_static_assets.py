import os

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

ALLOWED_ASSET_EXTENSIONS = {
    '.html', '.htm', '.css', '.js', '.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.ico',
    '.woff', '.woff2', '.ttf', '.eot', '.otf'
}

def purge_non_assets(target_dir):
    deleted_files = 0
    saved_bytes = 0
    for root, dirs, files in os.walk(target_dir, topdown=False):
        # Skip scripts and website-images
        if 'scripts' in root or 'website-images' in root:
            continue
        for f in files:
            ext = os.path.splitext(f)[1].lower()
            if ext not in ALLOWED_ASSET_EXTENSIONS:
                fp = os.path.join(root, f)
                try:
                    sz = os.path.getsize(fp)
                    os.remove(fp)
                    deleted_files += 1
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

    return deleted_files, saved_bytes / (1024 * 1024)

def main():
    print("Purging non-static files (.php, .po, .mo, .map, .json, .md, .txt) from assets...")
    deleted_files, saved_mb = purge_non_assets(os.path.join(ROOT_DIR, "wp-content"))
    print(f"wp-content: Removed {deleted_files} non-static files ({saved_mb:.2f} MB).")

    deleted_files_inc, saved_mb_inc = purge_non_assets(os.path.join(ROOT_DIR, "wp-includes"))
    print(f"wp-includes: Removed {deleted_files_inc} non-static files ({saved_mb_inc:.2f} MB).")

if __name__ == '__main__':
    main()
