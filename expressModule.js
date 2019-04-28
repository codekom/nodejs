/*
Before running this we need to: 
npm init --yes
npm install express
*/
const express = require('express');
const app = express();

app.get('/',function(req,res){
    res.send("Hello World from express");
});

app.get('/example',function(req,res){
    res.send("Example route here");
});

// route params and query strings
app.get('/example/:name/:age',function(req,res){
    console.log(req.params);
    console.log(req.query);
    res.send("Name : " + req.params.name + " Age: " + req.params.age);
});

app.listen(3000);