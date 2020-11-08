<template>
  <div id="app">
    hello world

    <egg-button plain>plain</egg-button>
    <egg-button type="primary">primary</egg-button>
    <egg-button type="secondary">secondary</egg-button>
    <egg-button type="info">info</egg-button>
  </div>
</template>

<script>
    import {Button} from "./packages/Button";

    export default {
        name: 'app',
        components: {
            EggButton: Button,
        }
    }
</script>

<style>
  @import './assets/styles/variables.scss';
#app {
}
</style>