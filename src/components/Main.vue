<template>
  <div class="layout">
    <Layout>

      <Header class="header">
        <Menu mode="horizontal" theme="light" active-name="1" class="list">
            <div class="layout-nav">
              <MenuItem name="1">
                <router-link :to="{name:'index'}">
                  <Icon type="ios-navigate"></Icon>
                  Index
                </router-link>
              </MenuItem>
              <MenuItem name="2"> 
                <router-link :to="{name:'blog'}">
                  <Icon type="ios-keypad"></Icon>
                  Blog
                </router-link>
              </MenuItem>
              <MenuItem name="3">
                <router-link :to="{name:'c'}">
                  <Icon type="ios-analytics"></Icon>
                  Go to C
                </router-link>
              </MenuItem>
              <MenuItem name="4">
                <router-link :to="{name:'d'}">
                  <Icon type="ios-paper"></Icon>
                  Go to D
                </router-link>
              </MenuItem>
              </div>
          </Menu>
        <div class="userinfo">
          <Dropdown trigger="click" style="margin-left: 20px">
          <a href="javascript:void(0)">
              <img src="../assets/avatar.png" alt="avatar" style="width: 70px;height: 70px;margin:5px 0;" />
              <Icon type="ios-arrow-down" size="20" style="margin-top: -60px;margin-left: 10px;"></Icon>
          </a>
          <DropdownMenu slot="list">
              <DropdownItem>
                <router-link :to="{name:'userinfo'}">Userinfo</router-link>
              </DropdownItem>
              <DropdownItem>炸酱面</DropdownItem>
              <DropdownItem>豆汁儿</DropdownItem>
              <DropdownItem>冰糖葫芦</DropdownItem>
              <DropdownItem>北京烤鸭</DropdownItem>
          </DropdownMenu>
          </Dropdown>
        </div>
      </Header>

    
    <!--内容-->
    <div class="content">
      <router-view></router-view>
    </div>

    <!--底部-->
    <div class="footer">
      2011-2016 © TalkingData
    </div>

    </Layout>
  </div>
</template>

<script>


export default {
  name: 'Main',
  props: {
  },

  data:function(){
    return {
      userid:0
    }
  },
  
  created:function(){
    const userid=this.$route.params.userid
    this.userid=userid
  },

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a{
  text-decoration: none;
  color: black;
}

.layout{
  margin: 0;
  padding: 0;
  width: calc(100vw);
  background-color: #EDEDED;
}

.header{
  width: 100%;
  height: 80px;
  background-color: white;
  border-bottom:1px solid #EDEDED;
}

.header .list{
  width: 80%;
  height: 70px;
  margin-top: 10px;
  float: left;
}

.header .userinfo{
  width: 15%;
  height: 80px;
  margin:0 15px;
  float: left;
}

.content{
  width: 90%;
  height: 1000px;
  margin: 30px auto;
  background-color: white;
}

.footer{
  width: 100%;
  text-align: center;
  height: 60px;
  font-size: 14px;
}

</style>
