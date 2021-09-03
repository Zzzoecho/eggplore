<template>
  <div class="css-filter-page">
    <img class="image" :src="img" alt="avatar" />
  </div>
</template>

<script>
import img from '../../assets/bg-1.jpeg';

export default {
  name: 'CssFilter',
  data() {
    return {
      img,
      count: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.css-filter-page {
  .image {
    width: 800px;
  }
}
</style>
