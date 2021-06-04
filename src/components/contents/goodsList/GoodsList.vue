<template>
  <div class="goods">
    <goods-list-item :goodsItem="item" v-for="item in goods" :key="item.id" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";

export default {
  components: { GoodsListItem },
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      dafault() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style  scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>