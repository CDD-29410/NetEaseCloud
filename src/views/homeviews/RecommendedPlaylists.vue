<!-- 推荐歌单 -->
<template>
  <div @click="playlistView">
    <div class="relative">
      <img :src="son.picUrl" class="w-[32vw] h-[32vw]" />
      <p class="flex items-center absolute top-[2vw] right-[2vw]">
        <Icon icon="fa-solid:play" color="white" width="1.4vw" height="1.8vw" />
        <span class="text-[2.3vw] text-[#fff] ml-[.5vw]">{{
          Math.round(son.playCount / 10000) + '万'
        }}</span>
      </p>
      <Icon
        icon="fa-solid:play"
        color="white"
        width="3.8vw"
        height="4.4vw "
        class="absolute right-[2vw] bottom-[2vw]"
      />
    </div>
    <span class="text-[3vw] overflow-hidden line-clamp-2">{{ son.name }}</span>
  </div>
</template>
<script>

export default {
  data() {
    return {
    };
  },
  props: {
    son: {
      type: Object,
      //是否必须传递
      required: true,
    },
    count: {
      // type:Number
      default: 1,
      validator(value) {
        return [1, 2, 3].includes(value);
      },
    },
  },
  methods: {
    playlistView() {

      this.$router.push(`/PlaylistView/${this.son.id}`);
    },
  },
  async created() {

  },
};
</script>