<template lang="html">
  <div class="members-list">
    <ul class="member-list-container">
      <member-info v-for="(member, index) in members"
      :key="index"
      :member="member"
      />
    </ul>

  </div>
</template>

<script>
import MemberService from '@/services/MemberService.js';
import MemberInfo from '@/components/MemberInfo';
import {eventBus} from '../main.js'

export default {
  name:'member-list',
  props:['members'],
  components:{
    "member-info" : MemberInfo
  }
}
</script>

<style lang="css" scoped>
.member-list-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  width: 80%;
  justify-content: space-between;
}
ul{
      padding-inline-start: 0;
}
</style>
