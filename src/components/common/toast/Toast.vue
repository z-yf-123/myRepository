<template>
  <div class="toast" v-if="isShow">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(msg = 'msg', duration = 2000) {
      this.isShow = true;
      this.message = msg;
      setTimeout(() => {
        this.isShow = false;
        this.message = ''
      }, duration);
    },
  },
}
</script>

<style  scoped>
.toast {
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  padding: 8px 10px;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.75);
  color: #fff;
  border-radius: 15px;
}
</style>