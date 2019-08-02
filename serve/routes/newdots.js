var express = require('express');
var router = express.Router();

var db =require('../config/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/search',function(req,res,next){
	
	db.query('select * from newdots',[],function(results,fields) {
		res.send(results);
	})
});

module.exports = router;
