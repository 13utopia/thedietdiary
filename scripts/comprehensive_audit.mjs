import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const LOCAL_DIR = path.resolve(__dirname, '..');

const LIVE_URL = "https://thedietdiary.in/";

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function runAudit() {
  console.log("Fetching live HTML from https://thedietdiary.in/...");
  const liveHtml = await fetchHtml(LIVE_URL);
  
  console.log("\n=== 1. LIVE SITE SCRIPTS & CONFIGS ===");
  const scripts = [...liveHtml.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/gi)];
  console.log(`Total script tags on live site: ${scripts.length}`);
  
  let elementorFrontendConfig = null;
  let joinchatConfig = null;
  
  for (const [_, attrs, content] of scripts) {
    const srcMatch = attrs.match(/src=["']([^"']+)["']/i);
    if (srcMatch) {
      console.log(`  [External JS]: ${srcMatch[1]}`);
    } else {
      const trimmed = content.trim();
      if (trimmed.includes('elementorFrontendConfig')) {
        console.log(`  [Found elementorFrontendConfig inline script] (len ${trimmed.length})`);
        elementorFrontendConfig = trimmed;
      } else if (trimmed.includes('joinchat_obj')) {
        console.log(`  [Found joinchat_obj inline script] (len ${trimmed.length})`);
        joinchatConfig = trimmed;
      } else if (trimmed.length > 0) {
        console.log(`  [Inline JS]: ${trimmed.split('\n')[0].slice(0, 80)}... (len ${trimmed.length})`);
      }
    }
  }

  console.log("\n=== 2. LIVE SITE STYLESHEETS ===");
  const cssLinks = [...liveHtml.matchAll(/<link[^>]+rel=["']stylesheet["'][^>]*>/gi)];
  console.log(`Total CSS link tags on live site: ${cssLinks.length}`);
  for (const [link] of cssLinks) {
    const hrefMatch = link.match(/href=["']([^"']+)["']/i);
    if (hrefMatch) {
      console.log(`  [CSS]: ${hrefMatch[1]}`);
    }
  }

  console.log("\n=== 3. BODY CLASSES ===");
  const bodyMatch = liveHtml.match(/<body([^>]*)>/i);
  if (bodyMatch) {
    console.log(`Body attributes: ${bodyMatch[1]}`);
  }

  console.log("\n=== 4. ELEMENTOR WIDGETS & ANIMATIONS ===");
  const animated = [...liveHtml.matchAll(/class="[^"]*(?:elementor-invisible|animated|e-animation)[^"]*"/gi)];
  console.log(`Animated elements count: ${animated.length}`);
  
  const dataSettings = [...liveHtml.matchAll(/data-settings=["']([^"']+)["']/gi)];
  console.log(`Elements with data-settings (animation/slider config): ${dataSettings.length}`);
  for (const [_, ds] of dataSettings.slice(0, 15)) {
    console.log(`  Setting: ${ds.replace(/&quot;/g, '"')}`);
  }

  console.log("\n=== 5. CAROUSELS / TESTIMONIALS ===");
  const swipers = [...liveHtml.matchAll(/class="[^"]*(?:swiper|slick|flexslider|testimonial|rtp-blocks)[^"]*"/gi)];
  console.log(`Swiper/Slider elements: ${swipers.length}`);
  for (const [_, sw] of swipers.slice(0, 10)) {
    console.log(`  Class: ${sw}`);
  }

  console.log("\n=== 6. CHECKING LOCAL ASSET STATUS ===");
  // Check if public/wp-content and public/website-images exist
  const publicDir = path.join(LOCAL_DIR, 'public');
  const uploadsDir = path.join(publicDir, 'wp-content', 'uploads');
  const webImgDir = path.join(publicDir, 'website-images');
  console.log(`public exists: ${fs.existsSync(publicDir)}`);
  console.log(`uploadsDir exists: ${fs.existsSync(uploadsDir)}`);
  console.log(`webImgDir exists: ${fs.existsSync(webImgDir)}`);
}

runAudit().catch(console.error);
