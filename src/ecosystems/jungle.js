//import * as Three from 'three';
import Scenography from '../models/scenography';
import Model from '../models/model';
import BaseEcosystem from './base-ecosystem';
import { Vector3, Color } from 'three';
import { SkeletonUtils } from 'three/examples/jsm/utils/SkeletonUtils';

class Jungle extends BaseEcosystem {
    constructor(loadingManager) {
        super(loadingManager);
        this.meshes = [];
        this.add(
            new Scenography(
                {
                    floorImage: 'assets/textures/jungle-floor3.jpg',
                    wallImage: 'assets/backgrounds/jungla.png',
                    ceilingImage: 'assets/textures/jungle-ceiling.jpg',
                }
            )
        );

        this.background = new Color(0xFFFFFF);

        this.gltgLoader.load('assets/jungle/gorilla/scene.gltf',
            gltf => {
                this.gorilla = new Model({ mesh: gltf.scene, name: "gorilla", spectatorPosition: new Vector3(-6, 6, 10) })
                this.gorilla.position.set(-10, 1.15, 6.);
                this.gorilla.scale.set(0.010, 0.010, 0.010);
                this.gorilla.rotation.y = this.gorilla.rotation.y + 50 * Math.PI / 180
                this.add(this.gorilla);
            }
        );

        this.gltgLoader.load('assets/jungle/monkey/scene.gltf',
            gltf => {
                this.monkey = new Model({ mesh: gltf.scene, name: "monkey", spectatorPosition: new Vector3(-1.5, 4, 6) })
                this.monkey.position.set(0.3, 0, 10);
                this.monkey.scale.set(2, 1.98, 2);
                this.monkey.rotation.y = this.monkey.rotation.y + 50 * Math.PI / 180
                this.add(this.monkey);
            }
        );

        this.gltgLoader.load('assets/jungle/tiger/scene.gltf',
            gltf => {
                this.tiger = new Model({ mesh: gltf.scene, name: "tiger", spectatorPosition: new Vector3(-4, 3, 2) })

                this.tiger.position.set(-3, 1.10, -3);
                this.tiger.scale.set(0.15, 0.15, 0.15);
                this.add(this.tiger);
            }
        );

        this.gltgLoader.load('assets/jungle/parrot/scene.gltf',
            gltf => {
                this.parrot = new Model({ mesh: gltf.scene, name: "parrot", spectatorPosition: new Vector3(-5, 8, 0) });
                this.parrot.position.set(0, 8, 8);
                this.parrot.scale.set(0.05, 0.05, 0.05);
                this.add(this.parrot);

            }
        )

        this.gltgLoader.load('assets/jungle/frog/scene.gltf',
            gltf => {
                this.frog = new Model({ mesh: gltf.scene, name: "frog", spectatorPosition: new Vector3(2, 2, 5) });
                this.frog.position.set(2, 0, 2);
                this.frog.scale.set(0.0025, 0.0025, 0.0025);
                this.add(this.frog);
            }
        )

        this.gltgLoader.load('assets/jungle/iguana/scene.gltf',
            gltf => {
                this.iguana = new Model({ mesh: gltf.scene, name: "iguana", spectatorPosition: new Vector3(2, 4, 10) });
                this.iguana.position.set(2, 0, 6);
                this.iguana.scale.set(0.005, 0.005, 0.005);
                this.add(this.iguana)
            }
        )

        this.gltgLoader.load('assets/jungle/puma/scene.gltf',
            gltf => {
                this.puma = new Model({ mesh: gltf.scene, name: "puma", spectatorPosition: new Vector3(1, 3, -5) });
                this.puma.position.set(8, 2.8, -1);
                this.puma.rotation.y = this.puma.rotation.y + -45 * Math.PI / 180;
                this.puma.scale.set(4, 4, 4);
                this.add(this.puma);
            }
        )

        this.gltgLoader.load('assets/jungle/butterfly/scene.gltf',
            gltf => {
                this.butterfly = new Model({ mesh: gltf.scene, name: "butterfly", spectatorPosition: new Vector3(-7.5, 6, 1.5) });
                //this.butterfly.position.set(-7,4,-8);
                this.butterfly.position.set(-7, 4, 0);
                this.butterfly.rotation.y = this.butterfly.rotation.y + -20 * Math.PI / 180;
                this.butterfly.rotation.x = this.butterfly.rotation.x + 30 * Math.PI / 180;
                //this.butterfly.scale.set(2,2,2);
                this.add(this.butterfly);
            }
        )

        this.gltgLoader.load('assets/jungle/dragonfly/scene.gltf',
            gltf => {
                this.dragonfly = new Model({ mesh: gltf.scene, name: "dragonfly", spectatorPosition: new Vector3(0, 7, -5) });
                this.dragonfly.position.set(0, 8, -7);

                this.dragonfly.scale.set(0.05, 0.05, 0.05);
                this.add(this.dragonfly);
            }
        )

        //Loading a tree
        this.gltgLoader.load('assets/jungle/trees/scene.gltf',
            gltf => {
                const positions = [
                    [-8, -0.3, -9,],
                    [8, -0.3, -9],
                    //[-7,-0.1,0,],
                    [0, -0.3, 0,],
                    [9, -0.3, 8,],
                ]
                positions.forEach(treePosition => {
                    const [x, y, z] = treePosition;
                    const Tree_clone = new Model({
                        mesh: SkeletonUtils.clone(gltf.scene),
                        name: "tree",
                        spectatorPosition: new Vector3(x, y + 3, z + 3),
                    });
                    Tree_clone.position.set(x, y, z);
                    this.add(Tree_clone);
                })
            }
        );

        //Loading banana tree
        this.gltgLoader.load('assets/jungle/flora/bananatree/scene.gltf',
            gltf => {
                this.bananaTree = new Model({ mesh: gltf.scene, name: "banana tree", spectatorPosition: new Vector3(-9, 7, 14) });
                this.bananaTree.position.set(-5, -0.1, 8);
                this.bananaTree.scale.set(0.04, 0.04, 0.04);
                this.add(this.bananaTree);
            }
        );

        //Loading orchideas
        this.gltgLoader.load('assets/jungle/flora/orchid/scene.gltf',
            gltf => {
                this.orchid = new Model({ mesh: gltf.scene, name: "orchid", spectatorPosition: new Vector3(-6, 2, 0) });
                this.orchid.position.set(-7.8, 0.2, -2.25);
                this.orchid.scale.set(0.2, 0.2, 0.2);
                this.orchid.rotation.x = this.orchid.rotation.x - 100 * Math.PI / 180;
                this.orchid.rotation.z = this.orchid.rotation.z + 30 * Math.PI / 180;
                this.add(this.orchid);
            }
        );

        this.gltgLoader.load('assets/jungle/flora/grass/scene.gltf',
            grassltf => {
                let grass = grassltf.scene;
                grass.position.set(-6, -3, -4);
                grass.scale.set(0.3, 0.3, 0.3);
                this.add(grass);
            }
        );
    }

    animate() {

    }
}

export default Jungle;