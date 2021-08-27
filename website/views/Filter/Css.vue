<template>
  <div class="css-filter-page">
    <div class="image"></div>
    {{ img }}
    {{ require('../../assets/bg-1.jpeg') }}
    <img class="image-bg" :src="img" alt="avatar" />
    <img class="image-bg" :src="require('../../assets/01.jpg').default" alt="avatar" />
    <img class="image-bg" src="../../assets/bg-1.jpeg" alt="avatar" />
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
    width: 200px;
    height: 200px;
    background-image: url('../../assets/bg-2.jpeg');
  }

  img {
    width: 200px;
    height: 200px;
  }
}
</style>
