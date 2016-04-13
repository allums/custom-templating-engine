var express = require('express');
var app = express();
var tempEngine = require('./temp-engine.js');

app.set('view engine', 'tempEngine');

app.set('views', './views');

app.get('/', function (req, res){
	res.render('index', {username: "Laura", username2: "Stephen"});
});

var server = app.listen(3000, function (){
	console.log('Server started!');
});