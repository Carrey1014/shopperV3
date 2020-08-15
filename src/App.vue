<template>
  <div>
    <router-view/>
    <!-- 以下是底部导航栏 -->
    <tabbar>
      <tabbarItem path = '/home' activeColor = "red">
        <img slot="ico" src="@/assets/img/tabBar/home.svg" alt="首页">
        <img slot="ico-active" src="@/assets/img/tabBar/home.active.svg" alt="首页">
        <span slot="txt">首页</span>
      </tabbarItem>
      <tabbarItem path = '/classify'>
        <img slot="ico" src="@/assets/img/tabBar/classify.svg" alt="">
        <img slot="ico-active" src="@/assets/img/tabBar/classify.active.svg" alt="">
        <span slot="txt">分类</span>
      </tabbarItem>
      <tabbarItem path = '/shop'>
        <img slot="ico" src="@/assets/img/tabBar/shopCar.svg" alt="">
        <img slot="ico-active" src="@/assets/img/tabBar/shopCar.active.svg" alt="">
        <span slot="txt">购物</span>
      </tabbarItem>
      <tabbarItem path = '/profile'>
        <img slot="ico" src="@/assets/img/tabBar/My.svg" alt="">
        <img slot="ico-active" src="@/assets/img/tabBar/My.active.svg" alt="">
        <span slot="txt">我的</span>
      </tabbarItem>
    </tabbar>
  </div>
</template>

<script>
import {tabbar, tabbarItem} from '@/components/common/tabbarAndItem'

export default {
  name: 'App',
  components: {
    tabbar,
    tabbarItem,
  }
}
</script>

<style>
@import './assets/css/base.css';

</style>
