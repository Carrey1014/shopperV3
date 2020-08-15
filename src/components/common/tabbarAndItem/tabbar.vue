<template>
    <div id="box">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'tabbar'
}
</script>

<style>
#box {
  display: flex;
  justify-content: space-around;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: rgb(242, 247, 248);
}
</style>