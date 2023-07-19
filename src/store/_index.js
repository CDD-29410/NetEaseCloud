// 数据仓库
// 全局的数据
// 数据发生变化 全部自动更新

import Vue from "vue";
import _state from "./_state.js";
const state = Vue.observable({_state})
const mutations = {
    increase:{
        count(){
            return StorageEvent.state
        }
    }
}
export default {
    state,
    mutations,
}


