const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

//using middleware. 1st argument alias for static folder, to hide the name from external world
app.use('/public',express.static(path.join(__dirname,'static')));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'static','sample.html'));
});
app.post('/',function(req,res){
    console.log(req.body);
    res.send("successfully posted.");
});

app.listen(3000);

