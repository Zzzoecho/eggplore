import Button from './src/Button.vue';

// 插件写法 按需引入时用
Button.install = function (Vue) {
  Vue.component(Button.name, Button);
};

export default Button;
