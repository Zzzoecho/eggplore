<template>
  <div class="container">
    <div class="column">
      <h4 class="title">Type</h4>
      <egg-input placeholder="Placeholder" />
      <egg-input placeholder="test" />
    </div>

    <div class="column">
      <h4 class="title">PASSWORD</h4>
      <egg-input type="password" placeholder="Password" />
    </div>
  </div>
</template>

<script>
import EggInput from '../packages/input/index';

export default {
  name: 'InputTest',
  components: {
    EggInput,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 20px;
  grid-column-gap: 40px;

  .column {
    .title {
      margin-bottom: 15px;
    }
    .egg-input {
      margin-bottom: 15px;
    }
  }
}
</style>
