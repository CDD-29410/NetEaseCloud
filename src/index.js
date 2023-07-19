import Vue from 'vue' ;
import './index.css';
import { Icon } from '@iconify/vue2';
Vue.component('Icon', Icon);

import mineView from '@/views/mineView.vue';
Vue.component('mineView',mineView,)



import App from '@/app.vue'
import router from '@/router' ;
// import store from '@/store';

//进度条
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

Vue.component('VueSlider', VueSlider)

import Vuex from './vuex/_index.js';
Vue.use (Vuex)
const store = new Vuex.Store({
  state:{
    count:123
  }
})

import { Button, Popup, Area , Swipe , SwipeItem, Tab, Tabs, Empty , Sticky , NoticeBar, List,Tag ,Circle } from 'vant';
import { Switch, Drawer } from '@/components';
Vue.use(Switch).use(Drawer).use(Button).use(Popup).use(Area).use(Swipe).use(SwipeItem)
.use(Tab).use(Tabs).use(Sticky).use(NoticeBar).use(List).use(Tag).use(Circle).use(Empty)
;
//vw跟实例  称root 具备el 其他实例不具备
new Vue({
  el: '#app',
  router,
  store,
  // components: { App },
  // template: "<app/>",
  render:(h)=>h(App)
});