<template lang="html">
  <div class="members-list">
    <ul>
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
</style>
