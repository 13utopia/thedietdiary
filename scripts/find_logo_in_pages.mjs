import fs from 'fs';

const c = fs.readFileSync('src/app/page.jsx', 'utf-8');
const regex = /class="[^"]*elementor-element-474656a4[^"]*"[\s\S]*?<\/div>\s*<\/div>/gi;
const matches = [...c.matchAll(regex)];
console.log(`Found ${matches.length} logo widgets in page.jsx:`);
for (const m of matches) {
  console.log(m[0]);
}

// Let's also check all <img> in the header section
const headerRegex = /<header[\s\S]*?<\/header>/gi;
const headers = [...c.matchAll(headerRegex)];
console.log(`Found ${headers.length} headers in page.jsx.`);
if (headers.length > 0) {
  const headerImgs = [...headers[0][0].matchAll(/<img[^>]+>/gi)];
  console.log('Images inside header:', headerImgs.map(m => m[0]));
}
