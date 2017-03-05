var express = require('express'),
    app = express(),
    Movie = require('./model').Movie,
    path = require('path');

app.set('view engine','html');
app.set('views',path.resolve('views'));
app.engine('html',require('ejs').__express);
app.get('/',function(req,res){
    Movie.find({},function(err,movies){
        res.render('index',{movies});
    })
});
app.listen(80);