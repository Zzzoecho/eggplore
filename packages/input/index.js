import EggInput from './src/input.vue';

// 插件写法 按需引入时用
EggInput.install = function (Vue) {
  Vue.component(EggInput.name, EggInput);
};

export default EggInput;
