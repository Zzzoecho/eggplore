import Button from '../packages/button/index';

const install = function (Vue) {
  Vue.component(Button.name, Button);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
};
