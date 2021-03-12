import Button from './src/button.vue';

// 插件写法 按需引入时用
Button.install = function (Vue) {
  Vue.component(Button.name, Button);
};

export default Button;
