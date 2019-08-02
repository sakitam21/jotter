<template>
  <div class="newdot">
    <h1>Newdot</h1>
    <h1>{{$route.params.dot_id}}</h1>
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
  	}
  },

  created:function(){
    const _this=this

    axios.get('http://localhost:3000/newdots/search')
    .then(function(response){
        console.log(response.data)
    }).catch(function(error){
        console.log(error)
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
