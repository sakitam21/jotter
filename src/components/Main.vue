<template>
  <div class="main">
    <!--头部-->
    <div class="header">
      <!--左侧导航栏-->
      <div class="list">
        <div class="listItem">
          <router-link :to="{name:'main'}">Main</router-link>
        </div>
        <div class="listItem">
          <router-link :to="{name:'b'}">Go to B</router-link>
        </div>
        <div class="listItem">
          <router-link :to="{name:'c'}">Go to C</router-link>
        </div>
        <div class="listItem">
          <router-link :to="{name:'d'}">Go to D</router-link>
        </div>
      </div>

      <!--右侧用户信息-->
      <div class="userinfo">
        <img src="../assets/avatar.png" alt="avatar" />
        <select v-model="selected" class="selected">
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </div>
    </div>

    <!--内容-->
    <div class="content">
      <router-view></router-view>
    </div>
    <p>{{userid}}</p>
    <p>{{selected}}</p>
    <HelloWorld msg="Welcome to Jotter"></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld'

export default {
  name: 'Main',
  props: {
  },

  data:function(){
    return {
      selected:'',
      userid:0
    }
  },
  
  created:function(){
    const userid=this.$route.params.userid
    this.userid=userid
  },

  components:{
    HelloWorld
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a{
  text-decoration: none;
  color: black;
}

.main{
  margin: 0;
  padding: 0;
  width: calc(100vw);
  height: calc(100vh);
  background-color: #EDEDED;
}

.header{
  width: 100%;
  height: 80px;
  background-color: white;
}

.header .list{
  width: 80%;
  height: 80px;
  float: left;
}

.header .list .listItem{
  display: inline-block;
  width: 100px;
  height: 40px;
  line-height: 40px;
  float: left;
  margin-left: 20px;
  margin-top: 20px;
  border:1px solid #EDEDED;
  border-radius: 5px;
}

.header .userinfo{
  width: 15%;
  height: 80px;
  margin:0 15px;
  float: left;
}

.header .userinfo img{
  width: 70px;
  height: 70px;
  float: left;
  margin-top: 5px;
  margin-right: 10px;
}

.header .userinfo .selected{
  width: 15px;
  height: 15px;
  float: left;
  margin-top: 34px;
  background-color: #EDEDED;
}
</style>
