import os
import re

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

def clean_external_refs():
    for root, dirs, files in os.walk(ROOT_DIR):
        if 'scripts' in root or 'website-images' in root:
            continue
        for file in files:
            if file.endswith('.html'):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()

                # Remove dns-prefetch to googletagmanager
                new_content = re.sub(r'<link[^>]*dns-prefetch[^>]*googletagmanager[^>]*>', '', content, flags=re.IGNORECASE)

                # Fix absolute feeds
                new_content = re.sub(r'<link[^>]*type=["\']application/rss\+xml["\'][^>]*>', '', new_content, flags=re.IGNORECASE)

                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)

if __name__ == '__main__':
    clean_external_refs()
    print("Cleaned external prefetch and feed tags.")
