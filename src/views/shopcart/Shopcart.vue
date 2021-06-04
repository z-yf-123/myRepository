<template>
  <div id="shop-cart">
    <nav-bar class="cart-nav">
      <template #center>购物车({{ cartLength }})</template>
    </nav-bar>
    <scroll class="content" :probeType="3" ref="scroll">
      <template #default>
        <cart-list></cart-list>
      </template>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue';
import Scroll from '@/components/common/scroll/Scroll'
import { mapGetters } from 'vuex'

import CartList from './childComps/CartList';
import CartBottomBar from './childComps/CartBottomBar.vue';


export default {
  name: "ShopCart",
  data() {
    return {};
  },
  components: {
    NavBar,
    Scroll,
    CartList,
    CartBottomBar
  },
  computed: {
    //通过这种方式将getters里面的方法转成计算属性
    ...mapGetters(['cartLength'])
  },
  activated() {
    this.$refs.scroll.refresh()
  }
};
</script>

<style  scoped>
#shop-cart {
  height: 100vh;
}
.content {
  overflow: hidden;
  height: calc(100% - 136px);
}
.cart-nav {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
</style>