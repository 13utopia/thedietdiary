import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';

const PAGES = [
  { path: '/', name: 'Homepage' },
  { path: '/about/', name: 'About' },
  { path: '/my-services/', name: 'My Services' },
  { path: '/programs/', name: 'Programs' },
  { path: '/diet-plan/', name: 'Diet Plan' },
  { path: '/pricing/', name: 'Pricing' },
  { path: '/shop/', name: 'Shop' },
  { path: '/testimonial/', name: 'Testimonials' },
  { path: '/blog/', name: 'Blog' }
];

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    }).on('error', reject);
  });
}

async function auditParity() {
  console.log("=================================================");
  console.log("           1:1 SITE PARITY AUDIT REPORT           ");
  console.log("=================================================\n");

  let totalLiveSections = 0;
  let totalLocalSections = 0;
  let totalLiveImgs = 0;
  let totalLocalImgs = 0;

  for (const page of PAGES) {
    console.log(`--- Checking [${page.name}] (${page.path}) ---`);
    try {
      const liveRes = await fetchUrl('https://thedietdiary.in' + page.path);
      const localRes = await fetchUrl('http://localhost:3001' + page.path);

      console.log(`  Live HTTP Status: ${liveRes.status} | Local HTTP Status: ${localRes.status}`);

      // Count sections & widgets
      const liveSections = [...liveRes.data.matchAll(/class="[^"]*(?:elementor-section|e-con|elementor-element)[^"]*"/gi)].length;
      const localSections = [...localRes.data.matchAll(/class="[^"]*(?:elementor-section|e-con|elementor-element)[^"]*"/gi)].length;
      totalLiveSections += liveSections;
      totalLocalSections += localSections;
      console.log(`  Elementor Elements: Live = ${liveSections} | Local = ${localSections}`);

      // Count images
      const liveImgs = [...liveRes.data.matchAll(/<img[^>]+>/gi)];
      const localImgs = [...localRes.data.matchAll(/<img[^>]+>/gi)];
      totalLiveImgs += liveImgs.length;
      totalLocalImgs += localImgs.length;
      console.log(`  Images: Live = ${liveImgs.length} | Local = ${localImgs.length}`);

      // Verify all local images exist on disk
      let missingOnDisk = 0;
      for (const imgTag of localImgs) {
        const srcMatch = imgTag[0].match(/src=["'](\/[^"']+)["']/);
        if (srcMatch) {
          const filePath = path.join(process.cwd(), 'public', srcMatch[1].slice(1).split('?')[0]);
          if (!fs.existsSync(filePath)) {
            console.log(`    [MISSING LOCAL FILE]: ${srcMatch[1]}`);
            missingOnDisk++;
          }
        }
      }
      if (missingOnDisk === 0) {
        console.log(`  ✓ All ${localImgs.length} images exist locally on disk`);
      }

      // Check key interactive widgets on page
      const hasJoinchat = localRes.data.includes('joinchat');
      const hasNavMenu = localRes.data.includes('hfe-nav-menu');
      console.log(`  ✓ Nav Menu: ${hasNavMenu ? 'Present' : 'Missing'} | JoinChat: ${hasJoinchat ? 'Present' : 'Missing'}`);
      console.log('');
    } catch (e) {
      console.log(`  Error checking ${page.name}: ${e.message}`);
    }
  }

  console.log("=================================================");
  console.log("                 AUDIT SUMMARY                   ");
  console.log("=================================================");
  console.log(`Total Elementor Nodes Checked: Live = ${totalLiveSections} | Local = ${totalLocalSections}`);
  console.log(`Total Images Checked:          Live = ${totalLiveImgs} | Local = ${totalLocalImgs}`);
}

auditParity().catch(console.error);
