import Vue from 'vue';
import imageCover from './imageCover';

const ImageCoverConstructor = Vue.extend(imageCover);

const Cover = function (options) {
  if (Vue.prototype.$isServer) return;
  options = options || {};
  if (typeof options === 'string') {
    options = {
      url: options,
    };
  }

  const instance = new ImageCoverConstructor({ data: options });
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;
  return instance.vm;
};

export default Cover;
