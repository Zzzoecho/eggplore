// /**
//  * 节流, 时间戳版
//  * @param fn
//  * @param wait
//  * @return {function(): void}
//  */
// function throttle(fn, wait) {
//   let prev = 0;
//   return function () {
//     const now = new Date().getTime();
//     const self = this;
//     const args = arguments;
//
//     console.log('prev', prev, 'now', now);
//
//     if (now - prev > wait) {
//       fn.apply(self, args);
//       prev = now;
//     }
//   };
// }

// /**
//  * 定时器版
//  * @param fn
//  * @param wait
//  * @return {function(): void}
//  */
// function throttle(fn, wait) {
//   let timer;
//   return function () {
//     const self = this;
//     const args = arguments;
//     if (!timer) {
//       timer = setTimeout(function () {
//         fn.apply(self, args);
//         timer = null;
//       }, wait);
//     }
//   };
// }

/**
 *
 * @param fn
 * @param wait
 * @param options {leading: Boolean, trailing: Boolean} 不能同时设置
 * @return {function(): void}
 */
function throttle(fn, wait, options = {}) {
  let prev = 0;
  let timer;

  return function () {
    const now = +new Date();
    if (!prev && options.leading === false) {
      prev = now;
    }
    const self = this;
    const args = arguments;
    const remaining = wait - (now - prev);
    if (remaining <= 0) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      prev = now;
      fn.apply(self, args);
    } else if (!timer && options.trailing !== false) {
      timer = setTimeout(function () {
        fn.apply(self, args);
        timer = null;
        prev = options.leading ? +new Date() : 0;
      }, remaining);
    }
  };
}

export default throttle;
