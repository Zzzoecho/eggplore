import Button from '../packages/button/index';
import EggRow from '../packages/row/index';

const install = function (Vue) {
  Vue.component(Button.name, Button);
  Vue.component(EggRow.name, EggRow);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
};
