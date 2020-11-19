import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Button from '../packages/Button';

Vue.use(VueRouter);

Vue.component(Button.name, Button);

const route = new VueRouter({
  mode: 'hash',
  base: __dirname,
});

new Vue({
  route,
  el: '#app',
  render: (h) => h(App),
});
