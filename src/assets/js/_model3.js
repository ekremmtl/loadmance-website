
import * as THREE from 'three';

import Stats from 'three/examples/jsm/libs/stats.module.js'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { Lensflare, LensflareElement } from 'three/examples/jsm/objects/Lensflare.js';
import * as dat from 'lil-gui'
import { AmbientLight } from 'three';


/**
 * Base
 */
// Canvas
const canvas = document.querySelector('#container')

// Scene
const scene = new THREE.Scene()

/**
 * Base
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

/**
 * Renderer
 */
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(sizes.width, sizes.height)
document.querySelector("#container").appendChild(renderer.domElement);

/**
 * Animate
 */
 const clock = new THREE.Clock()

const tick = () => {
    // Render
    renderer.render(scene, camera)

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    mesh.position.x = Math.cos(elapsedTime)
    mesh.material.opacity = Math.max(Math.cos(elapsedTime), 0)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()