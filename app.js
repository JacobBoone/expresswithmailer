var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var routes = require('./routes/index');
var contact = require('./routes/contact');
// var indexController = require('./controllers/index.js');



var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

// app.get('/', indexController.index);
app.use('/', routes);
app.use('/contact', contact);

var server = app.listen(6315, function() {
	console.log('Express server listening on port ' + server.address().port);
});
