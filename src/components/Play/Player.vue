<template>
  <div class="">
    <div 
      class="z-[999] h-[14vw] w-[100vw] pb-[2.5vw] flex justify-between items-center fixed bottom-0 bg-[#FBFEFE] border-t">
      <div class="w-[10vw] h-[10vw] ml-[4vw] relative" @click="BroadcastHall">
        <img :src="player._currentTrack?.al?.picUrl" alt="" class="w-[8vw] rounded-[50%] absolute top-[1vw] left-[1vw]"  />
        <img src="/static/play1.png" alt="" class="w-[10vw] rounded-[50%] absolute" />
      </div>
      <!-- 通知栏 -->
      <div>
        <van-notice-bar background="transparent"  :scrollable="Scrollable" @click="BroadcastHall"
          class="text-[3.5vw] text-[#7E8289] font-[600] h-[4vw] w-[60vw]">
          <span class="text-[#000]" v-for="key1 in player._currentTrack?.ar" :key="key1.id">
            {{ key1?.name }}
          </span>
          <span>-</span>
          <span>{{ player._currentTrack?.name }}</span>
        </van-notice-bar>
      </div>
      <div class="flex justify-between">
        <div @click="Condition" class=" relative">
          <!-- 播放 -->
          <Icon v-if="condition" icon="teenyicons:play-small-solid" width="6vw" height="6vw"/>
          <!-- 暂停 -->
          <Icon v-else icon="teenyicons:pause-small-solid" width="6vw" height="6vw" />
          <!-- 环形进度条 -->
          <van-circle v-model="currentRatePlay" :rate="currentProgress" :speed="100"   size="6vw" class=" absolute top-0 " color="#000" layer-color="#ccc" />
        </div>
        <Icon @click.native="Show" icon="iconamoon:playlist" width="6vw" height="6vw" class="mr-[2.2vw] ml-[5vw]" />
      </div>
    </div>
    <!-- 歌单表 -->
    <van-popup round v-model="show" position="bottom" :style="{ height: '130vw ' }"
      class="fixed bottom-0 bg-[#FBFEFE] border-t">
      <div class="fixed w-[100vw] p-[4vw] border-b bg-[#fff] rounded-t-[4vw] z-[999]">
        <div class="flex items-end">
          <span class="text-[4vw] font-[600]">当前播放</span><span class="text-[3vw] text-[#999]">{{"(" + player.list?.length +")"}}</span>
        </div>
        <div class="flex items-center justify-between text-[4vw] mt-[5vw] text-[#999999]">
          <p class="flex items-center">
            <Icon class="mr-[1.5vw]" icon="icon-park-outline:loop-once" />
            <span class="text-[#000]">列表循环</span>
          </p>
          <p class="flex items-center">
            <Icon icon="line-md:downloading-loop" class="mr-[5vw]" />
            <Icon icon="solar:calendar-add-bold" class="mr-[5vw]" />
            <Icon icon="mingcute:delete-2-line" />
          </p>
        </div>
      </div>
      <div class="px-[4vw] mt-[25vw]">
        <ul class="h-[107vw]">
          <li class="h-[11vw] flex justify-between items-center" v-for="(key2,index) in songs" :key="index.id"
            @click="BroadcastHall ,fn(index)"> 
            <div class="flex items-center">
              <img src="/static/wave.gif" alt="" class="red-image h-[4vw]" />
              <p class="flex items-center truncate w-[60vw]">
                <span class="text-[4vw] ml-[3vw]">{{ key2.name }}</span>
                <span class="text-[3.2vw] self-end text-[#999] " v-for="(key3,index) in key2.ar" :key="index">·{{key3.name}}</span>
              </p>
            </div>
            <div class="flex items-center">
              <span class="px-[1.5vw] rounded-[3vw] border-[#EFEFEF] border-[.2vw] text-[3.2vw] mr-[5vw]">来源</span>
              <Icon icon="cil:x" class="text-[3.5vw] text-[#999]" />
            </div>
          </li>
        </ul>
      </div>
    </van-popup>

    <!-- 播放厅 -->
    <van-popup v-model="broadcastHall" position="bottom" :style="{ height: '100%' }"
      class="fixed bottom-0 bg-[#81541A] border-t p-[4vw] ">
      <!-- top -->
      <div class="h-[15vw] text-[7vw] flex items-center justify-between">
        <Icon icon="ps:down" color="white" @click.native="BroadcastHall" />
        <div class="flex flex-col items-center justify-evenly ">
          <van-notice-bar scrollable background="transparent"  class="text-[4.7vw] text-[#fff] w-[60vw] "  >{{this.player._currentTrack?.name}}</van-notice-bar>
          <p class="text-[4vw] text-[#D5BE9A]">
            <span v-for="key1 in player._currentTrack?.ar" :key="key1.id">
              {{ key1?.name }}
            </span>
        <van-tag round color=[#95764D] >关注</van-tag></p>
        </div>
        <Icon icon="carbon:share" color="white" />
      </div>
      <!-- 唱片 -->
      <div class=" flex flex-col items-center relative">
        <img src="/static/needle-ab.png" alt="" class="h-[40vw] absolute top-[5vw] left-[44vw]  transform  origin-[14.74%_14.74%]  z-[999]" :style="{transform:transformDeg}">
        <div class="h-[75vw] w-[75vw] mt-[30vw] flex flex-col items-center relative " :style="{transform:isRevolve}">
          <img src="/static/play1.png" alt="" class="h-[75vw] rounded-[50%]  "  />
          <img :src="player._currentTrack?.al?.picUrl" alt="" class="h-[55vw]  w-[55vw] rounded-[50%] absolute top-10" />
        </div>
      </div>
      <!-- 底部 -->
      <div class=" mt-[35vw] w-[92vw] ">
        <!-- 功能类 -->
        <div class="h-[10vw] text-[6.5vw] flex items-center justify-around">
          <Icon icon="mdi:heart-outline" color="white" />
          <Icon icon="line-md:downloading-loop" color="white" /> 
          <span class="px-[1vw] border-[.6vw] rounded-[50%] text-[3vw] text-[#fff]">唱</span>
          <Icon icon="uil:comment-lines" color="white" />
          <Icon icon="ri:more-2-fill" color="white" />
        </div>
        <!-- 进度条 -->
        <div class="flex items-center mt-[8vw] text-[#D8B08E] text-[2vw] ">
          <span class="mr-[2vw]">{{(Math.floor(player._progress/60)<10?('0'+Math.floor(player._progress/60)):Math.floor(player._progress/60))
          +':'+(Math.floor(player._progress%60)<10?('0'+Math.floor(player._progress%60)):Math.floor(player._progress%60))}}</span>
          <vue-slider :tooltip="'none'" v-model="valueNum" width="72vw" class="mx-[2vw]"></vue-slider>
          <span class="ml-[2vw]">{{(Math.floor(player._duration/60)<10?('0'+Math.floor(player._duration/60)):Math.floor(player._duration/60))
          +':'+(Math.floor(player._duration%60)<10?('0'+Math.floor(player._duration%60)):Math.floor(player._duration%60))}}</span>
        </div>
         
        <!-- 播放键 -->
        <div class="h-[15vw] text-[6.5vw] flex items-center justify-around my-[7vw] ">
          <!-- 循环 -->
          <Icon class="mr-[1.5vw]" icon="icon-park-outline:loop-once" color="white"  /> 
          <!-- 上一首 -->
          <Icon icon="fluent:previous-16-filled" color="white" />
          <div @click="Condition">
            <!-- 播放 -->
            <Icon v-if="condition" icon="teenyicons:play-small-solid" 
              class="bg-[#fff] rounded-[50%] text-[13vw]" />
            <!-- 暂停 -->
            <Icon v-else icon="teenyicons:pause-small-solid"  class="bg-[#fff] rounded-[50%] text-[13vw]" />
          </div>
          <!-- 下一首 -->
          <Icon icon="fluent:next-16-filled" color="white" />
          <!-- 歌单 -->
          <Icon @click.native="Show" icon="iconamoon:playlist" color="white"  />
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
import { set } from 'vue';
import Player from './Player' ; 
import axios from 'axios';
export default {  
  components:{
    
  },
  data() {
    return {
      player: new Player(),
      currentRate: 0,
      play: false,
      condition: true, //播放暂停
      show: false, //展示歌单表
      Scrollable: false, //文字滑块
      broadcastHall: false,//播放厅
      valueNum:0,
      currentRatePlay: 0,//当前进度
      currentProgress: '',//目标进度
      transformDeg:'',
      single:'',
      isRevolve:0,//旋转多少deg
      num:0,
      t1:null,
      t2:null,
      songs:[],
    };
  },
  methods: {
    //
    Condition() {
      this.condition = !this.condition;
      this.Scrollable = !this.Scrollable;
      if(this.condition){
        this.transformDeg='rotate(-30deg)'
      }else{
        this.transformDeg='rotate(0deg)'
      }
      window.$player.playOrPause();
    },
    //歌单表显示隐藏
    Show() {
      this.show = !this.show;
    },
    //
    BroadcastHall() {
      this.broadcastHall = !this.broadcastHall
      this.show = false;
    },

    //歌单点击播放
    fn(index){
      this.single=this.player.list[index]
      window.$player.replacePlaylist(
        '',
        '',
        '',
        this.single
      )
    }
  },
  async created() {
    window.$player = this.player;   
    this.id = this.$route.params.id;
  },
  watch:{
    "player._playing"(newVal) {
      if (newVal) {
        this.t1 = setInterval(()=> {
          this.num+=1;
          this.num>360?this.num=0:this.num
          this.isRevolve=`rotate(${this.num}deg)`
        }, 100);

        this.t2 =this.condition=false;
        setInterval(()=> {
          this.currentProgress = (window.$player._progress / window.$player._duration).toFixed(2) * 100;
        }, 1000);
      }else{
        clearInterval(this.t1); 
        clearInterval(this.t2);
      }

      axios
      .get(
          `https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/track/all?id=${this.id}`
      )
      .then((res) => {
          this.songs = res.data.songs
          console.log(this.songs)
      })
      .catch((err) => {
          console.log(err);
      });
    },

    'player._currentTrack.id'(newSong){
      if(newSong){
        this.num=0
      }
    },
    'player._progress'(){  
      this.valueNum= Math.round(($player._progress/$player._duration)*100)
    }
    
  },
}
</script>
<style scoped>
.red-image {
  filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='colorize'><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter></svg>#colorize");
}
</style>