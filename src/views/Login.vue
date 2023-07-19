<template>
  <div class="flex flex-col items-center justify-between h-[100vh]
  bg-gradient-to-b from-[#fff] to-[#FCFCFE]
   ">
    <div class="flex flex-col items-center justify-between p-[5vw]">
      <div class="flex items-center justify-between w-[90vw]">
        <Icon
          icon="teenyicons:left-outline"
          width="5.6vw"
          height="5.6vw"
          @click.native="home"
        />
        <span class="text-[4vw] text-[#838383]">游客登录</span>
      </div>
      <img
        src="/static/logo.fill.svg"
        alt=""
        class="w-[38vw] h-[7.2vw] mt-[15vw]"
      />
      <div
        class="mt-[9vw] text-center relative"
        :style="{ display: ifScan ? 'none' : 'block' }"
      >
        <img
          :src="qrcode"
          alt=""
          class="w-[39.2vw]"
          :style="{ opacity: lapse ? '0.1' : '1' }"
        />
        <div
          class="bg-[red] w-[20vw] h-[5vw] leading-[5vw] rounded-[5vw] absolute top-[19vw] left-[9vw]"
          :style="{ display: lapse ? 'block' : 'none' }"
        >
          <span class="text-[#fff] text-[] text-[3vw]">点击刷新</span>
        </div>
      </div>
      <div
        class="flex flex-col items-center"
        :style="{ display: ifScan ? 'flex' : 'none' }"
      >
        <img src="/static/login1.png" alt="" class="w-[39.2vw]" />
        <span class="text-[4.5vw] mt-[4vw] font-[700]">扫描成功</span>
        <span class="mt-[6vw] text-[3.5vw] font-[600]">请在手机上确认登录</span>
      </div>
      <div class="text-[3vw] mt-[11vw]"
      :style="{ display: ifScan ? 'none' : 'block' }">
      
        使用<span class="text-[#3F8BC6] mx-[1.5vw]">网易云音乐APP</span>扫码登录
      </div>
    </div>
    <img src="/static/login.png" alt="" class="mt-[20vw]" />
    <!-- <h1 class=" bg-red-400">{{ $store.state.count }}</h1>
    <h1 class=" bg-red-400">{{ count }}</h1>
    <h1 class=" bg-red-400">{{ list }}</h1> -->
  </div>
</template>
<script>
import { getQrKey, getQrInfo, checkQrStatus } from '@/request';
import store from 'storejs';
import { List } from 'vant';

import {mapState} from '@/vuex/_index';

export default {
  name: 'Login',
  computed:{
    // ...mapState(['count','list','a:12']),
    // return : {
    //   a : 3
    // } 
  },
  data() {
    return {
      qrcode: '',
      lapse: false, //失效
      ifScan: false, //是否已扫描
      a:1,
    };
  },
  // 检测二维码状态
  methods: {
    home() {
      this.$router.push('indexView');
    },
    pollingCheck(key, interval = 1000) {
      const timer = setInterval(async () => {
        const res = await checkQrStatus(key);
        console.log(res.data.code);
        if (res.data.code === 800) {
          this.lapse = true;
          clearInterval(timer);
        } else if (res.data.code === 802) {
          this.ifScan = true;
        } else if (res.data.code === 803) {
          console.log(res.data.cookie);
          store.set('__m__cookie', res.data.cookie);
          this.$router.push('indexView');
          clearInterval(timer);
        }
      }, interval);
      this.$on('hook:beforeDestroy', () => clearInterval(timer));
    },
  },
  async created() {
    const res = await getQrKey().catch((err) => {
      console.log(err);
    });

    const qrInfo = await getQrInfo(res.data.data.unikey).catch((err) =>
      console.log(err)
    );
    this.qrcode = qrInfo.data.data.qrimg;
    console.log(this.qrcode);
    this.pollingCheck(res.data.data.unikey);
    console.log(qrInfo);
  },
};
</script>