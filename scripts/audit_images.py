import os
import re

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
pattern = re.compile(r'["\']([^"\']*wp-content/uploads/[^"\']*\.(?:png|jpg|jpeg|gif|webp|svg))["\']', re.IGNORECASE)

for root, dirs, files in os.walk(ROOT_DIR):
    if 'scripts' in root or 'wp-content' in root:
        continue
    for file in files:
        if file.endswith('.html'):
            filepath = os.path.join(root, file)
            rel = os.path.relpath(filepath, ROOT_DIR)
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
                matches = pattern.findall(content)
                if matches:
                    print(f"--- {rel} ---")
                    for m in set(matches):
                        print("  MATCH:", m)
