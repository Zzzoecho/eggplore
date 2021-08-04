<template>
  <div class="dashboard-page">
    <div class="panel">
      <h4>LARGE BUTTONS</h4>
      <div class="button-list">
        <egg-row>
          <egg-button>hollow</egg-button>
          <egg-button semantic="success">成功按钮</egg-button>
          <egg-button semantic="warning">警告按钮</egg-button>
          <egg-button semantic="info">信息按钮</egg-button>
          <egg-button semantic="danger">危险按钮</egg-button>
        </egg-row>

        <egg-row>
          <egg-button type="primary">primary</egg-button>
          <egg-button type="primary" semantic="success">成功按钮</egg-button>
          <egg-button type="primary" semantic="warning">警告按钮</egg-button>
          <egg-button type="primary" semantic="info">信息按钮</egg-button>
          <egg-button type="primary" semantic="danger">危险按钮</egg-button>
        </egg-row>

        <egg-row>
          <egg-button type="secondary">secondary</egg-button>
          <egg-button type="secondary" semantic="success">成功按钮</egg-button>
          <egg-button type="secondary" semantic="warning">警告按钮</egg-button>
          <egg-button type="secondary" semantic="info">信息按钮</egg-button>
          <egg-button type="secondary" semantic="danger">危险按钮</egg-button>
        </egg-row>

        <egg-row>
          <egg-button type="text">文字按钮</egg-button>
          <egg-button type="text" semantic="success">成功按钮</egg-button>
          <egg-button type="text" semantic="warning">警告按钮</egg-button>
          <egg-button type="text" semantic="info">信息按钮</egg-button>
          <egg-button type="text" semantic="danger">危险按钮</egg-button>
        </egg-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.dashboard-page {
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
