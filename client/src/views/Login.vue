<template lang="html">
  <div class="login">
    <h2>Login</h2>
    Email/Login: <input type="text" v-model="email">
    Password: <input type="password" v-model="password">
    <br>
    <button class="btn" @click="login">Login</button>
    <p>{{error}}</p>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name:'login',
  data(){
    return{
      email:'',
      password: '',
      error: ''
    }
  },
  created(){
    // user is authorised
    if (localStorage.getItem('token') !== null){
      this.$router.push('/admin')
    }
  },
  methods:{
    login: function(){
      console.log('click');
      let user = {
        email: this.email,
        password: this.password
      }
      axios.post('http://localhost:3000/login', user)
      .then(res => {
        // if successful
        if (res.status === 200){
          localStorage.setItem('token', res.data.token);
          this.$router.push('/admin')
        }
      }, err => {
        console.log(err.response);
        this.error = err.response.data.error
      })
    }
  }
}
</script>

<style lang="css" scoped>
.login{
  display: inline-block;
}
button{
  color: #fff;
background-color: #6c757d;
border-color: #6c757d;
width: 100%;
border-radius: 1vw;
}
input{
  display: block;
  margin: auto;
  width:100%;
}

</style>
