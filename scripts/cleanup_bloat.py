import os
import re
import shutil

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

# Files and folders to safely delete for static site
ITEMS_TO_DELETE = [
    os.path.join(ROOT_DIR, "wp-admin"),
    os.path.join(ROOT_DIR, "wp-content", "cache"),
    os.path.join(ROOT_DIR, "wp-content", "uploads", "al_opt_content"),
    os.path.join(ROOT_DIR, "wp-content", "uploads", "wc-logs"),
    os.path.join(ROOT_DIR, "wp-content", "updraft"),
    os.path.join(ROOT_DIR, "wp-config.php"),
    os.path.join(ROOT_DIR, "wp-config-sample.php"),
    os.path.join(ROOT_DIR, "wp-login.php"),
    os.path.join(ROOT_DIR, "xmlrpc.php"),
    os.path.join(ROOT_DIR, "wp-cron.php"),
    os.path.join(ROOT_DIR, "wp-activate.php"),
    os.path.join(ROOT_DIR, "wp-comments-post.php"),
    os.path.join(ROOT_DIR, "wp-mail.php"),
    os.path.join(ROOT_DIR, "wp-signup.php"),
    os.path.join(ROOT_DIR, "wp-trackback.php"),
    os.path.join(ROOT_DIR, "wp-blog-header.php"),
    os.path.join(ROOT_DIR, "wp-blog.php"),
    os.path.join(ROOT_DIR, "wp-load.php"),
    os.path.join(ROOT_DIR, "wp-settings.php"),
    os.path.join(ROOT_DIR, "wp-links-opml.php"),
    os.path.join(ROOT_DIR, "index.php"),
    os.path.join(ROOT_DIR, "default.php"),
    os.path.join(ROOT_DIR, "license.txt"),
    os.path.join(ROOT_DIR, "readme.html"),
    os.path.join(ROOT_DIR, "oud.txt"),
    os.path.join(ROOT_DIR, ".htaccess.bk"),
]

def check_wp_includes_refs():
    refs = set()
    wp_inc_pattern = re.compile(r'["\']([^"\']*wp-includes/[^"\']+)["\']', re.IGNORECASE)
    for root, dirs, files in os.walk(ROOT_DIR):
        if 'scripts' in root: continue
        for f in files:
            if f.endswith('.html'):
                path = os.path.join(root, f)
                with open(path, 'r', encoding='utf-8', errors='ignore') as fp:
                    for m in wp_inc_pattern.findall(fp.read()):
                        clean = m.split('?')[0].split('#')[0]
                        refs.add(clean)
    return refs

def get_dir_size_mb(path):
    total = 0
    for root, dirs, files in os.walk(path):
        for f in files:
            fp = os.path.join(root, f)
            if not os.path.islink(fp):
                total += os.path.getsize(fp)
    return total / (1024 * 1024)

def main():
    initial_size = get_dir_size_mb(ROOT_DIR)
    print(f"Initial Directory Size: {initial_size:.2f} MB")

    # Check wp-includes references
    wp_inc_refs = check_wp_includes_refs()
    print(f"Found {len(wp_inc_refs)} references to wp-includes in HTML files.")
    for r in list(wp_inc_refs)[:10]:
        print("  -", r)

    # Perform cleanup of bloat items
    deleted_count = 0
    for item in ITEMS_TO_DELETE:
        if os.path.isdir(item):
            try:
                shutil.rmtree(item)
                print(f"Deleted directory: {os.path.basename(item)}")
                deleted_count += 1
            except Exception as e:
                print(f"Error deleting {item}: {e}")
        elif os.path.isfile(item):
            try:
                os.remove(item)
                print(f"Deleted file: {os.path.basename(item)}")
                deleted_count += 1
            except Exception as e:
                print(f"Error deleting {item}: {e}")

    # Remove all .php files from wp-includes to ensure zero PHP files remain in wp-includes
    wp_includes_dir = os.path.join(ROOT_DIR, "wp-includes")
    if os.path.exists(wp_includes_dir):
        php_count = 0
        for root, dirs, files in os.walk(wp_includes_dir):
            for f in files:
                if f.endswith('.php'):
                    try:
                        os.remove(os.path.join(root, f))
                        php_count += 1
                    except Exception:
                        pass
        print(f"Removed {php_count} unused PHP scripts from wp-includes.")

    final_size = get_dir_size_mb(ROOT_DIR)
    print(f"Final Directory Size: {final_size:.2f} MB")
    print(f"Saved {initial_size - final_size:.2f} MB of bloat!")

if __name__ == '__main__':
    main()
