const fs = require('fs');

//creating and deleting folders
fs.mkdir('sample',function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Folder created.");
        fs.rmdir('sample',function(err){
            if(err){
                console.log(err);
            }
            else{
                console.log("Folder deleted.");
            }
        });
    }
});

// reading files in a directory
fs.readdir('example',function(err,files){
    if(err){
        console.log(err);
    }
    else{
        console.log(files);
    }
});

//loop thro' the directory and delete each file
fs.readdir('example',function(err,files){
    if(err){
        console.log(err);
    }
    else{
        for(let file of files){
            fs.unlink('./example/'+file,function(err){
                if(err){
                    console.log(err);
                }
                else{
                    console.log('File deleted.');
                }
            });
        }
    }
});