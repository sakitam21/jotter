<template>
  <div class="login">
  	<img src="../assets/avatar.png" alt="avatar" style="width: 80px;height: 80px;" />
  	<div class="inputItem">
  		<label>username</label>
    	<input class="input" v-model="username" />
	  </div>

	  <div class="inputItem">
    	<label>password</label>
    	<input class="input" v-model="password" />
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
            router.push({name:'index',params:{userid:response.data[0].userid}})
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
  margin-top: 80px;
  color: #AAAAAA;
}

.inputItem{
  width: 240px;
  height: 26px;
  margin:5px auto;
}

.inputItem label{
  width: 75px;
  height: 24px;
  float: left;
  font-size: 18px;
  font-weight: 400;
  margin-right: 10px;
}

.inputItem .input{
  border:none;
  outline:none;
  width: 150px;
  height: 22px;
  float: right;
  color: #AAAAAA;
  font-size: 18px;
  font-weight: 400;
  border:1.4px solid #C1CDCD;
  border-radius: 6px;
}

.login .submit{
  border:none;
  outline:none;
  width: 60px;
  height: 20px;
  color: #AAAAAA;
  line-height: 18px;
  border-radius: 5px;
  background-color: #EDEDED;
  font-size: 18px;
  font-weight: 400;
}

</style>
