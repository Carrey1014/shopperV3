<template>
    <div class="navbar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'navbar'
}
</script>

<style>
.navbar{
    display: flex;
    height: 44px;
    line-height: 44px;
    box-shadow: 0px 3px 3px rgb(210, 182, 228);
}
.left, .right{
    width: 60px;
    text-align: center;
}
.center{
    text-align: center;
    flex: 1;
}
</style>