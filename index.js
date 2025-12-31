// HTTPサーバを起動する

'use strict';

const http = require('node:http');
const server = http.createServer((req, res) => {
  res.writeHead(302, {
    Location: 'https://www.nnn.ed.nico/' // リダイレクト先を指定
  });
  res.end();
});

const port = 8000;
server.listen(port, () => {
  console.info(`${port}番で起動中...`);
});