<template>
  <div id="app">
    <div id="nav">
      <img id="salt-space-logo" src="./assets/Archive/logo-profile-pic.png" alt="logo">
      <router-link :to="{ name: 'home'}">Home</router-link>
      <router-link :to="{ name: 'about'}">About</router-link>
      <router-link :to="{ name: 'latest'}">Latest</router-link>
      <router-link :to="{ name: 'new-member'}">Membership</router-link>
      <router-link :to="{ name: 'spaces'}">Spaces</router-link>
      <router-link :to="{ name: 'contact'}">Contact</router-link>
      <router-link :to="{ name: 'login' }">Admin</router-link>
    </div>
    <router-view/>

  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
a{
  text-decoration: none;
  color: black;
  cursor: pointer;
}
a :hover {
  background: white;
    width: 20%;
    border-radius: 83px;
}
*{
  /* padding: 0; */
  margin: 0;
}
html{
  background: #f1f1f1
}

#salt-space-logo{
  width: 19%;
}

#nav{
  display: flex;
  justify-content: space-between;
  width: 80%;
  border-bottom: 3px solid;
  padding-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  font-size: 1.5rem;
}
button{
  cursor: pointer;
}

@media only screen and (max-width: 770px) {
  #nav{
    display: grid;
    text-align: left;
  }
  #salt-space-logo{
    width: 40%;
    margin: auto;
  }
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
