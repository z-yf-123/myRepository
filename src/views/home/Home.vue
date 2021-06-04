<template>
  <div id="home">
    <!-- 首页导航栏模块 -->
    <nav-bar class="home-bar">
      <template #center> 购物街 </template>
    </nav-bar>
    <!-- 偷天换日,代替下面的tab-control，实现吸附效果 -->
    <tab-control
      :titles="titles"
      @tabClick="tabClick"
      ref="tabControl2"
      v-show="isTabShow"
    />
    <!-- better-scroll实现的可滚动区域 -->
    <!-- 修复了当替代了tabcontrol1后可滚动区域被往下挤的bug -->
    <scroll
      :class="{ contenth1: !isTabShow, contenth2: isTabShow }"
      ref="scroll"
      @scroll="contentScroll"
      :probe-type="3"
      @pullingUp="loadMore"
      :pull-up-load="true"
    >
      <template #default>
        <!-- 轮播图模块 -->
        <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
        <!-- 首页推荐模块 -->
        <home-recommend-view :recommends="recommends" />
        <!-- 本周流行模块 -->
        <feature-view />
        <!-- 分类导航模块 -->
        <tab-control
          :titles="titles"
          @tabClick="tabClick"
          ref="tabControl1"
          v-show="!isTabShow"
        />
        <!-- 商品展示模块 -->
        <goods-list :goods="showGoods" />
        <!-- 注意showGoods是一个计算属性，用来判断
        是将哪一个类型的goods传进去 -->
      </template>
    </scroll>
    <!-- 回到顶部按钮 -->
    <back-top @click.native="backClick" v-show="isBackShow" />
  </div>
</template>
<script>
import { getHomeMultidata, getHomeGoods } from "@/network/home.js";
import { itemListenerMixin } from '@/common/mixin'
import { backTopMixin } from '@/common/mixin'

import HomeSwiper from "./childComps/HomeSwiper.vue";
import HomeRecommendView from "./childComps/HomeRecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";

import NavBar from "@/components/common/navbar/NavBar.vue";
import TabControl from "@/components/contents/tabControl/tabControl.vue";
import GoodsList from "@/components/contents/goodsList/GoodsList.vue";
import Scroll from '@/components/common/scroll/Scroll.vue';


export default {
  name: "Home",
  data() {
    return {
      titles: ["流行", "新款", "精选"],
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] },
      },
      currentType: 'pop',
      tabControlTop: null,
      isTabShow: false,
      saveY: 0,
      itemImageListener: null
    };
  },
  mixins: [itemListenerMixin, backTopMixin],
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
  },
  /*mounted() {

    //对this.$refs.scroll.refresh这个函数进行防抖操作
    let refresh = debounce(this.$refs.scroll.refresh, 500);

    this.itemImageListener = () => {
      refresh();
    }
    //监听全局事件
    this.$bus.$on('itemImageLoad', itemImageListener)

    //refresh的作用是当 DOM 结构发生变化的时候重新计算 better-scroll，确保滚动的效果正常
    //这里用到了节流，为了防止图片加载的过程中频繁地来计算高度
    //前一次调用后如果在500ms内又有调用refresh那么就取消前一次只执行最后一次调用
    //通过这种方式解决了图片加载完后可滚动高度没有重新计算的bug
  },*/
  created() {
    this.getHomeMultidata();

    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  //这里修复了多次切换页面后还是会回到顶部的bug
  activited() {
    this.$refs.scroll.scrollTo(0, saveY, 0)
    this.$refs.scroll.refresh()
  },
  deactivited() {
    //保存离开时的Y值
    this.saveY = this.$refs.scroll.getScrollY()

    //取消全局事件的监听
    this.$bus.$off('itemImageLoad', this.itemImageListener)
  },
  computed: {
    showGoods() {
      //返回当前类型的list
      return this.goods[this.currentType].list
    }
  },
  methods: {
    //网络请求相关
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        //console.log(res);//这里的res只包含data
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp()
      });
    },
    //事件监听相关
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    contentScroll(position) {
      // 1.确定BackTop是否显示
      this.isBackShow = (-position.y) > 1000

      // 2.确定TabControl是否吸顶
      this.isTabShow = (-position.y) > this.tabControlTop - 44
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
    },
    swiperImageLoad() {
      this.tabControlTop = this.$refs.tabControl1.$el.offsetTop
    },
  },
};
</script>

<style  scoped>
#home {
  height: 100vh;
}
.home-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.contenth1 {
  overflow: hidden;
  height: calc(100% - 96px);
  /*100%相当于父组件(home)的高度，有6000+，因为
  scroll里的内容将其撑高了，可以给home一个视口高度100vh*/
}
.contenth2 {
  overflow: hidden;
  height: calc(100% - 136px);
}
</style>