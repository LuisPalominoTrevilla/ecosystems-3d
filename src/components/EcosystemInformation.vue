<template>
  <div class="container">
    <div v-if="shouldShowEcosystem">
      <h1 class="title">{{ selectedEcosystem.name }}</h1>
      <p v-for="(paragraph, i) in selectedEcosystem.description" :key="i">
        {{ paragraph }}
      </p>
      <div class="button-container">
        <button @click="$emit('go-back')">Go Back</button>
      </div>
    </div>
    <div v-if="shouldShowOrganism" class="organism-info">
      <div class="top">
        <img
          class="organism-image"
          :src="
            require(`@/assets/${selectedEcosystem.id}/${selectedOrganism.image}`)
          "
          :alt="`${selectedOrganism.name} image`"
        />
        <div class="organism-name">
          <h2>{{ selectedOrganism.name }}</h2>
          <p class="scientific-name">{{ selectedOrganism.scientificName }}</p>
        </div>
      </div>
      <p class="organism-description">
        {{ selectedOrganism.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EcosystemInformation',

  props: {
    selectedEcosystem: {
      type: Object,
      default: null
    },
    selectedOrganism: {
      type: Object,
      default: null
    }
  },

  computed: {
    shouldShowOrganism() {
      return this.selectedOrganism !== null;
    },

    shouldShowEcosystem() {
      return this.selectedEcosystem !== null;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: rgb(21, 32, 43);
  color: #ffffff;
  padding: 3rem 2rem;
  overflow-y: scroll;

  .organism-info {
    padding: 2rem;
    border: 1px solid #444444;

    .top {
      display: flex;
      justify-content: space-around;

      @media screen and (max-width: 1280px) {
        flex-direction: column;
      }
    }

    .organism-image {
      width: 12rem;
      border-radius: 12px;
    }

    .organism-name {
      text-align: center;
    }

    .scientific-name {
      font-style: italic;
    }

    .organism-description {
      margin-top: 2rem;
    }
  }

  .button-container {
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: flex-end;

    button {
      border: none;
      background-color: rgb(18, 69, 121);
      color: white;
      font-size: 22px;
      padding: 0.5rem 2rem;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  .title {
    text-align: center;
  }

  p {
    font-size: 22px;
  }
}
</style>
