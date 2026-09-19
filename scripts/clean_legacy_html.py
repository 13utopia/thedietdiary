import os
import shutil

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

LEGACY_DIRS = [
    'about', 'author', 'blog', 'category', 'diet-plan', 'gorgeous-peach-salad',
    'how-you-should-be-doing-oat-bran-for-breakfast', 'my-services', 'pricing',
    'product', 'product-category', 'programs', 'shop', 'testimonial', 'two-huge-double-chocolate-cookies',
    'wp-content', 'wp-includes'
]

LEGACY_FILES = [
    'index.html', 'readme.html', 'robots.txt'
]

def main():
    for d in LEGACY_DIRS:
        dp = os.path.join(ROOT_DIR, d)
        if os.path.isdir(dp):
            shutil.rmtree(dp)
            print(f"Removed legacy directory: {d}")

    for f in LEGACY_FILES:
        fp = os.path.join(ROOT_DIR, f)
        if os.path.isfile(fp):
            os.remove(fp)
            print(f"Removed legacy file: {f}")

if __name__ == '__main__':
    main()
