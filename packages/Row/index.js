import EggRow from './src/row.vue';

// 插件写法 按需引入时用
EggRow.install = function (Vue) {
  Vue.component(EggRow.name, EggRow);
};

export default EggRow;
