var express = require('express');
var router = express.Router();

var db =require('../config/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/search',function(req,res,next){
	
	db.query('select * from blog',[],function(results,fields) {
		res.send(results);
	})
});

router.post('/searchPage',function(req,res,next){

	var pageIndex=req.body.pageIndex
	var pageSize=req.body.pageSize

	var sql=`select * from blog where blog_id<='${(pageIndex+1)*pageSize}'and blog_id>'${pageIndex*pageSize}'`
	
	db.query(sql,[],function(results,fields) {
		res.send(results);
	})
});

router.post('/searchOne',function(req,res,next){

	var blog_id=req.body.blog_id

	var sql=`select * from blog where blog_id='${blog_id}'`
	
	db.query(sql,[],function(results,fields) {
		res.send(results);
	})
});

module.exports = router;
