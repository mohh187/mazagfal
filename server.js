const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const ROOT_DIR = __dirname;
const PORT = process.env.PORT || 8080;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf'
};

function getFilePath(requestUrl) {
  const { pathname } = url.parse(requestUrl);
  const safePath = path.normalize(pathname).replace(/^\/+/, '');
  const finalPath = safePath ? safePath : 'index.html';
  return path.join(ROOT_DIR, finalPath);
}

function serveFile(filePath, res) {
  fs.stat(filePath, (err, stats) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
        res.end('404 Not Found');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=UTF-8' });
        res.end('500 Internal Server Error');
      }
      return;
    }

    if (stats.isDirectory()) {
      serveFile(path.join(filePath, 'index.html'), res);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    fs.readFile(filePath, (readErr, data) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=UTF-8' });
        res.end('500 Internal Server Error');
        return;
      }
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  });
}

const server = http.createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { 'Content-Type': 'text/plain; charset=UTF-8' });
    res.end('405 Method Not Allowed');
    return;
  }

  const filePath = getFilePath(req.url);
  serveFile(filePath, res);
});

server.listen(PORT, () => {
  console.log(`Mazag Fal Café menu server running at http://localhost:${PORT}`);
});
