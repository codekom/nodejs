const fs = require('fs');

// read & write data in chunks. readstream inherits from EventEmitter
const readStream = fs.createReadStream('./sample.txt','utf8');
const writeStream = fs.createWriteStream('sample2.txt');
readStream.on('data',function(chunk){
    writeStream.write(chunk);
});
