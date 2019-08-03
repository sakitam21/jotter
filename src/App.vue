<template>
  <div id="app">
    <!--HelloWorld msg="Welcome to Jotter"/-->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
}

a{
    text-decoration: none;
    color: black;
}
</style>
