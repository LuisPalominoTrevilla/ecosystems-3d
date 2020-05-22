<template>
  <div id="container" ref="container"></div>
</template>

<script>
import { PerspectiveCamera, WebGLRenderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
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

      this.camera = new PerspectiveCamera(
        70,
        container.clientWidth / container.clientHeight,
        0.01,
        100
      );
      this.camera.position.z = 15;
      this.camera.position.y = 8;

      this.ecosystems.push(ecosystems.coralReefEcosystem);

      this.renderer = new WebGLRenderer({ antialias: true });
      this.renderer.setSize(container.clientWidth, container.clientHeight);

      new OrbitControls(this.camera, this.renderer.domElement);
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
