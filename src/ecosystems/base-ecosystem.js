import { Scene, AmbientLight, DirectionalLight } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

class BaseEcosystem extends Scene {
  constructor(loadingManager) {
    if (!loadingManager)
      return console.error('Required loading manager missing');
    super();

    const light = new AmbientLight();
    const dirLight = new DirectionalLight();
    this.add(light);
    this.add(dirLight);

    this.gltgLoader = new GLTFLoader(loadingManager);
  }
}

export default BaseEcosystem;
