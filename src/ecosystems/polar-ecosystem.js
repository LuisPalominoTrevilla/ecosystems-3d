import { Vector3, Color } from 'three';
import Scenography from '../models/scenography';
import Model from '../models/model';
import BaseEcosystem from './base-ecosystem';

class DesertEcosystem extends BaseEcosystem {
  constructor(loadingManager) {
    super(loadingManager);

    this.add(
      new Scenography({
        floorImage: 'assets/textures/polar-floor.jpg',
        wallImage: 'assets/backgrounds/polar-background.jpg',
        ceilingImage: 'assets/textures/polar-ceiling.jpg'
      })
    );

    this.background = new Color(0xffbf80);

    this.fbxLoader.load(
      'assets/polar/decorations/fireplace.fbx',
      fbx => {
        const fireplace = new Model({
          mesh: fbx,
          name: 'fireplace',
          spectatorPosition: new Vector3(0.311, 0.92, 1.15)
        });
        fireplace.scale.set(0.01, 0.01, 0.01);
        fireplace.position.set(-4, 0, 0);
        fireplace.rotation.y = Math.PI / 6;
        this.add(fireplace);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    this.gltgLoader.load(
      'assets/polar/decorations/igloo/igloo.gltf',
      gltf => {
        const igloo = new Model({
          mesh: gltf.scene,
          name: 'igloo',
          spectatorPosition: new Vector3(-0.8, 8.3, -2.56)
        });
        igloo.scale.set(2.5, 2.5, 2.5);
        igloo.position.set(-9, 0, -9);
        igloo.rotation.y = Math.PI / 4;
        this.add(igloo);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    this.gltgLoader.load(
      'assets/polar/penguin/poly/Mesh_Penguin.gltf',
      gltf => {
        const penguin = new Model({
          mesh: gltf.scene,
          name: 'king-penguin',
          spectatorPosition: new Vector3(-0.8, 8.3, -2.56)
        });
        penguin.scale.set(0.02, 0.02, 0.02);
        penguin.position.set(5, 1.7, -6);
        this.add(penguin);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    this.gltgLoader.load(
      'assets/polar/penguin/emperor_penguin/scene.gltf',
      gltf => {
        const penguin = new Model({
          mesh: gltf.scene,
          name: 'emperor-penguin',
          spectatorPosition: new Vector3(-0.8, 8.3, -2.56)
        });
        penguin.scale.set(4.5, 4.5, 4.5);
        penguin.position.set(8, 0, -5);
        this.add(penguin);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    this.gltgLoader.load(
      'assets/polar/penguin/little-penguin/scene.gltf',
      gltf => {
        const penguin = new Model({
          mesh: gltf.scene,
          name: 'emperor-penguin',
          spectatorPosition: new Vector3(-0.8, 8.3, -2.56)
        });
        penguin.scale.set(0.008, 0.008, 0.008);
        penguin.position.set(9, 1.3, -4);
        penguin.rotation.y = Math.PI / 4;
        this.add(penguin);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    this.gltgLoader.load(
      'assets/polar/wolf/Wolves.gltf',
      gltf => {
        const wolf = new Model({
          mesh: gltf.scene,
          name: 'wolf',
          spectatorPosition: new Vector3(-0.8, 8.3, -2.56)
        });
        wolf.scale.set(0.5, 0.5, 0.5);
        wolf.position.set(-8, 0, 3);
        wolf.rotation.y = Math.PI / 3;
        this.add(wolf);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    this.gltgLoader.load(
      'assets/polar/seal/Mesh_Seal.gltf',
      gltf => {
        const seal = new Model({
          mesh: gltf.scene,
          name: 'seal',
          spectatorPosition: new Vector3(-0.8, 8.3, -2.56)
        });
        seal.scale.set(0.03, 0.03, 0.03);
        seal.position.set(0, 1.0, 5);
        seal.rotation.y = -Math.PI / 4;
        this.add(seal);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    this.gltgLoader.load(
      'assets/polar/elk/scene.gltf',
      gltf => {
        const elk = new Model({
          mesh: gltf.scene,
          name: 'elk',
          spectatorPosition: new Vector3(-0.8, 8.3, -2.56)
        });
        elk.scale.set(0.05, 0.05, 0.05);
        elk.position.set(6, 0, 9);
        elk.rotation.y = -Math.PI / 4;
        this.add(elk);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    this.gltgLoader.load(
      'assets/polar/crane/scene.gltf',
      gltf => {
        const crane = new Model({
          mesh: gltf.scene,
          name: 'crane',
          spectatorPosition: new Vector3(-0.8, 8.3, -2.56)
        });
        crane.scale.set(0.1, 0.1, 0.1);
        crane.position.set(-9, 7.5, -9);
        crane.rotation.y = -(3 / 2) * Math.PI;
        this.add(crane);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    this.gltgLoader.load(
      'assets/polar/polar_bear/bear_animation.gltf',
      gltf => {
        const polar_bear = new Model({
          mesh: gltf.scene,
          name: 'polar-bear',
          spectatorPosition: new Vector3(-0.8, 8.3, -2.56)
        });
        polar_bear.scale.set(1.1, 1.1, 1.1);
        polar_bear.position.set(-3, 0, -8);
        polar_bear.rotation.y = Math.PI / 1.5;
        this.add(polar_bear);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );
    this.fbxLoader.load(
      'assets/polar/decorations/tree.fbx',
      fbx => {
        const treePositions = [
          [10, 0, -8],
          [6, 0, -7],
          [2, 0, -9],
          [-10, 0, 0],
          [-8, 0, 6],
          [10, 0, 0],
        ]
        fbx.scale.set(0.04, 0.04, 0.04);
        treePositions.forEach(treePosition => {
          const tree = fbx.clone();
          const [x, y, z] = treePosition;
          tree.position.set(x, y, z);
          this.add(tree);
        });
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );
  }
  animate() { }
}

export default DesertEcosystem;
