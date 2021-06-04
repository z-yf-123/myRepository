<template>
  <swiper class="detail-swiper">
    <!-- 如果类名是swiper会出现轮播图不能动的情况 -->
    <swiper-item v-for="item in topImages" :key="item.id">
      <template #default>
        <img :src="item" alt="" class="top-image" />
      </template>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/common/swiper'

export default {
  name: 'DetailSwiper',
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  components: {
    Swiper,
    SwiperItem
  }

}
</script>

<style  scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>