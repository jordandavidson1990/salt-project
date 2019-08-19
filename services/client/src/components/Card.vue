
<template>
  <div class="card">
    <img
      class="card-icon"
      :src="require(`@/assets/Archive/${imgName}`)"
      alt="card icon"
    />
    <div class='card-content'>
      <h3 class='headline'>{{headline}}</h3>
      <p>{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    headline: String,
    imgName: String,
    text: String
  }
};
</script>

<style media="screen">
.card {
background-color: white;
border-radius: 5px;
box-shadow: 0 20px 60px 0 rgba(41, 67, 100, 0.21);
width: 280px;
height: 420px;
padding: 10px;
}

.headline {
font-weight: bold;
}

.card-icon {
pointer-events: none;
width: 180px;
padding: 40px 20px 0px 20px;
}

.card-content {
padding: 20px;
}
</style>
