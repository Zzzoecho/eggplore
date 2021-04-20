import Vue from 'vue';
import router from './router';

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue';
import Eggplore from '../lib/index.umd';
import '../lib/index.umd.css';

// Vue.use(ElementUI);
Vue.use(Eggplore);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
