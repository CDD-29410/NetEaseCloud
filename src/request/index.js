//所有的请求
import axios from "axios";
import { param } from "jquery";
import store from 'storejs'

const http = axios.create({
    baseURL: "https://netease-cloud-music-api-five-roan-88.vercel.app"
})

// 添加请求拦截器
http.interceptors.request.use(function (config) {
    const cookie = store.get('__m__cookie') ?? ''
    config.params = config.params || {};
    config.params.cookie = cookie;
    return config;
})

export const homepageBlockPage = () => http.get('/homepage/block/page')

// 菜单
export const homepageDragonBall = () => http.get('/homepage/dragon/ball')

export const personalized = () => http.get('/personalized')
// export const personalized = () => http.get('/personalized',{ params: {uid}})

export const startTime = () => http.get('/calendar?startTime=1677417600000&endTime=1677417600000')

// 搜索
export async function fetchToplistDetail() {
    const res = await http.get('/toplist/detail');
    const playlist = await Promise.all(res.data.list.map(({ id }) => http.get('playlist/detail', { params: { id } })));
    return playlist.map(item => item.data.playlist)
}


//登录
export const getQrKey = () => http.get('/login/qr/key')

export const getQrInfo = (key, qrimg = 1) => http.get('/login/qr/create', { params: { key, qrimg } })

export const checkQrStatus = (key) => http.get('/login/qr/check',{params:{key,timestamp:Date.now()}})

// 账号信息
export const getUserAccount = () => http.get('/user/account')

// 用户详情
export const getUserDetail = (uid) => http.get('/user/detail', { params: { uid } })

// 获取用户歌单 
export const getUserPlaylist = (uid) => http.get('/user/playlist', { params: { uid } })


//用户绑定信息
export const getUserBinding =(uid)=>http.get ('/user/binding',{params:{uid}})

export const getTrackDetail = (id) => http.get('/song/detail',{params:{ids:id}})

export const getMP3 = (id) => http.get('/song/url/v1',{params:{id ,level:'standard'}} )


// MV 排行
export const featTopMv = (area) => http.get('/top/mv', { params: { area } });

/**
* @description MV视频
*/
export const featMvUrl = (id) => http.get('/mv/url', { params: { id } });

/**
* @description MV视频信息
*/
export const featMvDetail = (mvid) => http.get('/mv/detail', { params: { mvid } });

/**
* @description 获取 mv 点赞转发评论数数据
*/
export const featMvDetailInfo = (mvid) => http.get('/mv/detail/info', { params: { mvid } });