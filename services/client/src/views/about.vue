<template lang="html">
  <div class="about">

    <h1>About</h1>
    <div class="description">

      <p>Our mission is to provide a creative environment across our three spaces that champions collaborative, interdependent working. </p>
      <br>
      <p>These artist led spaces include exhibition, community and residency working areas. Our spaces are intended as meeting places for discussion, skill sharing and building collaborative relationships. </p>
      <br>
      <p>Salt Space is also a venue for creative events and activities which support the sustainability of our neighbourhood. Constitutionally, Salt Space is a co-operative founded by graduates and students from the Glasgow School of Art.</p>
    </div>
    <div class="salt-team-images">

      <img id="salt-team" src="../assets/Archive/salt-team.jpg" alt="team-photo">
      <img id="salt-team" src="../assets/Archive/salt-shop.jpg" alt="team-photo">
      <img id="salt-team" src="../assets/Archive/salt-claire.jpg" alt="team-photo">
      <img id="salt-team" src="../assets/Archive/salt-lifting-chair.jpg" alt="team-photo">
      <img id="salt-team" src="../assets/Archive/saltspace-group-photo.jpg" alt="team-photo">
    </div>
    <div id="bottom-line"/>
  </div>
</template>

<script>
export default {
  name:'about'
}
</script>

<style lang="css" scoped>
#bottom-line{
  border-bottom: 3px solid;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3vh;
  margin-bottom: 3vh;
}
.salt-team-images{
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: auto;
}
#salt-team{
  width: 33%;
  border: 2px solid;
}
p{
  width: 80%;
  margin: auto;
}
.description{
  text-align: justify;
}
</style>
