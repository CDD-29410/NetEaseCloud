<template>
    <div>
        <div class="px-[4vw]">
            <van-sticky>
                <div class="flex items-center h-[15vw] text-[5.5vw] bg-[#fff]">
                    <Icon icon="ph:arrow-left" />
                    <span class="ml-[4vw] font-[600]">MV排行榜</span>
                </div>
            </van-sticky>

            <van-tabs v-model="originate" sticky offset-top="14.82vw" animated @click="onClick">
                <van-tab v-for="(region, index) in regions" :title="region" :key="index.id" title-style="fontSize:'3.5vw'" class="">
                    <p class="my-[5vw] text-[3.5vw]">更新时间:7月17日</p>
                    <div v-for="(MvRegionContent, index) in MvRegionContents" :key="index.id">
                        <img :src="MvRegionContent.cover" alt="" class="h-[51.6vw] w-[92vw]" @click="Mvplay(index)" />
                        <div class="h-[16.4vw] flex flex-col justify-evenly">
                            <div class="text-[5vw] flex items-center w-[92vw] truncate">
                                <p class="w-[3vw] mr-[5vw]" :style="{color : index<3?'red':'#353535'}">{{ index + 1 }}</p>
                                <span class="truncate">{{ MvRegionContent.name }}</span>
                            </div>
                            <div class="text-[3vw] flex items-center w-[92vw] text-[#898989]">
                                <p class="mr-[5vw] w-[3vw]" ></p>
                                <span>{{ MvRegionContent.artistName }} </span>
                            </div>
                        </div>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
        <!-- mv视频 -->
        <van-popup v-model="display" position="bottom" :style="{ height: '100%' }"
            class=" fixed bottom-0 bg-[#000000] z-[999]">
            <div class="flex justify-between items-center p-[4vw] text-[5.5vw]">
                <Icon icon="ph:arrow-left" color="white" @click.native="hide" />
                <div class="flex">
                    <Icon icon="tabler:window-minimize" color="white" class="mr-[6vw]" />
                    <Icon icon="mingcute:more-2-fill" color="white" />
                </div>
            </div>
            <!-- 视频 -->
            <div>
                <video :src="featMvUrls?.url" loop autoplay class="mt-[20vw]" ></video>
            </div>

            <div class="p-[4vw]">
                <div>
                    <div class="flex items-center h-[10vw] text-[#fff] text-[3.5vw]"  v-if="isTrue" >
                        <img :src="featMvDetails.artists[0].img1v1Url" alt="" class="h-[10wv] w-[10vw] mr-1 rounded-[50%]">
                        <span class="mr-1">{{featMvDetails.artists[0].name}}</span>
                        <van-tag round type="primary" class="px-[2vw]"> + </van-tag>
                    </div>
                </div>
                <div>
                    <div>

                    </div>
                </div>
            </div>
            <p @click="onclick" class="text-[3.5vw] w-screen p-[4vw] text-[#2c2] absolute bottom-0">这么精彩不发条评论吗~</p>
        </van-popup>
    </div>
</template>
<script>
import {
    featTopMv,
    featMvUrl,
    featMvDetail,
    featMvDetailInfo,
} from '@/request';
export default {
    data() {
        return {
            originate: '', //起始位置
            regions: ['内地', '港台', '欧美', '韩国', '日本'],
            MvRegionContents: [], //全部mv内容（30条）
            MvPlay: [], //mv播放（点击mv的id）
            MvTitle: '', //mv标题
            MvRegions: '', //地区mv
            display: false, //底部是否mv显示
            featMvUrls:[], //MV视频
            featMvDetails:[],//MV视频信息
            featMvDetailInfo1s:[],// 获取 mv 点赞转发评论数数据
            isTrue:'',
        };
    },
    async created() {
        // 全部 mv
        const res1 = await featTopMv(this.regions[0]);
        this.MvRegionContents = res1.data.data;
        console.log(this.MvRegionContents);

        console.log(this.featMvDetails)
    },
    methods: {
        //获取地区
        onClick(name, title) {
            this.MvTitle = title;
        },
        //获取mv的id
        Mvplay(index) {
            this.display = true
            this.MvPlay = this.MvRegionContents[index]?.id;
            console.log(this.MvPlay);
        },
        hide() {
            this.display = false
        }, 
        onclick(){
            console.log( this.featMvDetails)
        }
    },
    watch: {
        //各个地区的mv排行
        async MvTitle(newVal) {
            const res1 = await featTopMv(newVal);
            this.MvRegionContents = res1.data.data;
        },
        //根据id获取mv信息
        async MvPlay(newVal) {
            // MV视频
            const featMvUrl1 = await featMvUrl(newVal);
            this.featMvUrls = featMvUrl1.data.data;
            console.log(this.featMvUrls.url);

            //MV视频信息
            const featMvDetail1 = await featMvDetail(newVal);
            this.featMvDetails = featMvDetail1.data.data;
            console.log(this.featMvDetails);
            this.isTrue=true

            //   获取 mv 点赞转发评论数数据
            const featMvDetailInfo1 = await featMvDetailInfo(newVal);
            this.featMvDetailInfo1s =  featMvDetailInfo1.data;
            console.log(this.featMvDetails);
        },
    },
};
</script>

<style>
.van-sticky--fixed {
    padding: 0 3.94vw !important;
    
}
</style>