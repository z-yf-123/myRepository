<template>
  <nav-bar class="detail-nav-bar">
    <template #left>
      <img
        src="../../../assets/images/common/back.svg"
        alt=""
        class="back"
        @click="backClick"
      />
    </template>
    <template #center>
      <span
        v-for="(item, index) in titles"
        :key="item.id"
        class="title-item"
        :class="{ active: index === currentIndex }"
        @click="isActive(index)"
      >
        {{ item }}
      </span>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    isActive(index) {
      this.currentIndex = index
      this.$emit('titleClick', index)
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style  scoped>
.detail-nav-bar {
  font-size: 13px;
}
.title-item {
  padding: 0 10px;
}
.back {
  width: 25px;
  height: 25px;
  margin-top: 9px;
}
.active {
  color: var(--color-high-text);
}
</style>