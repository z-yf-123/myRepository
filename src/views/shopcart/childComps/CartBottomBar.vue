<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button
        class="check-button"
        :is-checked="isSelectAll"
        @click.native="checkClick"
      />
      <span>全选</span>
    </div>
    <div class="price">合计: {{ totalPrice }}</div>
    <div class="right" @click="cartBuy">去结算({{ totalCount }})</div>
  </div>
</template>

<script>
import CheckButton from "@/components/contents/checkButton/CheckButton.vue";
import { mapGetters } from "vuex"

export default {
  name: 'CartBottomBar',
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['totalPrice', 'totalCount', 'cartList']),
    isSelectAll() {
      if (this.cartList.length === 0) return false
      return this.cartList.every(item => item.checked == true)
    }
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        this.cartList.forEach(item => item.checked = false)
      } else {
        this.cartList.forEach(item => item.checked = true)
      }
      //this.cartList.forEach(item => item.checked = !this.isSelectAll)
    },
    cartBuy() {
      if (this.cartList.every(item => item.checked == false)) {
        this.$toast.show('请选择购买的商品', 2000)
      }
    }
  }
}
</script>

<style  scoped>
.bottom-bar {
  height: 40px;
  background-color: #eee;
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
  display: flex;
  font-size: 14px;
  line-height: 40px;
}
.check-content {
  height: 20px;
  display: flex;
  width: 80px;
}
.check-content span {
  padding-left: 40px;
}
.check-button {
  position: absolute;
  line-height: 0;
  left: 12px;
  top: 10px;
  height: 20px;
  width: 20px;
}
.price {
  flex: 1;
}
.right {
  text-align: center;
  background-color: var(--color-high-text);
  width: 100px;
}
</style>