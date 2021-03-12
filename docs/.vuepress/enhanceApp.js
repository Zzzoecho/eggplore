import "@packages/assets/styles/variables.scss";
import Title from './Title';
import Button from '@packages/button/src/button';

export default ({
  Vue, // the version of Vue being used in the VuePress app
}) => {
  Vue.component('Title-Test', Title);
  Vue.component('Button', Button);
};
