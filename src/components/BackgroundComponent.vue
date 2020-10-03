<template>
  <div class="background-header">
    <carousel :autoplay="true" :loop="true">
      <slide class="huan">
        <img src="/img/background/bg01.png" alt />
      </slide>
      <slide class="huan">
        <img src="/img/background/bg02.png" alt />
      </slide>
      <slide class="huan">
        <img src="/img/background/bg03.png" alt />
      </slide>
      <slide class="huan">
        <img src="/img/background/bg04.png" alt />
      </slide>
    </carousel>
  </div>
</template>

<script>
export default {
  name: "BackgroundComponent",
  props: {
    msg: String
  }
};
</script>
<style scoped>
.background-header{
  height: 350px;
  overflow: hidden;
}
.background-header img{
  height: 100%;
  width: 100%;
}
.huan {
  width: 350px;
  height: 350px;
}
</style>
