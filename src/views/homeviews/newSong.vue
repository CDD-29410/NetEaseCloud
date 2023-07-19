<!-- 新歌速递（新歌新碟）newSong -->
<template>
    <div>
        <img :src="son.uiElement.image.imageUrl" class="w-[14vw] h-[13vw]" />
        <div class="flex flex-col justify-between w-[60vw] h-[13vw]">
          <p class="font-semibold h-[6vw] overflow-hidden text-[4vw] leading-[6vw]">
            {{ son.uiElement.mainTitle.title }}
          </p>
          <div class="h-[6vw] overflow-hidden leading-[6vw] text-[#7B7E87]">
            <span class="text-[3vw]">{{ son.uiElement.subTitle.title}}</span>
            <span class="text-[3vw] ml-[2vw]">-</span>
            <span class="text-[3vw]" v-for="names in son.resourceExtInfo.artists" :key="names.id">{{names.name}}</span>
          </div>
        </div>
    </div>
</template>
<script>
    export default{
        props:{
            son:{
                type:Object,
                required:true
            }
        },
        mounted(){
            // console.log(this)
        }

    }
</script>
<style>
</style>