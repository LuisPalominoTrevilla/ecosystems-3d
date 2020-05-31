import CoralReefEcosystem from './coral-reef-ecosystem';
import DesertEcosystem from './desert-ecosystem';
import PolarEcosystem from './polar-ecosystem';
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
  desert: {
    name: 'Desert Ecosystem - Subtropical Desert',
    id: 'desert',
    class: DesertEcosystem,
    description: [
      'Deserts are arid regions which are generally associated with warm temperatures, however cold deserts also exist.',
      'Deserts can be found in every continent, with the largest deserts located in Antarctica, the Arctic, Northern Africa, and the Middle East.'
    ]
  },
  polar: {
    name: 'Tundra - Polar Ecosystem ',
    id: 'polar',
    class: PolarEcosystem,
    description: [
      'Tundra is the coldest of all the biomes.',
      'It is noted for its frost-molded landscapes, extremely low temperatures, little precipitation, poor nutrients, and short growing seasons. Dead organic material functions as a nutrient pool. The two major nutrients are nitrogen and phosphorus.'
    ]
  }
};
