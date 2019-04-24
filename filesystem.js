const fs = require('fs');
//create a file
fs.writeFile('example.txt',"Sample text",function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("File created !!");
        fs.readFile('example.txt','utf8',function(err,file){
            if(err){
                console.log(err);
            }
            else{
                console.log(file);
            }
        });
    }
});
// Rename a file
fs.rename('example.txt','sample.txt',function(err){
    if(err)
        console.log(err);
    else
        console.log("Renamed successfully.");
});
// append to a file
fs.appendFile('sample.txt',"Appended data",function(err){
    if(err)
        console.log(err);
    else
        console.log("Appended successfully.");
});
//delete a file
fs.unlink('sample.txt',function(err){
    if(err)
        console.log(err);
    else
        console.log("deleted successfully.");
});