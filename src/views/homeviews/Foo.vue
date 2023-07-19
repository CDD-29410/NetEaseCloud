<template>
    <div>
        <h1>Foo view</h1>
        <!-- <Dialog title="警告" message="我是提示内容！"> </Dialog> -->
        <button @click="fn">toggle dialog</button>
        <p><router-link to="/indexView">go to indexView</router-link></p>
    </div>
  </template>
<script>
import Dialog from '@/components/Dialog';
// import { mapState, mapMutations } from '@/vuex';
import { getUserAccount, getUserDetail } from '@/request';
export default {
  computed:{
    // ...mapState(['count', 'msg']),
  },
  methods: {
    // ...mapMutations(['increase']),
      fn() {
        Dialog({ title: '警告', message: '我是提示内容！' })
          .then(function () {
            console.log('点击了确定');
          })
          .catch(function () {
            console.log('点击了取消');
          });
      },
  },
  async created() {
    const res = await getUserAccount();
    console.log(res);
    const detail = await getUserDetail(res.data.profile.userId);
    console.log(detail);
  },
}
</script>