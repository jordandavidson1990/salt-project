<template lang="html">
  <div class="individual-member">
    <h3>{{member.name}}</h3>
    <p>{{member.email}}</p>
    <button class="btn btn-danger" type="button" name="button" @click="handleDelete">Delete</button>
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
.individual-member{
  background: white;
  width:49%;
  max-height: 24%;
  margin-bottom: 1vh;
  box-shadow: 1px 1px 1px 1px grey;
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
  /* width: 80vw; */
  padding: 10px;
  /* width:25%; */
}

.btn-danger{
  color: #fff;
  background-color: #6b757d;
  border-color: #6b757d;
}
</style>
