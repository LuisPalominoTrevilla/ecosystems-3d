import * as Three from 'three';
import { Scene } from 'three';

class TestEcosystem extends Scene {
  constructor() {
    super();

    let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
    let material = new Three.MeshNormalMaterial();

    const mesh = new Three.Mesh(geometry, material);
    this.meshes = [mesh];
    this.add(mesh);
  }

  animate() {
    this.meshes[0].rotation.x += 0.01;
    this.meshes[0].rotation.y += 0.02;
  }
}

export default TestEcosystem;
