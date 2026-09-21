import http from 'http';

http.get('http://localhost:3001/', res => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const logoMatch = data.match(/<a\s+href="\/"[^>]*>\s*<img[^>]*Asset-10[^>]*>\s*<\/a>/i);
    console.log('Homepage Logo HTML:');
    console.log(logoMatch ? logoMatch[0] : 'not found');
  });
});
