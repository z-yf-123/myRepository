<template>
  <div class="goods-item">
    <img v-lazy="showImage" alt="" @load="imageLoad" @click="itemClick" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    showImage() {
      return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    imageLoad() {
      //发射一个全局事件
      this.$bus.$emit('itemImageLoad')

      //通过这种方式解决详情页的图片加载影响首页的问题
      // if (this.$route.path.indexOf('/home')) {
      //   this.$bus.$emit('homeItemImageLoad')
      // } else if (this.$route.path.indexOf('/detail')) {
      //   this.$bus.$emit('detailItemImageLoad')
      // }
    },
    itemClick() {
      this.$router.push('/detail/' + this.goodsItem.iid)
      //主语是这里是+号将路径和参数拼接在一起
      //在这里进行一个路由跳转,同时把对应商品的iid传过去
      //通过这种方式将iid传到详情页，再通过this.$route.iid取出来
      //最后通过在详情页通过iid作为参数来发送对应网络请求来
    }
  }
};
</script>

<style  scoped>
.goods-item {
  position: relative;
  padding-bottom: 40px;
  width: 47%;
}
.goods-item img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.goods-info {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 12px;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  padding-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url(../../../assets/images/common/collect.svg) 0 0/14px 14px;
}
</style>