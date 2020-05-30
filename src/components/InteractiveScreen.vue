<template>
  <div ref="container">
    <loading-screen :loading="loading" />
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
import BaseEcosystem from '../ecosystems/base-ecosystem';
import Model from '../models/model';
import LoadingScreen from './LoadingScreen';
import MenuScreen from '../models/menu-screen';

export default {
  name: 'InteractiveScreen',

  components: {
    LoadingScreen
  },

  props: {
    selectedEcosystem: {
      type: Object,
      required: false
    }
  },

  data() {
    return {
      camera: null,
      orbitControls: null,
      ecosystem: null,
      menu: null,
      renderer: null,
      raycaster: null,
      container: null,
      loadingManager: null,
      isTweening: false,
      isMouseDown: false,
      isMouseDrag: false,
      loading: false
    };
  },

  watch: {
    selectedEcosystem: {
      immediate: true,
      handler(ecosystem) {
        this.createLoaderInstance();
        this.loading = true;
        if (ecosystem === null) {
          this.initMenuScreen();
        } else {
          this.initEcosystem(ecosystem.class);
        }
      }
    }
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

    initEcosystem(Ecosystem) {
      // TODO: Dispose other scene and start loading
      this.ecosystem = new Ecosystem(this.loadingManager);
    },

    initMenuScreen() {
      // TODO: Set loading?
      this.menu = new MenuScreen(this.loadingManager);
    },

    animate() {
      if (this.ecosystem) {
        this.ecosystem.animate();
        TWEEN.update();
        this.orbitControls.update();
        this.renderer.render(this.ecosystem, this.camera);
      } else if (this.menu) {
        this.renderer.render(this.menu, this.camera);
        this.menu.animate();
      }
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

    createLoaderInstance() {
      if (this.loadingManager) return;
      this.loadingManager = new LoadingManager(() => {
        this.loading = false;
      });
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
        this.ecosystem.children,
        true
      );
      if (intersects.length > 0) {
        let object = intersects[0].object;
        while (!(object.parent instanceof BaseEcosystem)) {
          object = object.parent;
        }
        if (object instanceof Model) {
          this.$emit('select-organism', object.name);
          this.tweenCam(object.position, object.spectatorPosition, 2000);
        }
      }
    }
  }
};
</script>
