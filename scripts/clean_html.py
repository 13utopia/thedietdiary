import os
import re
from urllib.parse import urlparse

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
DOMAIN = "thedietdiary.in"

# Patterns to remove WordPress bloat
PATTERNS_TO_REMOVE = [
    r'<div id="wpadminbar".*?</div>',                             # WP Admin bar
    r'<meta name="generator" content="WordPress[^"]*" />',       # WP Generator meta tag
    r'<meta name="generator" content="Elementor[^"]*" />',       # Elementor Generator tag
    r'<script[^>]*>window\._wpemojiSettings.*?</script>',         # Emoji script block
    r'<style[^>]*id="wp-emoji-styles-inline-css"[^>]*>.*?</style>', # Emoji CSS
    r'<link[^>]*rel=["\']https://api\.w\.org/["\'][^>]*>',         # REST API link
    r'<link[^>]*rel=["\']EditURI["\'][^>]*>',                      # EditURI / RSD link
    r'<link[^>]*rel=["\']wlwmanifest["\'][^>]*>',                 # Windows Live Writer link
    r'<link[^>]*rel=["\']shortlink["\'][^>]*>',                    # Shortlink
    r'<link[^>]*type=["\']application/json\+oembed["\'][^>]*>',   # oEmbed JSON
    r'<link[^>]*type=["\']text/xml\+oembed["\'][^>]*>',           # oEmbed XML
]

def find_all_html_files(root_dir):
    html_files = []
    for root, dirs, files in os.walk(root_dir):
        # Skip scripts directory
        if os.path.basename(root) == 'scripts':
            continue
        for file in files:
            if file.endswith('.html'):
                path = os.path.join(root, file)
                rel = os.path.relpath(path, root_dir)
                depth = len([p for p in rel.split(os.sep) if p]) - 1
                html_files.append((path, depth, rel))
    return html_files

def get_relative_prefix(depth):
    if depth == 0:
        return ""
    return "../" * depth

def fix_internal_urls(html_content, file_rel_path, depth):
    prefix = get_relative_prefix(depth)
    
    # 1. Replace absolute site domain URLs: https://thedietdiary.in/ or http://thedietdiary.in/
    # Match URLs starting with domain
    def replace_url_match(match):
        full_match = match.group(0)
        quote = match.group(1)
        path = match.group(2)
        
        # Keep external protocol/domains if present
        if path.startswith('http://') or path.startswith('https://'):
            if DOMAIN not in path:
                return full_match
            # Strip domain
            path = re.sub(r'^https?://' + re.escape(DOMAIN) + r'/?', '', path)
        
        # Remove leading slash if any
        clean_path = path.lstrip('/')
        
        if not clean_path:
            # Home page link
            new_href = prefix if prefix else "./"
        else:
            new_href = prefix + clean_path
            
        return f'href={quote}{new_href}{quote}'

    # Replace href="https://thedietdiary.in/..." or href="http://thedietdiary.in/..."
    html_content = re.sub(
        r'href=(["\'])(https?://(?:www\.)?thedietdiary\.in/[^"\'\s]*)["\']',
        replace_url_match,
        html_content,
        flags=re.IGNORECASE
    )

    # Replace src="https://thedietdiary.in/..."
    def replace_src_match(match):
        quote = match.group(1)
        path = match.group(2)
        clean_path = re.sub(r'^https?://(?:www\.)?' + re.escape(DOMAIN) + r'/?', '', path).lstrip('/')
        new_src = prefix + clean_path
        return f'src={quote}{new_src}{quote}'

    html_content = re.sub(
        r'src=(["\'])(https?://(?:www\.)?thedietdiary\.in/[^"\'\s]*)["\']',
        replace_src_match,
        html_content,
        flags=re.IGNORECASE
    )

    # Replace srcset="https://thedietdiary.in/..."
    def replace_srcset_match(match):
        quote = match.group(1)
        srcset_val = match.group(2)
        parts = srcset_val.split(',')
        new_parts = []
        for p in parts:
            item = p.strip().split()
            if item:
                url_part = item[0]
                if DOMAIN in url_part:
                    clean_url = re.sub(r'^https?://(?:www\.)?' + re.escape(DOMAIN) + r'/?', '', url_part).lstrip('/')
                    url_part = prefix + clean_url
                descriptor = " " + item[1] if len(item) > 1 else ""
                new_parts.append(url_part + descriptor)
        return f'srcset={quote}{", ".join(new_parts)}{quote}'

    html_content = re.sub(
        r'srcset=(["\'])([^"\']+)["\']',
        replace_srcset_match,
        html_content,
        flags=re.IGNORECASE
    )

    return html_content

def clean_html_file(path, depth, rel):
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    # Apply bloat removal regexes
    for pattern in PATTERNS_TO_REMOVE:
        content = re.sub(pattern, '', content, flags=re.DOTALL | re.IGNORECASE)
    
    # Fix internal links & paths
    content = fix_internal_urls(content, rel, depth)
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Cleaned HTML & fixed links: {rel}")

if __name__ == "__main__":
    html_files = find_all_html_files(ROOT_DIR)
    print(f"Processing {len(html_files)} HTML files for Phase 2...")
    for path, depth, rel in html_files:
        clean_html_file(path, depth, rel)
    print("Phase 2 cleanup complete.")
