<template>
  <div id="main-tab-bar">
    <!-- 选项卡组件 -->
    <tab-bar>
      <template #default>
        <tab-bar-item path="/home" activeColor="pink">
          <template #item-icon>
            <img src="@/assets/images/tabbar/home.svg" />
          </template>
          <template #item-icon-active>
            <img src="@/assets/images/tabbar/home_active.svg" />
          </template>
          <template #item-text><div>首页</div></template>
        </tab-bar-item>
        <tab-bar-item path="/category">
          <template #item-icon>
            <img src="@/assets/images/tabbar/category.svg" />
          </template>
          <template #item-icon-active>
            <img src="@/assets/images/tabbar/category_active.svg" />
          </template>
          <template #item-text><div>分类</div></template>
        </tab-bar-item>
        <tab-bar-item path="/shopcart">
          <template #item-icon>
            <img src="@/assets/images/tabbar/shopcart.svg" />
          </template>
          <template #item-icon-active>
            <img src="@/assets/images/tabbar/shopcart_active.svg" />
          </template>
          <template #item-text><div>购物车</div></template>
        </tab-bar-item>
        <tab-bar-item path="/profile">
          <template #item-icon>
            <img src="@/assets/images/tabbar/profile.svg" />
          </template>
          <template #item-icon-active>
            <img src="@/assets/images/tabbar/profile_active.svg" />
          </template>
          <template #item-text><div>我的</div></template>
        </tab-bar-item>
      </template>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>