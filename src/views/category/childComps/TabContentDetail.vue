<template>
  <grid-view>
    <goods-list-item
      v-for="item in categoryDetail"
      :key="item.id"
      :goodsItem="item"
    ></goods-list-item>
  </grid-view>
</template>

<script>
import GridView from '@/components/common/gridView/GridView'
import GoodsListItem from '@/components/contents/goodsList/GoodsListItem'

export default {
  name: "TabContentDetail",
  components: {
    GridView,
    GoodsListItem
  },
  props: {
    categoryDetail: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style  scoped>
</style>