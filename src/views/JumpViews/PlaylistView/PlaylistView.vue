<template>
    <div class="bg-[#686868] ">
        <header class="pt-[3vw]">
            <!-- 顶部 -->
            <van-sticky @change="isChange">
                <div class="w-[100vw] ">
                    <div class="flex items-center justify-between w-[100vw] px-[3vw] h-[13vw] bg-[#686868]
                    ">
                        <div class=" flex items-center justify-between ">
                            <Icon icon="solar:arrow-left-linear" color="white" width="6vw" height="5vw"
                                @click.native="home" />
                            <van-notice-bar :scrollable="isscrollable" background="transparent" class="text-[4vw] w-[64vw] text-[#fff]" >
                            <span ref="box">{{topName}}</span>
                            </van-notice-bar>
                        </div>
                        <div class="flex items-center justify-between h-[5vw]">
                            <Icon icon="iconamoon:search" color="white" width="5vw" height="5vw" />
                            <Icon icon="fontisto:more-v-a" color="white" width="5vw" height="5vw" class="ml-[8vw]" />
                        </div>
                    </div>
                </div>
            </van-sticky>
            <!-- 内容 -->
            <div class=" flex justify-between mt-[5vw] px-[3vw]">
                <div class="flex">
                    <img :src="musicData.coverImgUrl" alt="" class="w-[24.5vw] h-[24.5vw] rounded-[2vw] ">
                    <div class="ml-[3vw] flex flex-col">
                        <p class="text-[3.5vw] text-[#F8F8F9] font-[700] line-clamp-2"> {{ musicData.name }}</p>
                        <div class="flex  items-center mt-[2.5vw] ">
                            <img :src="musicData.creator?.backgroundUrl" alt="" class="w-[5.8vw] h-[5.8vw] rounded-[50%]">
                            <span class="text-[2.8vw] text-[#BCBBC3] ml-[1.8vw]">{{ musicData.creator?.nickname }}</span>
                            <p
                                class="text-[2.3vw] text-[#C4C3CB] ml-[1vw] w-[11vw] h-[5vw] leading-[5vw] bg-[#7B7A82] text-center rounded-[2.5vw]">
                                <span class="mr-[1vw]">+</span>关注
                            </p>

                        </div>
                        <div class="mt-[2.2vw] flex">
                            <p class="mr-[2vw] px-[1.4vw]  h-[4vw] bg-[#84878E] flex items-center justify-evenly rounded-[1vw] "
                                v-for=" key1 in musicData.algTags" :key="key1.id">
                                <span class="text-[2.3vw] text-[#F0EFF7]">{{ key1 }}</span>
                                <Icon icon="teenyicons:right-outline" color="white" width="2vw" height="2vw" />
                            </p>
                        </div>
                    </div>
                </div>
                <Icon icon="mingcute:down-line" color="white" width="3vw" height="3vw"
                    class="w-[5vw] h-[5vw]  bg-[#787A81] rounded-[50%] " />
            </div>
            <!-- 语录 -->
            <div class="mt-[4.4vw] flex justify-between items-center px-[3vw]"><span
                    class=" text-[2.78vw] w-[90vw] text-[#C0C2C9] truncate">{{ musicData.description }}</span>
                <Icon icon="teenyicons:right-outline" color="white" width="3vw" height="3vw" />
            </div>
            <!-- 分享 -->
            <ul class="flex items-center justify-between mt-[4.4vw]  px-[3vw]">
                <li
                    class="w-[28.6vw] h-[10vw] text-center leading-[10vw] rounded-[5vw] bg-[#919398] flex items-center justify-center">
                    <Icon icon="majesticons:share" color="white" width="4vw" height="4vw" />
                    <span class="ml-[1.7vw] text-[#FFF7FA] text-[2.5vw]">{{ musicData.shareCount }}</span>
                </li>
                <li
                    class="w-[28.6vw] h-[10vw] text-center leading-[10vw] rounded-[5vw] bg-[#919398] flex items-center justify-center">
                    <Icon icon="iconamoon:comment-dots-fill" color="white" width="4vw" height="4vw" />
                    <span class="ml-[1.7vw] text-[#FFF7FA] text-[2.5vw]">{{ musicData.commentCount }}</span>
                </li>
                <li
                    class="w-[28.6vw] h-[10vw] text-center leading-[10vw] rounded-[5vw] bg-[#FF2E4C] flex items-center justify-center">
                    <Icon icon="solar:calendar-add-bold" color="white" width="4vw" height="4vw" />
                    <span class="ml-[1.7vw] text-[#FFF7FA] text-[2.5vw]">{{ Math.round(musicData.subscribedCount / 10000) +
                        '万'
                    }}</span>
                </li>
            </ul>
        </header>
        <div class="mt-[4.5vw] pt-[3vw] bg-gradient-to-b from-[#E0E0E1] to-[#fff] rounded-t-[2vw]">
            <!-- 头部 -->
            <van-sticky offset-top="12.5vw">
                <div class="flex items-center px-[3vw] justify-between w-[100vw] h-[13vw] bg-[#E0E0E1]" type="info">
                    <div class="flex items-center">
                        <Icon @click.native="playAll" icon="gridicons:play" color="red" width="5vw" height="5vw" />
                        <span class="ml-[3.7vw] text-[3.7vw] font-extrabold">播放全部 </span>
                        <span class="ml-[1.5vw] text-[2.8vw] text-[#BAB9B9]">{{ '(' + musicData.trackCount + ')' }}</span>
                    </div>
                    <div class="flex items-center">
                        <Icon icon="lucide:arrow-down-to-line" width="5vw" height="5vw" />
                        <Icon icon="solar:list-down-linear" width="5vw" height="5vw" class="ml-[5vw]" />
                    </div>
                </div>
            </van-sticky>
            <!-- 内容 -->
            <ul class="px-[3vw] ">
                <li class="flex items-center justify-between h-[15vw]" v-for="(key2, index) in data.data?.songs"
                    :key="index" @click="fn(index)" >
                    <p class="text-[3.6vw] w-[5vw] text-center text-[#A4A4A4]">{{ index + 1 }}</p>
                    <div class="w-[70vw] flex flex-col ml-[4vw]">
                        <span  class="text-[3vw] font-[700] truncate">{{ key2.name }}</span>
                        <p class="ml-[.5vw] h-[4vw] text-[3vw] truncate text-[#8A8B83]">
                            <span class="text-[#D3C68C] text-[1.6vw] border-[.1vw] border-[#EDEEE6] rounded-[1vw]">超清</span>
                            <span v-for="key3 in key2.ar" :key="key3.id">{{ key3.name + " / " }}</span>
                            <span>-</span>
                            <span>{{ key2.name }}</span>
                        </p>
                    </div>
                    <Icon icon="arcticons:fpt-play" width="4vw" height="4vw" />
                    <Icon icon="fontisto:more-v-a" color="#A4A4A4" width="4vw" height="4vw" class="ml-[6vw] mr-[1vw]" />
                </li>
            </ul>
        </div>
        <Play />
    </div>
</template>
<script>
import axios from 'axios';
import Play from '../../../components/Play/Player.vue';
import Player from '../../../components/Play/Player';
export default {
    components: { Play },
    data() {
        return {
            topName: '歌单',
            musicData: [],//获取歌单详情
            opacity: 0, //透明度
            isis: true,
            trackIDs: [],//获取歌单所有歌曲
            data: [],
            Music: [],//获取音乐 url - 新版
            MusicUrl: [],
            songName: [],
            isscrollable:false,//文字是否滚动
            single:'first',
            rotated: false,//是否自动转动
        }
    },
    methods: {
        home() {
            this.$router.push('/indexView');
        },
        isChange(isFixed) {
           if(isFixed){
            this.topName = this.musicData.name ;
             this.isscrollable=true
           }else{
            this.topName = '歌单';
            this.isscrollable = false
           }
        },
        //播放全部
        playAll() {
            window.$player.replacePlaylist(
                this.data.data.songs.map((song) => song.id),
                '',
                '',
            )
        },
        fn(index){
            this.single= this.data.data?.songs[index].id
            window.$player.replacePlaylist(
                this.data.data.songs.map((song) => song.id),
                '',
                '',
                this.single
            )
        }
    },
    async created() {
        this.id = this.$route.params.id
        console.log(this.id)
        axios
            .get(
                `https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/track/all?id=${this.id}`
            )
            .then((res) => {
                this.data = res
                // console.log(this.data.data)
            })
            .catch((err) => {
                console.log(err);
            });
        axios
            .get(
                `https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/detail?id=${this.id}`
            )
            .then((res) => {
                this.musicData = res.data.playlist
            })
            .catch((err) => {
                console.log(err);
            });
        axios
            .get(
                `https://netease-cloud-music-api-five-roan-88.vercel.app/song/url/v1?id=${this.id}&level=exhigh`
            )
            .then((res) => {
                this.Music = res
            })
            .catch((err) => {
                console.log(err);
            });
        axios
            .get(
                `https://netease-cloud-music-api-five-roan-88.vercel.app/song/url?id=${this.id}`
            )
            .then((res) => {
                this.MusicUrl = res
                // console.log(this.MusicUrl)
            })
            .catch((err) => {
                console.log(err);
            });     
    },
}

</script>
<style>
</style>