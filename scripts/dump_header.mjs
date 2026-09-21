import https from 'https';

https.get('https://thedietdiary.in/', res => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const headerMatch = data.match(/<header[\s\S]*?<\/header>/i);
    if (headerMatch) {
      console.log('=== FULL HEADER HTML ===');
      console.log(headerMatch[0]);
    }
  });
});
