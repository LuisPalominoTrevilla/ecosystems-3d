import { Scene, AmbientLight, DirectionalLight } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { Howl } from 'howler';

class BaseEcosystem extends Scene {
  constructor(loadingManager, environmentAudio) {
    if (!loadingManager || !environmentAudio)
      return console.error('Required loading manager missing');
    super();

    this.ambientSound = new Howl({
      src: [environmentAudio],
      loop: true
    });

    const light = new AmbientLight();
    const dirLight = new DirectionalLight();
    this.add(light);
    this.add(dirLight);

    this.gltfLoader = new GLTFLoader(loadingManager);
    this.fbxLoader = new FBXLoader(loadingManager);
  }

  playAudio() {
    this.ambientSound.play();
  }

  stopAudio() {
    this.ambientSound.stop();
  }
}

export default BaseEcosystem;
