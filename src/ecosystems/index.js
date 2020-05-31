import Jungle from './jungle';
import CoralReefEcosystem from './coral-reef-ecosystem';

export default {
  'coral-reef': {
    name: 'Ocean Ecosystem - Coral Reef',
    id: 'coral-reef',
    class: CoralReefEcosystem,
    description: [
      'Coral reefs are warm, clear, shallow ocean habitats that are rich in life. The coral provides shelter for many animals in this complex habitat, including sponges, nudibranchs, fish, jellyfish, anemones, sea stars and mollusks.',
      'Coral reefs develop in shallow, warm water, usually near land, and mostly in the tropics. The Great Barrier Reef (off the coast of NE Australia) is the largest coral reef in the world.'
    ]
  },
  'jungle': {
    name: 'Jungle Ecosystem - Tropical Forest',
    id: 'jungle',
    class: Jungle,
    description: [
      "Tropical forests are some of the richest, most exciting areas on earth. They are home to gigantic trees, colourful birds and a huge variety of fascinating mammals.",
      "About 80% of the world's documented species can be found in tropical rainforests, even though they cover only about 6% of the Earth's land surface - less than half the area they covered not so very long ago."
    ]
  }
};
