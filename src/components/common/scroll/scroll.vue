<template>
   <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div> 
</template>

<script>
import BScroll from 'better-scroll';

export default {
    name: 'scroll',
    data(){
        return {
            BS: null,
        }
    },
    props:{
        probeType: {
            type: Number,
            default: 0
        },
        pullUpLoad:{
            type: Boolean,
            default: false,
        }
    },
    mounted(){
        // 1. 创建BScroll对象
        this.BS = new BScroll(this.$refs.wrapper, {
            click: true,
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad,
        });
        // 2. 调用BS.scrollTo()方法，使得初始滚动在最上面
        this.BS.scrollTo(0,0);

        // 3. 启动滚动监听
        this.BS.on('scroll', pos => {
            this.$emit('scrollPos', pos);
        });

        console.log(this.BS);

        // 4. 监听上拉加载更多
        // this.BS.on('pullingUp', () => {
        //     console.log("上拉加载更多");
        //     this.$emit('moreData');
        // })
    },
    methods:{
        scrollback(x, y, time = 500){
            this.BS.scrollTo(x, y, time);
        },
        refresh(){
            this.BS.refresh();
        }
    }
}
</script>

<style scoped>

</style>
