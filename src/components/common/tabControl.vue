<template>
    <div id="tab-control">
        <div v-for = "(item, index) in titles" :key="index" :class="{active: index === isActive}" @click="chosed(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'tabControl',
    data(){
        return {
            isActive: 0
        }
    },
    props: {
        titles:{
            type: Array,
            default: ["占位码", "占位码", "占位码"]
        }
    },
    methods:{
        chosed(index){
            this.isActive = index;
        }
    }
}
</script>

<style>
#tab-control{
    display: flex;
    justify-content: space-around;
    line-height: 20px;
    font-weight: bold;
    background-color: #fff;
}
#tab-control span{
    line-height: 35px;
    padding: 5px 10px;
}

.active{
    color: rgb(233, 76, 154);
}
.active span{
    border-bottom: 3px solid rgb(226, 95, 187);
}

</style>