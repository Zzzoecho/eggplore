import "@packages/assets/styles/variables.scss";
import Button from '@packages/Button/src/Button';
import Row from '@packages/Row/src/Row';

export default ({
  Vue, // the version of Vue being used in the VuePress app
}) => {
  Vue.component('Button', Button);
  Vue.component('Row', Row);
};
