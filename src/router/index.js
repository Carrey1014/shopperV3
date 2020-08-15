import Vue from 'vue'
import VueRouter from 'vue-router'
const home = () => import('@/views/home/home')
const classify = () => import('@/views/classify/classify')
const shop = () => import('@/views/shop/shop')
const profile = () => import('@/views/profile/profile')

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home,
        meta:{
            title: '首页'
        }
    },
    {
        path: '/classify',
        component: classify,
        meta:{
            title: '分类'
        }
    },
    {
        path: '/shop',
        component: shop,
        meta:{
            title: '购物车'
        }
    },
    {
        path: '/profile',
        component: profile,
        meta:{
            title: '我的'
        }
    }
];

const router = new VueRouter({
    routes,
    mode: 'history',
})

router.beforeEach(function(to, from, next){
    document.title = to.meta.title;
    next();
})

export default router