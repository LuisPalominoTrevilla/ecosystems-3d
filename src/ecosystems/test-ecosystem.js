import { Scene, Color, AmbientLight, DirectionalLight } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

class TestEcosystem extends Scene {
  constructor() {
    super();

    this.meshes = [];

    const light = new AmbientLight();
    const dirLight = new DirectionalLight();

    const loader = new GLTFLoader();
    this.add(light);
    this.add(dirLight);
    this.background = new Color(0x2f80a1);

    loader.load(
      'assets/shark/scene.gltf',
      gltf => {
        this.shark = gltf.scene;
        this.shark.scale.set(0.01, 0.01, 0.01);
        this.shark.rotation.y = Math.PI / 2;
        this.shark.position.z = -2;
        this.add(this.shark);
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    loader.load(
      'assets/manta-ray/scene.gltf',
      gltf => {
        this.ray = gltf.scene;
        this.ray.scale.set(0.1, 0.1, 0.1);
        this.ray.position.set(0, 0, 0);
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
  }

  animate() {
    if (this.shark) {
      this.shark.rotation.y += 0.02;
    }
  }
}

export default TestEcosystem;
