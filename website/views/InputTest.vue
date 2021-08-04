<template>
  <div class="container">
    <egg-input placeholder="Place" />
    <egg-input type="password" />
    <egg-input size="mini" />
  </div>
</template>

<script>
import EggInput from '@packages/input';

export default {
  name: 'InputTest',
  components: {
    EggInput,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.container {
  .egg-input {
    margin-bottom: 15px;
  }
}
</style>
