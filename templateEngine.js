const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/person/:name',function(req,res){
    let userData = {age:23,hobbies:['eating','sleeping','guitar']};
    res.render('profile',{person:req.params.name,data:userData});
});

app.listen(3000);