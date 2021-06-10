<template>
  <div id="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  //在其父组件中使用该组件模板标签，其标签中的path属性属于父组件中的属性
  //不属于其子组件，所以要通过props将path传过来
  props: {
    path: String,
    //这里让用户自定义颜色，默认红色
    activeColor: {
      type: String,
      default: '#ff5777',
    },
  },
  computed: {
    isActive() {
      //当点击了谁，谁的isActive变成true,其他都是false
      return this.$route.path === this.path
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      //当某一个Item被点击就调用路由对象的replace方法跳转
      //到该item对应的页面
      this.$router.replace(this.path);
      //this.$router是整个路由对象
      //console.log(this.$router);
      //this.$route是当前处于活跃的路由
      //console.log(this.$route)
    },
  },
};
</script>

<style>
#tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  margin-top: 3px;
}
#tab-bar-item img {
  width: 24px;
  height: 24px;
}
</style>