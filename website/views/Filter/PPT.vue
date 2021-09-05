<template>
  <div class="filter-preview reveal">
    <div class="slides">
      <section><h1>3D LUT</h1></section>

      <section>
        <h2>用途</h2>
        <ul>
          <li class="fragment">设备校准：达芬奇会为不同机型提供预设的校准 LUT；还原屏幕色差</li>
          <li class="fragment">白平衡</li>
          <li class="fragment">风格化调色：滤镜， 可为图片或视频调色。</li>
        </ul>
        <video class="fragment video" data-autoplay src="../../assets/luts/vsco.mp4" controls></video>
      </section>

      <section>
        <h2>色彩通道</h2>
        <p class="fragment">CSS滤镜：作用于整张图片，精细度不够</p>
        <video class="fragment video" data-autoplay src="../../assets/luts/hsl.mp4" controls></video>
      </section>

      <section>
        <h2>LUT - Look Up Table</h2>
        <p>
          事先将颜色值存储在一张缓存表中, 当需要运算的时候直接从这张表中索引出对应的颜色值。维护了颜色的映射关系。
        </p>
        <ul>
          <li>
            <p>1D LUT：三个分量互不影响。 f(x) = y。后缀为 .lut 的文件</p>
            <img class="gap" src="../../assets/luts/1d-lut.jpeg" />
          </li>
          <li>
            <p>3D LUT：f(r, g, b) = (R, G, B)。后缀为 .cube 的文件</p>
            <div class="photo-container fragment">
              <img src="../../assets/luts/3d.jpeg" />
              <img src="../../assets/luts/1d.png" />
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h2>cube 文件</h2>
        <p>可以从 PS、3D LUT Creator、达芬奇等软件上导出。</p>
        <p>纯文本。常用 size：16、33、64</p>
        <img class="fragment gap" src="../../assets/luts/cube.png" />
      </section>
    </div>
  </div>
</template>

<script>
import Reveal from 'reveal.js';

export default {
  name: 'FilterPPT',
  data() {
    return {};
  },
  mounted() {
    Reveal.initialize();
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import '../../../node_modules/reveal.js/dist/reveal.css';
@import '../../../node_modules/reveal.js/dist/theme/night.css';
.filter-preview {
  height: 100vh;

  h1 {
    font-size: 38px;
    font-weight: bold;
  }
  h2 {
    font-size: 34px;
    font-weight: bold;
  }
  h3 {
    font-size: 30px;
  }
  p {
    margin-top: 15px;
  }

  li {
    margin-top: 10px;
  }
  .video {
    display: block;
    width: 250px;
    margin: 15px auto 0;
  }

  ul,
  li {
    list-style: circle;
  }
  .gap {
    margin-top: 20px;
  }

  .photo-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 700px;
    margin: 40px auto 0;
    img {
      width: 250px;
      height: fit-content;
    }
  }
}
</style>
