<template lang="html">
  <div class="">

  <h1>Admin</h1>
  <h3 v-if="name">Hello {{name}}</h3>
  <button><router-link :to="{ name: 'signup' }">Add Admin</router-link></button>

  <button @click="logout">Logout</button>
  <br>
  <members/>
</div>
</template>

<script>
import axios from 'axios'

import Membership from '@/views/membership.vue'
export default {
  name:'admin',
  data(){
    return{
      name: '',
      email: ''
    }
  },
  components:{
    "members": Membership
  },
  mounted(){
    axios.get('http://localhost:3000/user', {headers:{token: localStorage.getItem('token')}})
    .then(res => {
      this.name = res.data.user.name;
      this.email = res.data.user.email;
    })
  },
  created(){
    // user is not authorised
    if (localStorage.getItem('token') === null){
      this.$router.push('/login')
    }
  },
  methods:{
    logout: function(){
      localStorage.clear();
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
