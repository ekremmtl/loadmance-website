// JS
// import * as THREE from 'three'

import $ from "jquery";


import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';

import * as dat from 'dat.gui';

import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';

// Debug Color
const parameters = {
    bgColor: 0x20202,
    hemiLightColor1: 0x0,
    hemiLightColor2: 0xffffff,
    dirLightColor: 0xffffff,
    modelColor: 0xffffff,
    wireframeColor: 0x0,
    wireframeColor2: 0xffffff,
}

const params = {
    edgeStrength: 1.6,
    edgeGlow: 1,
    edgeThickness: 1.0,
    pulsePeriod: 0,
    rotate: false,
    usePatternTexture: false
};


let scene, renderer, camera, stats;
let model, objectPosition, objectRotation, objectOpacity;
let light1;
let composer, effectFXAA, outlinePass;
let pixelPass;
let objectItem, near, far;

let selectedObjects = [];

let bulbLight, bulbMat, hemiLight;
let ballMat, cubeMat, floorMat, dirLight;

let INTERSECTED, raycaster;
let theta = 0;

let torus, torus1;

const pointer = new THREE.Vector2();

const postprocessing = {};

setTimeout(() => {
    gsap.to(window, { duration: 0, scrollTo: 0 });
}, 100);
init();

function init() {
    const container = document.getElementById('container');

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    // camera.position.set(0, 0.95, 3);
    camera.position.set(0, 1, 4);
    // camera.lookAt(object.position);

    scene = new THREE.Scene();
    scene.background = new THREE.Color(parameters.bgColor);

    const hemiLight = new THREE.HemisphereLight(parameters.hemiLightColor1, parameters.hemiLightColor2);
    hemiLight.position.set(-8.42, -2.5, 30);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(parameters.dirLightColor);
    dirLight.position.set(15.6, 12.4, 13.7);
    scene.add(dirLight);

    const sphere = new THREE.SphereGeometry(0.5, 16, 8);

    light1 = new THREE.PointLight(0xffffff, 3, 30);
    light1.position.x = 3;
    light1.position.y = -4.17;
    light1.position.z = 1.8;
    scene.add(light1);

    // scene.add(camera)

    // ground
    // const mesh = new THREE.Mesh( new THREE.PlaneGeometry( 100, 100 ), new THREE.MeshPhongMaterial( { color: 0x999999, depthWrite: false } ) );
    // mesh.rotation.x = - Math.PI / 2;
    // mesh.receiveShadow = true;
    // scene.add( mesh );


    // ScrollTrigger
    ScrollTrigger.defaults({
        immediateRender: false,
        ease: "power1.inOut",
        scrub: true
    });

    //     RectAreaLightUniformsLib.init();

    //     const rectLight2 = new THREE.RectAreaLight(parameters.bgColor, 5, 4, 20);
    //     rectLight2.position.set(0, 5, 5);

    //     console.log(rectLight2);
    //     scene.add(rectLight2);
    //    scene.add(new RectAreaLightHelper(rectLight2));

    // Debug
    const gui = new dat.GUI({ closed: true });
    // document.querySelector(".dg.ac").style.display = "none";

    gui.addColor(parameters, "bgColor").onChange(() => {
        scene.background = new THREE.Color(parameters.bgColor);
    });
    gui.addColor(parameters, "hemiLightColor1").onChange(() => {
        hemiLight.color.set(parameters.hemiLightColor1);
    });
    gui.addColor(parameters, "hemiLightColor2").onChange(() => {
        hemiLight.groundColor.set(parameters.hemiLightColor2);
    });
    gui.addColor(parameters, "dirLightColor").onChange(() => {
        dirLight.color.set(parameters.dirLightColor);
    });

    gui.add(hemiLight.position, 'x').min(-20).max(40).step(0.01).name("light p: x");
    gui.add(hemiLight.position, 'y').min(-20).max(40).step(0.01).name("light p: y");
    gui.add(hemiLight.position, 'z').min(-20).max(40).step(0.01).name("light p: z");

    gui.add(dirLight.position, 'x').min(-20).max(40).step(0.01).name("light 2 p: x");
    gui.add(dirLight.position, 'y').min(-20).max(40).step(0.01).name("light 2 p: y");
    gui.add(dirLight.position, 'z').min(-20).max(40).step(0.01).name("light 2 p: z");

    gui.add(light1.position, 'x').min(-20).max(40).step(0.01).name("point l x");
    gui.add(light1.position, 'y').min(-20).max(40).step(0.01).name("point l y");
    gui.add(light1.position, 'z').min(-20).max(40).step(0.01).name("point l z");

    gui.add(camera.position, 'x').min(-20).max(40).step(0.01).name("camera p: x");
    gui.add(camera.position, 'y').min(-20).max(40).step(0.01).name("camera p: y");
    gui.add(camera.position, 'z').min(-20).max(40).step(0.01).name("camera p: z");

    gui.add(camera.rotation, 'x').min(-20).max(40).step(0.01).name("camera r: x");
    gui.add(camera.rotation, 'y').min(-20).max(40).step(0.01).name("camera r: y");
    gui.add(camera.rotation, 'z').min(-20).max(40).step(0.01).name("camera r: z");




    // Init gui

    gui.add(params, 'edgeStrength', 0.01, 10).onChange(function (value) {

        outlinePass.edgeStrength = Number(value);

    });

    gui.add(params, 'edgeGlow', 0.0, 1).onChange(function (value) {

        outlinePass.edgeGlow = Number(value);

    });

    gui.add(params, 'edgeThickness', 1, 4).onChange(function (value) {

        outlinePass.edgeThickness = Number(value);

    });

    gui.add(params, 'pulsePeriod', 0.0, 5).onChange(function (value) {

        outlinePass.pulsePeriod = Number(value);

    });

    gui.add(params, 'rotate');

    gui.add(params, 'usePatternTexture').onChange(function (value) {

        outlinePass.usePatternTexture = value;

    });

    function Configuration() {

        this.visibleEdgeColor = '#ffffff';
        this.hiddenEdgeColor = '#190a05';

    }

    const conf = new Configuration();

    gui.addColor(conf, 'visibleEdgeColor').onChange(function (value) {

        outlinePass.visibleEdgeColor.set(value);

    });

    gui.addColor(conf, 'hiddenEdgeColor').onChange(function (value) {

        outlinePass.hiddenEdgeColor.set(value);

    });


    $("#pagination span").click(function () {
        let spanIndex = $(this).index()



        gsap.to($(this), {
            background: "#f7f7f7",
        })
        gsap.to($(this).siblings(), {
            background: "#404040",
        })


        if (spanIndex == 0) {
            gsap.to(window, { duration: 1, scrollTo: 0 });

        } else if (spanIndex == 1) {
            gsap.to(window, { duration: 1, scrollTo: 1600 });
        } else if (spanIndex == 2) {
            gsap.to(window, { duration: 1, scrollTo: 2600 });
        }
    });

    gsap.to(".hero-section span", {
        rotation: -10,
        autoAlpha: 0,
        y: -150,
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "500px top",
        }
    })

    gsap.to(".hero-section h1", {
        rotation: 8,
        autoAlpha: 0,
        y: -100,
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "500px top",
        }
    })

    gsap.to(".hero-section p", {
        rotation: -5,
        autoAlpha: 0,
        y: -50,
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "500px top",
        }
    })

    // Step 1
    gsap.to(camera.position, {
        y: 0.95, scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "1000px top",
        }
    })

    gsap.to(camera.position, {
        z: 3, scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "1000px top",
        }
    })

    gsap.to(".text-1 h2", {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,

        scrollTrigger: {
            trigger: "body",
            start: "1100px top",
            end: "1800px top",
        }
    })

    gsap.to(".text-1 p", {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,

        scrollTrigger: {
            trigger: "body",
            start: "1100px top",
            end: "1800px top",
        }
    })

    gsap.to(".text-1 h2", {
        autoAlpha: 0,
        y: 20,
        duration: 0.6,

        scrollTrigger: {
            trigger: "body",
            start: "1600px top",
            end: "1800px top",
        }
    })

    gsap.to(".text-1 p", {
        autoAlpha: 0,
        y: 20,
        duration: 0.6,

        scrollTrigger: {
            trigger: "body",
            start: "1600px top",
            end: "1800px top",
        }
    })

    gsap.to(".text-2 h2", {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,

        scrollTrigger: {
            trigger: "body",
            start: "1900px top",
            end: "2400px top",
        }
    })

    gsap.to(".text-2 p", {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,

        scrollTrigger: {
            trigger: "body",
            start: "1900px top",
            end: "2400px top",
        }
    })

    // Step 2
    gsap.to(camera.position, {
        x: 0.65, scrollTrigger: {
            trigger: "body",
            start: "1100px top",
            end: "1800px top",
        }
    })

    gsap.to(camera.position, {
        y: 1.32, scrollTrigger: {
            trigger: "body",
            start: "1100px top",
            end: "1800px top",
        }
    })

    gsap.to(camera.position, {
        z: 1.18, scrollTrigger: {
            trigger: "body",
            start: "1100px top",
            end: "1800px top",
        }
    })

    gsap.to("#pagination span:nth-child(1)", {
        background: "#f7f7f7",
    })

    gsap.to("#pagination span:nth-child(1)", {
        background: "#404040",
        scrollTrigger: {
            trigger: "body",
            start: "1100px top",
            end: "1100px top",
        }
    })

    gsap.to("#pagination span:nth-child(2)", {
        background: "#f7f7f7",
        scrollTrigger: {
            trigger: "body",
            start: "1100px top",
            end: "1100px top",
        }
    })

    gsap.to("#pagination span:nth-child(3)", {
        background: "#404040",
        scrollTrigger: {
            trigger: "body",
            start: "1100px top",
            end: "1100px top",
        }
    })

    // Step 3
    gsap.to(camera.position, {
        x: 0, scrollTrigger: {
            trigger: "body",
            start: "1900px top",
            end: "2600px top",
        }
    })

    gsap.to(camera.position, {
        y: 1.15, scrollTrigger: {
            trigger: "body",
            start: "1900px top",
            end: "2600px top",
        }
    })

    gsap.to(camera.position, {
        z: 1.3, scrollTrigger: {
            trigger: "body",
            start: "1900px top",
            end: "2600px top",
        }
    })

    gsap.to("#pagination span:nth-child(1)", {
        background: "#404040",
        scrollTrigger: {
            trigger: "body",
            start: "1900px top",
            end: "1900px top",
        }
    })

    gsap.to("#pagination span:nth-child(2)", {
        background: "#404040",
        scrollTrigger: {
            trigger: "body",
            start: "1900px top",
            end: "1900px top",
        }
    })

    gsap.to("#pagination span:nth-child(3)", {
        background: "#f7f7f7",
        scrollTrigger: {
            trigger: "body",
            start: "1900px top",
            end: "1900px top",
        }
    })

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ReinhardToneMapping;

    container.appendChild(renderer.domElement);

    // var geometry = new THREE.BoxGeometry(1, 1, 1);
    // var material1 = new THREE.MeshNormalMaterial();
    // var mesh1 = new THREE.Mesh(geometry, material1);

    // mesh1.position.y = 5;
    // mesh1.position.z = -10;

    // scene.add(mesh1);

    // gui.add(mesh1.position, 'x').min(-20).max(40).step(0.01).name("Mesh: x");
    // gui.add(mesh1.position, 'y').min(-20).max(40).step(0.01).name("Mesh: y");
    // gui.add(mesh1.position, 'z').min(-20).max(40).step(0.01).name("Mesh: z");


    const geometry = new THREE.TorusGeometry( 10, 3, 16, 100, 1 );
    // const material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
    const material = new THREE.PointsMaterial( { 
        size: 1,
    } );

    torus = new THREE.Points( geometry, material );
    // torus = new THREE.Mesh( geometry, material );

    torus.position.y = 3.5;
    torus.position.z = -45;

    // scene.add( torus );

    const geometry1 = new THREE.TorusGeometry( 10, 3, 16, 100, 3 );
    torus1 = new THREE.Points( geometry1, material );
    // torus = new THREE.Mesh( geometry, material );

    torus1.position.y = 3.5;
    torus1.position.z = -45;

    // scene.add( torus1 );


    gui.add(torus.geometry.parameters, 'arc').min(-70).max(40).step(0.01).name("Arc");
    gui.add(torus.position, 'x').min(-70).max(40).step(0.01).name("Mesh: x");
    gui.add(torus.position, 'y').min(-70).max(40).step(0.01).name("Mesh: y");
    gui.add(torus.position, 'z').min(-70).max(40).step(0.01).name("Mesh: z");
    gui.add(material, 'size').min(0).max(1).step(0.01).name("Dots Size");




    var domEvents = new THREEx.DomEvents(camera, renderer.domElement)

    domEvents.addEventListener(scene, 'click', function (event) {
        // material1.wireframe = true;
    }, false)


    const loader = new THREE.FBXLoader();
    loader.load('./Earth_2K.fbx', function (gltf) {
        model = gltf.scene;
        scene.add(model);
        
        animate();
    });

    composer = new EffectComposer(renderer);

    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    composer.addPass(new UnrealBloomPass({ x: 1024, y: 1024 }, 2.0, 0.0, 0.5))

    outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), scene, camera);
    composer.addPass(outlinePass);
    outlinePass.selectedObjects = selectedObjects;
    outlinePass.edgeStrength = params.edgeStrength

    effectFXAA = new ShaderPass(FXAAShader);
    effectFXAA.uniforms['resolution'].value.set(1 / window.innerWidth, 1 / window.innerHeight);
    composer.addPass(effectFXAA);

    // renderer.shadowMap.enabled = true;

    stats = new Stats();
    // container.appendChild(stats.dom);

    window.addEventListener('resize', onWindowResize);

    // const controls = new OrbitControls( camera, renderer.domElement );
    // controls.update();

}

// raycaster = new THREE.Raycaster()
// const clickMouse = new THREE.Vector2();
// const moveMouse = new THREE.Vector2();
// let clickItem = THREE.Object3D;

// window.addEventListener("click", function (e) {
//     clickMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
//     clickMouse.y = - (e.clientY / window.innerWidth) * 2 + 1;

//     raycaster.setFromCamera(clickMouse, camera);
//     const intersects = raycaster.intersectObjects(scene.children, true);
//     intersects.push(scene.children[3])
//     console.log(intersects);
//     if(intersects.length > 0){
//         // clickItem = intersects[0].object.name;
//         // console.log(intersects);
//         // intersects[0].object.material.color.set(0x00ff00)
//         // intersects[1].object.material.color.set(0x00ff00)
//         // intersects[2].object.material.color.set(0x00ff00)
//         // console.log(intersects)
//     }else{
//         // objectItem.material.color.set(0xff0000)
//     }
// })

// Resize
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

    // composer.setSize(window.innerWidth, window.innerHeight);
    // effectFXAA.uniforms['resolution'].value.set(1 / window.innerWidth, 1 / window.innerHeight);

}


// Render
function animate() {
    const time = Date.now() * 0.0005;

    requestAnimationFrame(animate);


    // torus.rotation.x = time * 0.8
    // torus.rotation.y = time * 0.5


    // torus1.rotation.x = (time * 0.8) + 200 
    // torus1.rotation.y = (time * 0.5) + 200 


    // light1.position.x = Math.sin( time * 0.8 ) * 20;
    // light1.position.y = Math.cos( time * 0.8 ) * 20;
    // light1.position.z = Math.cos( time * 0.3 ) * 20;

    // stats.update();

    composer.render();
    // renderer.render(scene, camera);
}