import fs from 'fs';
import path from 'path';

const APP_DIR = 'src/app';

function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      findFiles(full, fileList);
    } else if (f.endsWith('.jsx') || f.endsWith('.js')) {
      fileList.push(full);
    }
  }
  return fileList;
}

const files = findFiles(APP_DIR);
console.log(`Checking ${files.length} files in ${APP_DIR}...`);

for (const file of files) {
  const content = fs.readFileSync(file, 'utf-8');
  const brokenLinks = [...content.matchAll(/<a\s+href="\/website-images\/[^"]*"\s+class="attachment-[^"]*"[^>]*\/>/gi)];
  if (brokenLinks.length > 0) {
    console.log(`\nFile: ${file} has ${brokenLinks.length} broken logo/image tags:`);
    for (const b of brokenLinks) {
      console.log('  ' + b[0]);
    }
  }
}
