<template>
  <div class="newdot">
    <h1>Newdot</h1>

    <div class="dot_title">{{dot_title}}</div>
    <div class="dot_author">{{dot_author}}</div>
    <div class="dot_content">{{dot_content}}</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Newdot',
  props: {
    
  },

  data:function(){
  	return {
      dot_id:0,
      dot_title:'',
      dot_author:'',
      dot_content:''
  	}
  },

  created:function(){

    const dot_id=this.$route.params.dot_id
    this.dot_id=dot_id

    const _this=this
    axios.post('http://localhost:3000/newdots/searchOne',{
      dot_id:_this.dot_id
    }).then(function(response){
      _this.dot_title=response.data[0].dot_title
      _this.dot_author=response.data[0].dot_author
      _this.dot_content=response.data[0].dot_content
    }).catch(function(error){
      console.log(error)
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
