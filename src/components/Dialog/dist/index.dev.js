"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _vue = _interopRequireDefault(require("vue"));

var _Dialog = _interopRequireDefault(require("./Dialog.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log(_Dialog["default"]); // 创建一个Dialog的vue子类

function _default(option) {
  return new Promise(function (resolve, reject) {
    var VueDialog = _vue["default"].extend(_Dialog["default"]);

    var instanceOfDialog = new VueDialog({
      data: function data() {
        return {
          title: option.title,
          message: option.message,
          visible: true
        };
      },
      methods: {
        resolve: resolve,
        reject: reject
      }
    });
    instanceOfDialog.$mount();
    document.querySelector('body').appendChild(instanceOfDialog.$el);
  });
} // console.log(instanceOfDialog);
// Dialog.install = function (V) {
//   V.component(this.name, this);
// };
// export default Dialog;