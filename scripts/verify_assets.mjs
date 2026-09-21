import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const SRC_DIR = path.join(ROOT_DIR, 'src');

function checkFile(relPath) {
  // strip query string
  const cleanPath = relPath.split('?')[0].split('#')[0];
  const fullPath = path.join(PUBLIC_DIR, cleanPath.startsWith('/') ? cleanPath.slice(1) : cleanPath);
  return fs.existsSync(fullPath);
}

// 1. Check all links & scripts in layout.jsx
const layoutContent = fs.readFileSync(path.join(SRC_DIR, 'app', 'layout.jsx'), 'utf-8');
const links = [...layoutContent.matchAll(/href=["'](\/[^"']+)["']/g)].map(m => m[1]);
const scripts = [...layoutContent.matchAll(/src=["'](\/[^"']+)["']/g)].map(m => m[1]);

console.log("=== CHECKING ASSETS IN layout.jsx ===");
let missingCount = 0;
for (const link of links) {
  if (!checkFile(link)) {
    console.log(`[MISSING CSS]: ${link}`);
    missingCount++;
  }
}
for (const script of scripts) {
  if (!checkFile(script)) {
    console.log(`[MISSING JS]: ${script}`);
    missingCount++;
  }
}
console.log(`Total missing assets in layout.jsx: ${missingCount}`);

// 2. Check all images in page.jsx
const homeContent = fs.readFileSync(path.join(SRC_DIR, 'app', 'page.jsx'), 'utf-8');
const imgs = [...homeContent.matchAll(/src=["'](\/[^"']+)["']/g)].map(m => m[1]);
console.log("\n=== CHECKING IMAGES IN page.jsx ===");
let missingImgs = 0;
for (const img of imgs) {
  if (!checkFile(img)) {
    console.log(`[MISSING IMG]: ${img}`);
    missingImgs++;
  }
}
console.log(`Total missing images in page.jsx: ${missingImgs}`);
