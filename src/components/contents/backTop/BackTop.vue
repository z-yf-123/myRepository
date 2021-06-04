<template>
  <div>
    <div class="back-top">
      <img src="@/assets/images/common/top.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  data() {
    return {

    }
  },
}
</script>

<style  scoped>
.back-top {
  position: fixed;
  bottom: 55px;
  right: 5px;
}
.back-top img {
  width: 43px;
  height: 43px;
}
</style>