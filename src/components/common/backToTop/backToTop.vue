<template>
    <div id="box-backToTop">
        <img src="@/assets/img/backToTop/backToTop.png" alt="返回顶部">
    </div>
</template>

<script>
export default {
    name: 'backToTop',
}
</script>

<style scoped>
#box-backToTop{
    position: fixed;
    right: 25px; bottom: 75px;
    /* border: solid black 1px; */
}
#box-backToTop img{
    width: 40px;
    height: 40px;
}
</style>
