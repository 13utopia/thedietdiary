import os
import re
import urllib.request

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
PUBLIC_DIR = os.path.join(ROOT_DIR, "public")
SRC_DIR = os.path.join(ROOT_DIR, "src")
APP_DIR = os.path.join(SRC_DIR, "app")
WEB_IMG_DIR = os.path.join(PUBLIC_DIR, "website-images")

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

PAGES_MAP = {
    "https://thedietdiary.in/": "page.jsx",
    "https://thedietdiary.in/about/": "about/page.jsx",
    "https://thedietdiary.in/my-services/": "my-services/page.jsx",
    "https://thedietdiary.in/programs/": "programs/page.jsx",
    "https://thedietdiary.in/diet-plan/": "diet-plan/page.jsx",
    "https://thedietdiary.in/pricing/": "pricing/page.jsx",
    "https://thedietdiary.in/shop/": "shop/page.jsx",
    "https://thedietdiary.in/testimonial/": "testimonial/page.jsx",
    "https://thedietdiary.in/blog/": "blog/page.jsx",
    "https://thedietdiary.in/gorgeous-peach-salad/": "blog/gorgeous-peach-salad/page.jsx",
    "https://thedietdiary.in/how-you-should-be-doing-oat-bran-for-breakfast/": "blog/how-you-should-be-doing-oat-bran-for-breakfast/page.jsx",
    "https://thedietdiary.in/two-huge-double-chocolate-cookies/": "blog/two-huge-double-chocolate-cookies/page.jsx",
}

def get_image_filename_map():
    mapping = {}
    if os.path.exists(WEB_IMG_DIR):
        for f in os.listdir(WEB_IMG_DIR):
            base = os.path.splitext(f)[0]
            mapping[base.lower()] = f
    return mapping

IMAGE_MAP = get_image_filename_map()

WP_UPLOAD_PATTERN = re.compile(
    r'(?:https?://[^/]+/(?:[^"\'\s>]+/)*|(?:\.\./)*|\./|/)?wp-content/uploads/([^"\'\s>#\?]+?\.(?:png|jpg|jpeg|gif|webp|svg|ico|bmp))',
    re.IGNORECASE
)

def replace_image_urls(html):
    def sub_func(m):
        upload_rel = m.group(1)
        filename = os.path.basename(upload_rel)
        base = os.path.splitext(filename)[0]
        base_clean = re.sub(r'[^a-zA-Z0-9_\-]', '_', base).lower()
        
        for webp_base, webp_filename in IMAGE_MAP.items():
            if base_clean == webp_base or base.lower() == webp_base:
                return f"/website-images/{webp_filename}"
        
        return f"/website-images/{filename}"

    return WP_UPLOAD_PATTERN.sub(sub_func, html)

def fix_internal_links(html):
    html = re.sub(r'href=["\']https?://(?:www\.)?thedietdiary\.in/([^"\'#\s]*)["\']', r'href="/\1"', html)
    html = re.sub(r'href=["\']http://thedietdiary\.in/([^"\'#\s]*)["\']', r'href="/\1"', html)
    return html

def clean_wp_bloat(html):
    patterns = [
        r'<div id="wpadminbar".*?</div>',
        r'<meta name="generator" content="WordPress[^"]*" />',
        r'<meta name="generator" content="Elementor[^"]*" />',
        r'<script[^>]*>window\._wpemojiSettings.*?</script>',
        r'<style[^>]*id="wp-emoji-styles-inline-css"[^>]*>.*?</style>',
        r'<link[^>]*rel=["\']https://api\.w\.org/["\'][^>]*>',
        r'<link[^>]*rel=["\']EditURI["\'][^>]*>',
        r'<link[^>]*rel=["\']wlwmanifest["\'][^>]*>',
        r'<link[^>]*rel=["\']shortlink["\'][^>]*>',
        r'<link[^>]*type=["\']application/json\+oembed["\'][^>]*>',
        r'<link[^>]*type=["\']text/xml\+oembed["\'][^>]*>',
    ]
    for p in patterns:
        html = re.sub(p, '', html, flags=re.DOTALL | re.IGNORECASE)
    return html

def process_and_generate_page(url, relative_target_path):
    print(f"\nProcessing {url}...")
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8', errors='ignore')

    html = clean_wp_bloat(html)
    html = fix_internal_links(html)
    html = replace_image_urls(html)

    body_match = re.search(r'<body[^>]*>(.*?)</body>', html, re.DOTALL | re.IGNORECASE)
    body_content = body_match.group(1) if body_match else html

    style_matches = re.findall(r'<style[^>]*>(.*?)</style>', html, re.DOTALL | re.IGNORECASE)
    inline_styles = "\n".join(style_matches)

    target_filepath = os.path.join(APP_DIR, relative_target_path)
    os.makedirs(os.path.dirname(target_filepath), exist_ok=True)

    # Escape backslashes and template literal delimiters safely for JS string
    body_content_escaped = body_content.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
    inline_styles_escaped = inline_styles.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')

    react_code = f"""'use client';

import {{ useEffect }} from 'react';

const bodyHTML = `{body_content_escaped}`;
const pageInlineStyles = `{inline_styles_escaped}`;

export default function Page() {{
  useEffect(() => {{
    const menuToggle = document.querySelector('.menu-toggle, .hamburger, [data-toggle="menu"], .ast-mobile-menu-trigger-minimal, .ast-button-wrap, .main-header-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu, .nav-menu, #site-navigation, .ast-mobile-popup-drawer, .main-navigation, .ast-mobile-header-content');
    
    if (menuToggle && mobileMenu) {{
      const handleToggle = (e) => {{
        e.preventDefault();
        e.stopPropagation();
        mobileMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
        document.body.classList.toggle('menu-open');
      }};
      menuToggle.addEventListener('click', handleToggle);
      return () => menuToggle.removeEventListener('click', handleToggle);
    }}
  }}, []);

  return (
    <>
      {{pageInlineStyles && <style dangerouslySetInnerHTML={{{{ __html: pageInlineStyles }}}} />}}
      <div dangerouslySetInnerHTML={{{{ __html: bodyHTML }}}} />
    </>
  );
}}
"""
    with open(target_filepath, 'w', encoding='utf-8') as f:
        f.write(react_code)
    print(f"Generated Next.js page: {relative_target_path}")

def main():
    for url, rel_path in PAGES_MAP.items():
        try:
            process_and_generate_page(url, rel_path)
        except Exception as e:
            print(f"Error processing {url}: {e}")

if __name__ == '__main__':
    main()
