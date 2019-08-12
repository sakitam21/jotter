<template>
  <div class="addBlog">
    <h1>AddBlog</h1>

    <input v-model="blog_title" placeholder="Blog Title" class="blog_title">

    <textarea class="blog_content" v-model="blog_content" placeholder="Blog Content"></textarea>

    <button v-on:click="submit">submit</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AddBlog',
  props: {
    
  },

  data:function(){
  	
  	return {
  		blog_title:"",
  		blog_content:"",
  		blog_author:"caiyihong"
  	}
  },

  methods:{
  	submit:function(){
  		const _this=this

  		axios.post('http://localhost:3000/blog/addBlog',{
      		blog_title:_this.blog_title,
      		blog_author:_this.blog_author,
      		blog_content:_this.blog_content
    	}).then(function(response){
      		console.log(response.data)
    	}).catch(function(error){
      		console.log(error)
    	})
  	}
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.addBlog{
	width: 98%;
	height: 600px;
	margin:10px 1%;
	background-color: #FFEBCD;
}

.blog_title{
	width: 100%;
	height: 30px;
	margin:10px 0;
}

.blog_content{
	width: 100%;
	height: 300px;
	margin:10px 0;
}
</style>
