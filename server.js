const http = require('http');
const port = 8080;
const ip = '192.168.0.5';
const fs = require('fs').promises;

const server = http.createServer((req, res) => {
    fs.readFile('./index.html', 'utf8').then(data => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
});
server.listen(port,ip);
console.log('server listening on port ' + port);