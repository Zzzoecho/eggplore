<template>
  <section class="large-image-modal" v-show="visible">
    <div class="overlay" @click.stop="close"></div>
    <div>
      <el-carousel
        class="cards-img"
        :autoplay="false"
        height="800px"
        trigger="click"
        v-if="Array.isArray(photos)"
        :initial-index="initialIndex"
        :loop="false"
      >
        <el-carousel-item v-for="item in photos" :key="item.id" arrow="always">
          <img :src="item.url" alt="" class="carousel" @click.stop />
        </el-carousel-item>
      </el-carousel>
      <img v-else :src="photos" alt="" class="one-image" @click.stop />
    </div>
  </section>
</template>

<script>
export default {
  name: 'imageCover',
  components: {},
  props: {},
  data() {
    return {
      visible: false,
      photos: [],
      initialIndex: 0,
    };
  },
  mounted() {
    document.addEventListener('keyup', this.keyUpListener);
  },

  beforeDestroy() {
    document.removeEventListener('keyup', this.keyUpListener);
  },
  methods: {
    keyUpListener(e) {
      if (e.keyCode === 27) {
        this.close();
      }
    },
    close() {
      this.visible = false;
      this.$el.parentNode.removeChild(this.$el);
      this.$destroy(true);
    },
  },
};
</script>

<style lang="scss">
.large-image-modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  opacity: 1;
  .overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .cards-img {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1001;
    width: 1000px;
    max-width: 90vw;
    max-height: 90vh;
    transform: translate(-50%, -50%);

    .el-carousel__arrow {
      width: 50px;
      height: 50px;
      font-size: 25px;
    }
    .carousel {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1001;
      width: auto;
      max-width: 90vw;
      height: auto;
      max-height: 90vh;
      transform: translate(-50%, -50%);
    }
  }
  .one-image {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1001;
    width: auto;
    max-width: 90vw;
    height: auto;
    max-height: 90vh;
    transform: translate(-50%, -50%);
  }
}
</style>
