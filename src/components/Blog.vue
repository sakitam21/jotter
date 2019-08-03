<template>
  <div class="blog">
    <h1>Blog</h1>

    <div class="newdots">
        <ul>
            <li v-for="(item,index) in newdots" class="dotItem">
                <router-link :to="{name:'newdot',params:{dot_id:item.dot_id}}">{{item.dot_title}}</router-link>
            </li>
        </ul>
    </div>

    <div class="blogList">
      <ul>
        <li v-for="(item,index) in blogList" class="blogItem">
          {{item.blog_title}}
        </li>
      </ul>
      <Page :total="20" :page-size="pageSize" show-total @on-change="changeBlogPage" show-elevator></Page>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Blog',
  props: {
    
  },

  data:function(){
    return {
        newdots:[],
        blogList:[],
        pageIndex:0,
        pageSize:4
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
    });

    axios.post('http://localhost:3000/blog/searchPage',{
      pageIndex:_this.pageIndex,
      pageSize:_this.pageSize
    }).then(function(response){
      console.log(response.data)
      _this.blogList=response.data
    }).catch(function(error){
      console.log(error)
    });

  },

  methods:{
    changeBlogPage:function(index){
      const _this=this

      _this.pageIndex=index-1
      axios.post('http://localhost:3000/blog/searchPage',{
        pageIndex:_this.pageIndex,
        pageSize:_this.pageSize
      }).then(function(response){
        console.log(response.data)
        _this.blogList=response.data
      }).catch(function(error){
        console.log(error)
      });
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.blog{
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

.blogList{
  width: 98%;
  height: 140px;
  margin: 10px 1%;
  text-align: center;
  background-color: #FFEBCD;
}

.blogItem{
  width: 80%;
  height: 24px;
  list-style: none;
  margin:0 auto;
}
</style>
