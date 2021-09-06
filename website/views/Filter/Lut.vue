<template>
  <div class="lut-page">
    <canvas id="canvas"></canvas>

    <div class="operate">
      <input type="file" @change="fileChange" />
      <egg-button :disabled="cube.length === 0" @click="getData">应用滤镜</egg-button>
    </div>
  </div>
</template>

<script>
import EggInput from '@packages/input';
import EggButton from '@packages/button';
import imgUrl from '../../assets/arapaho-origin.jpeg';

const N = 33;

export default {
  name: 'LutFilter',
  components: {
    EggInput,
    EggButton,
  },
  data() {
    return {
      imgUrl,
      cube: [],
    };
  },
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      img.src = this.imgUrl;

      img.onload = function (e) {
        const { width, height } = e.target;
        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(img, 0, 0);
      };
    },
    fileChange(e) {
      const reader = new FileReader();
      reader.readAsText(e.target.files[0]);
      reader.onload = () => {
        const res = reader.result.split('\n');
        this.cube = res.slice(9, reader.result.length).map((line) => line.split(' ').map((e) => Number(e)));
      };
    },
    getData() {
      const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixel = imageData.data;

      for (let i = 0; i < pixel.length; i += 4) {
        // 将颜色分量转换到 [0, N - 1] 之间
        let red = (pixel[i] / 255) * (N - 1);
        let green = (pixel[i + 1] / 255) * (N - 1);
        let blue = (pixel[i + 2] / 255) * (N - 1);

        // 小数, 分别向上 & 向下取整
        let redH = Math.ceil(red);
        let redL = Math.floor(red);

        let greenH = Math.ceil(green);
        let greenL = Math.floor(green);

        let blueH = Math.ceil(blue);
        let blueL = Math.floor(blue);

        // 得到映射后的 最大 和 最小 的颜色值
        let indexH = this.cubeIndex(redH, greenH, blueH);
        let indexL = this.cubeIndex(redL, greenL, blueL);

        const toColorH = this.cube[indexH];
        const toColorL = this.cube[indexL];

        // 插值计算实际的色值
        const toR = this.mix(toColorL[0], toColorH[0], red);
        const toG = this.mix(toColorL[1], toColorH[1], green);
        const toB = this.mix(toColorL[2], toColorH[2], blue);

        pixel[i] = parseInt(toR * 255, 10);
        pixel[i + 1] = parseInt(toG * 255, 10);
        pixel[i + 2] = parseInt(toB * 255, 10);
      }

      // 渲染
      ctx.putImageData(imageData, 0, 0);
    },
    cubeIndex(r, g, b) {
      return r + g * N + b * N * N;
    },
    // 相差的部分 * 小数部分 得到 倾向
    mix(a, b, c) {
      return (b - a) * (c - Math.floor(c)) + a;
    },
  },
};
</script>

<style lang="scss">
.lut-page {
  display: flex;
  padding: 20px;

  #canvas {
    width: 70vw;
  }

  //input {
  //  padding: 10px;
  //  border: 1px solid $--color-border-base;
  //  border-radius: 4px;
  //  outline: none;
  //}

  .operate {
    display: flex;
    flex-direction: column;
    width: 25vw;
    margin-left: 20px;

    input {
      margin-bottom: 20px;
    }

    .egg-button {
      max-width: 200px;
    }
  }
}
</style>
