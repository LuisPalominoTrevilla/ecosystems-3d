<template>
  <div id="app">
    <interactive-screen
      :selected-ecosystem="selectedEcosystem"
      class="interactive-screen"
      @select-ecosystem="selectEcosystem"
      @select-organism="selectOrganism"
    />
    <ecosystem-information
      :selected-ecosystem="selectedEcosystem"
      :selected-organism="selectedOrganism"
      class="ecosystem-information"
      @go-back="exitEcosystem"
    />
  </div>
</template>

<script>
import InteractiveScreen from './components/InteractiveScreen';
import EcosystemInformation from './components/EcosystemInformation';
import ecosystems from './ecosystems';
import Organisms from './organisms';

export default {
  name: 'App',

  components: {
    InteractiveScreen,
    EcosystemInformation
  },

  data() {
    return {
      selectedEcosystem: null,
      selectedOrganism: null
    };
  },

  methods: {
    selectEcosystem(ecosystemName) {
      this.selectedEcosystem = ecosystems[ecosystemName];
    },

    selectOrganism(organismName) {
      this.selectedOrganism =
        Organisms[this.selectedEcosystem.id][organismName] ?? null;
    },

    exitEcosystem() {
      this.selectedEcosystem = null;
      this.selectedOrganism = null;
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
