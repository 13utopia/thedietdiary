import https from 'https';

https.get('https://thedietdiary.in/', res => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    // Find header
    const headerMatch = data.match(/<header[\s\S]*?<\/header>/i);
    if (headerMatch) {
      console.log('=== HEADER HTML ON LIVE ===');
      console.log(headerMatch[0]);
    }
    
    // Find site branding / logo
    const branding = data.match(/<div[^>]*class="[^"]*(?:site-branding|custom-logo|site-logo|hfe-nav-menu__logo|elementor-widget-theme-site-logo)[^"]*"[\s\S]*?<\/div>/gi);
    console.log('=== BRANDING MATCHES ===');
    console.log(branding);

    // Find all images matching logo
    const imgMatches = [...data.matchAll(/<img[^>]+>/gi)].map(m => m[0]).filter(img => /logo|Shivangi|brand|custom-logo/i.test(img));
    console.log('=== ALL LOGO IMAGES ON LIVE ===');
    console.log(imgMatches);
  });
});
