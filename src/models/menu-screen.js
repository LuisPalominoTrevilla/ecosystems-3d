import { Scene, AmbientLight, TextureLoader } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

class MenuScreen extends Scene {
  constructor() {
    super();

    const gltfLoader = new GLTFLoader();

    new TextureLoader().load(
      'assets/backgrounds/space-bg.jpg',
      texture => {
        this.background = texture;
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    const light = new AmbientLight();
    this.add(light);

    gltfLoader.load(
      'assets/cute-planet/scene.gltf',
      gltf => {
        this.planet = gltf.scene;
        this.planet.scale.set(0.07, 0.07, 0.07);
        this.add(this.planet);
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );
  }

  animate() {
    if (this.planet) {
      this.planet.rotation.y += 0.005;
    }
  }
}

export default MenuScreen;
