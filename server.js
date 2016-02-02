var express = require('express');
var path = require("path");
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', './public/htmls');
app.set('view engine', 'html');

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname+'/public/htmls/index.html'));
});

app.get('/visualization1', function(req, res) {
  res.sendFile(path.join(__dirname+'/public/htmls/visualization1.html'));
});

app.get('/visualization2', function(req, res) {
  res.sendFile(path.join(__dirname+'/public/htmls/visualization2.html'));
});

app.listen(3000);
module.exports = app;
