<template>
  <div class="login">
  	<img src="../assets/logo.png" alt="avatar" style="width: 50px;height: 50px;" />
  	<div class="inputItem">
  		<label>username</label>
    	<input class="input" v-model="username" placeholder="username" />
	  </div>

	  <div class="inputItem">
    	<label>password</label>
    	<input class="input" v-model="password" placeholder="password" />
    </div>

    <button class="submit" v-on:click="submit">submit</button>
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
      if(this.username===''||this.password===''){
        alert("请输入正确的账号或密码")
      }else{
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
  text-align: center;
  margin-top: 60px;
}

.inputItem{
  width: 230px;
  height: 26px;
  margin:5px auto;
}

.inputItem label{
  width: 75px;
  height: 24px;
  float: left;
}

.inputItem .input{
  border:none;
  outline:none;
  width: 150px;
  height: 22px;
  float: right;
  border:1px solid #66CDAA;
  border-radius: 6px;
}

.submit{
  border:none;
  outline:none;
  width: 54px;
  height: 20px;
  line-height: 18px;
  border:1px solid #66CDAA;
  border-radius: 5px;
}

</style>
