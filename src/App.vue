<template>
  <div id="app">
    <paint-canvas class="paint-canvas" />
    <div class="ui-controls"><p>Hello UI</p></div>
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
    flex: 4;
    height: 100%;
    position: relative;
  }

  .ui-controls {
    flex: 1;
  }
}
</style>
