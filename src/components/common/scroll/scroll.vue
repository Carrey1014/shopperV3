<template>
   <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div> 
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name: 'scroll',
    data(){
        return {
            BS: null,
        }
    },
    mounted(){
        this.BS = new BScroll(this.$refs.wrapper, {
            probeType: 3,
            pullUpLoad: true,
        })
    }
}
</script>

<style>

</style>