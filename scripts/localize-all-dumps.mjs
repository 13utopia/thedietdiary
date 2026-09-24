import fs from 'fs';
import path from 'path';

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name === 'page.jsx') out.push(full);
  }
  return out;
}

const pages = walk('src/app');
let total = 0;

for (const file of pages) {
  let s = fs.readFileSync(file, 'utf8');
  const before = s;

  // Escaped JSON URLs: https:\/\/thedietdiary.in  (also double-escaped in source)
  s = s.replace(/https:(?:\\\\\/)+thedietdiary\.in/g, '');
  s = s.replaceAll('https://thedietdiary.in', '');

  // Hydration: dump HTML can differ slightly after client parse of script tags
  if (
    s.includes('dangerouslySetInnerHTML={{ __html: bodyHTML }}') &&
    !s.includes('suppressHydrationWarning')
  ) {
    s = s.replace(
      /dangerouslySetInnerHTML=\{\{ __html: bodyHTML \}\}/g,
      'dangerouslySetInnerHTML={{ __html: bodyHTML }} suppressHydrationWarning'
    );
  }

  if (s !== before) {
    fs.writeFileSync(file, s);
    const hits =
      (before.match(/https:\/\/thedietdiary\.in/g) || []).length +
      (before.match(/https:(?:\\\\\/)+thedietdiary\.in/g) || []).length;
    console.log('updated', file, 'replacements~', hits);
    total++;
  } else {
    console.log('skip', file);
  }
}

console.log('files updated:', total);
