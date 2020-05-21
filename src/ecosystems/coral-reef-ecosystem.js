import { Scene, AmbientLight, DirectionalLight } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Scenography from './scenography';

class CoralReefEcosystem extends Scene {
  constructor() {
    super();

    this.corals = [];

    this.add(
      new Scenography({
        floorImage: 'assets/textures/ocean-floor.jpg',
        wallImage: 'assets/backgrounds/ocean-background.png',
        ceilingImage: 'assets/textures/ocean-ceiling.jpg'
      })
    );

    const light = new AmbientLight();
    const dirLight = new DirectionalLight();

    const loader = new GLTFLoader();
    this.add(light);
    this.add(dirLight);

    loader.load(
      'assets/coral-reef/manta-ray/scene.gltf',
      gltf => {
        const ray = gltf.scene;
        ray.scale.set(0.2, 0.2, 0.2);
        ray.position.set(0, 3, 0);
        this.add(ray);
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    loader.load(
      'assets/coral-reef/jellyfish/scene.gltf',
      gltf => {
        const jellyfish = gltf.scene;
        jellyfish.scale.set(0.6, 0.6, 0.6);
        jellyfish.position.set(-4, 2, 2);
        this.add(jellyfish);
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    loader.load(
      'assets/coral-reef/coral/scene.gltf',
      gltf => {
        const coralPositions = [
          [-2, 0, -1],
          [-5, 0, -3],
          [-3, 0, -5.5],
          [-6, 0, -7],
          [-7.5, 0, -4.5],
          [2, 0, -1],
          [5, 0, -3],
          [3, 0, -5.5],
          [6, 0, -7],
          [7.5, 0, -4.5],
          [-2, 0, 1],
          [-5, 0, 3],
          [-3, 0, 5.5],
          [-6, 0, 7],
          [-7.5, 0, 4.5],
          [2, 0, 1],
          [5, 0, 3],
          [3, 0, 5.5],
          [6, 0, 7],
          [0, 0, 2],
          [-2, 0, 5],
          [0, 0, 7],
          [2, 0, 4],
          [1.5, 0, 8]
        ];
        coralPositions.forEach(coralPosition => {
          const coral = gltf.scene.clone();
          coral.scale.set(0.2, 0.2, 0.2);
          const [x, y, z] = coralPosition;
          coral.position.set(x, y, z);
          this.add(coral);
        });
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    loader.load(
      'assets/coral-reef/purple-coral/scene.gltf',
      gltf => {
        const purpleCoralPositions = [
          [-5, 0, -0.6],
          [0, 0, 3.6],
          [6, 0, 5],
          [9, 0, -6],
          [-0.4, 0, -6]
        ];
        purpleCoralPositions.forEach(purpleColarPosition => {
          const purpleColar = gltf.scene.clone();
          purpleColar.scale.set(0.2, 0.2, 0.2);
          const [x, y, z] = purpleColarPosition;
          purpleColar.position.set(x, y, z);
          this.add(purpleColar);
        });
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    loader.load(
      'assets/coral-reef/white-shark/scene.gltf',
      gltf => {
        const shark = gltf.scene;
        shark.scale.set(0.6, 0.6, 0.6);
        shark.position.set(5, 4, 1);
        shark.rotation.y = -Math.PI / 4;
        this.add(shark);
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    loader.load(
      'assets/coral-reef/seastar/scene.gltf',
      gltf => {
        const seastar = gltf.scene;
        seastar.scale.set(0.01, 0.01, 0.01);
        seastar.position.set(-3, 0, 3);
        this.add(seastar);
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );
  }

  animate() {}
}

export default CoralReefEcosystem;
