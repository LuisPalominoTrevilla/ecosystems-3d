<template>
  <div id="app">
    <interactive-screen
      :selected-ecosystem="selectedEcosystem"
      class="interactive-screen"
    />
    <div class="ui-controls"><p>Hello UI</p></div>
  </div>
</template>

<script>
import InteractiveScreen from './components/InteractiveScreen';
import ecosystems from './ecosystems';

export default {
  name: 'App',

  components: {
    InteractiveScreen
  },

  data() {
    return {
      selectedEcosystem: ecosystems.coralReefEcosystem
    };
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

  .interactive-screen {
    flex: 4;
    height: 100%;
    position: relative;
  }

  .ui-controls {
    flex: 1;
  }
}
</style>
