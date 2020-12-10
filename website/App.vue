<template>
  <div id="app">
    <div class="panel">
      <h4>LARGE BUTTONS</h4>
      <ul class="button-list">
        <li>
          <egg-button type="primary">PRIMARY</egg-button>
          <egg-button type="primary" disabled>PRIMARY</egg-button>
        </li>
        <li>
          <egg-button type="secondary">secondary</egg-button>
          <egg-button type="secondary" disabled>secondary</egg-button>
        </li>
        <li>
          <egg-button>DEFAULT</egg-button>
          <egg-button disabled>DEFAULT</egg-button>
        </li>
        <!--        <li>-->
        <!--          <egg-button type="primary">PRIMARY</egg-button>-->
        <!--          <egg-button type="primary" disabled>PRIMARY</egg-button>-->
        <!--        </li>-->
        <li>
          <egg-button type="text">text</egg-button>
          <egg-button type="text" disabled>text</egg-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
};
</script>

<style lang="scss">
#app {
  padding: 20px;
  .panel {
    .button-list {
      display: flex;
      flex-direction: column;
      margin-top: 30px;
      li {
        display: flex;
        margin-bottom: 40px;
        .egg-button:first-of-type {
          margin-right: 40px;
        }
      }
    }
  }
}
</style>
