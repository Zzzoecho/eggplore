import EggButton from './src/button.vue';

// 插件写法 按需引入时用
EggButton.install = function (Vue) {
  Vue.component(EggButton.name, EggButton);
};

export default EggButton;
