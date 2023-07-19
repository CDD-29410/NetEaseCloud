"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Drawer = _interopRequireDefault(require("../Drawer.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// export default {
//     install(V){
//         V.component(Drawer.name,Drawer)
//     }
// }
_Drawer["default"].install = function (V) {
  V.component(this.name, this);
};

var _default = _Drawer["default"];
exports["default"] = _default;