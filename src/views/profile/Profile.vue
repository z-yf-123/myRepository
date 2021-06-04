<template>
  <div>
    <nav-bar class="nav-bar">
      <template #center>我的档案</template>
    </nav-bar>
    <user-info>
      <template #user-icon>
        <img
          src="../../assets/images/profile/avatar.svg"
          alt=""
          class="privateImage-svg left"
        />
      </template>
      <template #mobile-icon>
        <img
          src="../../assets/images/profile/phone.svg"
          alt=""
          class="icon-mobile"
        />
      </template>
      <template #arrow-icon>
        <img
          src="../../assets/images/common/arrow-left.svg"
          alt=""
          class="arrow-svg right"
        />
      </template>
    </user-info>
    <section class="account">
      <div class="account-item">
        <div class="number"><span class="balance">0.00</span>元</div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div class="number"><span class="balance">0</span>个</div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div class="number"><span class="balance">0</span>分</div>
        <div class="account-info">我的积分</div>
      </div>
    </section>
    <list-view :list-data="orderList" class="order-list"></list-view>
    <list-view :list-data="serviceList" class="service-list"></list-view>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import UserInfo from './childComps/UserInfo'
import ListView from './childComps/ListView'

export default {
  name: 'Profile',
  components: {
    NavBar,
    UserInfo,
    ListView
  },
  data() {
    return {
      orderList: [
        { icon: require('../../assets/images/profile/message.svg'), info: '我的消息' },
        { icon: require('../../assets/images/profile/pointer.svg'), info: '积分商城' },
        { icon: require('../../assets/images/profile/vip.svg'), info: '会员卡' },
      ],
      serviceList: [
        { icon: require('../../assets/images/profile/cart.svg'), info: '我的购物车' },
        { icon: require('../../assets/images/profile/shopping.svg'), info: '下载购物APP' },
      ]
    }
  },
}
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
.account {
  display: flex;
  border-bottom: 2px solid #ccc;
}
.account-item {
  flex: 1;
  background-color: #fff;
  border-right: 1px solid #ccc;
  text-align: center;
  color: #666;
  font-size: 13px;
  padding: 18px;
}
.account-item:last-of-type {
  border-right: 0;
}
.account-item .balance {
  font-size: 24px;
  font-weight: 700;
  color: #ff5f3e;
}
.account-info {
  margin-top: 6px;
}
.order-list,
.service-list {
  margin-top: 12px;
}
.order-list {
  border-bottom: 2px solid #ccc;
}
</style>