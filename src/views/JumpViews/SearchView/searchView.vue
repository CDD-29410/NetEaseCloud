<template>
  <div class="bg-[rgb(248,249,253)] dark:bg-[#1a1c23] p-[3vw] overflow-hidden">
    <div class="fixed left-0 top-0 bg-[#fff] pt-[3vw] z-[999]">
      <!-- 搜索框 -->
      <div
        class="w-[100vw] h-[8vw] flex justify-between px-[3vw] items-center box-border"
      >
        <!-- 返回图标 -->
        <Icon
          icon="ph:arrow-left-light"
          width="8vw"
          class="text-[#000] dark:text-[#e9e9e9]"
          @click.native="home"
        />
        <!-- 搜索框 -->
        <div class="relative">
          <input
            type="text"
            class="dark:bg-[#31333a] dark:text-[#e9e9e9] text-[3vw] bg-white opacity-0.2 text-[#f1f1f1] w-[75vw] h-[8vw] border-2 border-solid border-red-500 rounded-[3vw] pl-[10vw] dark:border-2 dark:border-[#31333a]"
          />
          <Icon
            icon="circum:search"
            width="5vw"
            height="5vw"
            class="absolute left-[3.68vw] top-[2vw] text-[#000] dark:text-[#e9e9e9]"
            @click.native="searchHandler"
          />
        </div>
        <div
          class="font-semibold text-[4vw] dark:text-[#e9e9e9] text-[#283349]"
        >
          搜索
        </div>
      </div>
      <!-- 导航栏 -->
      <div class="flex justify-around mt-[3vw]">
        <div
          v-for="(item, index) in menu"
          :key="index.id"
          @click="sertchMenu2(index)"
          class="flex items-center w-[25vw] h-[8vw] justify-center border-r border-[#E6E8ED]"
        >
          <Icon :icon="item.icon" color="red" width="5vw" />
          <p class="ml-[2vw] text-[3vw] text-[#000] dark:text-[#e9e9e9]">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>

    <div class="mt-[25vw]">
      <div class="flex justify-between">
        <h1 class="font-semibold text-[4vw] text-[#283349] dark:text-[#e9e9e9]">
          搜索历史
        </h1>
        <Icon
          icon="fa6-regular:trash-can"
          width="5vw"
          color="#acafae"
          height="5vw"
        />
      </div>
      <div class="flex">
        <div
          v-for="item in like"
          :key="item.id"
          class="p-[2vw] mr-[2vw] text-[3.5vw] dark:bg-[#31333a] dark:text-[#e9e9e9] text-[#535c6a] mt-[3vw] bg-[#fff] px-[3vw] rounded-[20px]"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <!-- 猜你喜欢 -->
    <div class="mt-[5vw]">
      <div class="flex justify-between">
        <h1 class="font-semibold text-[4vw] text-[#283349] dark:text-[#e9e9e9]">
          猜你喜欢
        </h1>
        <Icon icon="ic:baseline-refresh" color="#acafae" width="5vw" />
      </div>
      <div class="flex">
        <div
          v-for="item in like"
          :key="item.id"
          class="p-[2vw] mr-[2vw] text-[3.5vw] dark:bg-[#31333a] dark:text-[#e9e9e9] text-[#535c6a] mt-[3vw] bg-[#fff] px-[3vw] rounded-[20px]"
        >
          {{ item }}
        </div>
      </div>
    </div>

    <!-- 内容 -->
    <div class="mt-[5vw]">
      <div class="w-[100%]">
        <van-swipe class="rotationChart" :loop="false" :width="slideWidth">
          <van-swipe-item
            v-for="item in List"
            :key="item.id"
            class="w-[65vw] dark:bg-[#31333a] pr-[2vw]"
          >
            <div class="rounded-[2vw] bg-[#FFFFFF] px-[4vw]">
              <!-- 标题开始 -->
              <div
                class="w-[100%] h-[12.422vw] flex items-center border-b-[2px] border-b-[#eaeaea] dark:border-b-[#43454c]"
              >
                <span
                  class="text-[4vw] text-[#000] dark:text-[#fff] mr-[3.359vw]"
                  >{{item.name}}</span
                >
                <div
                  class="h-[5.235vw] bg-[#f3f4f1] dark:bg-[#393b42] flex items-center px-[2vw] rounded-[3vw]"
                >
                  <Icon
                    icon="solar:play-bold"
                    class="text-[#000] dark:text-[#fff] mr-[0.7vw] text-[2.6vw]"
                  />
                  <span class="text-[2.6vw] text-[#000] dark:text-[#fff]"
                    >播放</span
                  >
                </div>
              </div>
              <!-- 标题结束 -->
              <div class="py-[0.5vw]">
                <div
                  v-for="(tracks,index) in item.tracks.slice(0, 20)"
                  :key="tracks.id"
                  class="my-[2.7vw] flex items-center"
                >
                  <span
                    class="text-[3.2vw] mr-[4vw]"
                    :class="{
                      text_ff2c41d: index < 3,
                      text_7d848d: index >= 3,
                    }"
                    >{{index+1}}</span
                  >
                  <span
                    class="text-[3.2vw] text-[#000] dark:text-[#fff] mr-[1vw] truncate"
                    >{{tracks.name}}</span>
                </div>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchToplistDetail } from '../../../request/index';
import { Swipe, SwipeItem } from 'vant';
export default {
  computed: {
    // 轮播图计算宽度
    slideWidth() {
      return `${window.innerWidth * 0.7}`; // 将宽度设置为视窗宽度的80%
    },
  },
  components: { VanSwipe: Swipe, VanSwipeItem: SwipeItem },
  mounted() {},
  data() {
    return {
      menu: [
        {
          icon: 'octicon:person-fill-24',
          text: '歌手',
        },
        {
          icon: 'clarity:book-solid',
          text: '曲风',
        },
        {
          icon: 'fluent-emoji-high-contrast:musical-notes',
          text: '专区',
        },
        {
          icon: 'ph:microphone-fill',
          text: '识曲',
        },
      ],
      like: ['笼', '我想念', '法老', '张杰', '爱情转移'],
      userSearchKeywords: '',
      defaultSearch: [],
      sertchMenu: ['/Singer', '/Genre', '/Zone', '/RecognizeSong'],
      List: [],
    };
  },
  methods: {
    home() {
      this.$router.push('/indexView');
    },
    sertchMenu2(num) {
      this.$router.push(this.sertchMenu[num]);
    } ,
  },
  async created() {
    const res = await fetchToplistDetail();
    this.List = res.slice(0, 10)
    console.log(this.List)
  },
  watch: {
    async userSearchkeywords(keywords) {
      const res = await fetchSearchSuggest(keywords)
      this.searchSuggest = res.result.songs;
    }
  },
};
</script>
<style >
.text_ff2c41d {
  color: #ff2c41;
}

.text_7d848d {
  color: #7d848d;
  
}

.rotationChart .van-swipe__indicators {
  display: none;
}
</style>