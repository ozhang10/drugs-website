var express = require('express');
var router = express.Router();

//Get Homepage
router.get('/', function(req,res){
	res.render('index');
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

router.post('/Signup', function(req, res){
	console.log(req);
});

router.get('/Signup', function(req, res){
	console.log(req.params.uname);
})

module.exports = router;