<template>
  <div class="index">


    <div class="partOne">
      <Carousel
        :autoplay="true"
        :autoplay-speed="3000"
        :height="300"
        style="width: 40%;height: 290px;padding: 5px 10px; float: left;">
        <CarouselItem>
            <div class="demo-carousel">
                <img src="../assets/1.png" alt="1">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
                <img src="../assets/2.png" alt="2">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
                <img src="../assets/3.png" alt="3">
            </div>
        </CarouselItem>
      </Carousel>
      <div class="partOneRight">
        <Row style="margin-bottom: 10px;margin-top: 10px;">
            <i-col span="8">
                <img src="../assets/4.png" alt="4">
            </i-col>
            <i-col span="8">
                <img src="../assets/5.png" alt="5">
            </i-col>
            <i-col span="8">
                <img src="../assets/6.png" alt="6">
            </i-col>
        </Row>
        <Row style="argin-bottom: 10px;margin-top: 10px;">
            <i-col span="8">
                <img src="../assets/7.png" alt="7">
            </i-col>
            <i-col span="8">
                <img src="../assets/8.png" alt="8">
            </i-col>
            <i-col span="8">
                <img src="../assets/9.png" alt="9">
            </i-col>
        </Row>
      </div>
    </div>

    <div class="separateOne">
        <HelloWorld msg="Welcome to Jotter"></HelloWorld>
    </div>


    <div class="newdots">
        <ul>
            <li v-for="(item,index) in newdots" class="dotItem">
                <router-link :to="{name:'newdot',params:{dot_id:item.dot_id}}">{{item.dot_title}}</router-link>
            </li>
        </ul>
    </div>


    <h1>Main</h1>
  </div>
</template>

<script>
import axios from 'axios'
import HelloWorld from './HelloWorld'

export default {
  name: 'Index',
  props: {
    
  },

  components:{
    HelloWorld
  },

  data:function(){
    return {
        newdots:[
        ]
    }
  },

  created:function(){
    const _this=this

    axios.get('http://localhost:3000/newdots/search')
    .then(function(response){
        console.log(response.data)
        _this.newdots=response.data
    }).catch(function(error){
        console.log(error)
    })
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a{
    text-decoration: none;
    color: black;
}

.index{
    width: 100%;
}

.newdots{
    width: 98%;
    height: 60px;
    margin: 10px 1%;
    background-color: #FFEBCD;
}

.dotItem{
    width: 20%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    display: inline-block;
    list-style: none;
}

.partOne{
    width: 100%;
    height: 300px;
}

.partOneRight{
    width: 58%;
    height: 290px;
    margin-top: 5px;
    float: left;
}

.separateOne{
    width: 98%;
    height: 140px;
    margin: 50px 10px;
    line-height: 140px;
    text-align: center;
    font-size: 18px;
    background-color: #FFEBCD;
    color: white;
}
</style>
