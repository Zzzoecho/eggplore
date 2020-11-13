import Vue from 'vue';
import App from './App.vue';
import Button from '../packages/Button';

Vue.component(Button.name, Button);

new Vue({
  el: '#app',
  render: (h) => h(App),
});
