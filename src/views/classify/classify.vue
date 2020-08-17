<template>
    <div>
       <h2>这是分类页</h2> 
       <div class="wrapper">
           <div class="content">
               <div v-for = "item in 100">列表信息{{item}}</div>
           </div>
           
       </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'classify',
    data(){
        return {
            BS: null,
        }
    },
    mounted(){
        this.BS = new BScroll(document.querySelector('.wrapper'), {
            // 启动时刻监听滚动位置
            probeType: 3,
            pullUpLoad: true,
            click: true
        });
    }
}
</script>

<style>
.wrapper{
    /* height: calc */
    background-color: brown;
    overflow: hidden;
}

</style>