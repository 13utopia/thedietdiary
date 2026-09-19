import os
import re
import shutil

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
PLUGINS_DIR = os.path.join(ROOT_DIR, "wp-content", "plugins")
THEMES_DIR = os.path.join(ROOT_DIR, "wp-content", "themes")

def get_referenced_plugins():
    referenced = set()
    pattern = re.compile(r'wp-content/plugins/([^/"\'\s]+)', re.IGNORECASE)
    for root, dirs, files in os.walk(ROOT_DIR):
        if 'scripts' in root or 'wp-content' in root:
            continue
        for file in files:
            if file.endswith('.html'):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8', errors='ignore') as fp:
                    content = fp.read()
                    matches = pattern.findall(content)
                    referenced.update(matches)
    return referenced

def get_referenced_themes():
    referenced = set()
    pattern = re.compile(r'wp-content/themes/([^/"\'\s]+)', re.IGNORECASE)
    for root, dirs, files in os.walk(ROOT_DIR):
        if 'scripts' in root or 'wp-content' in root:
            continue
        for file in files:
            if file.endswith('.html'):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8', errors='ignore') as fp:
                    content = fp.read()
                    matches = pattern.findall(content)
                    referenced.update(matches)
    return referenced

def main():
    ref_plugins = get_referenced_plugins()
    print("Referenced plugins in HTML:", sorted(ref_plugins))

    ref_themes = get_referenced_themes()
    print("Referenced themes in HTML:", sorted(ref_themes))

    # Remove unreferenced plugin directories
    if os.path.exists(PLUGINS_DIR):
        for item in os.listdir(PLUGINS_DIR):
            item_path = os.path.join(PLUGINS_DIR, item)
            if os.path.isdir(item_path) and item not in ref_plugins:
                print(f"Removing unreferenced plugin: {item}")
                shutil.rmtree(item_path)

    # Remove unreferenced theme directories
    if os.path.exists(THEMES_DIR):
        for item in os.listdir(THEMES_DIR):
            item_path = os.path.join(THEMES_DIR, item)
            if os.path.isdir(item_path) and item not in ref_themes:
                print(f"Removing unreferenced theme: {item}")
                shutil.rmtree(item_path)

    # Remove Wordfence logs if present
    wflogs = os.path.join(ROOT_DIR, "wp-content", "wflogs")
    if os.path.exists(wflogs):
        shutil.rmtree(wflogs)
        print("Removed wflogs directory.")

if __name__ == '__main__':
    main()
