import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@views/Dashboard.vue'),
  },
  {
    path: '/test',
    name: 'InputTest',
    component: () => import(/* webpackChunkName: "InputTest" */ '@views/InputTest.vue'),
  },
  {
    path: '/debounce',
    name: 'DebounceTest',
    component: () => import(/* webpackChunkName: "DebounceTest" */ '@views/DebounceTest.vue'),
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "NotFound" */ '@views/404.vue'),
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: '/',
  routes,
});

export default router;