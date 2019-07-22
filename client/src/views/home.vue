<template lang="html">
  <div class="container">
    <div class="inner-container">

      <!-- <h1>Home</h1> -->
      <img src="../assets/Archive/fb-banner-salt.png" alt="street_view">
      <p id="co-op">A co-operative exhibition, maker & community space</p>
      <div id="bottom-line"/>
    </div>
    <div class="speech">
      <p>  We are a co-operative of GSA students and graduates who operate and manage 3 spaces across the Salt Market and High Street. These spaces provide artists, makers and the wider community with a place to work, exhibit and collaborate.</p>
    </div>
  </div>

</template>

<script>
export default {
  name:'home'
}
</script>

<style lang="css" scoped>
img{
  width: 60%;
}
.speech{
  width: 60%;
  margin: auto;
  text-align: left;
  margin-top: 2vh;
}
.inner-container{
  width: 80%;
  margin: auto;
}
#bottom-line{
  border-bottom: 3px solid;
}
#co-op{
    width: 50%;
    margin: auto;
    margin-bottom: 5vh
  }
</style>
