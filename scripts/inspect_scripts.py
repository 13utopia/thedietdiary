import urllib.request
import re

url = "https://thedietdiary.in/"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

scripts = re.findall(r'<script[^>]*src=["\']([^"\']+)["\'][^>]*>', html, re.IGNORECASE)
print(f"FOUND {len(scripts)} external <script> tags:")
for s in scripts:
    print("  -", s)
