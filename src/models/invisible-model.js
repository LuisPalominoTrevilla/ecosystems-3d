import { Mesh, BoxGeometry, MeshBasicMaterial } from 'three';

class InvisibleModel extends Mesh {
  constructor({ position, rotation, dimensions, name }) {
    if (!position) return console.error('Missing required parameters');
    const geometry = new BoxGeometry(...dimensions);
    // TODO: Remove wireframe and color
    const material = new MeshBasicMaterial({
      color: 0xff0000,
      wireframe: true
    });
    super(geometry, material);

    this.position.set(...position);
    this.rotation.set(...rotation);
    this.name = name;
  }
}

export default InvisibleModel;
