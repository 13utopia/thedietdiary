import https from 'https';

https.get('https://thedietdiary.in/', (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const jc = data.match(/joinchat[^"'\s<>]*/gi);
    console.log('Joinchat occurrences:', jc ? [...new Set(jc)] : 'none');
    const jcObj = data.match(/joinchat_obj\s*=\s*({[\s\S]*?});/i);
    console.log('joinchat_obj:', jcObj ? jcObj[1] : 'not found');
    const wa = data.match(/whatsapp[^"'\s<>]*/gi);
    console.log('WhatsApp occurrences:', wa ? [...new Set(wa)] : 'none');
    
    // Check for any other interactive components
    const popups = data.match(/elementor-popup[^"'\s<>]*/gi);
    console.log('Popups:', popups ? [...new Set(popups)] : 'none');
  });
});
