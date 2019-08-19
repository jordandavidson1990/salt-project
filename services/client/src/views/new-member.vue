<template lang="html">
  <div class="">

  <h2>Membership</h2>

  <p id="speech">Membership is open to all students and graduates of Glasgow school of Art for an annual fee which can,
if preferred, be paid for in kind by volunteering in some capacity at an exhibition or other event. As we
are non-profit co-operative we do rely on contributions to help meet our running costs.
We aim to create an active community of artists that support each other and that regard collaboration
as one of the essential spurs to creativity. We also want to connect with the local people through
offering workshops and making art more accessible.
Membership benefits
As a member you will be entitled to apply to run workshop(s) with no room hire cost. We only ask for
20% of contributions received.
In addition, as a member you will be able to apply to exhibit work at our gallery in the High street If you
wish to sell your work through the gallery we will only charge 20% commission to help cover our costs.
Lastly we have a limited number of maker’s spaces available and you will be able to apply for one of
these as a member.
Membership cost
Graduate
Student
£15.00 or pay in kind.
£7.50 or pay in kind.</p>
  <h4>Join our membership</h4>
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
#speech{
  text-align: left;
margin: auto;
width: 80%;
}
</style>
