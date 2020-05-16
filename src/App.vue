<template>
  <div id="app">
    <paint-canvas class="paint-canvas" />
  </div>
</template>

<script>
import PaintCanvas from './components/PaintCanvas';

export default {
  name: 'App',
  components: {
    PaintCanvas
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  margin: 0;
}

#app {
  display: flex;
  height: 100%;

  .paint-canvas {
    flex: 2;
    height: 100%;
  }
}
</style>
