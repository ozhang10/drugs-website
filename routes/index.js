var express = require('express');
var router = express.Router();

var loginModel = require('../models/login.js');

//Get Homepage
router.get('/', function(req,res){
	res.render('Home');
});

router.get('/A-Z', function(req, res){
	res.render('A-Z');
});

router.get('/Category', function(req, res){
	res.render('Category');
});

router.get('/About', function(req, res){
	res.render('About');
});

router.get('/Register', function(req, res){
	res.render('Register');
	console.log("test");
});

router.post('/Signup', function(req, res){
	res.send("inside post");
	/*loginModel.createUser(req.query.user-name, req.query.password, req.query.email, req.query.first-name, req.query.last-name, function(err){
		callback(err);
	});*/
});


module.exports = router;