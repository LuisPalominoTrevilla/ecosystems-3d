import {
  TextureLoader,
  PlaneGeometry,
  MeshBasicMaterial,
  Mesh,
  Group,
  BackSide
} from 'three';

class Scenography extends Group {
  constructor({ wallImage, floorImage, ceilingImage }) {
    super();

    const textureLoader = new TextureLoader();

    const floor = new Mesh(
      new PlaneGeometry(26, 26),
      new MeshBasicMaterial({
        map: textureLoader.load(floorImage)
      })
    );
    floor.rotation.x = -Math.PI / 2;

    const ceiling = new Mesh(
      new PlaneGeometry(26, 26),
      new MeshBasicMaterial({
        map: textureLoader.load(ceilingImage),
        side: BackSide
      })
    );
    ceiling.rotation.x = -Math.PI / 2;
    ceiling.position.y = 15;

    const wallFront = new Mesh(
      new PlaneGeometry(26, 15),
      new MeshBasicMaterial({
        map: textureLoader.load(wallImage)
      })
    );
    wallFront.position.z = -13;
    wallFront.position.y = 7.5;

    const wallBack = new Mesh(
      new PlaneGeometry(26, 15),
      new MeshBasicMaterial({
        map: textureLoader.load(wallImage),
        side: BackSide
      })
    );
    wallBack.position.z = 13;
    wallBack.position.y = 7.5;

    const wallLeft = new Mesh(
      new PlaneGeometry(26, 15),
      new MeshBasicMaterial({
        map: textureLoader.load(wallImage)
      })
    );
    wallLeft.position.x = -13;
    wallLeft.rotation.y = Math.PI / 2;
    wallLeft.position.y = 7.5;

    const wallRight = new Mesh(
      new PlaneGeometry(26, 15),
      new MeshBasicMaterial({
        map: textureLoader.load(wallImage)
      })
    );
    wallRight.position.x = 13;
    wallRight.rotation.y = -Math.PI / 2;
    wallRight.position.y = 7.5;

    this.add(floor);
    this.add(ceiling);
    this.add(wallFront);
    this.add(wallBack);
    this.add(wallLeft);
    this.add(wallRight);
  }
}

export default Scenography;
