<template>
    <div id="home">
        <!-- 顶部导航栏 -->
        <navbar class="home-nav"><div slot="center">购物街</div></navbar>
        <!-- 轮播图 -->
        <img src="@/assets/img/carreyIMG/banner.jpg">
        <!-- 推荐信息 -->
        <homeDisplay :recommends = "recommend"></homeDisplay>
        <!-- 特色推荐 -->
        <featureView/>
        <tabControl class="tab-Control" :titles = "['流行', '新款', '推荐']" />
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
    </div>
</template>

<script>
import navbar from '@/components/common/navbar';
import tabControl from '@/components/common/tabControl';

import homeDisplay from './homeComponents/homeDisplay';
import featureView from './homeComponents/featureView';


import {HomeData} from '@/network/home.js';
export default {
    name: 'home',
    components:{
        navbar,
        tabControl,
        homeDisplay,
        featureView,
    },
    data(){
        return {
            result: null,
            banner: null,
            recommend: null
        }
    },
    computed: {
        thisStyle(){
            // return {width: banner}
        }
    },
    created(){
        // 这里在该组件创建完成时就进行网络请求
        HomeData().then(res => {
            this.result = res;
            this.banner = res.data.banner.list
            this.recommend = res.data.recommend.list;
        })
    }
}
</script>

<style>
.home-nav{
    position: fixed;
    left: 0px; top: 0px; right: 0px;
    z-index: 10;
    color: white;
    background-color: rgb(228, 135, 174);
}
.tab-Control{
    position: sticky;
    top: 44px;
}


</style>
