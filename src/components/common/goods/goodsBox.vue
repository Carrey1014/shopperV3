<template>
    <div id="goodsBox">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'goodsBox',
    // props: {
    //     cssColor:{
    //         type: String
    //     }
    // }
}
</script>

<style  scoped>
#goodsBox{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content:space-evenly;
}
</style>