<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-nav"
      @titleClick="titleClick"
      ref="nav"
    ></detail-nav-bar>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
    >
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shopInfo"></detail-shop-info>
      <detail-goods-info
        :detailInfo="detailInfo"
        @imageLoad="detailImageLoad"
      ></detail-goods-info>
      <detail-param-info
        :paramInfo="paramInfo"
        ref="params"
      ></detail-param-info>
      <detail-comment-info
        :commentInfo="commentInfo"
        ref="comment"
      ></detail-comment-info>
      <goods-list :goods="recommends" ref="recommends" />
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isBackShow"></back-top>
  </div>
</template>

<script>
import { getDetail, getRecommend, Goods, ShopInfo, GoodsParam } from '@/network/detail'
import { itemListenerMixin } from '@/common/mixin'
import { backTopMixin } from '@/common/mixin'
import { debounce } from '@/common/utils'

import Scroll from '@/components/common/scroll/Scroll.vue'
import GoodsList from '@/components/contents/goodsList/GoodsList.vue'

import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParamInfo from './childComps/DetailParamInfo.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
import DetailBottomBar from './childComps/DetailBottomBar.vue'

import { mapActions } from 'vuex'

export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shopInfo: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [0],
      getThemeTopY: null,
      currentIndex: 0,
      //注意recommends传的是数组
    }
  },
  mixins: [itemListenerMixin, backTopMixin],
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
  },
  created() {

    this.iid = this.$route.params.iid

    getDetail(this.iid).then(res => {
      //console.log(res);
      //获取数据
      let data = res.result

      //轮播图数据
      this.topImages = data.itemInfo.topImages;

      //商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo)

      //店铺信息
      this.shopInfo = new ShopInfo(data.shopInfo)

      //详情信息
      this.detailInfo = data.detailInfo

      //参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

      //评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    })

    getRecommend().then(res => {
      //console.log(res);
      this.recommends = res.data.list;
    })

    this.getThemeTopY = debounce(() => {
      this.themeTopYs.push(this.$refs.params.$el.offsetTop - 44)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44)
      this.themeTopYs.push(this.$refs.recommends.$el.offsetTop - 44)
      this.themeTopYs.push(Number.MAX_VALUE); // 存入最大值，用于边界条件判断
    }, 500)
    //问题:在哪里才能获取到正确的offsetTop 
    //1.created肯定不行,压根不能获取元素- 
    //2.mounted也不行,数据还没有获取到
    //3.获取到数据的回调中也不行,DOM还没有渲染完
    //4.$nextTick也不行,因为图片的高度没有被计算在类
    //5.在图片加载完成后,获取的高度才是正确

  },
  destroyed() {
    //离开后取消goodslistitem里面图片加载事件的监听
    this.$bus.$off('itemImageLoad', this.itemImageListener)
  },
  methods: {
    ...mapActions(['addCart']),
    detailImageLoad() {
      this.$refs.scroll.refresh()
      this.getThemeTopY()
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100)
    },
    contentScroll(position) {
      const positionY = -position.y;
      const length = this.themeTopYs.length;
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.themeTopYs[i] &&
          positionY < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i; // 用于避免重复记录i的次数
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      this.isBackShow = (-position.y) > 1000
    },
    addToCart() {
      //获取购物车需要展示的信息
      const product = {}
      product.iid = this.iid
      product.img = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.newPrice = this.goods.realPrice

      this.addCart(product).then(res => {
        this.$toast.show(res)
      })
    }
  }
}
</script>

<style  scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
  /*父元素默认高度是内容高度,让父元素高度等于视口高度*/
}

.detail-nav {
  position: relative;
  z-index: 10;
  background-color: #fff;
}

.content {
  height: calc(100% - 102px);
  /*注意这个100%是相对于父元素即#detail的高度*/
}
</style>