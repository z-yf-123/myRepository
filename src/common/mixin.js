import { debounce } from './utils'
import BackTop from '@/components/contents/backTop/BackTop.vue'

export const itemListenerMixin = {
  data() {
    return {
      itemImageListener: null,
      refresh: null
    }
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh, 500)
    this.itemImageListener = () => {
      this.refresh()
      //console.log('有图片加载');
    }
    this.$bus.$on('itemImageLoad', this.itemImageListener)
    //这里和首页的mounted大量重复可以通过混入mixin将相同的整合到一个文件中
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isBackShow: false
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    }
  }
}