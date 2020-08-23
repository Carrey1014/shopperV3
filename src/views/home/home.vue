<template>
    <div id="home">
        <!-- 1. 顶部导航栏 -->
        <navbar class="home-nav"><div slot="center">购物街</div></navbar>
        <scroll class="scroll-content" ref="scroll" :probe-type = "3" 
                @scrollPos = "Scrolled" :pullUpLoad = "true"  @moreData = "moreGoodsData()">
            <!-- 2. 轮播图 -->
            <img src="@/assets/img/carreyIMG/banner.jpg">
            <!-- 3. 推荐信息 -->
            <homeDisplay :recommends = "recommend"></homeDisplay>
            <!-- 4. 特色推荐 -->
            <featureView/>
            <!-- 5. 流行，新款和推荐按钮 -->
            <tabControl class="tab-Control" :titles = "['流行', '新款', '推荐']" @tabClick = "tabClick"/>
            <!-- 6. 流行，新款和推荐列表 -->
            <goodsBox>
                <goodsItem v-for = "(item, index) in goods[currentType].list" :key="index" :imgLink = "item.img" :imgTitle = "item.name"/>
            </goodsBox>
        </scroll>
        <backToTop v-show="isShow" @click.native = "backToTop()"/>

    </div>
</template>

<script>
// 导入common公共组件
import navbar from '@/components/common/navbar';
import tabControl from '@/components/common/tabControl';
import {goodsItem, goodsBox} from '@/components/common/goods';
import scroll from '@/components/common/scroll/scroll';
import backToTop from '@/components/common/backToTop/backToTop';

// 导入home页专属组件
import homeDisplay from './homeComponents/homeDisplay';
import featureView from './homeComponents/featureView';

// 导入模块
import {HomeData, GoodsData$test, GoodsData} from '@/network/home.js';

export default {
    name: 'home',
    components:{
        // 注册common组件
        navbar,
        tabControl,
        goodsItem, 
        goodsBox,
        scroll,
        backToTop,

        // 注册homen专属组件
        homeDisplay,
        featureView,
        
    },
    data(){
        return {
            result: null,
            banner: null,
            recommend: null,
            goods:{
                pop: {page: 0, list: []},
                new: {page: 0, list: []},
                sell: {page: 0, list: []},
            },
            currentType: 'pop',
            isShow: false,
        }
    },
    computed: {
        thisStyle(){
            // return {width: banner}
        }
    },
    created(){
        // // 1. 这里在该组件创建完成时就进行网络请求
        this.getHomeData();

        // 2. 请求商品数据
        this.getGoodsData('pop');
        this.getGoodsData('new');
        this.getGoodsData('sell');
    },
    methods:{
        /**
         *  事件监听相关的方法
         * */ 
        tabClick(tabClick){
            switch(tabClick){
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
        },
        backToTop(){
            this.$refs.scroll.scrollback(0,0);
        },
        Scrolled(pos){
            if(pos.y <= -500){
                this.isShow = true;
            }else{
                this.isShow = false;
            }
        },
        moreGoodsData(){
            this.getGoodsData(this.currentType);
        },

        /**
         *  数据获取相关的方法
         * */
        getHomeData(){
            HomeData().then(res => {
                this.result = res;
                this.banner = res.data.banner.list
                this.recommend = res.data.recommend.list;
            })
        },
        getGoodsData(type){
            var page = this.goods[type].page + 1;
            GoodsData(type, page).then(res => {
                this.goods[type].list.push(...res);
                this.goods[type].page += 1;
                this.$refs.scroll.finishPullUp();   // 该条语句为什么不能放在GoodsData函数的后面
            })
        }
    }
}
</script>

<style scoped>
#home{
    height: 100vh;
}
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
.scroll-content{
    margin-top: 44px;
    height: calc(100% - 84px);
    overflow: hidden;
}

</style>
