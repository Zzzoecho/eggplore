<template>
  <div class="debounce-test">
    <div class="move-area" @mousemove="handleMouseOver">
      {{ count }}
    </div>
    <button @click="cancelDebounce">取消</button>
  </div>
</template>

<script>
import throttle from '../../src/utils/throttle';

export default {
  name: 'DebounceTest',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    // 防抖函数要作为触发事件的 value, 而不是在函数体内执行
    handleMouseOver: throttle(function () {
      this.count++;
    }, 1000),
    cancelDebounce() {
      this.callback.cancel();
    },
  },
};
</script>

<style lang="scss" scoped>
.debounce-test {
  padding: 30px;
  .move-area {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 300px;
    font-size: 28px;
    color: $--color-white;
    background-color: #444;
  }
}
</style>
