<template>
    <div id="item" @click="shiftPage()">
        <div v-if="!isActive">
            <slot name="ico"></slot>
        </div>
        <div v-else>
            <slot name = "ico-active"></slot>
        </div>
        <div :style = "activeStyle" class="active">
            <slot name="txt"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'tabbarItem',
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1;
        },
        activeStyle(){
            return this.isActive ? {color: this.activeColor} : {};
        }
    },
    props:{
        path: String,
        activeColor:{
            type: String,
            default: 'blue'
        }
    },
    methods:{
        shiftPage(){
            this.$router.push(this.path);
        }
    }
}
</script>

<style>
#item{
    text-align: center;

}
#item img{
    width: 24px;
    height: 24px;
}
.active{
    font-size: 16px;
    font-weight: bold;
}
</style>