import VueRouter from "vue-router";
import indexView from '../views/indexView.vue';
import mineView from '../views/mineView.vue';
import homeView from '../views/homeView.vue';
import search from '../views/JumpViews/SearchView/searchView.vue';
import Login from '../views/Login.vue';

import PlaylistView from '../views/JumpViews/PlaylistView/PlaylistView.vue'
export default[
    {
        path : '/',
        // redirect: '/indexView',
        // redirect: '/Foo',
        // redirect: 'PlaylistView',
        // redirect: 'Login',
        // redirect: 'JSX',
        // redirect: 'HomePage',
        // redirect: '/0708',
        redirect: '/MvHome'
    },
    {
      path : '/indexView/',
      component: indexView
    },
    {
      path : '/mineView',
      component: mineView
    },
    {
      path : '/homeView/:id',
      component: homeView
    },
    {
      path : '/search/',
      component: search
    },
    {
      path : '/PlaylistView/:id',
      component: PlaylistView
    },
    {
      path: '/Foo',
      // 懒加载组件文件
      component: () => import('@/views/homeviews/Foo.vue'),
    },
    {
      path : '/Login',
      component: () => import('@/views/Login.vue')
    },
    {
      path : '/Rest',
      component: () => import(/*webpackChunkName:'rest'*/'@/views/Rest.vue')
    },
    {
      path : '/JSX',
      component: () => import(/*webpackChunkName:'jsx'*/'@/views/homeviews/JSX.jsx')
    },
    {
      path : '/HomePage',
      component: () => import(/*webpackChunkName:'HomePage'*/'@/views/MyInformation/HomePage.vue')
    },
    {
      path: '/0708',
      component: () => import('@/views/homeviews/Feat-0708.vue'),
    },
    {
      path: '/MvHome',
      component: () => import('@/views/MV/MvHome.vue'),
    },

    

]