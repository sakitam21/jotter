<template>
  <div class="blogItem">
    <div class="blog_title">{{blog_title}}</div>
    <div class="blog_author">{{blog_author}}</div>
    <div class="blog_content">{{blog_content}}</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BlogItem',
  props: {
    
  },

  data:function(){
  	return {
      blog_id:0,
      blog_title:'',
      blog_author:'',
      blog_content:''
  	}
  },

  created:function(){

    const blog_id=this.$route.params.blog_id
    this.blog_id=blog_id

    const _this=this
    axios.post('http://localhost:3000/blog/searchOne',{
      blog_id:_this.blog_id
    }).then(function(response){
      _this.blog_title=response.data[0].blog_title
      _this.blog_author=response.data[0].blog_author
      _this.blog_content=response.data[0].blog_content
    }).catch(function(error){
      console.log(error)
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
