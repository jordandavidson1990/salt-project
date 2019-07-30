<template lang="html">
  <div class="">

  <h2>Membership</h2>
  <p>Join our membership</p>
  <member-form/>
</div>
</template>

<script>
import MemberForm from '@/components/MemberForm.vue'
export default {
  name:'new-member',
  components:{
    "member-form":MemberForm
  }
}
</script>

<style lang="css" scoped>
</style>
