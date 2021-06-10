<template>
  <div id="app">
    <!-- 详情页每个页面的数据都不一样，所以不让它保留状态 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <mainTabBar></mainTabBar>
  </div>
</template>
<script>
import MainTabBar from './components/contents/mainTabBar/MainTabBar'

export default {
  components: {
    MainTabBar,
  },
};
</script>

<style scoped>
@import "./assets/css/base.css";
</style>

