import CoralReefEcosystem from './coral-reef-ecosystem';

export default {
  'coral-reef': {
    name: 'Ocean Ecosystem - Coral Reef',
    id: 'coral-reef',
    class: CoralReefEcosystem,
    description: [
      'Coral reefs are warm, clear, shallow ocean habitats that are rich in life. The coral provides shelter for many animals in this complex habitat, including sponges, nudibranchs, fish, jellyfish, anemones, sea stars and mollusks.',
      'Coral reefs develop in shallow, warm water, usually near land, and mostly in the tropics. The Great Barrier Reef (off the coast of NE Australia) is the largest coral reef in the world.'
    ],
    menuOptions: {
      spotLight: [0xfff9a6, 2, 0, 0.7, 0.5],
      lightPosition: [10, 3.5, -4],
      rectPosition: [5.5, 2, -2],
      rectDimensions: [4.5, 4.5, 1],
      rectRotation: [0.9, -Math.PI / 3, Math.PI / 4]
    }
  }
};
