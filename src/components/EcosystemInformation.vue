<template>
  <div class="container">
    <h1 class="title">Ocean Ecosystem - Coral Reef</h1>
    <p>
      Coral reefs are warm, clear, shallow ocean habitats that are rich in life.
      The coral provides shelter for many animals in this complex habitat,
      including sponges, nudibranchs, fish, jellyfish, anemones, sea stars and
      mollusks.
    </p>
    <p>
      Coral reefs develop in shallow, warm water, usually near land, and mostly
      in the tropics. The Great Barrier Reef (off the coast of NE Australia) is
      the largest coral reef in the world.
    </p>
    <div class="button-container">
      <button>Go Back</button>
    </div>
    <div v-if="shouldShowOrganism" class="organism-info">
      <div class="top">
        <img
          class="organism-image"
          :src="require(`@/assets/coral-reef/${selectedOrganism.image}`)"
          :alt="`${selectedOrganism.name} image`"
        />
        <div>
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
    selectedOrganism: {
      type: Object,
      default: null
    }
  },

  computed: {
    shouldShowOrganism() {
      return this.selectedOrganism !== null;
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
