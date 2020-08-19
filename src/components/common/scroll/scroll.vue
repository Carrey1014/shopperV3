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
        }
    },
    mounted(){
        // 1. 创建BScroll对象
        this.BS = new BScroll(this.$refs.wrapper, {
            probeType: this.probeType,
            pullUpLoad: true,
        });
        // 2. 调用BS.scrollTo()方法，使得初始滚动在最上面
        this.BS.scrollTo(0,0);

        // 3. 启动滚动监听
        this.BS.on('scroll', pos => {
            this.$emit('scrollPos', pos);
        })
    },
    methods:{
        scrollback(x, y, time = 500){
            this.BS.scrollTo(x, y, time);
        },
    }
}
</script>

<style scoped>

</style>