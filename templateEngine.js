const express = require('express');
const bodyParser = require('body-parser');

const app = express();
var urlencodedParser = bodyParser.urlencoded({extended:false});

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('index');
});

app.get('/contact',function(req,res){
    res.render('contact',{qs:req.query});
});

app.post('/contact',urlencodedParser,function(req,res){
    console.log(req.body);
    res.render('contactRes',{data:req.body});
});

app.get('/person/:name',function(req,res){
    let userData = {age:23,hobbies:['eating','sleeping','guitar']};
    res.render('profile',{person:req.params.name,data:userData});
});

app.listen(3000);