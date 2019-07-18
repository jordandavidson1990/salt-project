<template lang="html">
  <div class="container">
    <div class="inner-container">

      <!-- <h1>Home</h1> -->
      <img src="../assets/street.jpg" alt="street_view">
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
  width: 80vw;
}
.speech{
  width: 60%;
  margin: auto;
  text-align: left;
  margin-top: 2vh;
}
.inner-container{
  border-bottom: 5px solid;
  width: 80%;
  margin: auto;
  padding-top: 5vh;
  padding-bottom: 5vh;
}
</style>
