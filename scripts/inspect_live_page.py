import urllib.request
import re

url = "https://thedietdiary.in/"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

body_tag = re.search(r'<body[^>]*>', html, re.IGNORECASE)
print("BODY TAG:", body_tag.group(0) if body_tag else "No body tag")

head_styles = re.findall(r'<style[^>]*>(.*?)</style>', html, re.DOTALL | re.IGNORECASE)
print(f"FOUND {len(head_styles)} inline <style> blocks in head.")
for i, s in enumerate(head_styles[:5]):
    print(f"--- Style block {i+1} (length {len(s)}) ---")
    print(s[:200])

head_links = re.findall(r'<link[^>]+>', html, re.IGNORECASE)
print(f"FOUND {len(head_links)} <link> tags in head.")
