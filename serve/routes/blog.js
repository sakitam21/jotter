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

router.post('/addBlog',function(req,res,next){

	var blog_title=req.body.blog_title
	var blog_author=req.body.blog_author
	var blog_content=req.body.blog_content

	var sql=`insert into blog(blog_title,blog_author,blog_content) values ('${blog_title}','${blog_author}','${blog_content}')`
	
	db.query(sql,[],function(results,fields) {
		res.send(results);
	})
});


module.exports = router;
