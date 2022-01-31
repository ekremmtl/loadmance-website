import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { RoughnessMipmapper } from 'three/examples/jsm/utils/RoughnessMipmapper.js';
import * as dat from 'lil-gui'de

let camera, scene, renderer;
const gui = new dat.GUI()de
const clock = new THREE.Clock()
let pointLight;
const debugParameters = {
    objectScale: 1,
    sceneBackground: 0x141414
}


init();
render();

function init() {

    const container = document.createElement('div');
    document.body.appendChild(container);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(1, 1, 300);

    scene = new THREE.Scene();
    scene.background = new THREE.Color(debugParameters.sceneBackground);

    pointLight = new THREE.PointLight(0xff0000, 3, 500);
    pointLight.position.set(80, 8.5, 75);
    scene.add(pointLight);

    const sphereSize = 1;
    const pointLightHelper = new THREE.PointLightHelper(pointLight, sphereSize);
    scene.add(pointLightHelper);

    const loader = new GLTFLoader()
    loader.load('./Earth2.glb', function (gltf) {
        const object = gltf.scene;

        object.position.x = 80
        object.rotation.y = -1.15
        object.scale.set(2, 2, 2)

        const objectFolder = gui.addFolder('Object')
        objectFolder.add(object.position, 'x').min(-500).max(2000).step(0.1).name("px");
        objectFolder.add(object.position, 'y').min(-500).max(2000).step(0.1).name("py");
        objectFolder.add(object.position, 'z').min(-500).max(4000).step(0.1).name("pz");
        objectFolder.add(object.rotation, 'x').min(-10).max(10).step(0.001).name("rx");
        objectFolder.add(object.rotation, 'y').min(-10).max(10).step(0.001).name("ry");
        objectFolder.add(object.rotation, 'z').min(-10).max(10).step(0.001).name("rz");
        objectFolder.add(debugParameters, 'objectScale').min(0).max(10).step(0.1).name("scale").onChange(() => {
            object.scale.set(debugParameters.objectScale, debugParameters.objectScale, debugParameters.objectScale)
        });
        // objectFolder.addColor(debugParameters, 'objectColor').onChange(() => {
        //     scene.background = new THREE.Color(debugParameters.sceneBackground)
        // })
        objectFolder.open()

        scene.add(object);
    });

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize);


    const sceneFolder = gui.addFolder('Scene')
    sceneFolder.addColor(debugParameters, 'sceneBackground').onChange(() => {
        scene.background = new THREE.Color(debugParameters.sceneBackground)
    })
    sceneFolder.open()

    const cameraFolder = gui.addFolder('Camera')
    cameraFolder.add(camera.position, 'x').min(-500).max(2000).step(0.1).name("px");
    cameraFolder.add(camera.position, 'y').min(-500).max(2000).step(0.1).name("py");
    cameraFolder.add(camera.position, 'z').min(-500).max(4000).step(0.1).name("pz");
    cameraFolder.add(camera.rotation, 'x').min(-10).max(10).step(0.001).name("rx");
    cameraFolder.add(camera.rotation, 'y').min(-10).max(10).step(0.001).name("ry");
    cameraFolder.add(camera.rotation, 'z').min(-10).max(10).step(0.001).name("rz");
    cameraFolder.open()

    const lightFolder = gui.addFolder('Light')
    lightFolder.add(pointLight.position, 'x').min(-500).max(2000).step(0.1).name("px");
    lightFolder.add(pointLight.position, 'y').min(-500).max(2000).step(0.1).name("py");
    lightFolder.add(pointLight.position, 'z').min(-500).max(4000).step(0.1).name("pz");
    lightFolder.open()
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}

//

function render() {
    const elapsedTime = clock.getElapsedTime()

    pointLight.position.x -= Math.cos(elapsedTime)
    pointLight.position.y -= Math.sin(elapsedTime)

    pointLight.upd

    renderer.render(scene, camera);
    requestAnimationFrame(render)
}