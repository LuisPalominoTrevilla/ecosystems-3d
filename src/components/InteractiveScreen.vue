<template>
  <div>
    <div id="container" ref="container"></div>
    <loading-screen :loading="loading" />
    <hud-controls
      v-show="!isInMenuScreen"
      :play-audio="playAudio"
      :disable-camera-reset="isTweening"
      @toggle-audio="toggleAudio"
      @reset-camera-position="resetCameraPosition"
    />
  </div>
</template>

<script>
import {
  PerspectiveCamera,
  WebGLRenderer,
  Raycaster,
  LoadingManager,
  Vector3
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import TWEEN from '@tweenjs/tween.js';
import BaseEcosystem from '../ecosystems/base-ecosystem';
import Model from '../models/model';
import LoadingScreen from './LoadingScreen';
import HudControls from './HudControls';
import MenuScreen from '../menu/menu-screen';
import InvisibleModel from '../models/invisible-model';

export default {
  name: 'InteractiveScreen',

  components: {
    LoadingScreen,
    HudControls
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
      initialCameraPosition: [0, 8, 15],
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
      loading: false,
      playAudio: false
    };
  },

  watch: {
    selectedEcosystem: {
      immediate: true,
      handler(ecosystem) {
        this._createLoaderInstance();
        this._loadNewScene(ecosystem);
      }
    }
  },

  mounted() {
    this.init();
    this.animate();
  },

  computed: {
    isInMenuScreen() {
      return this.menu !== null;
    }
  },

  methods: {
    _loadNewScene(ecosystem) {
      this.loading = true;
      this.toggleAudio(false);
      TWEEN.removeAll();

      if (this.camera) this.camera.position.set(...this.initialCameraPosition);
      if (this.orbitControls) {
        this.toggleOrbitControls(true);
        this.orbitControls.target.set(0, 0, 0);
      }
      if (ecosystem === null) {
        this.initMenuScreen();
      } else {
        this.initEcosystem(ecosystem.class);
      }
    },

    init() {
      this.container = this.$refs.container;

      this.camera = new PerspectiveCamera(
        70,
        this.container.clientWidth / this.container.clientHeight,
        0.01,
        100
      );
      this.camera.position.set(...this.initialCameraPosition);
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
          if (!this.isMouseDrag || this.isInMenuScreen) this.onMouseClick(evt);
          this.isMouseDown = false;
          this.isMouseDrag = false;
        },
        false
      );
    },

    initEcosystem(Ecosystem) {
      this.menu = null;
      this.ecosystem = new Ecosystem(this.loadingManager);
    },

    initMenuScreen() {
      this.ecosystem = null;
      this.menu = new MenuScreen(this.loadingManager);
    },

    animate() {
      if (this.ecosystem) {
        TWEEN.update();
        this.orbitControls.update();
        this.renderer.render(this.ecosystem, this.camera);
      } else if (this.menu) {
        this.orbitControls.update();
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

    _createLoaderInstance() {
      if (this.loadingManager) return;
      this.loadingManager = new LoadingManager(() => {
        this.loading = false;
      });
    },

    onMouseClick(event) {
      if (this.isInMenuScreen) {
        this._menuOnClick(event);
      } else {
        this._ecosystemOnClick(event);
      }
    },

    _menuOnClick(event) {
      const rect = event.target.getBoundingClientRect();
      const mouse3D = {
        x: (2 * (event.clientX - rect.left)) / this.container.clientWidth - 1,
        y: (2 * (rect.top - event.clientY)) / this.container.clientHeight + 1
      };
      this.raycaster.setFromCamera(mouse3D, this.camera);
      const intersects = this.raycaster.intersectObjects(
        this.menu.children,
        true
      );
      const distanceToCenter = this.camera.position.distanceTo(
        new Vector3(0, 0, 0)
      );
      for (let intersect of intersects) {
        if (
          intersect.object instanceof InvisibleModel &&
          intersect.distance < distanceToCenter
        ) {
          this.$emit('select-ecosystem', intersect.object.name);
          break;
        }
      }
    },

    _ecosystemOnClick(event) {
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
    },

    resetCameraPosition() {
      const position = new Vector3(...this.initialCameraPosition);
      const target = new Vector3(0, 0, 0);
      this.$emit('deselect-organism');
      this.tweenCam(target, position, 1600);
    },

    toggleAudio(play) {
      if (!this.ecosystem) return;
      if (play) {
        this.playAudio = true;
        this.ecosystem.playAudio();
      } else {
        this.playAudio = false;
        this.ecosystem.stopAudio();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#container {
  height: 100%;
}

::v-deep canvas {
  outline: none;
}
</style>
