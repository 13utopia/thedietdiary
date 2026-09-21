import urllib.request
import re
import os
import json

LIVE_URL = "https://thedietdiary.in/"
LOCAL_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

req = urllib.request.Request(LIVE_URL, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
with urllib.request.urlopen(req) as resp:
    live_html = resp.read().decode('utf-8', errors='ignore')

print("=== 1. LIVE SITE HEAD SCRIPTS & CONFIGS ===")
scripts = re.findall(r'<script([^>]*)>(.*?)</script>', live_html, re.DOTALL | re.IGNORECASE)
print(f"Total script tags on live site: {len(scripts)}")
for attrs, content in scripts:
    src_match = re.search(r'src=["\']([^"\']+)["\']', attrs)
    if src_match:
        print(f"  [External JS]: {src_match.group(1)}")
    else:
        trimmed = content.strip()
        if trimmed:
            first_line = trimmed.split('\n')[0][:100]
            print(f"  [Inline JS]: {first_line}... (length {len(trimmed)})")

print("\n=== 2. LIVE SITE STYLESHEETS & FONTS ===")
css_links = re.findall(r'<link[^>]+rel=["\']stylesheet["\'][^>]*>', live_html, re.IGNORECASE)
print(f"Total CSS link tags on live site: {len(css_links)}")
for link in css_links:
    href_match = re.search(r'href=["\']([^"\']+)["\']', link)
    if href_match:
        print(f"  [CSS]: {href_match.group(1)}")

print("\n=== 3. LIVE SITE BODY CLASSES & ATTRIBUTES ===")
body_match = re.search(r'<body([^>]*)>', live_html, re.IGNORECASE)
if body_match:
    print(f"Body tag: {body_match.group(0)}")

print("\n=== 4. ELEMENTOR WIDGETS & ANIMATIONS ON LIVE SITE ===")
animated_elements = re.findall(r'class="[^"]*(?:elementor-invisible|animated|e-animation)[^"]*"', live_html, re.IGNORECASE)
print(f"Animated elements count: {len(animated_elements)}")
data_settings = re.findall(r'data-settings=["\']([^"\']+)["\']', live_html)
print(f"Elements with data-settings (animation/slider config): {len(data_settings)}")
for ds in data_settings[:10]:
    print(f"  Setting: {ds}")

print("\n=== 5. CAROUSELS / SLIDERS ON LIVE SITE ===")
swipers = re.findall(r'class="[^"]*(?:swiper|slick|flexslider|testimonial)[^"]*"', live_html, re.IGNORECASE)
print(f"Swiper/Slider/Testimonial classes count: {len(swipers)}")
for sw in swipers[:10]:
    print(f"  Class: {sw}")

print("\n=== 6. FLOATING WIDGETS / POPUPS ===")
joinchats = re.findall(r'class="[^"]*(?:joinchat|whatsapp)[^"]*"', live_html, re.IGNORECASE)
print(f"Joinchat/WhatsApp elements count: {len(joinchats)}")
