<!-- 推荐歌单 -->
<template>
    <div >
        <div class="w-[20vw] flex justify-center ">
            <img :src=$attrs.son.iconUrl class="red-image w-[20vw] h-[21vw]">
        </div>
        <span class="text-[#636972] text-[3vw]">{{this.$attrs.son.name}}</span>
    </div>
</template>
<script>
    export default {
        // data(){
        //     return{
                
        //     }
        // },
        mounted(){
            // console.log(this.$attrs.son)
        }
    }
</script>
<style scoped>
.red-image {
    filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='colorize'><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter></svg>#colorize");
  }
</style>
