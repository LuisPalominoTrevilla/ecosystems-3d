import { Group } from 'three';

class Model extends Group {
  constructor({ mesh, name, spectatorPosition }) {
    if (!mesh || !name || !spectatorPosition)
      return console.error('Missing required parameters');
    super();

    this.add(mesh);
    this.name = name;
    this.spectatorPosition = spectatorPosition;
  }
}

export default Model;
