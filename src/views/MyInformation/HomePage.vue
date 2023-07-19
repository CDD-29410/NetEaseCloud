<template>
    <div class=" bg-gradient-to-b from-[#F3F6F8] to-[#F2F5F7]">
        <!-- 头部 -->
        <div class="p-[4vw]">
            <div class=" flex items-center justify-between w-[92vw] relative">
                <Icon icon="teenyicons:left-outline" width="6vw" height="6vw" @click.native="home" />
                <div class="">
                </div>
                <Icon icon="ant-design:more-outlined" width="6vw" height="6vw" @click.native="popupVisible" />
                <van-popup v-model="ispopupVisible" position="right" :style="{ height: '46.76vw', width: '46.18vw' }"
                class="p-[4vw] top-[23vw] rounded-l-[2vw] flex flex-col justify-between">
                <p class="flex items-center text-[4.5vw]">
                    <Icon icon="streamline:interface-edit-write-2-change-document-edit-modify-paper-pencil-write-writing"
                        class="mr-[3vw]" />编辑资料
                </p>
                <p class="flex items-center text-[4.5vw]">
                    <Icon icon="mingcute:safe-lock-line" class="mr-[3vw]" />隐私设置
                </p>
                <p class="flex items-center text-[4.5vw]">
                    <Icon icon="tabler:photo" class="mr-[3vw]" />更换封面
                </p>
                <p class="flex items-center text-[4.5vw]">
                    <Icon icon="material-symbols:share-outline" class="mr-[3vw]" />分享
                </p>
                </van-popup>
            </div>
        </div>
        <!-- 内容部分 -->
        <div class="mt-[58vw] ">
            <!-- 1 -->
            <div class="p-[4vw]">
                <div class=" pb-[4vw] flex flex-col items-center justify-between relative 
                bg-gradient-to-b from-[#F7F2EC] to-[#fff]
                ">
                    <img :src=Account.profile?.avatarUrl  alt="" class="w-[18vw] h-[18vw] rounded-[50%] absolute top-[-9vw]">
                    <span
                        class=" self-end border-[.1vw] bg-opacity-0 rounded-[3.5vw] border-[#A4846E absolute top-[-10.5vw] text-[#fff] text-[2.5vw] p-[1.5vw]">TA的照片</span>
                    <span class="mt-[11.5vw] text-[4.9vw] font-[800]">{{Account.profile?.nickname}}</span>
                    <div class="text-[#95999F]  flex items-center text-[3.16vw] mt-[3.6vw]">
                        <span class="mr-[4.7vw]">{{user.profile?.follows}}关注</span>
                        <span class="mr-[4.7vw]">{{user.profile?.followeds}}粉丝</span>
                        <span>lv.{{ user.level }}</span>
                    </div>
                    <div class="flex items-center  text-[3.16vw] mt-[3.6vw]">
                        <span class="mr-[1.5vw] border border-[#CCCCCD] p-[1vw] rounded-[1.5vw]">IP:123123</span>
                        <span class="mr-[1.5vw] border border-[#CCCCCD] p-[1vw] rounded-[1.5vw]">江苏 南京</span>
                        <span class="border border-[#CCCCCD] p-[1vw] rounded-[1.5vw]">村龄{{user.createDays}}天</span>
                    </div>
                    <div class="flex items-center  text-[3.16vw] mt-[3.6vw]">
                        <span
                            class="mr-[1.5vw] h-[7.5vw] border border-[#CCCCCD] py-[1.5vw] px-[3.1vw] rounded-[3.75vw]">编辑资料</span>
                        <Icon icon="teenyicons:down-small-outline" width="3vw" height="3vw" :class="{ '-rotate-180': isRotated }"
                            @click.native='rotateElement' class="transition-transform duration-5000
                            w-[7.5vw] h-[7.5vw] rounded-[50%] border-[.1vw] border-[#D0D0D1]" />
                    </div>
                </div>
            </div>
            <!-- 2 -->
            <div class="w-[100vw] bg-opacity-0 flex flex-col items-center mt-[5vw] ">
                <van-tabs v-model="tabNum" background="rgba(0, 0, 0, 0) " sticky swipeable  >
                    <van-tab animated v-for="(key1, index) in index1" 
                        :title-style="{ fontSize: '4vw',width:'17vw'}" 
                        :title="key1" 
                        :key="index.id"
                        class="flex p-[4vw]   mt-[3vw] "
                    >
                        <div v-if="index == 0">
                            <div class="w-[92vw]  py-[5vw] px-[4.44vw] bg-[#FFFFFF] ">
                                <span class="text-[4.8vw] font-[700]">音乐品味</span>
                                <div class="wt-[4.27vw] flex justify-between">
                                    <div class="w-[26vw] mr-[1vw] text-[#AFAEB6] h-[31vw] flex flex-col justify-between px-[1.8vw] py-[2vw]
                                bg-gradient-to-b  from-[#FBF3EF] to-[#fff]
                                border-[.3vw] border-[#FEE7EA] rounded-[2vw]
                                ">
                                        <div class="flex flex-col">
                                            <span class="text-[3vw]">我的喜欢</span>
                                            <span class="text-[4vw] text-[#000] font-[600]">179首</span>
                                        </div>
                                        <p class="text-[3.16vw] flex items-center">
                                            <Icon icon="mdi:heart" />
                                            <span class="mr-[1vw]">喜欢的音乐</span>
                                        </p>
                                    </div>
                                    <div class="w-[26vw] mr-[1vw] text-[#AFAEB6] h-[31vw] flex flex-col justify-between px-[1.8vw] py-[2vw]
                                bg-gradient-to-b from-[#FEF5E8] to-[#FDFFF7]
                                border-[.3vw] border-[#FAF4DA] rounded-[2vw]
                                ">
                                        <div class="flex flex-col">
                                            <span class="text-[3vw]">累计听歌</span>
                                            <span class="text-[4vw] text-[#000] font-[600]">1279首</span>
                                        </div>
                                        <p class="text-[3.16vw] flex items-center">
                                            <Icon icon="fluent:list-16-filled" :rotate="3" />
                                            <span class="mr-[1vw]">听歌排行</span>
                                        </p>
                                    </div>
                                    <div class="w-[26vw] text-[#AFAEB6] h-[31vw] flex flex-col justify-between px-[1.8vw] py-[2vw]
                                bg-gradient-to-b from-[#EFF7FD] to-[#EFF7FD]
                                border-[.3vw] border-[#EBF1F9] rounded-[2vw]
                                ">
                                        <div class="flex flex-col">
                                            <span class="text-[3vw]">步骤关键词</span>
                                            <span class="text-[4vw] text-[#000] font-[600]">属于你的音乐档案</span>
                                        </div>
                                        <p class="text-[3.16vw] flex items-center">
                                            <Icon icon="mdi:heart" width="3.16vw" height="3.16vw" />
                                            <span class="mr-[1vw]">黑胶时光机</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="h-screen">

                        </div>
                        <div class="w-[92vw] h-screen text-center"  v-if="index == 1">
                            <van-empty description=" 暂时还没有动态哦" >

                            </van-empty>
                            <div></div>
                        </div>
                        <div class=" h-screen w-[92vw]" v-if="index == 2">
                            <van-empty  description="暂无声音" class="text-[#000] text-center" >
                                <h2 class="mb-[5vw]">开始录制第一条声音吧</h2>
                                <van-button round type="danger" class="bottom-button">去录制</van-button>
                            </van-empty>
                            <div></div>
                        </div>
                    </van-tab>
                </van-tabs>
            </div>
        </div>
    </div>
</template>
<script>
import { getUserAccount, getUserDetail } from '@/request';
export default {
    data() {
        return {
            ispopupVisible: false,
            isRotated: false,
            index1: ['主页', '动态', '博客'],
            tabNum: 0, //主页0 动态1 博客2
            Account:[], //账号信息
            user:[],    //用户详情
        }
    },
    methods: {
        rotateElement() {
            this.isRotated = !this.isRotated
        },
        home() {
            this.$router.push(`indexView`);
        },
        popupVisible() {
            this.ispopupVisible = !this.ispopupVisible;
        }
    },
    mounted() {

    },
    async created() {
        // 账号信息
        const res = await getUserAccount();
        console.log(res.data);
        this.Account=res.data
        // 用户详情
        const detail = await getUserDetail(res.data.profile.userId);
        this.user=detail.data
        console.log(detail.data);
    }
}
</script>
<style>.ldk {
    background-color: rgba(0, 0, 0, 0);

}
.van-tab__text--ellipsis{
    overflow:visible;
}
.van-tabs__wrap{
    height: 8vw !important;
}

.bottom-button {
    width: 32vw;
    height: 8vw;
}
</style>