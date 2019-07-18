<template>
  <div id="app">
    <h1>Salt Space</h1>
    <br>
    <div id="nav">
      <router-link :to="{ name: 'home'}">Home</router-link>
      <router-link :to="{ name: 'about'}">About</router-link>
      <router-link :to="{ name: 'latest'}">Latest</router-link>
      <router-link :to="{ name: 'membership'}">Membership</router-link>
      <router-link :to="{ name: 'contact'}">Contact</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
a{
  text-decoration: none;
}
*{
  padding: 0;
  margin: 0;
}
html{
  background: #f1f1f1
}
#nav{
  display: flex;
  justify-content: space-around;
  width: 80%;
  border-bottom: 3px solid;
  padding-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
