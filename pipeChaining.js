const fs = require('fs');
const zlib = require('zlib'); // module for compression

// create transform stream
const gzip = zlib.createGzip();
const readStream = fs.createReadStream('./sample.txt','utf8');
const writeStream = fs.createWriteStream('sample2.txt.gz');
readStream.pipe(gzip).pipe(writeStream);

// creating uncompressed file
const gunzip = zlib.createGunzip();
const readStream2 = fs.createReadStream('./sample2.txt.gz');
const writeStream2 = fs.createWriteStream('uncompressed.txt');
readStream2.pipe(gunzip).pipe(writeStream2);