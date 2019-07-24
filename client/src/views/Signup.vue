<template lang="html">
  <div class="signup">
    <h2>Sign Up</h2>
    Name:<input type="text" v-model="name"/>
    Email:<input type="email" v-model="email"/>
    Password:<input type="password" v-model="password"/>
    <br>
    <button @click="signup">Sign Up</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name:'Signup',
  data(){
    return{
      name:'',
      email:'',
      password:''
    }
  },
  methods:{
    signup: function(){
      let newUser = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      axios.post('http://localhost:3000/signup', newUser)
    }
  }
}
</script>

<style lang="css" scoped>
input{
  display: block;
}
.signup{
      display: inline-block;
}
</style>
