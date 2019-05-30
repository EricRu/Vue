<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <ul>
      <li><router-link to="/home">home</router-link></li>
      <li><router-link to="/school">school</router-link></li>
      <li><router-link to="/login">login</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
