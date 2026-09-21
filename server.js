import http from 'http';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const OUT_DIR = path.join(__dirname, 'out');

const port = parseInt(process.env.PORT || '3000', 10);
const hostname = '0.0.0.0';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8'
};

function resolveFilePath(reqUrl) {
  const urlPath = reqUrl.split('?')[0].split('#')[0];
  const decodedPath = decodeURIComponent(urlPath);
  let safePath = path.normalize(decodedPath).replace(/^(\.\.[\/\\])+/, '');
  if (safePath.startsWith('/') || safePath.startsWith('\\')) {
    safePath = safePath.slice(1);
  }

  let fullPath = path.join(OUT_DIR, safePath);

  // 1. Direct file match
  if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
    return fullPath;
  }

  // 2. Directory index.html match
  const indexPath = path.join(fullPath, 'index.html');
  if (fs.existsSync(indexPath) && fs.statSync(indexPath).isFile()) {
    return indexPath;
  }

  // 3. .html extension match
  const htmlPath = fullPath + '.html';
  if (fs.existsSync(htmlPath) && fs.statSync(htmlPath).isFile()) {
    return htmlPath;
  }

  // 4. Fallback 404
  const notFoundPath = path.join(OUT_DIR, '404.html');
  if (fs.existsSync(notFoundPath)) {
    return notFoundPath;
  }

  return null;
}

const server = http.createServer((req, res) => {
  // Health check / Head requests
  if (req.method === 'HEAD') {
    res.writeHead(200);
    return res.end();
  }

  const filePath = resolveFilePath(req.url);
  if (!filePath) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    return res.end('Not Found');
  }

  const is404 = filePath.endsWith('404.html') && !req.url.includes('404');
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  
  const headers = {
    'Content-Type': contentType,
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'SAMEORIGIN'
  };

  // Cache headers
  if (ext === '.html') {
    headers['Cache-Control'] = 'public, max-age=0, must-revalidate';
  } else {
    headers['Cache-Control'] = 'public, max-age=31536000, immutable';
  }

  const statusCode = is404 ? 404 : 200;

  // Gzip compression support
  const acceptEncoding = req.headers['accept-encoding'] || '';
  const fileStream = fs.createReadStream(filePath);

  if (/\bgzip\b/.test(acceptEncoding) && (contentType.includes('text') || contentType.includes('javascript') || contentType.includes('json') || contentType.includes('xml') || contentType.includes('svg'))) {
    headers['Content-Encoding'] = 'gzip';
    res.writeHead(statusCode, headers);
    fileStream.pipe(zlib.createGzip()).pipe(res);
  } else {
    res.writeHead(statusCode, headers);
    fileStream.pipe(res);
  }
});

server.listen(port, hostname, () => {
  console.log(`> Ultra-fast production server running on http://${hostname}:${port}`);
});
