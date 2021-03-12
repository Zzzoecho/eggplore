import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
<<<<<<< HEAD
import Eggplore from '../src/index';

// import Button from '../packages/Button';

Vue.use(VueRouter);

Vue.use(Eggplore);
// Vue.component(Button.name, Button);
=======
import Button from '../packages/Button';
import Row from '../packages/Row';

Vue.use(VueRouter);

Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
>>>>>>> 403806fcc25dede97902182a88cec4b6677c2b2a

const route = new VueRouter({
  mode: 'hash',
  base: __dirname,
});

new Vue({
  route,
  el: '#app',
  render: (h) => h(App),
});
