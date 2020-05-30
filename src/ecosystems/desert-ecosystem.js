import { Vector3, Color } from 'three';
import Scenography from '../models/scenography';
import Model from '../models/model';
import BaseEcosystem from './base-ecosystem';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

class DesertEcosystem extends BaseEcosystem {
  constructor() {
    super();

    const fbxLoader = new FBXLoader();
    const mtlLoader = new MTLLoader();
    const loader = new OBJLoader();
    console.log(mtlLoader, loader);

    this.add(
      new Scenography({
        floorImage: 'assets/textures/desert-floor.jpg',
        wallImage: 'assets/backgrounds/desert-background.jpg',
        ceilingImage: 'assets/textures/desert-ceiling.jpg'
      })
    );

    this.background = new Color(0xffbf80);

    this.gltgLoader.load(
      'assets/desert/fennec_fox/scene.gltf',
      gltf => {
        const fennec = new Model({
          mesh: gltf.scene,
          name: 'fennex-fox',
          spectatorPosition: new Vector3(0, 3, 0)
        });
        fennec.scale.set(0.5, 0.5, 0.5);
        fennec.position.set(3, 0, 6);
        fennec.rotation.y = -Math.PI / 3;
        fennec.castShadow = true;
        this.add(fennec);
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    this.gltgLoader.load(
      'assets/desert/plants/scene.gltf',
      gltf => {
        const bush = new Model({
          mesh: gltf.scene,
          name: 'bush',
          spectatorPosition: new Vector3(-3, 3, 3.8)
        });
        bush.scale.set(1, 1, 1);
        bush.position.set(-3, 0, 3);
        this.add(bush);
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    this.gltgLoader.load(
      'assets/desert/snake/scene.gltf',
      gltf => {
        const python = new Model({
          mesh: gltf.scene,
          name: 'python',
          spectatorPosition: new Vector3(-3, 3, 3.8)
        });
        python.scale.set(0.03, 0.03, 0.03);
        python.rotation.y = Math.PI / 2;
        python.position.set(-7, 0.65, 4);
        this.add(python);
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    fbxLoader.load(
      'assets/desert/plants/CactusFlowers_3.fbx',
      fbx => {
        const cactus = new Model({
          mesh: fbx,
          name: 'cactus',
          spectatorPosition: new Vector3(6, 6, 3)
        });
        cactus.scale.set(0.04, 0.04, 0.04);
        cactus.position.set(9, 0, -6);
        this.add(cactus);
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    fbxLoader.load(
      'assets/desert/plants/Cactus_4.fbx',
      fbx => {
        const cactus = new Model({
          mesh: fbx,
          name: 'cactus',
          spectatorPosition: new Vector3(-3, 5, 3.8)
        });
        cactus.scale.set(0.08, 0.04, 0.04);
        cactus.rotation.y = Math.PI / 3;
        cactus.position.set(-7, 0, 10);
        this.add(cactus);
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    fbxLoader.load(
      'assets/desert/plants/CommonTree_Dead_1.fbx',
      fbx => {
        fbx.scale.set(0.06, 0.06, 0.06);
        const threePositions = [
          [-8, 0, -6],
          [8, 0, 8]
        ];
        threePositions.forEach(threePosition => {
          const three = fbx.clone();
          const [x, y, z] = threePosition;
          three.position.set(x, y, z);
          this.add(three);
        });
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    fbxLoader.load(
      'assets/desert/skull/Skeleton.fbx',
      fbx => {
        const skeleton = new Model({
          mesh: fbx,
          name: 'skeleton',
          spectatorPosition: new Vector3(0, 5, 4)
        });
        skeleton.scale.set(0.01, 0.01, 0.01);
        skeleton.rotation.x = -Math.PI / 2;
        skeleton.rotation.z = -Math.PI / 5;
        skeleton.position.set(0, 0, 0);
        this.add(skeleton);
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    fbxLoader.load(
      'assets/desert/plants/Plant_2.fbx',
      fbx => {
        fbx.scale.set(0.01, 0.01, 0.01);
        const bushPositions = [
          [-3, 0, -4],
          [-1, 0, 12],
          [-8, 0, -4],
          [-8, 0, 8],
          [6, 0, -1],
          [5, 0, 8],
          [10, 0, 6]
        ];
        bushPositions.forEach(bushPosition => {
          const bush = fbx.clone();
          const [x, y, z] = bushPosition;
          bush.position.set(x, y, z);
          this.add(bush);
        });
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    this.gltgLoader.load(
      'assets/desert/rocks/sand_rocks.glb',
      gltf => {
        const rock = new Model({
          mesh: gltf.scene,
          name: 'rock',
          spectatorPosition: new Vector3(-6, 4, 6)
        });
        rock.scale.set(4, 4, 4);
        rock.position.set(-8, 0, 4);
        this.add(rock);
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    this.gltgLoader.load(
      'assets/desert/eagle/scene.gltf',
      gltf => {
        const eagle = new Model({
          mesh: gltf.scene,
          name: 'eagle',
          spectatorPosition: new Vector3(-6, 6, 6)
        });
        eagle.scale.set(0.3, 0.3, 0.3);
        eagle.position.set(-7, 3, 2);
        this.add(eagle);
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    this.gltgLoader.load(
      'assets/desert/camel/scene.gltf',
      gltf => {
        const camel = new Model({
          mesh: gltf.scene,
          name: 'camel',
          spectatorPosition: new Vector3(0, 6, 0)
        });
        camel.position.set(8, 0, 2);
        camel.rotation.y = -Math.PI / 3;
        camel.scale.set(2.5, 2.5, 2.5);
        this.add(camel);
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    fbxLoader.load(
      'assets/desert/scorpion/scorpion.fbx',
      fbx => {
        const scorpion = new Model({
          mesh: fbx,
          name: 'skeleton',
          spectatorPosition: new Vector3(0, 2, 2)
        });
        scorpion.scale.set(0.1, 0.1, 0.1);
        scorpion.rotation.y = Math.PI / 2;
        scorpion.position.set(0, 0, 0);
        this.add(scorpion);
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    this.gltgLoader.load(
      'assets/desert/antelope/scene.gltf',
      gltf => {
        const antelope = new Model({
          mesh: gltf.scene,
          name: 'antelope',
          spectatorPosition: new Vector3(2, 6, 7)
        });
        antelope.scale.set(0.1, 0.1, 0.1);
        antelope.position.set(-2, 0, -9);
        antelope.rotation.y = Math.PI / 4;
        this.add(antelope);
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    fbxLoader.load(
      'assets/desert/plants/verbena.fbx',
      fbx => {
        fbx.scale.set(0.02, 0.02, 0.02);
        const verbenaPositions = [
          [-6.0, 0, 6.0],
          [-5.5, 0, 5.5],
          [-5.1, 0, 5.5],
          [-5.3, 0, 5.0],
          [-4.9, 0, 5.0],
          [-5.6, 0, 4.5],
          [-5.1, 0, 4.5],
          [-5.4, 0, 4.0],
          [-5.0, 0, 4.0],
          [-5.7, 0, 3.5],
          [-5.8, 0, 3.5],
          [-5.7, 0, 3.0],
          [-5.2, 0, 3.0],
          [-6.2, 0, 2.5],
          [-5.8, 0, 2.5],
          [-6.3, 0, 2.0],
          [-7.0, 0, 1.5],
          [-7.5, 0, 1.5],
          [-8.0, 0, 1.5]
        ];
        verbenaPositions.forEach(verbenaPosition => {
          const verbena = new Model({
            mesh: fbx.clone(),
            name: 'verbena',
            spectatorPosition: new Vector3(-2, 5, 3)
          });
          const [x, y, z] = verbenaPosition;
          verbena.position.set(x, y, z);
          this.add(verbena);
        });
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );
  }
  animate() {}
}

export default DesertEcosystem;
