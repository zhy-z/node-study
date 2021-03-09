// node 第一个服务
const http = require('http');
const host = 'localhost';
const port = '8888';
const server = http.createServer((req, res) => {
  console.log(req,res)
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`<head><meta charset="utf-8"/></head>`);
  res.end('我的第一个node服务');
});
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
