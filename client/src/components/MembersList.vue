<template lang="html">
  <div class="members-list">
    <ul>
      <li v-for="member in members">
        <h3>{{member.name}}</h3>
        <p>{{member.email}}</p>
        <button type="button" name="button" @click="handleDelete">Delete</button>
        <br>
      </li>
    </ul>

  </div>
</template>

<script>
import {eventBus} from '../main.js'
export default {
  name:'member-list',
  props:['members'],
  methods:{
    handleDelete(id){
      const url = `http://localhost:3000/api/members/${id}`;
      fetch(url, {
        method:'DELETE'
      }).then(() => eventBus.$emit('member-deleted', id))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
