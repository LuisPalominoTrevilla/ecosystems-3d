import {
  Scene,
  AmbientLight,
  DirectionalLight,
  TextureLoader,
  PlaneGeometry,
  Mesh,
  MeshBasicMaterial,
  DoubleSide
} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

class CoralReefEcosystem extends Scene {
  constructor() {
    super();

    const textureLoader = new TextureLoader();

    this.corals = [];

    const terrain = new PlaneGeometry(30, 30);
    this.floor = new Mesh(
      terrain,
      new MeshBasicMaterial({
        map: textureLoader.load('assets/textures/ocean-floor.jpg'),
        side: DoubleSide
      })
    );
    this.floor.rotation.x = -Math.PI / 2;

    this.bg = new Mesh(
      new PlaneGeometry(30, 30),
      new MeshBasicMaterial({
        map: textureLoader.load('assets/backgrounds/reef-bg.jpg')
      })
    );
    this.bg.position.z = -15;
    this.bg.position.y = 5;

    const light = new AmbientLight();
    const dirLight = new DirectionalLight();

    const loader = new GLTFLoader();
    this.add(light);
    this.add(dirLight);
    this.add(this.floor);
    this.add(this.bg);

    loader.load(
      'assets/manta-ray/scene.gltf',
      gltf => {
        this.ray = gltf.scene;
        this.ray.scale.set(0.1, 0.1, 0.1);
        this.ray.position.set(0, 3, 0);
        this.add(this.ray);
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    loader.load(
      'assets/jellyfish/scene.gltf',
      gltf => {
        this.jellyfish = gltf.scene;
        this.jellyfish.scale.set(0.2, 0.2, 0.2);
        this.jellyfish.position.set(0, 0, 2);
        this.add(this.jellyfish);
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    loader.load(
      'assets/coral/scene.gltf',
      gltf => {
        const coralPositions = [
          [0, 0, 0],
          [1, 0, 0],
          [-2, 0, 0],
          [-1, 0, 3],
          [-1, 0, 5]
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
  }

  animate() {}
}

export default CoralReefEcosystem;
