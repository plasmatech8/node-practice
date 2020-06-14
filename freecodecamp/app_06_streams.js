
// 6. Streams
const fs = require('fs');
const readStream = fs.createReadStream('./example.txt', 'utf-8');
const writeStream = fs.createWriteStream('./example2.txt', 'utf-8');
const writeStream2 = fs.createWriteStream('./example2.txt.gz', 'utf-8');

// When the read stream reads a chunk, write into the write stream
readStream.on('data', (chunk)=>{
    //console.log(chunk);
    writeStream.write(chunk);
});

// Pipes
readStream.pipe(writeStream);

// Pipe-chaining can be used (i.e. to zip a file before transfer)
const zlib = require('zlib');
const gzip = zlib.createGzip(); // zip
const gunzip = zlib.createGunzip(); // unzip
readStream.pipe(gzip).pipe(writeStream2);

