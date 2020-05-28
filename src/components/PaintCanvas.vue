<template>
  <div ref="container">
    <div id="loading-screen" :class="loading ? '' : 'fade-out'">
      <div id="loader"></div>
    </div>
  </div>
</template>

<script>
import {
  PerspectiveCamera,
  WebGLRenderer,
  Raycaster,
  LoadingManager
} from 'three';
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
      loadingManager: null,
      isTweening: false,
      isMouseDown: false,
      isMouseDrag: false,
      loading: true
    };
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      this.container = this.$refs.container;
      this.loadingManager = new LoadingManager(() => {
        this.loading = false;
        this.animate();
      });

      this.camera = new PerspectiveCamera(
        70,
        this.container.clientWidth / this.container.clientHeight,
        0.01,
        100
      );
      this.camera.position.z = 15;
      this.camera.position.y = 8;
      this.raycaster = new Raycaster();

      this.ecosystems.push(
        new ecosystems.coralReefEcosystem(this.loadingManager)
      );

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
      const selectedEcosystem = this.ecosystems[this.selectedEcosystem];
      selectedEcosystem.animate();
      this.renderer.render(selectedEcosystem, this.camera);
      TWEEN.update();
      this.orbitControls.update();
      requestAnimationFrame(this.animate);
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
#loading-screen {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 1;
  transition: 1s opacity;
}

#loading-screen.fade-out {
  opacity: 0;
  pointer-events: none;
}

#loader {
  display: block;
  position: relative;
  left: 50%;
  top: 50%;
  width: 150px;
  height: 150px;
  margin: -75px 0 0 -75px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #9370db;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}
#loader:before {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #ba55d3;
  -webkit-animation: spin 3s linear infinite;
  animation: spin 3s linear infinite;
}
#loader:after {
  content: '';
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #ff00ff;
  -webkit-animation: spin 1.5s linear infinite;
  animation: spin 1.5s linear infinite;
}
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
