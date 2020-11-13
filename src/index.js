import Button from '../packages/Button/index';

const install = function (Vue) {
  Vue.components(Button.name, Button);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
};
