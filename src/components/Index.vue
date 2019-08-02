<template>
  <div class="index">

    <div class="newdots">
        <ul>
            <li v-for="(item,index) in newdots" class="dotItem">
                <router-link :to="{name:'newdot',params:{dot_id:index}}">{{item.dot_title}}</router-link>
            </li>
        </ul>
    </div>


    <Carousel
        :autoplay="true"
        :autoplay-speed="3000"
        :height="300"
        style="width: 580px;height: 300px;margin: 20px auto;">
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
        <CarouselItem>
            <div class="demo-carousel">
            	<img src="../assets/4.png" alt="4">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
            	<img src="../assets/5.png" alt="5">
            </div>
        </CarouselItem>
    </Carousel>

    <h1>Main</h1>
    <HelloWorld msg="Welcome to Jotter"></HelloWorld>
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
    width: 100%;
    height: 60px;
    margin: 10px 0;
    background-color: #EDEDED;
}

.dotItem{
    width: 20%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    display: inline-block;
    list-style: none;
}
</style>
