<template lang="html">
  <div class="signup">
    <h2>Sign Up</h2>
    Name:<input type="text" v-model="name"/>
    Email:<input type="email" v-model="email"/>
    Password:<input type="password" v-model="password"/>
    <br>
    <button @click="signup">Sign Up</button>
    {{ error }}
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
      password:'',
      error: ''
    }
  },
  methods:{
    signup: function(){
      let newUser = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      axios.post('http://salt-app:3000/api/signups', newUser)
      .then(res => {
        console.log(res);
        this.error = '';
        this.$router.push('/login')
      }, err => {
        console.log(err.response)
        this.error =  err.response.data.error
      })
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
