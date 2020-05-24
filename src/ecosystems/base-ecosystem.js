import { Scene, AmbientLight, DirectionalLight } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

class BaseEcosystem extends Scene {
  constructor() {
    super();

    const light = new AmbientLight();
    const dirLight = new DirectionalLight();
    this.add(light);
    this.add(dirLight);

    this.models = [];
    this.gltgLoader = new GLTFLoader();
  }
}

export default BaseEcosystem;
