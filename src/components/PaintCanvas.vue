<template>
  <div id="container" ref="container"></div>
</template>

<script>
import { PerspectiveCamera, WebGLRenderer, Raycaster } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import TWEEN from '@tweenjs/tween.js';
import ecosystems from '../ecosystems';
import BaseEcosystem from '../ecosystems/base-ecosystem';
import Model from '../models/model';

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
      mesh: null,
      isTweening: false,
      isMouseDown: false,
      isMouseDrag: false
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
      this.container.addEventListener(
        'mousedown',
        () => (this.isMouseDown = true),
        false
      );
      this.container.addEventListener(
        'mousemove',
        () => {
          if (this.isMouseDown) this.isMouseDrag = true;
        },
        false
      );
      this.container.addEventListener(
        'mouseup',
        evt => {
          if (!this.isMouseDrag) this.onMouseClick(evt);
          this.isMouseDown = false;
          this.isMouseDrag = false;
        },
        false
      );
    },

    animate() {
      requestAnimationFrame(this.animate);
      const selectedEcosystem = this.ecosystems[this.selectedEcosystem];
      selectedEcosystem.animate();
      this.renderer.render(selectedEcosystem, this.camera);
      TWEEN.update();
      this.orbitControls.update();
    },

    async tweenCam(target, position, tweenDuration) {
      this.toggleOrbitControls(false);
      TWEEN.removeAll();

      const { x: xTarget, y: yTarget, z: zTarget } = target;
      const { x: xPosition, y: yPosition, z: zPosition } = position;

      const camNewPosition = { x: xPosition, y: yPosition, z: zPosition };
      const targetNewPos = { x: xTarget, y: yTarget, z: zTarget };

      await Promise.all([
        new Promise(resolve =>
          new TWEEN.Tween(this.camera.position)
            .to(camNewPosition, tweenDuration)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onComplete(resolve)
            .start()
        ),
        new Promise(resolve =>
          new TWEEN.Tween(this.orbitControls.target)
            .to(targetNewPos, tweenDuration)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onComplete(resolve)
            .start()
        )
      ]);

      this.toggleOrbitControls(true);
    },

    toggleOrbitControls(enable) {
      this.orbitControls.enableZoom = enable;
      this.orbitControls.enableRotate = enable;
      this.orbitControls.enablePan = enable;
      this.isTweening = !enable;
    },

    onMouseClick(event) {
      if (this.isTweening) return;
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
        while (!(object.parent instanceof BaseEcosystem)) {
          object = object.parent;
        }
        if (object instanceof Model) {
          this.tweenCam(object.position, object.spectatorPosition, 2000);
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
