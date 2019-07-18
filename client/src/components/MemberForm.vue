<template lang="html">
  <form v-on:submit.prevent="handleSubmit">
    <label for="name">Name:</label>
    <input required type="text" name="name" v-model="name"/>

    <label for="email">Email:</label>
    <input required type="email" name="email" v-model="email"/>

    <input type="submit" value="Save"/>

  </form>
</template>

<script>

import {eventBus} from '../main.js';
export default {
  name:'member-form',
  data(){
    return{
      name:"",
      email:""
    }
  },
  methods:{
    handleSubmit(){
      const url = "http://localhost:3000/api/members";
      const payload = {
        name: this.name,
        email: this.email
      };
      fetch(url, {
        method:'POST',
        body:JSON.stringify(payload),
        headers:{'Content-Type':'application/json'}
      }).then(response => {
        eventBus.$emit('refresh-data');
        this.name = this.email = "";
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
