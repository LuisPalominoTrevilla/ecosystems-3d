import { Vector3, Color } from 'three';
import Scenography from '../models/scenography';
import Model from '../models/model';
import BaseEcosystem from './base-ecosystem';

class CoralReefEcosystem extends BaseEcosystem {
  constructor(loadingManager) {
    super(loadingManager);

    this.add(
      new Scenography({
        floorImage: 'assets/textures/ocean-floor.jpg',
        wallImage: 'assets/backgrounds/ocean-background.png',
        ceilingImage: 'assets/textures/ocean-ceiling.jpg'
      })
    );

    this.background = new Color(0xff87ceeb);

    this.gltgLoader.load(
      'assets/coral-reef/manta-ray/scene.gltf',
      gltf => {
        const ray = new Model({
          mesh: gltf.scene,
          name: 'manta-ray',
          spectatorPosition: new Vector3(2, 6, -1)
        });
        ray.scale.set(0.3, 0.3, 0.3);
        ray.position.set(-2, 10, -6);
        ray.rotation.x = Math.PI / 6;
        ray.rotation.z = -Math.PI / 8;
        this.add(ray);
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    this.gltgLoader.load(
      'assets/coral-reef/jellyfish/scene.gltf',
      gltf => {
        const jellyfish = new Model({
          mesh: gltf.scene,
          name: 'jellyfish',
          spectatorPosition: new Vector3(-2, 4, 1)
        });
        jellyfish.scale.set(0.8, 0.8, 0.8);
        jellyfish.position.set(-6, 2, 2);
        this.add(jellyfish);
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    this.gltgLoader.load(
      'assets/coral-reef/coral/scene.gltf',
      gltf => {
        const coralPositions = [
          [-3, 0, -4],
          [-6, 0, -1],
          [-1, 0, -12],
          [-5, 0, -8],
          [-8, 0, -4],
          [-10, 0, -10],
          [1, 0, -2],
          [3, 0, -9],
          [6, 0, -6],
          [11, 0, -3],
          [9, 0, -11],
          [6, 0, -1],
          [-2, 0, 2],
          [-11, 0, 1],
          [-8, 0, 4],
          [-3, 0, 6],
          [-5, 0, 9],
          [-10, 0, 11],
          [2, 0, 3],
          [9, 0, 2],
          [12, 0, 4],
          [5, 0, 7],
          [2, 0, 10],
          [10, 0, 9]
        ];
        coralPositions.forEach(coralPosition => {
          const [x, y, z] = coralPosition;
          const coral = new Model({
            mesh: gltf.scene.clone(),
            name: 'coral-polyp',
            spectatorPosition: new Vector3(x, y + 2, z + 2)
          });
          coral.scale.set(0.2, 0.2, 0.2);
          coral.position.set(x, y, z);
          this.add(coral);
        });
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    this.gltgLoader.load(
      'assets/coral-reef/purple-coral/scene.gltf',
      gltf => {
        const purpleCoralPositions = [
          [-5, 0, -0.6],
          [0, 0, 3.6],
          [6, 0, 5],
          [9, 0, -6],
          [-0.4, 0, -6],
          [-10, 0, 8],
          [-2, 0, 11]
        ];
        purpleCoralPositions.forEach(purpleColarPosition => {
          const [x, y, z] = purpleColarPosition;
          const purpleColar = new Model({
            mesh: gltf.scene.clone(),
            name: 'sponge',
            spectatorPosition: new Vector3(x, y + 2, z + 2)
          });
          purpleColar.scale.set(0.2, 0.2, 0.2);
          purpleColar.position.set(x, y, z);
          this.add(purpleColar);
        });
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    this.gltgLoader.load(
      'assets/coral-reef/white-shark/scene.gltf',
      gltf => {
        const shark = new Model({
          mesh: gltf.scene,
          name: 'white-shark',
          spectatorPosition: new Vector3(2, 6, 7)
        });
        shark.position.set(5, 6, 1);
        shark.rotation.y = -Math.PI / 4;
        this.add(shark);
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    this.gltgLoader.load(
      'assets/coral-reef/seastar/scene.gltf',
      gltf => {
        const seastar = new Model({
          mesh: gltf.scene,
          name: 'sea-star',
          spectatorPosition: new Vector3(-3, 3, 3.8)
        });
        seastar.scale.set(0.01, 0.01, 0.01);
        seastar.position.set(-3, 0, 3);
        this.add(seastar);
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    this.gltgLoader.load(
      'assets/coral-reef/clownfish/scene.gltf',
      gltf => {
        const clownfish = new Model({
          mesh: gltf.scene,
          name: 'clown-fish',
          spectatorPosition: new Vector3(3.5, 2.5, 7)
        });
        clownfish.scale.set(0.1, 0.1, 0.1);
        clownfish.position.set(5, 1, 6);
        this.add(clownfish);
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    this.gltgLoader.load(
      'assets/coral-reef/blacktip-reef-shark/scene.gltf',
      gltf => {
        const shark = new Model({
          mesh: gltf.scene,
          name: 'blacktip-reef-shark',
          spectatorPosition: new Vector3(-2, 2.5, -4)
        });
        shark.scale.set(0.6, 0.6, 0.6);
        shark.position.set(-5, 0, -6);
        this.add(shark);
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    this.gltgLoader.load(
      'assets/coral-reef/blue-ringed-octopus/scene.gltf',
      gltf => {
        const octopus = new Model({
          mesh: gltf.scene,
          name: 'blue-ringed-octopus',
          spectatorPosition: new Vector3(-7, 0.5, 6)
        });
        octopus.scale.set(0.2, 0.2, 0.2);
        octopus.position.set(-6, 0, 5);
        this.add(octopus);
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    this.gltgLoader.load(
      'assets/coral-reef/fiddler-crab/scene.gltf',
      gltf => {
        const crab = new Model({
          mesh: gltf.scene,
          name: 'crab',
          spectatorPosition: new Vector3(7, 1.5, 1)
        });
        crab.scale.set(2, 2, 2);
        crab.position.set(7, 0.3, -1);
        this.add(crab);
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    this.gltgLoader.load(
      'assets/coral-reef/octopus/scene.gltf',
      gltf => {
        const octopus = new Model({
          mesh: gltf.scene,
          name: 'octopus',
          spectatorPosition: new Vector3(3, 10, -3.5)
        });
        octopus.scale.set(3, 3, 3);
        octopus.position.set(5, 10, -6);
        this.add(octopus);
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    this.gltgLoader.load(
      'assets/coral-reef/sea-turtle/scene.gltf',
      gltf => {
        const childTurtle = new Model({
          mesh: gltf.scene.clone(),
          name: 'sea-turtle',
          spectatorPosition: new Vector3(-7, 6, 7)
        });
        childTurtle.position.set(-8, 6, 6);
        this.add(childTurtle);

        const turtle = new Model({
          mesh: gltf.scene.clone(),
          name: 'sea-turtle',
          spectatorPosition: new Vector3(-6, 8, 8)
        });
        turtle.scale.set(3, 3, 3);
        turtle.position.set(-6, 7, 5);
        turtle.rotation.y = Math.PI / 2;
        this.add(turtle);
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );

    this.gltgLoader.load(
      'assets/coral-reef/squid/scene.gltf',
      gltf => {
        const squid = new Model({
          mesh: gltf.scene,
          name: 'squid',
          spectatorPosition: new Vector3(7, 4, 9)
        });
        squid.scale.set(0.01, 0.01, 0.01);
        squid.position.set(8, 4, 7);
        this.add(squid);
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );
  }
}

export default CoralReefEcosystem;
