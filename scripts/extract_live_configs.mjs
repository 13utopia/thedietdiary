import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const URLS = [
  "https://thedietdiary.in/",
  "https://thedietdiary.in/about/",
  "https://thedietdiary.in/my-services/",
  "https://thedietdiary.in/programs/",
  "https://thedietdiary.in/diet-plan/",
  "https://thedietdiary.in/pricing/",
  "https://thedietdiary.in/shop/",
  "https://thedietdiary.in/testimonial/",
  "https://thedietdiary.in/blog/"
];

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

async function inspectConfigs() {
  const homeHtml = await fetchHtml("https://thedietdiary.in/");
  
  // Extract all inline script blocks
  const scriptRegex = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  let match;
  const inlineConfigs = [];
  
  while ((match = scriptRegex.exec(homeHtml)) !== null) {
    const [_, attrs, content] = match;
    const trimmed = content.trim();
    if (!attrs.includes('src=') && trimmed.length > 0) {
      inlineConfigs.push({
        id: attrs.match(/id=["']([^"']+)["']/i)?.[1] || 'anonymous',
        type: attrs.match(/type=["']([^"']+)["']/i)?.[1] || 'text/javascript',
        preview: trimmed.slice(0, 120),
        fullContent: trimmed
      });
    }
  }

  console.log(`Found ${inlineConfigs.length} inline script configurations on Live Homepage.`);
  for (const cfg of inlineConfigs) {
    console.log(`- ID: ${cfg.id} | Type: ${cfg.type} | Preview: ${cfg.preview.replace(/\n/g, ' ')}`);
  }

  // Check body classes for each page
  console.log("\n=== BODY CLASSES PER PAGE ===");
  for (const url of URLS) {
    try {
      const html = await fetchHtml(url);
      const bMatch = html.match(/<body\b([^>]*)>/i);
      console.log(`URL: ${url}`);
      console.log(`  Body Tag: ${bMatch ? bMatch[1] : 'NOT FOUND'}\n`);
    } catch (e) {
      console.log(`URL: ${url} -> Error: ${e.message}`);
    }
  }

  // Save configs to scratch or json
  fs.writeFileSync(path.join(__dirname, 'live_inline_scripts.json'), JSON.stringify(inlineConfigs, null, 2));
  console.log("Saved live_inline_scripts.json successfully.");
}

inspectConfigs().catch(console.error);
