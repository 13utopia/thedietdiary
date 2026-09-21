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
console.log(`Processing ${files.length} files...`);

const regex = /<a\s+href="\/website-images\/([^"]*)"\s+class="([^"]*)"\s+alt="([^"]*)"\s+srcset="([^"]*)"\s+sizes="([^"]*)"\s*\/>/gi;

let fixedCount = 0;
for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  if (regex.test(content)) {
    content = content.replace(regex, (match, filename, className, alt, srcset, sizes) => {
      return `<a href="/"><img fetchpriority="high" width="417" height="447" src="/website-images/${filename}" class="${className}" alt="${alt || 'The Diet Diary Logo'}" srcset="${srcset}" sizes="${sizes}" /></a>`;
    });
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Fixed navbar logo in: ${file}`);
    fixedCount++;
  }
}

console.log(`Successfully fixed navbar logo in ${fixedCount} files.`);
