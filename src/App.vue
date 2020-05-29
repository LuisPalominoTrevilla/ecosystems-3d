<template>
  <div id="app">
    <interactive-screen
      :selected-ecosystem="selectedEcosystem"
      class="interactive-screen"
      @select-organism="selectOrganism"
    />
    <ecosystem-information
      :selected-organism="selectedOrganism"
      class="ecosystem-information"
    />
  </div>
</template>

<script>
import InteractiveScreen from './components/InteractiveScreen';
import EcosystemInformation from './components/EcosystemInformation';
import ecosystems from './ecosystems';
import Constants from './constants';

export default {
  name: 'App',

  components: {
    InteractiveScreen,
    EcosystemInformation
  },

  data() {
    return {
      selectedEcosystem: ecosystems.coralReefEcosystem,
      selectedOrganism: null
    };
  },

  methods: {
    selectOrganism(organismName) {
      this.selectedOrganism =
        Constants.floraFaunaInformation[organismName] ?? null;
    }
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
