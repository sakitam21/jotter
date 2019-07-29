<template>
  <div class="login">
  	<img src="../assets/logo.png" alt="avater" style="width: 50px;height: 50px;" />
  	<p>
  		<label>username</label>
    	<input v-model="username" placeholder="username" />
	</p>

	<p>
    	<label>password</label>
    	<input v-model="password" placeholder="password" />
    </p>

    <button v-on:click="submit">submit</button>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router/router'

export default {
  name: 'Login',
  props: {
  },
  data:function(){
  	return {
  	  username:'',
  	  password:''
  	}
  },
  methods:{
  	submit:function(){
  		//alert(this.username+' '+this.password)
  		axios.post('http://localhost:3000/users/verify',{
  			username:this.username,
  			password:this.password
  		}).then(function(response){
  			if(response.data.length===0){
  				alert("账号或密码错误，请重新登录")
  			}else{
  				console.log(response)
  				alert("登录成功")
  				router.push({name:'hello',params:{id:'Welcome to Jotter'}})
  			}	
  		}).catch(function(error){
  			console.log(error)
  		})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
