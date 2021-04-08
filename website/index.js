import Vue from 'vue';
import VueRouter from 'vue-router';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue';
import Eggplore from '../lib/index.umd';
import '../lib/index.umd.css';

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Eggplore);

const route = new VueRouter({
  mode: 'hash',
  base: __dirname,
});

const app = new Vue({
  route,
  el: '#app',
  render: (h) => h(App),
});
