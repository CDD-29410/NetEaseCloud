

<template>
  <div class="p-[3vw] bg-gradient-to-b from-[#E2DFF3] to-[#fff] relative">
    <!-- <router-link to="/Search">go to SearchView</router-link> -->
    <!-- <div>
      <homeView />
     
    </div> -->
    <!-- <panel label="网易云"> 
          <h2 slot="h2">网易云2</h2>
          <h3 slot="h3">网易云3</h3>
    </panel> -->
    <!-- <v-switch/> -->

    <!-- 搜索栏 -->
    <div class="flex relative justify-between items-center">
      <div class="" @click="sidebarVisible = !sidebarVisible">
        <Icon icon="material-symbols:menu" width="8vw" height="8vw" />
      </div>
      <input type="text" @focus="search"
        class="border-2 border-solid border-red-500 w-[80vw] h-[8vw] text-[5vw] rounded-[3vw] pl-[10vw] bg-gradient-to-r from-[#ccccdb] to-[#F0DFEC]"
        placeholder="健将 最近很火哦" />
      <Icon icon="ph:microphone-light" width="8vw" height="8vw" />
      <Icon icon="circum:search" width="5vw" height="5vw" class="absolute left-[12vw]" />
      <Icon icon="tabler:scan" width="5vw" height="5vw" class="absolute right-[12vw]" />
    </div>

    <!--轮播 banner -->
    <van-swipe class="my-swipe h-[39vw] mt-[5vw]" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in banners" :key="item.id">
        <div>
          <img :src="item.pic" alt="" class="w-[94vw]  h-[39vw]" />
        </div>
      </van-swipe-item>
    </van-swipe>

    <!-- 菜单 menulist -->
    <div class="h-[30vw] overflow-hidden mt-[5vw]">
      <ul class="wrapper overflow-hidden" ref="wrapper1">
        <div class="flex items-center justify-between w-[200vw] relative">
          <menulistview v-for="nav in menulist" :son="nav" :key="nav.id"
            class="flex flex-col items-center  w-[20vw] h-[26vw]" />
          <p class="absolute text-[6vw] text-[#fff] left-[6.5vw] top-[7vw]">{{ currentDay }}</p>
        </div>
      </ul>
    </div>

    <!-- 推荐歌单 RecommendedPlaylists -->
    <div class="mt-[5vw]">
      <div class="flex justify-between items-center text-[4vw] my-[5vw] font-extrabold">
        <p class="flex justify-between items-center text-[4vw]">
          推荐歌单
          <Icon icon="icon-park:right" width="5vw" height="5vw" />
        </p>
        <div @click="visible = !visible">
          <Icon icon="ant-design:more-outlined" width="5vw" height="5vw" />
        </div>
      </div>
      <div class="h-[45vw] mt-[2vw] overflow-hidden">
        <div class="wrapper overflow-hidden" ref="wrapper2">
          <ul class="w-[200vw] flex justify-between">
            <li class="w-[32vw] h-[43vw] overflow-hidden relative">
              <van-swipe style="height: 32vw" vertical autoplay="3000" :touchable="false" :show-indicators="false">
                <van-swipe-item v-for="(key, index) in RecommendedPlaylists.slice(5, 10)" :key="index"
                  class="w-[32vw] h-[32vw]">
                  <img :src="key.picUrl" class="w-[32vw] h-[32vw]" />
                </van-swipe-item>
              </van-swipe>
              <Icon icon="carbon:edt-loop" color="#fff" width="6.5vw" height="6.5vw"
                class=" absolute top-[2vw] right-[2vw]" />
            </li>
            <RecommendedPlaylists v-for="(RecommendedSong, index) in RecommendedPlaylists.slice(0, 5)"
              :son="RecommendedSong" :key="index.id" class="w-[32vw] h-[43vw]" />
          </ul>
        </div>
      </div>
    </div>

    <!-- 新歌速递（新歌新碟）newSong -->
    <div class="mt-[5vw] swiper-container2 overflow-hidden border-t border-solid border-[#ccc]">
      <div class="flex justify-between items-center text-[4vw] font-extrabold my-[5vw]">
        <p class="flex justify-between items-center text-[4vw]">
          新歌速递
          <Icon icon="icon-park:right" width="5vw" height="5vw" />
        </p>
        <div @click="visible = !visible">
          <Icon icon="ant-design:more-outlined" width="5vw" height="5vw" />
        </div>
      </div>
      <van-swipe :loop="false" :show-indicators="false" class="
      flex swiper-wrapper h-[50vw] w-[90vw]">
        <van-swipe-item class="
        swiper-slide" v-for="newSong1 in newSong" :key="newSong1.id">
          <newSong class="flex justify-between w-[80vw] h-[13vw] my-[3vw]" v-for="song in newSong1.resources" :son="song"
            :key="song.id" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 排行榜 detail-->
    <div class="swiper-container3 overflow-hidden mt-[5vw] border-t border-solid border-[#ccc]">
      <div class="flex justify-between items-center text-[4vw] my-[5vw] font-extrabold">
        <p class="flex justify-between items-center text-[4vw]">
          排行榜
          <Icon icon="icon-park:right" width="5vw" height="5vw" />
        </p>
        <div @click="visible = !visible">
          <Icon icon="ant-design:more-outlined" width="5vw" height="5vw" />
        </div>
      </div>
      <van-swipe :loop="false" :show-indicators="false" class="
      swiper-wrapper flex flex-row">
        <van-swipe-item class="
        swiper-slide" v-for="detail1 in detail" :key="detail1.id">
          <div class="rounded-[5vw] bg-[#fff] mr-[3vw] shadow-md shadow-offset-x-2 shadow-offset-y-2 shadow-blur-4">
            <div class="w-[90vw] px-[3vw] pb-[3vw] ">
              <div class="flex justify-between items-center h-[10vw]">
                <p class="text-[4vw] font-extrabold">
                  {{ detail1.uiElement.mainTitle.title }} >
                </p>
                <span class="text-[#B1B2BA] text-[2.5vw]">{{
                  detail1.uiElement.mainTitle.titleDesc
                }}</span>
              </div>
              <ul>
                <li class="flex justify-between items-center mb-[2vw]" v-for=" ( resources1, index) in detail1.resources"
                  :key="index.id">
                  <img :src="resources1.uiElement.image.imageUrl" alt="" class="w-[11vw] h-[11vw]" />
                  <span class="w-[4vw] text-center text-[3vw] text-red-400">
                    {{ index + 1 }}
                  </span>
                  <div class="flex flex-col justify-center w-[55vw] h-[11vw]">
                    <p class="h-[6vw] overflow-hidden text-[3.6vw] leading-[]">
                      {{ resources1.uiElement.mainTitle.title }}
                    </p>
                    <p class=" text-[2.7vw] text-[#7A8086]">
                      <span v-for="names in resources1.resourceExtInfo?.songData.artists" :key="names.id">
                        {{ names.name + '/' }}
                      </span>
                    </p>
                  </div>
                  <div class="text-[green] w-[10vw] text-[2.2vw]">
                    {{ resources1.uiElement.labelText.text }}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 热门话题 HotTopic -->
    <div class="my-[5vw] overflow-hidden border-t border-solid border-[#ccc]">
      <div class="flex justify-between items-center text-[4vw] my-[5vw] font-extrabold">
        <p class="flex justify-between items-center text-[4vw]">
          热门话题
          <Icon icon="icon-park:right" width="5vw" height="5vw" />
        </p>
        <div @click="visible = !visible">
          <Icon icon="ant-design:more-outlined" width="5vw" height="5vw" />
        </div>
      </div>
      <div class="wrapper overflow-hidden" ref="wrapper3">
        <div class="flex justify-between w-[200vw]">
          <div class="bg-[#769334] w-[60vw] h-[30vw] rounded-[2vw] px-[3vw] flex flex-col justify-evenly mr-[10vw]"
            v-for="color1 in 3" :key="color1.id">
            <div class="flex text-[#fff] items-center">
              <Icon icon="icon-park-solid:topic" width="5vw" height="5vw" />
              <span class="text-[3vw]"> 最令你感动的那首情歌</span>
            </div>
            <span class="text-[2vw] text-[#ccc]">484万热度</span>
            <div class="overflow-hidden h-[15vw] flex items-end justify-between">
              <div class="text-[3vw] w-[40vw] h-[10vw] text-[#fff]">
                Saint-Denis:今日份的感动 “我希望我们两个之间的爱
              </div>
              <img
                src="https://th.bing.com/th?id=OIP.7KW5GT7NQ8yUGlBbCHEm0gHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                alt="" class="h-[15vw] w-[15vw]" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 音乐日历 Calendar-->
    <div class="my-[5vw] mb-[5vw] border-t border-solid border-[#ccc]">
      <div class="flex justify-between items-center text-[4vw] my-[5vw] font-extrabold">
        <p class="flex justify-between items-center text-[4vw] ">
          音乐日历
          <span class="text-[2vw] bg-[#ccc] flex justify-between items-center pl-[1vw] ml-[1vw] rounded-[2vw]">今日{{
            Calendar.length }}条
            <Icon icon="icon-park:right" width="5vw" height="5vw" />
          </span>
        </p>
        <div @click="visible = !visible">
          <Icon icon="ant-design:more-outlined" width="5vw" height="5vw" />
        </div>
      </div>
      <div>
        <ul class="shadow-xl p-[1vw] rounded-[2vw]">
          <li class="flex justify-between w-[90vw] mb-[2vw]" v-for="Calendar1 in Calendar" :key="Calendar1.id">
            <div class="flex flex-col w-[60vw] text-[2vw] p-[1vw]">
              <p>{{ currentMonthDay }}<span class="text-[red] ml-[2vw]">{{ Calendar1.tag }}</span></p>
              <p class="text-[3vw] text-[800]]">{{ Calendar1.title }}</p>
            </div>
            <div class="w-[5vw]"></div>
            <img :src="Calendar1.imgUrl" alt="" class="w-[15vw] h-[15vw]" />
          </li>
        </ul>
      </div>
    </div>

    <!-- 底部滑块 -->
    <drawer :visible.sync="visible" direction="btt"></drawer>
    <!-- <div @click="()=>{this.$router.push('/PlaylistView')}">  -->
    <Sidebar :visible.sync="sidebarVisible" direction="ltr"></Sidebar>
    <!-- </div> -->
  </div>
</template>
<script>
import Vue from 'vue';
import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import BScroll from '@better-scroll/core';


import {
  homepageBlockPage,
  homepageDragonBall,
  personalized,
  startTime,
} from '@/request/index.js';

import homeView from './homeView.vue';
import menulistview from './homeviews/menulistview.vue';
import RecommendedPlaylists from './homeviews/RecommendedPlaylists.vue';
import Panel from './homeviews/Panel.vue';
import newSong from './homeviews/newSong.vue';

// import Switch from '@/components/Switch.vue';
// Vue.component('v-switch', Switch )

import Drawer from '@/components/Drawer/Drawer.vue';
import Sidebar from '@/components/Sidebar.vue';
Vue.component('Drawer', Drawer)
Vue.component('Sidebar', Sidebar)


import { getUserAccount, getUserDetail ,getUserPlaylist } from '@/request';
export default {
  // 内置组件 components  
  components: { homeView: homeView, menulistview, RecommendedPlaylists, Panel, newSong, Drawer },
  data() {
    return {
      disableOnInteraction: true,
      defaultSearch: [], //推荐搜索
      menu: [],
      playlists: [],
      activeMenuItem: '',
      banners: [], //轮播
      menulist: [], //菜单
      RecommendedPlaylists: [], //推荐歌单
      newSong: [], //新歌
      detail: [], //排行榜
      ranking: [], //排行榜
      Calendar: [], //日历
      visible: false, //显示隐藏
      sidebarVisible: false,//侧边栏
      currentDay: '',//日期
      currentMonthDay: '',
      id: '',

    };
  },
  mounted() {
    this.getCurrentDay();
    this.getCurrentMonthDay();
    new BScroll(this.$refs.wrapper1, {
      scrollX: true,
      scrollY: false,
      click: true
    });
    new BScroll(this.$refs.wrapper2, {
      scrollX: true,
      scrollY: false,
      click: true
    });
    new BScroll(this.$refs.wrapper3, {
      scrollX: true,
      scrollY: false,
      click: true
    });
  },
  methods: {
    getCurrentDay() {
      const currentDate = new Date();
      const day = currentDate.getDate();
      this.currentDay = day;
    },
    getCurrentMonthDay() {
      const currentDate = new Date();
      const month = currentDate.getMonth() + 1; // 月份从0开始计数，所以需要加1
      const day = currentDate.getDate();
      this.currentMonthDay = month + '月' + day + '日';
    },
    search() {
      this.$router.push('/search')
    },

  },
  async created() {
    // 账号信息
    const res = await getUserAccount();
    // 用户详情
    const detail = await getUserDetail(res.data.profile.userId);
    // 用户歌单 
    const UserPlaylist = await getUserPlaylist(res.data.profile.userId)
    this.UserPlaylists=UserPlaylist
    console.log(this.UserPlaylists);



    // this.changeID()
    const res1 = await homepageBlockPage();
    this.banners = res1.data.data.blocks[0].extInfo.banners;

    // 菜单
    const res2 = await homepageDragonBall();
    this.menulist = res2.data.data;

    // 推荐歌单
    const res3 = await personalized();
    this.RecommendedPlaylists = res3.data.result;
    // console.log(this.RecommendedPlaylists)

    // 新歌速递;
    const res4 = await homepageBlockPage();
    console.log(res4.data.data);
    this.newSong = res4.data.data.blocks[5]?.creatives;


    //排行榜
    const res5 = await homepageBlockPage();
    this.detail = res5.data.data.blocks[3].creatives;
    // console.log(this.detail)

    //日历
    const res6 = await startTime();
    this.Calendar = res6.data.data.calendarEvents;
  },
};

</script>

<style scoped>body {
  overflow-x: hidden;
}</style>