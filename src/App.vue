<template>
  <div id="app">
    <interactive-screen
      :selected-ecosystem="selectedEcosystem"
      class="interactive-screen"
    />
    <ecosystem-information class="ecosystem-information" />
  </div>
</template>

<script>
import InteractiveScreen from './components/InteractiveScreen';
import EcosystemInformation from './components/EcosystemInformation';
import ecosystems from './ecosystems';

export default {
  name: 'App',

  components: {
    InteractiveScreen,
    EcosystemInformation
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
    flex: 10;
    height: 100%;
    position: relative;
  }

  .ecosystem-information {
    flex: 3;
  }
}
</style>
