<template lang="html">
  <form v-on:submit.prevent="handleSubmit">
    <label for="name">Name:</label>
    <input class="w3-input" required type="text" name="name" v-model="name"/>

    <label for="email">Email:</label>
    <input class="w3-input" required type="email" name="email" v-model="email"/>

    <input class="btn btn-secondary" type="submit" value="Save"/>

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

.w3-input{
  width: 80%;
  margin: auto;
}

.btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    margin: 10px;
width: 80vw;
padding: 10px;
  }

  .btn-secondary{
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }
</style>
