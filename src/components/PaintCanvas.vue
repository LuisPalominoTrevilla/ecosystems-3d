<template>
  <div id="container" ref="container"></div>
</template>

<script>
import {
  PerspectiveCamera,
  WebGLRenderer,
  Scene,
  Raycaster,
  Group
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import ecosystems from '../ecosystems';

export default {
  name: 'PaintCanvas',

  data() {
    return {
      camera: null,
      orbitControls: null,
      ecosystems: [],
      selectedEcosystem: 0,
      renderer: null,
      raycaster: null,
      container: null,
      mesh: null
    };
  },

  mounted() {
    this.init();
    this.animate();
  },

  methods: {
    init() {
      this.container = this.$refs.container;

      this.camera = new PerspectiveCamera(
        70,
        this.container.clientWidth / this.container.clientHeight,
        0.01,
        100
      );
      this.camera.position.z = 15;
      this.camera.position.y = 8;
      this.raycaster = new Raycaster();

      this.ecosystems.push(ecosystems.coralReefEcosystem);

      this.renderer = new WebGLRenderer({ antialias: true });
      this.renderer.setSize(
        this.container.clientWidth,
        this.container.clientHeight
      );

      this.orbitControls = new OrbitControls(
        this.camera,
        this.renderer.domElement
      );
      this.container.appendChild(this.renderer.domElement);
      this.container.addEventListener('mousedown', this.onMouseClick, false);
    },

    animate() {
      requestAnimationFrame(this.animate);
      const selectedEcosystem = this.ecosystems[this.selectedEcosystem];
      selectedEcosystem.animate();
      this.renderer.render(selectedEcosystem, this.camera);
    },

    onMouseClick(event) {
      const rect = event.target.getBoundingClientRect();
      const mouse3D = {
        x: (2 * (event.clientX - rect.left)) / this.container.clientWidth - 1,
        y: (2 * (rect.top - event.clientY)) / this.container.clientHeight + 1
      };
      this.raycaster.setFromCamera(mouse3D, this.camera);
      const intersects = this.raycaster.intersectObjects(
        this.ecosystems[this.selectedEcosystem].children,
        true
      );
      if (intersects.length > 0) {
        let object = intersects[0].object;
        while (!(object.parent instanceof Scene)) {
          object = object.parent;
        }
        if (object instanceof Group && object.viewPosition) {
          const { x: posx, y: posy, z: posz } = object.viewPosition;
          this.camera.position.set(posx, posy, posz);
          const { x, y, z } = object.position;
          this.orbitControls.target.set(x, y, z);
          this.orbitControls.update();
        }
      }
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
