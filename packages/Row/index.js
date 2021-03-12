import Row from './src/Row.vue';

// 插件写法 按需引入时用
Row.install = function (Vue) {
  Vue.component(Row.name, Row);
};

export default Row;
