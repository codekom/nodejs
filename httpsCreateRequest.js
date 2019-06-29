// creating request with https
var https = require("https");
var fs = require("fs");

var options = {
  hostname:"en.wikipedia.org",
  port:443,
  path:"/wiki/MongoDB",
  method:"GET"
};

var req = https.request(options,function(res){
  var responseBody = "";
  console.log(`Status Code : ${res.statusCode}`);
  console.log("Headers : %j",res.headers);
  res.setEncoding("UTF-8");

  res.once("data",function(chunk){
    console.log(chunk);
  });

  res.on("data",function(chunk){
    console.log(`Chunk Length ${chunk.length}`);
    responseBody += chunk;
  });

  res.on("end",function(){
    fs.writeFile("MongoDB.html",responseBody,function(err) {
      if(err){
        throw err;
      }
      console.log("File downloaded successfully");
    });
  });
});

req.end();
