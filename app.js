//Importing npm libraries
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var path = require('path');

//Pointing to routes
var routes = require('./routes/index');
//var user = require('./routes/users');

var app = express();

//Setting up handlebars are the view engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//Json breakdown
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Using the public folder which contains css, js, and image files
app.use(express.static(path.join(__dirname,'public')));

//Hitting URL will render (load) index.handlebars
app.use('/', routes);

//Web server listening on port 3000
app.listen(3000, () =>
	console.log("Listening on port 3000")
);