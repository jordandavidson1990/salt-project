<template lang="html">
  <div class="">

  <h1>Membership</h1>
  <p>Join our membership. It's free!</p>
  <member-form />
  <members-list :members="members"></members-list>
  <div id="bottom-line"/>
</div>

</template>

<script>
import MembersList from '@/components/MembersList.vue'
import MemberForm from '@/components/MemberForm';
import {eventBus} from '../main.js';
import MemberService from '@/services/MemberService.js';

export default {
  name:'membership',
  data(){
    return{
      members:[]
    }
  },
  methods:{
    fetchData(){
      fetch('http://localhost:3000/api/members')
      .then(res => res.json())
      .then(data => this.members = data);
    }
  },
  mounted(){
    this.fetchData();
    eventBus.$on('refresh-data', this.fetchData);

    eventBus.$on('member-deleted', (id) => {
      let index = this.members.findIndex(member => member._id === id)
      this.members.splice(index, 1)
    })
  },
  components:{
    "members-list":MembersList,
    "member-form":MemberForm
  }
}
</script>

<style lang="css" scoped>
#bottom-line{
  border-bottom: 3px solid;
  width: 80%;
  margin: auto;
  margin-top: 5vh;
  margin-bottom: 2vh;
}
</style>
