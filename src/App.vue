<template>
  <div id="app">
    hello world

    <div class="col">
      <egg-button>Default</egg-button>
      <egg-button size="medium">default medium</egg-button>
      <egg-button size="small">default small</egg-button>
      <egg-button size="mini">default mini</egg-button>
    </div>

    <div class="col">
      <egg-button type="primary">primary</egg-button>
      <egg-button type="secondary">secondary</egg-button>
      <egg-button type="text">text</egg-button>
    </div>
  </div>
</template>

<script>
import { Button } from './packages/Button'

export default {
  name: 'app',
  components: {
    EggButton: Button,
  },
}
</script>

<style>
@import './assets/styles/variables.scss';
#app {
  .col {
    display: flex;
    flex-direction: column;
  }
}
</style>
