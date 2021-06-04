<template>
  <div class="cart-list">
    <cart-list-item
      v-for="item in cartList"
      :key="item.id"
      :itemInfo="item"
    ></cart-list-item>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartListItem from './CartListItem'

export default {
  name: 'cartList',
  components: {
    CartListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  }
}
</script>

<style  scoped>
</style>