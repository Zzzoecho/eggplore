<template>
  <div
    class="egg-preview-image"
    :class="`${circle ? 'preview-image__circle' : ''}`"
    :style="{ minWidth: width + 'px' }"
  >
    <div class="preview-image-wrap" :style="{ paddingTop: getHeight }">
      <div class="fail-image" v-if="url === ''">
        <i class="el-icon-picture-outline"></i>
      </div>
      <div v-else class="thumbnail-wrap">
        <img :src="url" class="thumbnail-image" alt="缩略图" />
        <i class="el-icon-zoom-in" @click.stop="showLargeImage"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Cover from './main';
export default {
  name: 'PreviewImage',
  components: {},
  props: {
    width: {
      type: Number,
      required: true,
      validator: function (val) {
        return !Number.isNaN(val) && val >= 0;
      },
    },
    height: {
      type: Number,
      required: true,
      validator: function (val) {
        return !Number.isNaN(val) && val >= 0;
      },
    },
    circle: {
      type: Boolean,
      required: false,
      default: false,
    },
    photos: {
      type: [Array, String],
      required: false,
    },
    initialIndex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      largeImageVisible: false,
      url: '',
    };
  },
  computed: {
    getHeight() {
      return this.height === 0 && this.url === '' ? 200 : this.height + 'px';
    },
  },
  mounted() {
    this.url = this.getThumbnailImage();
  },
  watch: {
    photos: function (val) {
      this.url = this.getThumbnailImage(val);
    },
    initialIndex: function (val) {
      if (Array.isArray(this.photos)) {
        this.url = this.photos[val].url;
      }
    },
  },
  methods: {
    /**
     * 获取缩略图
     * @param photos 父组件传入的图片地址
     */
    getThumbnailImage(photos = this.photos) {
      if (!photos) {
        return '';
      }

      if (Array.isArray(photos)) {
        return photos[this.initialIndex].url;
      }
      return photos;
    },
    showLargeImage() {
      Cover({
        photos: this.photos,
        initialIndex: this.initialIndex,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.egg-preview-image {
  width: 100%;
  overflow: hidden;
  .preview-image-wrap {
    position: relative;
    width: 100%;
    line-height: 0;
    background-color: #f1f1f1;
    .fail-image {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      min-height: 200px;
      border: 1px solid #ccc;
      .el-icon-picture-outline {
        font-size: 40px;
        color: #aaa;
      }
    }
    .thumbnail-wrap {
      width: 100%;
      user-select: none;
      .thumbnail-image {
        position: absolute;
        top: 50%;
        left: 0;
        z-index: auto;
        width: 100%;
        transform: translateY(-50%);
      }
      .el-icon-zoom-in {
        position: absolute;
        right: 10px;
        bottom: 5px;
        z-index: 100;
        font-size: 22px;
        color: $--color-primary-light-4;
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

  &.preview-image__circle {
    .preview-image-wrap {
      border-radius: 50%;

      .thumbnail-wrap {
        .thumbnail-image {
          border-radius: 50%;
        }

        .el-icon-zoom-in {
          right: -2px;
          bottom: -2px;
          color: $--color-primary;
        }
      }
    }
  }
}
</style>
