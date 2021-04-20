/**
 * 防抖
 * @param fn
 * @param wait
 * @param immediate {boolean} 是否立即执行
 * @return {function(): void}
 */
function debounce(fn, wait, immediate = false) {
  let timer, result;

  const debounced = function () {
    const self = this;
    const args = arguments;

    if (timer) clearTimeout(timer);

    // 立即执行, 把执行提前到了第一次触发时.
    // 再次执行一定要经过 wait 后才行
    if (immediate) {
      // timer 未定义说明没有在宏任务中的待执行函数, 可以执行
      let callNow = !timer;
      // wait 后, 将 timer 置空
      timer = setTimeout(() => {
        timer = null;
      }, wait);
      if (callNow) result = fn.apply(self, args);
    } else {
      timer = setTimeout(() => {
        fn.apply(self, args);
      }, wait);
    }

    return result;
  };

  debounced.cancel = function () {
    clearTimeout(timer);
  };

  return debounced;
}

export default debounce;
