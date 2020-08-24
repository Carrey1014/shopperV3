<template>
    <div id="goodsItem">
        <div class="link">
            <img :src="imgLink" :alt="imgLink" @load = "imgloaded()">
        </div>
        <div class="title">
            {{imgTitle}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'goodsItem',
    props: {
        imgLink: String,
        imgTitle: String,
    },
    methods:{
        imgloaded(){
            this.$bus.$emit("imgloaded");
        }
    }
}
</script>

<style  scoped>
#goodsItem{
    text-align: center;
    width: 180px;
    margin-top: 20px;
    /* border: black solid 1px */
}
#goodsItem .link img{
    width: 100% - 10px;
    border-radius: 5%;
}
#goodsItem .title{
    margin: 10px 0px;
    display: inline-block;
    width: 140px;
    text-align: center;
    /* border: black solid 1px */
}

</style>