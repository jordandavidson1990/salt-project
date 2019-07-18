<template lang="html">
  <div class="">
    <h3>{{member.name}}</h3>
    <p>{{member.email}}</p>
    <button type="button" name="button" @click="handleDelete">Delete</button>
  </div>
</template>

<script>
import MemberService from '@/services/MemberService.js'
import {eventBus} from '../main.js'
export default {
  name:'member-info',
  props:['member'],
  methods:{
    handleDelete: function(){
      MemberService.deleteMember(this.member._id)
      eventBus.$emit('member-deleted', this.member._id);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
