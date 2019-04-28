const http = require('http');
const fs =require('fs');

http.createServer(function(req,res){
    const readStream = fs.createReadStream('./staticContent/sample.html');
    res.writeHead('200',{'Content-type':'text/html'});
    readStream.pipe(res);
}).listen(3000);

http.createServer(function(req,res){
    const readStream = fs.createReadStream('./staticContent/sample.json');
    res.writeHead('200',{'Content-type':'application/json'});
    readStream.pipe(res);
}).listen(4000);

http.createServer(function(req,res){
    const readStream = fs.createReadStream('./staticContent/sample.jpeg');
    res.writeHead('200',{'Content-type':'image/jpeg'});
    readStream.pipe(res);
}).listen(5000);

