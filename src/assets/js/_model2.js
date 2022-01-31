import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

import * as THREE from 'three';

import Stats from 'three/examples/jsm/libs/stats.module.js'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { Lensflare, LensflareElement } from 'three/examples/jsm/objects/Lensflare.js';
import * as dat from 'lil-gui'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

// Setup a simple demo scene
var scene = new THREE.Scene();
var cam = new THREE.PerspectiveCamera(40, innerWidth / innerHeight, 0.1, maxDist);
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(devicePixelRatio);
renderer.setSize(innerWidth, innerHeight);
document.querySelector("#container").appendChild(renderer.domElement);

// STore our cubes somewhere, dist for random generation and clipping
var cubes = [], maxDist = 500, r = Math.random, materials = [];
for (var i = 0; i < 7; i++) materials.push(new THREE.MeshBasicMaterial({ color: (r() * 0xffffff) & 0xffffff | 0x999999, transparent: true }));

// Add and store some cubes
for (i = 0; i < 500; i++) {
    var cube = new THREE.Mesh(new THREE.BoxBufferGeometry(), materials[i % materials.length]);
    cubes.push(cube); // store to our array
    cube.position.set(r() * maxDist * 1.4 - maxDist, r() * maxDist * 1.4 - maxDist, r() * 3); // random positions
}
scene.add(...cubes);	//es6, add to scene
cam.position.z = maxDist;

let stats = new Stats();
container.appendChild(stats.dom);

// setInterval(() => {
//     for (i = 0, cube; i < cubes.length; i++) {  // for each cube do:
//         cube = cubes[i];
//         // cube.position.z -= 1; // move on Z in this demo
//         cube.opacity = maxDist;  
//     }
// }, 10);
const clock = new THREE.Clock();

// setInterval(() => {
//     const time = clock.getDelta();
//     let asd = Math.sin(time * 0.01);

//     // if (asd > 0) {
//     //     asd = time * 0.000003
//     // } else {
//     //     asd = time * -0.000003
//     // }
//     cubes[Math.floor(Math.random() * cubes.length)].material.opacity = asd;
// }, 100);

// Animate cubes
var tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 3
});

// for (i = 0, cube; i < cubes.length; i++) {  // for each cube do:
// cube = cubes[i];
// cube.position.z -= 1; // move on Z in this demo
// if (cube.position.z < -maxDist) cube.position.z = maxDist;  // reset position for demo



// tl.from(cube.material, { opacity: 0, duration: 2, })
// cube.material.transparent = true;
// 
// }
// setInterval(() => {

//     for (i = 0, cube; i < cubes.length; i++) {  // for each cube do:
//         var asdfads = cubes[i];
//         var positionsX = asdfads.position.x;
//         asdfads.position.x = (r() * maxDist * 2 - maxDist);  // reset position for demo
//     }
// }, 1000);

function loop(time) {
    const elapsedTime = clock.getElapsedTime()
    cubes[Math.floor(Math.random() * 3)].material.opacity = Math.max(Math.cos(elapsedTime), 0)

    // cubes[Math.floor(Math.random() * 5) + 3].material.opacity = Math.max(Math.cos(elapsedTime), 0)

    // console.log(Math.max(Math.sin(time * 0.00001), 0));
    // cam.rotation.z = Math.sin(time * 0.000003);      // add some camera action
    // cam.rotation.y = Math.sin(time * 0.000005) * 0.3;  // add some camera action
    renderer.render(scene, cam);                 // render everything
    requestAnimationFrame(loop)

    stats.update()
};
requestAnimationFrame(loop)