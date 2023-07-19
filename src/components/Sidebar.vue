
<template>
  <div>
    <div @click="clickHandler">
      <!-- 蒙版 -->
      <div
        v-if="visible"
        class="bg-black opacity-20 absolute top-0 bottom-0 left-0 right-0 z-[998]"
        ref="drawerMask"
      ></div>
      <!-- 内容 -->
      <transition name="ltr" class=" overflow-hidden">
          <div v-show="visible" :style="[drawerContent, { width }]" class="content w-screen bg-[#F5F5F5] fixed left-0 bottom-0 z-[999] px-[3vw]">
            <div class="wrapper h-screen box-borders overflow-y-auto" ref="wrapper">
              <div>
                <slot name="header">
              <div
                class="flex items-center justify-between w-[79vw] h-[10vw] mt-[5vw]"
              >
                <div class="flex items-center">
                  <img
                    class="w-[6vw] h-[6vw] rounded-[50%]"
                    src="https://th.bing.com/th?id=OIP.6c-mOyg4bbaIv8E-sO-upgHaHm&w=246&h=253&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt="" @click="HomePage" 
                  />
                  <span class="ml-[2vw] text-[4vw]"  @click="login">立即登录</span>
                  <Icon
                    class="text-[5vw]"
                    icon="icon-park:right"
                    width="5vw"
                    height="5vw"
                  />
                </div>
                <Icon icon="tabler:scan" width="5vw" height="5vw" />
              </div>
              <div
                class="w-[77vw] h-[28vw] px-[4vw] pt-[4vw] bg-[#3C3A38] rounded-[3vw] mt-[4vw] flex flex-col justify-between"
              >
                <div class=" relative">
                  <h2 class="text-[#fff] text-[4vw]">续费黑椒VIP</h2>
                  <p class="flex items-center mt-[2vw]">
                    <span class="text-[#9B8B86] text-[2vw]">点击恢复超21项专属特权</span>
                    <Icon icon="teenyicons:right-outline" width="2vw" height="2vw" color="#9B8B86"/>
                  </p>
                  <div class="w-[16vw] h-[6vw] rounded-[3vw] border-[.1vw] absolute right-0 top-0 text-[2.2vw] text-[#fff] leading-[6vw] text-center">会员中心</div>
                </div>
                <div class="
                h-[10vw] text-[#9B8B86] border-t border-[#5B4F4E]
                flex justify-between items-center
                ">
                  <span class="text-[2vw]">受邀专享,黑胶VIP低至0.27元/天!</span>
                  <div class="w-[5vw] h-[5vw] text-[2vw] bg-[#DF4909] text-center leading-[2.5vw]">受邀专享</div>
                </div>
              </div>
                </slot>
                <div class="">
                  <slot>
                <div v-for="keys in DrawerData" :key="keys.id">
                  <div class="bg-[#fff] mt-[3vw] rounded-[2vw]">
                    <div class="h-[9vw] leading-[9vw] pl-[5vw]  text-[2.9vw] text-[#9B8B86] border-[#ccc] " v-if="keys.title">
                      {{ keys.title }}
                    </div>
                    <ul v-for="key1 in keys.data" :key="key1.id">
                      <li
                        class="flex items-center justify-between h-[12vw]"
                      >
                        <div class="flex items-center pl-[5vw]">
                          <Icon :icon="key1.icon" width="4vw" height="4vw" />
                          <span class="text-[3vw] ml-[3vw]">{{
                            key1.name
                          }}</span>
                        </div>
                        <div class="flex items-center pr-[3vw]">
                          <span class="text-[#B7B7B7] text-[2.4vw] mr-[3vw]">{{ key1?.rigth }} </span>
                          <Icon
                            class="text-[3vw]"
                            icon="icon-park:right"
                            width="3vw"
                            height="3vw"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="h-[12vw] leading-[12vw] text-[4vw] rounded-[2vw] bg-[#fff] text-center mt-[4vw] text-[red]"
                  @click="login"
                >
                  退出登录/关闭
                </div>
                  </slot>
                </div>
              </div >
            </div>
          </div>
      </transition>
    </div>
  </div >
</template>
<script>
import BScroll from '@better-scroll/core';


export default {
  data() {
    return {
      DrawerData: [
        {
          title: '',
          data: [
            { icon: 'solar:letter-linear', name: '我的消息', rigth: '' },
            { icon: 'cib:shell', name: '云贝中心', rigth: '签到' },
            { icon: 'mingcute:light-line', name: '创作者中心', rigth: '' },
          ],
        },
        {
          title: '音乐服务',
          data: [
            {
              icon: 'ph:star-of-david-light',
              name: '趣测',
              rigth: '点击查看今日运势',
            },
            { icon: 'ion:ticket-outline', name: '云村有票', rigth: '' },
            { icon: 'mdi:help-box-outline', name: '多多西西口袋', rigth: '' },
            { icon: 'ep:handbag', name: '商城', rigth: '' },
            {
              icon: 'streamline:interface-signal-square-heart-line-stats-beat-square-graph',
              name: 'Beat专区',
              rigth: '顶尖制作邀你创作',
            },
            { icon: 'tabler:bell-ringing-2', name: '口袋彩铃', rigth: '' },
            {
              icon: 'icon-park-outline:gamepad',
              name: '游戏专区',
              rigth: '音乐浇灌治愈花园',
            },
          ],
        },
        {
          title: '其他',
          data: [
            { icon: 'ri:settings-line', name: '设置', rigth: '' },
            {
              icon: 'line-md:moon-loop',
              name: '深色模式',
              rigth: '',
              btn: true,
            },
            { icon: 'mdi:alarm-clock', name: '定时关闭', rigth: '' },
            { icon: 'ph:t-shirt-thin', name: '个性装扮', rigth: '' },
            {
              icon: 'iconoir:headset-issue',
              name: '边听边存',
              rigth: '未开启',
            },
            {
              icon: 'iconoir:headset-issue',
              name: '在线听歌免流量',
              rigth: '',
            },
            { icon: 'solar:card-linear', name: '音乐黑名单', rigth: '未开启' },
            {
              icon: 'ant-design:stop-outlined',
              name: '青少年模式',
              rigth: '未开启',
            },
            { icon: 'ep:alarm-clock', name: '音乐闹钟', rigth: '' },
          ],
        },
        {
          title: '',
          data: [
            { icon: 'iconoir:page', name: '我的订单', rigth: '' },
            { icon: 'ion:ticket-outline', name: '优惠券', rigth: '' },
            { icon: 'ep:service', name: '我的客服', rigth: '' },
            { icon: 'ri:share-circle-line', name: '分享网易云音乐', rigth: '' },
            { icon: 'ph:file-thin', name: '个人信息收集与使用清单', rigth: '' },
            {
              icon: 'icon-park-outline:circle-five-line',
              name: '个人信息第三方共享清单',
              rigth: '',
            },
            { icon: 'icons8:share', name: '个人信息与隐私保护', rigth: '' },
            { icon: 'icon-park-outline:attention', name: '关于', rigth: '' },
          ],
        },
      ],
    };
  },
  //计算属性
  computed: {
    drawerContent() {
      if (this.direction === 'btt') {
        return {
          width: '100vw',
          left: 0,
          bottom: 0,
        };
      } else if (this.direction === 'ttb') {
        return {
          width: '100vw',
          left: 0,
          top: 0,
        };
      } else if (this.direction === 'ltr') {
        return {
          height: '100vh',
          left: 0,
          top: 0,
        };
      } else if (this.direction === 'rtl') {
        return {
          height: '100vh',
          right: 0,
          top: 0,
        };
      }
    },
  },
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: '听过爱过的华语经典',
    },
    direction: {
      type: String,
      default: 'btt', //从下到上
      validator(direction) {
        return ['ttb', 'btt', 'ltr', 'rtl'].includes(direction);
        //从上到下 从下到上 从左到右 从右到左
      },
    },
    width: {
      type: [Number, String],
      default: '85vw',
    },
  },
  methods: {
    login(){
      this.$router.push('/Login')
    },
    closeDrawer() {
      this.$emit('update:visible', false);
    },
    HomePage(){
      this.$router.push('/HomePage')
    },
    clickHandler(e) {
      if (e.target === this.$refs.drawerMask) {
        // this.visible=''
        // 使用vm.$emit给父组件传递数据
        this.closeDrawer();
      }
    },
    updateOverflow() {
      const body = document.querySelector('body');
      body.setAttribute(
        'style',
        `overflow: ${this.drawerVisible ? ' hidden' : ' visible'}`
      );
    },
  },
  created() {
  },
  mounted(){
    let click = new BScroll(this.$refs.wrapper, {
      scrollX: false,
      scrollY: true,
      click:true
    });
  },
};
</script>
<style scoped>
.ltr-enter-active {
  transition: all ease-in-out 0.7s;
}

.ltr-leave-active {
  transition: all ease-in-out 0.2s;
}

.ltr-enter-to,
.ltr-leave {
  transform: translateX(0);
}

.ltr-leave-to,
.ltr-enter {
  transform: translateX(-100%);
}
</style>