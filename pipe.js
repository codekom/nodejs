const fs = require('fs');

const readStream = fs.createReadStream('./sample.txt','utf8');
const writeStream = fs.createWriteStream('sample2.txt');
readStream.pipe(writeStream);