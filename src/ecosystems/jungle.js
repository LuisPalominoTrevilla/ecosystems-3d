import * as Three from 'three';
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader';
import {MTLLoader} from 'three/examples/jsm/loaders/MTLLoader';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

class Jungle extends Three.Scene {
    constructor(){
        super();

        this.meshes=[];

        const light = new Three.AmbientLight();
        const dirLight= new Three.DirectionalLight();
        const loader = new OBJLoader();
        const mtlLoader = new MTLLoader();
        const glLoader = new GLTFLoader();

        const textureLoader = new Three.TextureLoader();

        this.add(light);
        this.add(dirLight);

        textureLoader.load('assets/backgrounds/jungle/background.jpg',
            texture=>{
                this.background = texture;
            }
        )
        //this.background=new Three.Color(0x1da7d7);
        //0x12742b Green color

        var plane = new Three.Mesh(new Three.PlaneGeometry(), new Three.MeshBasicMaterial({color: 0x12742b}));
        plane.rotation.x=plane.rotation.x + -90 * Math.PI / 180;
        plane.position.z=plane.position.z + 2;
        plane.position.y=plane.position.y - 0.2;

        plane.scale.set(3.,2.,3.);
        this.add(plane);

        glLoader.load('assets/gorilla/scene.gltf',
            gltf => {
                this.gorilla = gltf.scene;
                this.gorilla.position.set(-0.7,-0.15,2.);
                this.gorilla.scale.set(0.0005, 0.0005, 0.0005);
                this.gorilla.rotation.y = this.gorilla.rotation.y + 50 * Math.PI / 180
                this.add(this.gorilla);
            }
        );

        glLoader.load('assets/monkey/scene.gltf',
            gltf => {
                this.monkey = gltf.scene;
                this.monkey.position.set(0.3,-0.2,2.);
                this.monkey.scale.set(0.1, 0.1, 0.1);
                this.monkey.rotation.y = this.monkey.rotation.y + 50 * Math.PI / 180
                this.add(this.monkey);
            }
        );

        glLoader.load('assets/tiger/scene.gltf',
            gltf => {
                this.tiger = gltf.scene;
                this.tiger.position.set(-0.2,-0.1,2.);
                this.tiger.scale.set(1, 1, 1);
                this.tiger.rotation.y = this.tiger.rotation.y + 50 * Math.PI / 180
                this.add(this.tiger);
            }
        );
        
        
        var positions = [
            //Far
            [-0.4,-0.1,1.2,],
            [-0.8,-0.1,1.2,],
            [-1.2,-0.1,1.2,],

            [-1,-0.1,1.5,],
            [-1.4,-0.1,1.5,],
            [-0.5,-0.1,1.6],
            [-0.1,-0.1,1.6],

            [0.4,-0.1,1.2,],
            [0.8,-0.1,1.2,],
            [1.2,-0.1,1.2,],

            [1,-0.1,1.5,],
            [1.4,-0.1,1.5,],
            [0.5,-0.1,1.6],
            

            //Mid
            
            [-1.2,-0.1,1.8,],
            [-1.3,-0.1,2.2],
            [1.2,-0.1,1.8,],
            [1.3,-0.1,2.2],


            //Near
            
        ]
        var num_of_trees= positions.length;

        //Loading a tree
        mtlLoader.load('assets/trees/CartoonTree.mtl',
            materials => {
                materials.preload();

                loader.setMaterials(materials);
                loader.load('assets/trees/CartoonTree.obj',
                    obj => {
                        obj.scale.set(0.1,0.1,0.1);
                        obj.position.z=obj.position.z+1.2;
                        obj.position.y=obj.position.y - 0.1;
                        obj.children.shift();
                        this.meshes.push(obj);
                        this.add(obj);
                        for(var i =0; i<num_of_trees; i++){
                            let clone_tree = obj.clone();
                            clone_tree.position.set(positions[i][0], positions[i][1],positions[i][2]);
                            this.meshes.push(clone_tree);
                            this.add(clone_tree);
                        }
                    }
                )
            }
        )
        

    }

    animate(){
        
    }
}

export default Jungle;