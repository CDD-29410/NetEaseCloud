<template>
  <div class="p-[3vw]   bg-gradient-to-r from-violet-100 to-fuchsia-100 relative">
    <!-- :key="item.id"清除红线 -->
    <!-- 搜索栏 -->
    <div class="flex  relative justify-between items-center">
      <Icon icon="material-symbols:menu" width="8vw" height="8vw" class=""/>
      <input type="text" class="border-2 border-solid border-red-500 w-[80vw] h-[8vw] rounded-[3vw] pl-[10vw] bg-gradient-to-r from-[#ccccdb] to-[#F0DFEC]" placeholder="健将 最近很火哦" >
      <Icon icon="ph:microphone-light" width="8vw" height="8vw" />
      <Icon icon="circum:search" width="5vw" height="5vw" class=" absolute left-[12vw]"/>
      <Icon icon="tabler:scan" width="5vw" height="5vw"  class=" absolute right-[12vw] "/>
    </div>
    
    <!-- banner -->
    <div class="swiper-container1 overflow-hidden h-[39vw] mt-[5vw]">
      <div class="swiper-wrapper">
        <!-- 这里添加轮播的每个项 -->
        <div class="swiper-slide" v-for='item in banners' :key='item.id'>
          <img :src=item.pic alt=''>
        </div>
      </div >
    </div>
    <!-- 菜单 -->
    <div class="h-[18vw] overflow-hidden mt-[5vw]">
      <ul  class="flex items-center justify-between w-[200vw] ">
        <li class="flex flex-col items-center justify-between w-[20vw]" v-for='nav in menulist' :key="nav.id" >
          <div class="w-[10vw] h-[10vw]">
            <img :src=nav.iconUrl class="red-image ">
          </div>
          <span>{{nav.name}}</span>
        </li>
      </ul>
    </div>
    
    <!-- 推荐歌单 -->
    <div class="mt-[5vw]">
      <div class="flex justify-between items-center text-2xl my-[5vw] font-extrabold">
        <p class="flex justify-between items-center text-2xl">推荐歌单<Icon icon="icon-park:right" width="5vw" height="5vw" />
        </p> 
        <Icon icon="ant-design:more-outlined" width="5vw" height="5vw" />
      </div>
      <div class="h-[45vw] mt-[2vw] overflow-hidden">
          <ul class="w-[200vw] flex justify-between  overflow-hidden"> 
            <li class="w-[32vw] h-[43vw] " v-for="RecommendedSong in RecommendedPlaylists.slice(0, 5)" :key="RecommendedSong.id">
              <img :src=RecommendedSong.picUrl  class="w-[32vw] h-[32vw]">
              <span>{{RecommendedSong.name}}</span>
            </li>
          </ul>
      </div>

    </div> 

    <!-- 新歌速递（新歌新碟） -->
    <div class="mt-[5vw] swiper-container2 overflow-hidden" >
      <div class="flex justify-between items-center text-2xl font-extrabold my-[5vw]">
        <p class="flex justify-between items-center text-2xl">新歌速递<Icon icon="icon-park:right" width="5vw" height="5vw" /></p>
        <Icon icon="ant-design:more-outlined" width="5vw" height="5vw" />
      </div>
      <div class="flex swiper-wrapper h-[50vw]">
        <ul class="swiper-slide " v-for="newSong1 in newSong" :key="newSong1.id">
          <li class="flex justify-between w-[80vw] h-[13vw] my-[3vw]" v-for="song in newSong1.resources" :key="song.id">
            <img :src=song.uiElement.image.imageUrl  class="w-[14vw] h-[13vw] ">
            <div class="flex flex-col justify-between w-[60vw] h-[13vw]">
              <p class=" font-semibold h-[6vw] overflow-hidden leading-[6vw]">{{song.uiElement.mainTitle.title}}</p>
              <div class=" h-[6vw] overflow-hidden leading-[6vw]">
                
                <!-- <span class="rounded-[1vw] border-[1px] border-solid border-red-500">{{111}}</span> -->
                <span>{{song.uiElement.subTitle.title}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div >
    </div >

    <!-- 排行榜 --> 
    <div class="swiper-container3 overflow-hidden  mt-[5vw]">
      <div class="flex justify-between items-center text-2xl my-[5vw] font-extrabold">
        <p class="flex justify-between items-center text-2xl">排行榜<Icon icon="icon-park:right" width="5vw" height="5vw" /></p>
        <Icon icon="ant-design:more-outlined" width="5vw" height="5vw" />
      </div>
      <div class="swiper-wrapper flex flex-row ">
        <div class="swiper-slide  border-[1px] border-solid border-[#000] rounded-[2vw]" v-for="detail1 in detail" :key="detail1.id">
          <div class="w-[90vw] px-[3vw] " >
            <div class="flex justify-between items-center h-[10vw] ">
              <p class="text-[4vw] font-extrabold">{{detail1.uiElement.mainTitle.title}} ></p> 
              <span class="text-[#ccc]">{{detail1.uiElement.mainTitle.titleDesc}}</span> 
            </div>
            <ul>
              <li class="flex justify-between items-center mb-[2vw]" v-for="resources1 in detail1.resources" :key="resources1.id">
                <img :src=resources1.uiElement.image.imageUrl alt="" class="w-[11vw] h-[11vw]">
                <p class="w-[4vw] text-center text-red-400">{{detail1.resources.indexOf(resources1)+1}}</p>
                <div class="flex flex-col justify-between w-[55vw] h-[11vw] ">
                  <p class="h-[6vw] overflow-hidden">{{resources1.uiElement.mainTitle.title}}</p>
                  <p>{{resources1.resourceExtInfo?.songData.artists[0].name}}</p>
                </div>
                <div class="text-[green]">{{resources1.uiElement.labelText.text}} </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 热门话题 -->
    <div>
      <div class="flex justify-between items-center text-2xl my-[5vw] font-extrabold">
        <p class="flex justify-between items-center text-2xl">热门话题<Icon icon="icon-park:right" width="5vw" height="5vw" /></p>
        <Icon icon="ant-design:more-outlined" width="5vw" height="5vw" />
      </div>
      <div class="bg-[#949996] w-[60vw] h-[30vw] rounded-[2vw] px-[3vw] flex flex-col justify-evenly">
          <div class="flex text-[#fff] items-center">
            <Icon icon="icon-park-solid:topic" width="5vw" height="5vw" />
            <span> 最令你感动的那首情歌</span> 
          </div>
          <span class="text-[2vw] text-[#ccc]">484万热度</span>
          <div class=" overflow-hidden h-[15vw] flex items-end justify-between " >
            <div class="text-[3vw] w-[40vw] h-[10vw] text-[#fff]">Saint-Denis:今日份的感动  “我希望我们两个之间的爱</div>
            <img src="" alt="" class="h-[15vw] w-[15vw]" >
          </div>
      </div>
    </div>

    <!-- 音乐日历 -->
    <div class="mb-[20vw]">
      <div class="flex justify-between items-center text-2xl my-[5vw] font-extrabold">
        <p class="flex justify-between items-center text-2xl">音乐日历 
          <span class="text-[2vw] bg-[#ccc] flex justify-between items-center pl-[1vw] ml-[1vw] rounded-[2vw]">今日2条<Icon icon="icon-park:right" width="5vw" height="5vw" /></span></p>
        <Icon icon="ant-design:more-outlined" width="5vw" height="5vw" />
      </div>
      <div>
        <ul class="">
          <li class="flex justify-between w-[90vw] mb-[2vw]" v-for="Calendar1 in Calendar" :key="Calendar1.id">
            <div class="flex flex-col  w-[60vw] text-[2vw]">
              <span class="text-[red]">{{Calendar1.tag}}</span>
              <p class="text-[3vw] text-[800]]">{{Calendar1.title}}</p>
            </div>
            <div class="w-[5vw]"></div>
            <img :src=Calendar1.imgUrl alt="" class="w-[15vw] h-[15vw]">
          </li>
        </ul>
      </div>
    </div>
    <!-- 底部 -->
    <!-- <div  class=" fixed bg-[blue] w-[100vw] h-[15vw] bottom-0 left-0 z-50">
      <div></div>
      <ul>
        <li class="flex flex-col items-center">

        </li>
      </ul>
    </div> -->
  </div>
</template>
<script>
    import axios from "axios";
    import Swiper from 'swiper';
    import 'swiper/swiper-bundle.css';
    
    export default{
      data() {
        return {
          disableOnInteraction: true,
          defaultSearch:[],//推荐搜索
          menu:[],
          playlists: [],
          activeMenuItem: '',
          banners: [],//轮播
          menulist:[],//菜单
          RecommendedPlaylists:[],//推荐歌单
          newSong:[],//新歌
          detail:[],//排行榜
          ranking: [],//排行榜
          Calendar:[],
        };
      },
      mounted() {
        new Swiper('.swiper-container1', {
          autoplay: {
            delay: 3000, // 自动播放的延迟时间，单位为毫秒
            disableOnInteraction: false // 用户交互时是否停止自动播放，默认为true
          },
        })
        new Swiper('.swiper-container2', {
          autoplay: {
            delay: 3000, // 自动播放的延迟时间，单位为毫秒
            disableOnInteraction: false // 用户交互时是否停止自动播放，默认为true
          },
        })
        new Swiper('.swiper-container3', {
          autoplay: {
            delay: 3000, // 自动播放的延迟时间，单位为毫秒
            disableOnInteraction: false // 用户交互时是否停止自动播放，默认为true
          },
        })
      },
      methods:{
        toggleMenu(name){
          this.activeMenuItem=name
          this.fetchPlaylists(name);
        },
        fetchPlaylists(cat) {
          axios.get("https://netease-cloud-music-api-five-roan-88.vercel.app/top/playlist",
          {params:{cat:cat}})
          .then(res =>{
            this.playlists = res.data.playlists
          })
        }
      },

      created(){
        axios
        .get("https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/hot")
        .then((res)=>{
            this.menu = res.data.tags;
            return (this.activeMenuItem =this.menu[0].name)
        })
        .then((cat)=>{this.fetchPlaylists(cat)})
        .catch((err)=>console.log(err));
        // banner
        axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page')
        .then(res => {
          this.banners = res.data.data.blocks[0].extInfo.banners
        })
        .then((cat) => this.fetchPlaylists(cat))
        .catch(err => {
          console.log(err)
        });
        // 菜单
        axios
        .get(
          'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/dragon/ball'
        )
        .then((res) => {
          this.menulist = res.data.data
        })
        .catch((err) => {
          console.log(err);
        });
        // 推荐歌单
        axios
        .get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/personalized')
        .then((res) => {
          this.RecommendedPlaylists = res.data.result;
        })
        .catch((err) => {
          console.log(err); 
        });

      // 新歌速递
        axios
        .get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page')
        .then((res) => {
          this.newSong =res.data.data.blocks[5].creatives;
          // console.log(this.newSong);
        })
        .catch((err) => {
          console.log(err); 
        })
         // 排行榜
        axios
        .get(
          'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page'
        )
        .then((res) => {
          this.detail = res.data.data.blocks[3].creatives;
          // console.log(this.detail);
        })
        .catch((err) => {
          console.log(err);
        });

        //日历
        axios
        .get(
          'https://netease-cloud-music-api-five-roan-88.vercel.app/calendar?startTime=1677417600000&endTime=1677417600000'
        )
        .then((res) => {
          this.Calendar = res.data.data.calendarEvents;
          console.log(this.Calendar);
        })
        .catch((err) => {
          console.log(err);
        });
      },
    }
</script>

<style>
/* body{
  overflow-x: hidden;
} */
.active{
   color: red;
    border-bottom: 1vw solid red;
 } 
    .red-image {
    filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='colorize'><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter></svg>#colorize");
  }
</style>