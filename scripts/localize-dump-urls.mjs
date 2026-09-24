import fs from 'fs';

const path = 'src/app/page.jsx';
let s = fs.readFileSync(path, 'utf8');

// On disk: https:\\/\\/thedietdiary.in  (two backslashes before each slash)
const re = /https:(?:\\\\\/)+thedietdiary\.in/g;
const matches = s.match(re) || [];
console.log('matches', matches.length, matches[0]);

s = s.replace(re, '');
s = s.replaceAll('https://thedietdiary.in', '');
fs.writeFileSync(path, s);

const idx = s.indexOf('"urls":{"assets":');
console.log('assets now:', JSON.stringify(s.slice(idx, idx + 90)));
