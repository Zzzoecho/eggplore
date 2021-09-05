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
    path: '/filter',
    name: 'FilterPPT',
    component: () => import('@views/Filter/PPT.vue'),
  },
  {
    path: '/filter/css',
    name: 'CssFilter',
    component: () => import(/* webpackChunkName: "CssFilter" */ '@views/Filter/Css.vue'),
  },
  {
    path: '/filter/lut',
    name: 'LutFilter',
    component: () => import(/* webpackChunkName: "LutFilter" */ '@views/Filter/Lut.vue'),
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
