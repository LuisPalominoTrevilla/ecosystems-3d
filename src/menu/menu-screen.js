import { Scene, AmbientLight, TextureLoader } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import availableEcosystems from './available-ecosystems';

class MenuScreen extends Scene {
  constructor(loadingManager) {
    super();

    const gltfLoader = new GLTFLoader(loadingManager);

    new TextureLoader(loadingManager).load(
      'assets/backgrounds/space-bg.jpg',
      texture => {
        this.background = texture;
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    const light = new AmbientLight(0xffffff, 0.6);
    this.add(light);
    availableEcosystems.forEach(({ spotLight, rect }) => {
      this.add(spotLight);
      this.add(rect);
    });

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
    //this.rotation.y += 0.005;
  }
}

export default MenuScreen;
