<template>
  <div id="container" ref="container"></div>
</template>

<script>
import * as Three from 'three';
import ecosystems from '../ecosystems';

export default {
  name: 'PaintCanvas',

  data() {
    return {
      camera: null,
      ecosystems: [],
      renderer: null,
      mesh: null
    };
  },

  mounted() {
    this.init();
    this.animate();
  },

  methods: {
    init() {
      const container = this.$refs.container;

      this.camera = new Three.PerspectiveCamera(
        70,
        container.clientWidth / container.clientHeight,
        0.01,
        10
      );
      this.camera.position.z = 1;

      this.ecosystems.push(ecosystems.testEcosystem);

      this.renderer = new Three.WebGLRenderer({ antialias: true });
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.ecosystems.forEach(ecosystem => {
        ecosystem.animate();
        this.renderer.render(ecosystem, this.camera);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#container {
  width: 700px;
  height: 600px;
}
</style>
