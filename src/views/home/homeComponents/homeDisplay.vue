<template>
   <div class="homeDisplay">
       <div v-for = "(item, index) in recommends" :key="index" class="item">
           <a :href="item.link">
               <img :src="item.image">
               <div>{{item.title}}</div>
           </a>
       </div>
   </div>
</template>

<script>
export default {
    name: 'homeDispaly',
    props: {
        recommends:{
            type: Array,
            default: []
        }
    }
}
</script>

<style  scoped>
.homeDisplay{
    display: flex;
    justify-content: space-evenly;
    padding: 10px 0px 20px;
    margin-bottom: 5px;
}
.homeDisplay .item{
    flex: 1;
    text-align: center;
    font-size: 14px;
    text-decoration: none;
}
.homeDisplay .item img{
    width: 75px;
    height: 75px;
    margin-bottom: 5px;
}


</style>