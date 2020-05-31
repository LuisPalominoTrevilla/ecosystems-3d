<template>
  <div class="controls">
    <font-awesome-icon
      @click="$emit('toggle-audio', !playAudio)"
      :icon="playAudio ? 'volume-up' : 'volume-mute'"
      class="controls-icon"
    />
    <font-awesome-icon
      @click="resetCameraPosition"
      icon="video"
      class="controls-icon"
    />
  </div>
</template>

<script>
export default {
  name: 'HudControls',

  props: {
    disableCameraReset: {
      type: Boolean,
      required: true
    },
    playAudio: {
      type: Boolean,
      required: true
    }
  },

  methods: {
    resetCameraPosition() {
      if (this.disableCameraReset) return;
      this.$emit('reset-camera-position');
    }
  }
};
</script>

<style lang="scss" scoped>
#hud-controls {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.controls {
  display: inline-block;
  position: absolute;
  bottom: 0;
  right: 0;

  .controls-icon {
    font-size: 3em;
    margin-right: 2rem;
    color: white;
    cursor: pointer;
  }
}
</style>
