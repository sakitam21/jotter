var express = require('express');
var router = express.Router();

var db =require('../config/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); 

router.get('/search',function(req,res,next){
	
	db.query('select * from user',[],function(results,fields) {
		res.send(results);
	})
});

router.post('/verify',function(req,res,next){

	var username=req.body.username
	var password=req.body.password

	var sql=`select * from user where username='${username}' and password='${password}'`
	console.log(sql)
	console.log(username)

	db.query(sql,[],function(results,fields) {
		
		if(results===undefined){
			res.json('未查询到数据');
		}
		console.log(results)
		res.json(results);
	})
});

module.exports = router;
