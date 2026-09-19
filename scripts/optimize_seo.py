import os
import re

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

SKIP_LINK_HTML = """<a href="#main-content" class="skip-link" style="position:absolute;top:-40px;left:0;background:#1b4031;color:#ffffff;padding:8px 16px;z-index:100000;transition:top 0.3s;" onfocus="this.style.top='0px'" onblur="this.style.top='-40px'">Skip to content</a>"""

def get_page_title(content, filename):
    # Extract page title from <title> tag or filename
    title_match = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE | re.DOTALL)
    if title_match:
        full_title = title_match.group(1).strip()
        # Clean title suffix if any (e.g. "| Expert Nutritionist...")
        page_name = full_title.split('|')[0].strip()
        if page_name:
            return page_name
    
    # Fallback to dirname
    folder = os.path.basename(os.path.dirname(filename))
    if folder and folder != 'files':
        return folder.replace('-', ' ').title()
    return "Home"

def optimize_page_seo(filepath):
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    page_title = get_page_title(content, filepath)

    # 1. Add Skip Link after <body>
    if 'class="skip-link"' not in content:
        if '<body' in content:
            content = re.sub(r'(<body[^>]*>)', r'\1\n' + SKIP_LINK_HTML, content, count=1, flags=re.IGNORECASE)

    # 2. Add id="main-content" if missing
    if 'id="main-content"' not in content:
        if '<main' in content:
            content = re.sub(r'<main([^>]*)>', r'<main id="main-content"\1>', content, count=1, flags=re.IGNORECASE)
        elif '<div id="primary"' in content:
            content = re.sub(r'<div id="primary"', r'<div id="main-content"', content, count=1, flags=re.IGNORECASE)
        elif '<div class="site-content"' in content:
            content = re.sub(r'<div class="site-content"', r'<div id="main-content" class="site-content"', content, count=1, flags=re.IGNORECASE)

    # 3. Heading Hierarchy Fix: Convert site-title <h1> to <h2>
    content = re.sub(r'<h1([^>]*class=["\'][^"\']*site-title[^"\']*["\'][^>]*)>(.*?)</h1>', r'<h2\1>\2</h2>', content, flags=re.IGNORECASE | re.DOTALL)

    # Check H1 count
    h1_matches = re.findall(r'<h1[^>]*>.*?</h1>', content, flags=re.IGNORECASE | re.DOTALL)
    if len(h1_matches) == 0:
        # Add screen-reader sr-only H1 for SEO and accessibility
        sr_h1 = f'''<h1 class="sr-only" style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0;">{page_title}</h1>'''
        if 'id="main-content"' in content:
            content = re.sub(r'(id="main-content"[^>]*>)', r'\1\n' + sr_h1, content, count=1, flags=re.IGNORECASE)
        elif '<body' in content:
            content = re.sub(r'(<body[^>]*>)', r'\1\n' + sr_h1, content, count=1, flags=re.IGNORECASE)

    # 4. Meta viewport check
    if '<meta name="viewport"' not in content:
        viewport = '<meta name="viewport" content="width=device-width, initial-scale=1">'
        content = re.sub(r'(<head[^>]*>)', r'\1\n' + viewport, content, count=1, flags=re.IGNORECASE)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    count = 0
    for root, dirs, files in os.walk(ROOT_DIR):
        if 'scripts' in root or 'wp-content' in root:
            continue
        for file in files:
            if file.endswith('.html'):
                path = os.path.join(root, file)
                optimize_page_seo(path)
                count += 1
    print(f"SEO & Accessibility optimizations applied to {count} pages.")

if __name__ == '__main__':
    main()
