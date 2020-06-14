
// 7. HTTP Server

// Simple server
/* const http = require('http');
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('Hello world from nodejs');
        res.end();
    }else{
        res.write('Page not found');
        res.end();
    }
});
server.listen('3000'); */

// Static file server
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        const readStream = fs.createReadStream('./static/index.html')
        res.writeHead(200, {'content-type': 'text/html'});
        readStream.pipe(res)
    }else if(req.url === '/tux'){
        const readStream = fs.createReadStream('./static/Tux_Enhanced.svg.png')
        res.writeHead(200, {'content-type': 'image/png'});
        readStream.pipe(res)
    }else{
        res.write('Page not found');
        res.end();
    }
});
server.listen('3000');

