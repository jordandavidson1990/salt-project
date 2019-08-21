<template lang="html">
  <div class="container">
    <div class="inner-container">
      <img class="banner-image" src="../assets/Archive/fb-banner-salt.png" alt="street_view">
      <p id="co-op">A co-operative exhibition, maker & community space</p>
      <div id="bottom-line"/>
    </div>
    <div class="speech">
      <p>  We are a co-operative of GSA students and graduates who operate and manage 3 spaces across the Salt Market and High Street. These spaces provide artists, makers and the wider community with a place to work, exhibit and collaborate.</p>
    </div>
    <div id="very-bottom-line"/>
  </div>

</template>

<script>
export default {
  name:'home'
}
</script>

<style lang="css" scoped>
@keyframes example {
  0%   {
    left:0px; top:0px;
    opacity: 1;
  }
25%  { left:200px; top:0px;opacity: 0.4}
50%  { left:-200px; top:10px; opacity: 0.1}
75%  { left:200px; top:-10px;}
100% {left:0px; top:0px;opacity: 0.9}

}

.banner-image{
  animation-name: example;
  animation-duration: 10s;
  animation-delay: -2s;
  position: relative;
  animation-iteration-count: infinite;
 animation-direction: alternate;
}



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

#very-bottom-line{
  border-bottom: 3px solid;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1vh;
  margin-bottom: 1vh;
}

#co-op{
    width: 50%;
    margin: auto;
    margin-bottom: 5vh
  }
</style>
