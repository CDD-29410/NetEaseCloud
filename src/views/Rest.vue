<template>
  <div>
    <h1 @click="count++">{{ count }}</h1>
    <ul>
      <li v-for="item in arr" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue';
function initO() {
  let _a = 1;
  return {
    // 对象a属性的存值器
    // 拦截了属性的赋值操作
    set a(v) {
      _a = Math.pow(v, 2);
      document.body.innerHTML = `<h1>${this.a}</h1>`;
      // diff
    },
    // 对象a属性的取值器
    get a() {
      return _a;
    },
    b: 2,
  };
}
function reactive(data = {}) {
  // ['a', 'b', 'c']
  Object.keys(data).forEach(function (key) {
    let _ = {};
    _[key] = data[key];
    Object.defineProperty(data, key, {
      set(v) {
        _[key] = v;
        document.body.innerHTML = `<h1>${this[key]}</h1>`;
      },
      get() {
        return _[key];
      },
    });
  });
  return data;
}
window.r = reactive({ a: { a: 1, b: 2, c: 3 }, b: 2, c: 3 });
// r.a = 1;
// r.a = 1;
// r.a = 1
window.o = initO();
//data中的数据变化(同步)→数据对应的视图更新(异步)

export default {
  data() {
    return {
      count: 123,
      arr: [1, 2, 3],
    };
  },
  methods: {
    fn() {
      this.count++;
    },
    addNewProp() {
      this.a = 1;
    }
  },
  created() {
    window.rest = this;
  },
};
</script>