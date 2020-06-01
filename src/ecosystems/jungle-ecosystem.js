import Scenography from '../models/scenography';
import Model from '../models/model';
import BaseEcosystem from './base-ecosystem';
import { Vector3, Color } from 'three';
import { SkeletonUtils } from 'three/examples/jsm/utils/SkeletonUtils';

class JungleEcosystem extends BaseEcosystem {
  constructor(loadingManager) {
    super(loadingManager, 'assets/audio/jungle.mp3');

    this.add(
      new Scenography({
        floorImage: 'assets/textures/jungle-floor.jpg',
        wallImage: 'assets/backgrounds/jungle-background.jpg',
        ceilingImage: 'assets/textures/jungle-ceiling.jpg',
        loadingManager: loadingManager
      })
    );

    this.background = new Color(0x097f1f);

    this.gltfLoader.load('assets/jungle/gorilla/scene.gltf', gltf => {
      const gorilla = new Model({
        mesh: gltf.scene,
        name: 'gorilla',
        spectatorPosition: new Vector3(-5.5, 7, 11)
      });
      gorilla.position.set(-10, 1.15, 6);
      gorilla.scale.set(0.01, 0.01, 0.01);
      gorilla.rotation.y = gorilla.rotation.y + (50 * Math.PI) / 180;
      this.add(gorilla);
    });

    this.gltfLoader.load('assets/jungle/monkey/scene.gltf', gltf => {
      const monkey = new Model({
        mesh: gltf.scene,
        name: 'monkey',
        spectatorPosition: new Vector3(-1.5, 4, 6)
      });
      monkey.position.set(0.3, 0, 10);
      monkey.scale.set(2, 1.98, 2);
      monkey.rotation.y = monkey.rotation.y + (50 * Math.PI) / 180;
      this.add(monkey);
    });

    this.gltfLoader.load('assets/jungle/tiger/scene.gltf', gltf => {
      const tiger = new Model({
        mesh: gltf.scene,
        name: 'tiger',
        spectatorPosition: new Vector3(-4, 3, 2)
      });

      tiger.position.set(-3, 1.1, -3);
      tiger.scale.set(0.15, 0.15, 0.15);
      this.add(tiger);
    });

    this.gltfLoader.load('assets/jungle/parrot/scene.gltf', gltf => {
      const parrot = new Model({
        mesh: gltf.scene,
        name: 'parrot',
        spectatorPosition: new Vector3(3.5, 7.5, 7.5)
      });
      parrot.position.set(0, 8, 8);
      parrot.scale.set(0.05, 0.05, 0.05);
      this.add(parrot);
    });

    this.gltfLoader.load('assets/jungle/frog/scene.gltf', gltf => {
      const frog = new Model({
        mesh: gltf.scene,
        name: 'frog',
        spectatorPosition: new Vector3(2.5, 1, 3.5)
      });
      frog.position.set(2, 0, 2);
      frog.scale.set(0.0025, 0.0025, 0.0025);
      this.add(frog);
    });

    this.gltfLoader.load('assets/jungle/iguana/scene.gltf', gltf => {
      const iguana = new Model({
        mesh: gltf.scene,
        name: 'iguana',
        spectatorPosition: new Vector3(-1, 2, 5)
      });
      iguana.position.set(2, 0, 6);
      iguana.scale.set(0.005, 0.005, 0.005);
      this.add(iguana);
    });

    this.gltfLoader.load('assets/jungle/puma/scene.gltf', gltf => {
      const puma = new Model({
        mesh: gltf.scene,
        name: 'puma',
        spectatorPosition: new Vector3(1, 3, -5)
      });
      puma.position.set(8, 2.8, -1);
      puma.rotation.y = puma.rotation.y + (-45 * Math.PI) / 180;
      puma.scale.set(4, 4, 4);
      this.add(puma);
    });

    this.gltfLoader.load('assets/jungle/butterfly/scene.gltf', gltf => {
      const butterfly = new Model({
        mesh: gltf.scene,
        name: 'butterfly',
        spectatorPosition: new Vector3(-7.5, 6, 1.5)
      });
      butterfly.position.set(-7, 4, 0);
      butterfly.rotation.y = butterfly.rotation.y + (-20 * Math.PI) / 180;
      butterfly.rotation.x = butterfly.rotation.x + (30 * Math.PI) / 180;
      this.add(butterfly);
    });

    this.gltfLoader.load('assets/jungle/dragonfly/scene.gltf', gltf => {
      const dragonfly = new Model({
        mesh: gltf.scene,
        name: 'dragonfly',
        spectatorPosition: new Vector3(0, 7, -5)
      });
      dragonfly.position.set(0, 8, -7);

      dragonfly.scale.set(0.05, 0.05, 0.05);
      this.add(dragonfly);
    });

    this.gltfLoader.load('assets/jungle/trees/scene.gltf', gltf => {
      const positions = [
        [-8, -0.3, -9],
        [8, -0.3, -9],
        [0, -0.3, 0],
        [9, -0.3, 8]
      ];
      positions.forEach(treePosition => {
        const [x, y, z] = treePosition;
        const tree = new Model({
          mesh: SkeletonUtils.clone(gltf.scene),
          name: 'ceiba-tree',
          spectatorPosition: new Vector3(x + 1.5, y + 4.5, z + 6)
        });
        tree.position.set(x, y, z);
        this.add(tree);
      });
    });

    this.gltfLoader.load('assets/jungle/flora/bananatree/scene.gltf', gltf => {
      const bananaTree = new Model({
        mesh: gltf.scene,
        name: 'banana-tree',
        spectatorPosition: new Vector3(-9, 7, 14)
      });
      bananaTree.position.set(-5, -0.1, 8);
      bananaTree.scale.set(0.04, 0.04, 0.04);
      this.add(bananaTree);
    });

    this.gltfLoader.load('assets/jungle/flora/orchid/scene.gltf', gltf => {
      const orchid = new Model({
        mesh: gltf.scene,
        name: 'orchid',
        spectatorPosition: new Vector3(-6, 2, 0)
      });
      orchid.position.set(-7.8, 0.2, -2.25);
      orchid.scale.set(0.2, 0.2, 0.2);
      orchid.rotation.x = orchid.rotation.x - (100 * Math.PI) / 180;
      orchid.rotation.z = orchid.rotation.z + (30 * Math.PI) / 180;
      this.add(orchid);
    });

    this.gltfLoader.load('assets/jungle/flora/grass/scene.gltf', grassltf => {
      const grass = grassltf.scene;
      grass.position.set(-6, -3, -4);
      grass.scale.set(0.3, 0.3, 0.3);
      this.add(grass);
    });
  }
}

export default JungleEcosystem;
