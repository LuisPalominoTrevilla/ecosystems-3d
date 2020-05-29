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
    <div class="item-info">
      <div class="top">
        <img
          class="item-image"
          src="https://cdn.powered-by-nitrosell.com/product_images/11/2575/large-common%20clown.jpg"
          alt="clown-fish image"
        />
        <div>
          <h2>Clown Fish</h2>
          <p class="scientific-name">Amphiprioninae</p>
        </div>
      </div>
      <p class="item-description">
        Clown fish are small fish that live among anemone. Scientists think that
        the Clown fish may be coated with a mucous that protects it from the
        poison. The clown fish helps the anemone by cleaning it and perhaps by
        scaring away predators of the anemone.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  background-color: rgb(21, 32, 43);
  color: #ffffff;
  padding: 3rem 2rem;
  overflow-y: scroll;

  .item-info {
    padding: 2rem;
    border: 1px solid #444444;

    .top {
      display: flex;
      justify-content: space-around;

      @media screen and (max-width: 1280px) {
        flex-direction: column;
      }
    }

    .item-image {
      width: 12rem;
      border-radius: 12px;
    }

    .scientific-name {
      font-style: italic;
    }

    .item-description {
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
