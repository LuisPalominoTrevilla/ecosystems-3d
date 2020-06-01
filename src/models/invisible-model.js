import { Mesh, BoxGeometry, MeshBasicMaterial } from 'three';

class InvisibleModel extends Mesh {
  constructor({ position, rotation, dimensions, name }) {
    if (!position) return console.error('Missing required parameters');
    const geometry = new BoxGeometry(...dimensions);

    const material = new MeshBasicMaterial({
      transparent: true,
      opacity: 0
    });
    super(geometry, material);

    this.position.set(...position);
    this.rotation.set(...rotation);
    this.name = name;
  }
}

export default InvisibleModel;
