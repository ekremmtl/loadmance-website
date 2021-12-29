import './page/homepage-hero'
import './page/homepage-reviews'

import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as dat from 'lil-gui'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'


var pricingPlanItem = $(".pricing-content .content-plan");
var pricingPlanOffset = pricingPlanItem.offset()

if (pricingPlanItem.length) {
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop()

        if (scrollTop > (pricingPlanOffset.top + $(".pricing-content .content-plan").height())) {
            $(".pricing-fixed").addClass("active");
        } else {
            $(".pricing-fixed").removeClass("active");
        }
    })
}

$(".switch-plan .switch-item > input").change(function () {
    if ($(this).is(":checked")) {
        $(".annual-item").css("display", "none")
        $(".monthly-item").css("display", "inline-block")
    } else {
        $(".annual-item").css("display", "inline-block")
        $(".monthly-item").css("display", "none")
    }
})




gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

var container, stats;
var camera, scene, renderer;
var lumiereS;
var sphereTab = [];
var light, light2;
const gui = new dat.GUI()
const debugParameters = {
    objectScale: 1,
    sceneBackground: 0x141414,
    objectColor: 0xff0000,
}

init();
animate();

// Camera px: 1
// Camera py: 1
// Camera pz: 600
// Camera rx: -0.35
// Camera ry: -0.3
// Camera rz: 0
// Object px: -180
// Object py: 155
// Object pz: -200
// Object scale: 1.2

// Camera px: 1
// Camera py: 1
// Camera pz: 400
// Camera rx: 0
// Camera ry: 0
// Camera rz: 0
// Object px: 140
// Object py: 0
// Object pz: 0
// Object scale: 3

// Camera px: 1
// Camera py: 1
// Camera pz: 260
// Camera rx: -0.35
// Camera ry: -0.3
// Camera rz: 0
// Object px: 70
// Object py: -60
// Object pz: -200
// Object scale: 1

// $(".logo-container .logo-sprites .logo-sprites-bar").addClass("ekrem")
// let asd = $(".logo-container .logo-sprites .logo-sprites-bar").position()
// console.log(asd.top, asd.left);

// // these are relative to the viewport, i.e. the window
// var top = Math.floor(viewportOffset.top);
// var left = Math.floor(viewportOffset.left);
// console.log(top, left);

var viewportOffset = document.querySelector(".logo-container .logo-sprites .logo-sprites-bar").getBoundingClientRect();

gsap.to(".logo-container.logo-container-bar", {
    opacity: 1,
})

gsap.to(".logo-container .logo-sprites .logo-sprites-bar", {
    opacity: 0,
})

gsap.to(".logo-container-bar .logo-sprites-meteor > svg", {
    scale: 1,
    scrollTrigger: {
        trigger: "body",
        start: "1001px top",
        end: "2000px top",
        scrub: true,
        markers: false,
        onEnter: () => $(".logo-container-bar .logo-sprites-bar").addClass('shake-active'),
        onLeave: () => $(".logo-container-bar .logo-sprites-bar").removeClass('shake-active'),
        onEnterBack: () => $(".logo-container-bar .logo-sprites-bar").addClass('shake-active'),
        onLeaveBack: () => $(".logo-container-bar .logo-sprites-bar").removeClass('shake-active'),
    }
})

gsap.to(".logo-container-bar-light-2", {
    scale: 0,
})

gsap.to(".logo-container-bar-light-2", {
    scale: 1,
    y: 0,
    scrollTrigger: {
        trigger: "body",
        start: "1001px top",
        end: "1300px top",
        scrub: true,
        markers: false,
    }
})

gsap.to(".logo-container-bar .logo-sprites-meteor > span", {
    scale: 0,
    scrollTrigger: {
        trigger: "body",
        start: "1001px top",
        end: "1300px top",
        scrub: true,
        markers: false,
    }
})

gsap.to(".logo-container-bar .logo-sprites-meteor-flame", {
    opacity: 1,
    scrollTrigger: {
        trigger: "body",
        start: "1001px top",
        end: "2000px top",
        scrub: true,
        markers: false,
    }
})

gsap.to(".logo-container-bar .logo-sprites-bar > svg", {
    opacity: 1,
    scrollTrigger: {
        trigger: "body",
        start: "1001px top",
        end: "2000px top",
        scrub: true,
        markers: false,
    }
})

gsap.to(".logo-container.logo-container-bar", {
    x: Math.floor(viewportOffset.left) + 27.7,
    y: Math.floor(viewportOffset.top) + 68.346,
    scale: 1,
    scrollTrigger: {
        trigger: "body",
        start: "1001px top",
        end: "4000px top",
        scrub: true,
        markers: false,
    }
})

gsap.fromTo(".logo-container-bar-light-2", {
    scale: 1,
}, {
    scale: 0.3,
    opacity: 0,
    scrollTrigger: {
        trigger: "body",
        start: "1400px top",
        end: "3000px top",
        scrub: true,
        markers: false,
    }
})

gsap.fromTo(".logo-container.logo-container-bar", {
    opacity: 1,
}, {
    opacity: 0,

    scrollTrigger: {
        trigger: "body",
        start: "4000px top",
        end: "4001px top",
        scrub: true,
        markers: false
    }
})

gsap.fromTo(".logo-container-center .logo-sprites-bar", {
    opacity: 0,
}, {
    opacity: 1,

    scrollTrigger: {
        trigger: "body",
        start: "4000px top",
        end: "4001px top",
        scrub: true,
        markers: false
    }
})



gsap.to(".logo-container-center .logo-sprites-bar", {
    rotation: -50,
})

gsap.to(".logo-container-center", {
    x: "-20%",
})

gsap.to(".image-container .image-bg", {
    opacity: 1,

    scrollTrigger: {
        trigger: "body",
        start: "4001px top",
        end: "4100px top",
        scrub: true,
        markers: false,
    }
})

gsap.to(".logo-container-center .logo-sprites-circle", {
    opacity: 1,

    scrollTrigger: {
        trigger: "body",
        start: "4001px top",
        end: "4100px top",
        scrub: true,
        markers: false,
    }
})

gsap.fromTo(".logo-container-center .logo-sprites-bar", {
    rotation: -50,
}, {
    rotation: -80,
    scrollTrigger: {
        trigger: "body",
        start: "4101px top",
        end: "4200px top",
        scrub: true,
        markers: false,
    }
})

gsap.fromTo(".logo-container-center .logo-sprites-bar", {
    rotation: -80,
}, {
    rotation: -60,
    scrollTrigger: {
        trigger: "body",
        start: "4201px top",
        end: "4300px top",
        scrub: true,
        markers: false,
    }
})

gsap.fromTo(".logo-container-center .logo-sprites-bar", {
    rotation: -60,
}, {
    rotation: -70,
    scrollTrigger: {
        trigger: "body",
        start: "4301px top",
        end: "4400px top",
        scrub: true,
        markers: false,
    }
})

gsap.fromTo(".logo-container-center .logo-sprites-bar", {
    rotation: -70,
}, {
    rotation: 80,
    scrollTrigger: {
        trigger: "body",
        start: "4401px top",
        end: "4500px top",
        scrub: true,
        markers: false,
    }
})

gsap.fromTo(".logo-container-center .logo-sprites-bar", {
    rotation: 80,
}, {
    rotation: 50,
    scrollTrigger: {
        trigger: "body",
        start: "4501px top",
        end: "4600px top",
        scrub: true,
        markers: false,
    }
})

gsap.fromTo(".logo-container-center", {
    x: "-20%",
}, {
    x: "-50%",
    scrollTrigger: {
        trigger: "body",
        start: "4501px top",
        end: "4600px top",
        scrub: true,
        markers: false,
    }
})


gsap.to(".image-container .image-bg", {
    x: "-50%",
    width: "40%",

    scrollTrigger: {
        trigger: "body",
        start: "4501px top",
        end: "4600px top",
        scrub: true,
        markers: false,
    }
})


gsap.to(".logo-container-center .logo-title > span", {
    opacity: 1,
    y: 0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "body",
        start: "4501px top",
        end: "4600px top",
        scrub: true,
        markers: false,
    }
})

gsap.to(".image-container .image-bg", {
    width: "20%"
})

gsap.fromTo(".image-container .image-bg", {
    width: "40%"
}, {
    width: "100%",
    height: "100%",

    scrollTrigger: {
        trigger: "body",
        start: "4601px top",
        end: "8000px top",
        scrub: true,
        markers: false,
    }
})

gsap.fromTo(".logo-container.logo-container-center", {
    x: "-50%",
}, {
    x: 40,
    y: 23,
    scale: 0.2,
    left: 0,
    top: 0,
    transformOrigin: "left top",

    scrollTrigger: {
        trigger: "body",
        start: "4650px top",
        end: "8000px top",
        scrub: true,
        markers: false,
    }
})

//-- Image Container
const easeValue = "Expo.easeOut";

gsap.to(".image-container .image-header-right", {
    x: 0,
    y: 0,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "6800px top",
        end: "8000px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-container .image-header-right .right-item", {
    scale: 1,
    opacity: 1,
    stagger: 0.1,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "6800px top",
        end: "8000px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-container .image-header-right .right-item > span", {
    scale: 1,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "6850px top",
        end: "8900px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-container .image-body-bg", {
    y: 0,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "6500px top",
        end: "8000px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-container .image-body .image-body-page-title > span", {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "7950px top",
        end: "8200px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-container .image-body .image-body-page-title ul", {
    x: 0,
    y: 0,
    scale: 1,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "8000px top",
        end: "8300px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-container .image-body .image-body-page-title ul li", {
    y: 0,
    opacity: 1,
    stagger: 0.1,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "8000px top",
        end: "8300px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-container .image-body .image-body-sidebar .image-body-sidebar-bg", {
    x: 0,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "8000px top",
        end: "8300px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-container .image-body .image-body-sidebar ul li svg", {
    scale: 1,
    stagger: 0.1,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "8100px top",
        end: "8300px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-container .image-body .image-body-sidebar ul li > span", {
    x: 0,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "8200px top",
        end: "8300px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-container .image-body .image-body-row .image-body-col .image-body-sidebar-item", {
    y: 0,
    stagger: 0.1,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "8300px top",
        end: "8600px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-container .image-body .image-body-row .image-body-col .image-body-sidebar-item .item-bg", {
    y: 0,
    stagger: 0.1,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "8300px top",
        end: "8600px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-container .image-body .image-body-row .image-body-col .image-body-sidebar-item .item-bg > span", {
    y: 0,
    stagger: 0.1,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "8300px top",
        end: "8600px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-container .image-body .image-body-row .image-body-col .image-body-sidebar-item:nth-child(1) .item-header > span", {
    y: 0,
    opacity: 1,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "8300px top",
        end: "8600px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-container .image-body .image-body-row .image-body-col .image-body-sidebar-item:nth-child(2) .item-header > span", {
    y: 10,
    opacity: 1,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "8310px top",
        end: "8600px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-container .image-body .image-body-row .image-body-col .image-body-sidebar-item .item-header > span svg", {
    scale: 1,
    stagger: 0.1,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "8300px top",
        end: "8600px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-container .image-body .image-body-row .image-body-col .image-body-sidebar-item .item-header > svg", {
    scale: 1,
    stagger: 0.1,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "8300px top",
        end: "8600px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-container .image-body .image-body-row .image-body-col .image-body-sidebar-item .item-select > span", {
    y: 0,
    opacity: 1,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "8300px top",
        end: "8600px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-container .image-body .image-body-row .image-body-col .image-body-sidebar-item .item-select .select", {
    y: 0,
    opacity: 1,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "8300px top",
        end: "8600px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-container .image-body .image-body-row .image-body-col .image-body-sidebar-item .item-select .select > span", {
    y: 0,
    opacity: 1,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "8300px top",
        end: "8600px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-container .image-body .image-body-row .image-body-col .image-body-sidebar-item .item-select .select svg", {
    y: 0,
    opacity: 1,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "8300px top",
        end: "8600px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-container .image-body .image-body-row .image-body-col .image-body-sidebar-item .item-body ul li", {
    y: 0,
    opacity: 1,
    stagger: 0.1,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "8350px top",
        end: "8600px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-menu .image-menu-bg", {
    x: 0,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "8500px top",
        end: "9500px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-menu .image-menu-bg > span", {
    x: 0,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "8500px top",
        end: "9500px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-menu .image-menu-add span:nth-child(1)", {
    scale: 1,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "8550px top",
        end: "8600px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-menu .image-menu-add span:nth-child(1) svg", {
    scale: 1,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "8550px top",
        end: "8600px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-menu .image-menu-add > span", {
    x: 0,
    opacity: 1,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "8550px top",
        end: "8600px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-menu .image-menu-center ul li svg", {
    scale: 1,
    stagger: 0.1,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "8580px top",
        end: "8650px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-menu .image-menu-center ul li span", {
    x: 0,
    opacity: 1,
    stagger: 0.1,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "8580px top",
        end: "8800px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-menu .image-menu-profile", {
    scale: 1,
    stagger: 0.1,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "9000px top",
        end: "9500px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-menu .image-menu-profile img", {
    scale: 1,
    stagger: 0.1,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "9010px top",
        end: "9500px top",
        scrub: 1,
        markers: false,
    }
})
//-
gsap.to(".image-container .image-body .image-body-col:nth-child(2) .body-content-header .body-content-header-title > span", {
    y: 0,
    opacity: 1,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "8500px top",
        end: "9000px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-container .image-body .image-body-col:nth-child(2) .body-content-header .body-content-header-title > p", {
    y: 0,
    opacity: 1,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "8540px top",
        end: "9000px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-container .image-body .image-body-row .image-body-col:nth-child(2) .body-content-header .body-content-header-buttons .button", {
    x: 0,
    opacity: 1,
    stagger: 0.1,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "8500px top",
        end: "9000px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-container .image-body .image-body-row .image-body-col:nth-child(2) .body-content-charts .chart-item", {
    y: 0,
    opacity: 1,
    stagger: 0.1,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "8700px top",
        end: "9300px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-container .image-body .image-body-row .image-body-col:nth-child(2) .body-content-charts .chart-item .item-header span:nth-child(1)", {
    y: 0,
    opacity: 1,
    stagger: 0.1,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "8700px top",
        end: "9300px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-container .image-body .image-body-row .image-body-col:nth-child(2) .body-content-charts .chart-item .item-header span:nth-child(2)", {
    y: 0,
    opacity: 1,
    stagger: 0.1,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "8710px top",
        end: "9300px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-container .image-body .image-body-col:nth-child(2) .body-content-charts .chart-item .item-icon", {
    scale: 1,
    stagger: 0.1,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "8720px top",
        end: "9300px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-container .image-body .image-body-col:nth-child(2) .body-content-charts .chart-item .item-data", {
    x: 0,
    stagger: 0.1,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "8740px top",
        end: "9300px top",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".image-container .image-body .image-body-col:nth-child(2) .body-content-charts .chart-item .item-data svg", {
    x: 0,
    stagger: 0.1,
    ease: easeValue,

    scrollTrigger: {
        trigger: "body",
        start: "8740px top",
        end: "9300px top",
        scrub: 1,
        markers: false,
    }
})

//-- Image Container


function init() {
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(1, 1, 400);
    camera.rotation.set(0, 0, 0);

    scene = new THREE.Scene();

    lumiereS = new THREE.MeshPhongMaterial({
        emissive: '#fff',
        opacity: 0.2,
        transparent: true
    });

    for (var i = 0; i < 300; i++) {
        sphereTab.push(new THREE.Mesh(new THREE.SphereGeometry(Math.random() * 1, 20, 20), lumiereS));
    }

    for (var i = 0; i < sphereTab.length; i++) {
        sphereTab[i].position.set(Math.random() * 600 - 300, Math.random() * 600 - 300, Math.random() * 4 - 900);
        // scene.add(sphereTab[i]);
    }

    // lights
    light = new THREE.DirectionalLight(0xffffff, 2); // 0x6d507b
    light.position.set(-300, -240, -150);
    // scene.add(light);

    light2 = new THREE.DirectionalLight(0xffffff, 3); // 0x419efc
    light2.position.set(-335, 525, 350);
    // scene.add(light2);

    const loader = new GLTFLoader()
    loader.load('./earth.gltf', modelLoad);

    let model
    function modelLoad(gltf) {
        model = gltf.scene;

        if (model) {
            document.querySelector(".pre-loader").style.display = "none"

            document.body.style.overflowY = "auto"
            document.body.style.overflowX = "hidden"
            setTimeout(() => {
                gsap.to(window, { duration: 0, scrollTo: 0 });
            }, 500);
        }

        model.position.set(140, 0, 0)
        model.scale.set(7, 7, 7)
        model.rotation.y = 0.65

        model.traverse(function (object) {
            console.log(object.name);

            // main.js:478 
            // main.js:478 id1
            // main.js:478 germany
            // main.js:478 spain
            // main.js:478 turkey
            // main.js:478 earth

            // if (child.isMesh) {
            if (object.name === "turkey") {
                object.material.color.set(0xffffff)
            }
        })

        // object.children[3].material.opacity = 0
        // object.children[3].material.transparent = true
        // object.children[2].material.transparent = true

        // object.children[1].material.opacity = 1
        // object.children[1].material.transparent = true

        // object.children[2].material.opacity = 1
        // object.children[2].material.transparent = true

        // object.children[3].material.opacity = 1
        // object.children[3].material.transparent = true

        // object.children[0].material.opacity = 0.1
        // object.children[0].material.transparent = true

        // object.children[4].material.color = new THREE.Color(debugParameters.objectColor)
        // object.children[3].material.color = new THREE.Color(0x00ff00)

        // console.log(object.children[3].name);







        // object.children[2].material.color = new THREE.Color(debugParameters.objectColor)
        // object.children[3].material.color = new THREE.Color(debugParameters.objectColor)


        // window.addEventListener("mousemove", function (e) {
        //     gsap.to(object.rotation, {
        //         x: (-e.clientY * 0.00001),
        //         y: -(e.clientX * 0.0001) - 1.15,
        //         duration: 0.4,
        //     })
        // })


        // gsap.fromTo(object.position, {
        //     x: 140,
        //     y: 0,
        // }, {
        //     x: 500,
        //     y: -130,
        //     scrollTrigger: {
        //         trigger: "body",
        //         start: "1001px top",
        //         end: "2000px top",
        //         scrub: true,
        //         markers: false,
        //     }
        // })

        // gsap.to(object.scale, {
        //     x: 1.2,
        //     y: 1.2,
        //     z: 1.2,
        // })

        // gsap.to(object.scale, {
        //     x: 5.6,
        //     y: 5.6,
        //     z: 5.6,
        //     duration: 1,
        //     delay: 1,
        // })

        // gsap.to(object.children[3].material, {
        //     opacity: 1,
        //     duration: 1,
        //     delay: 1,
        // })

        // gsap.fromTo(object.scale, {
        //     x: 5.6,
        //     y: 5.6,
        //     z: 5.6,
        // }, {
        //     x: 2.5,
        //     y: 2.5,
        //     z: 2.5,
        //     scrollTrigger: {
        //         trigger: "body",
        //         start: "1001px top",
        //         end: "2000px top",
        //         scrub: true,
        //         markers: false,
        //     }
        // })

        // gsap.to(object.children[2].material, {
        //     opacity: 1,
        // })

        // gsap.to(object.children[2].material, {
        //     opacity: 0.2,

        //     scrollTrigger: {
        //         trigger: "body",
        //         start: "top+=10px top",
        //         end: "1000px top",
        //         scrub: true,
        //         markers: false,
        //     }
        // })

        // gsap.fromTo(object.children[2].material, {
        //     opacity: 0.2,
        // }, {
        //     opacity: 1,

        //     scrollTrigger: {
        //         trigger: "body",
        //         start: "1001px top",
        //         end: "2000px top",
        //         scrub: true,
        //         markers: false,
        //     }
        // })

        const objectFolder = gui.addFolder('Object')
        objectFolder.add(model.position, 'x').min(-500).max(2000).step(0.1).name("px");
        objectFolder.add(model.position, 'y').min(-500).max(2000).step(0.1).name("py");
        objectFolder.add(model.position, 'z').min(-500).max(4000).step(0.1).name("pz");
        objectFolder.add(model.rotation, 'x').min(-10).max(10).step(0.001).name("rx");
        objectFolder.add(model.rotation, 'y').min(-10).max(10).step(0.001).name("ry");
        objectFolder.add(model.rotation, 'z').min(-10).max(10).step(0.001).name("rz");
        objectFolder.add(debugParameters, 'objectScale').min(0).max(10).step(0.1).name("scale").onChange(() => {
            model.scale.set(debugParameters.objectScale, debugParameters.objectScale, debugParameters.objectScale)
        });
        objectFolder.addColor(debugParameters, 'objectColor').onChange(() => {
            model.children[2].material.color = new THREE.Color(debugParameters.objectColor)
            model.children[3].material.color = new THREE.Color(debugParameters.objectColor)
        })
        objectFolder.open()

        // scene.add(model);

        console.log(model);

        if (model) {
            // modalAnimation()
        }
    }

    // var modalLoop = true;
    // function modalAnimation() {


    //     setTimeout(() => {
    //         modalLoop = false
    //     }, 1500);

    //     if (modalLoop) {
    //         requestAnimationFrame(modalAnimation)
    //     }
    // }

    // gsap.to(camera.position, {
    //     x: 1,
    //     y: 1,
    //     z: 400,
    // })

    // gsap.fromTo(camera.position, {
    //     x: 1,
    //     y: 1,
    //     z: 400,
    // }, {
    //     x: 65,
    //     y: 65,
    //     z: 240,
    //     scrollTrigger: {
    //         trigger: "body",
    //         start: "top+=10px top",
    //         end: "1000px top",
    //         scrub: true,
    //         markers: false,
    //     }
    // })

    // gsap.fromTo(camera.position, {
    //     x: 65,
    //     y: 65,
    //     z: 240,
    // }, {
    //     x: 1,
    //     y: 1,
    //     z: 400,
    //     scrollTrigger: {
    //         trigger: "body",
    //         start: "1001px top",
    //         end: "2000px top",
    //         scrub: true,
    //         markers: false,
    //     }
    // })

    // gsap.fromTo(camera.position, {
    //     z: 400,
    // }, {
    //     z: 200,
    //     scrollTrigger: {
    //         trigger: "body",
    //         start: "2001px top",
    //         end: "4000px top",
    //         scrub: true,
    //         markers: false,
    //     }
    // })

    const cameraFolder = gui.addFolder('Camera')
    cameraFolder.add(camera.position, 'x').min(-500).max(2000).step(0.1).name("px");
    cameraFolder.add(camera.position, 'y').min(-500).max(2000).step(0.1).name("py");
    cameraFolder.add(camera.position, 'z').min(-500).max(4000).step(0.1).name("pz");
    cameraFolder.add(camera.rotation, 'x').min(-10).max(10).step(0.001).name("rx");
    cameraFolder.add(camera.rotation, 'y').min(-10).max(10).step(0.001).name("ry");
    cameraFolder.add(camera.rotation, 'z').min(-10).max(10).step(0.001).name("rz");
    cameraFolder.open()

    const light1Folder = gui.addFolder('Light Top Right')
    light1Folder.add(light.position, 'x').min(-500).max(2000).step(0.1).name("px");
    light1Folder.add(light.position, 'y').min(-500).max(2000).step(0.1).name("py");
    light1Folder.add(light.position, 'z').min(-500).max(4000).step(0.1).name("pz");
    light1Folder.open()

    const light2Folder = gui.addFolder('Light Bottom Left')
    light2Folder.add(light2.position, 'x').min(-500).max(2000).step(0.1).name("px");
    light2Folder.add(light2.position, 'y').min(-500).max(2000).step(0.1).name("py");
    light2Folder.add(light2.position, 'z').min(-500).max(4000).step(0.1).name("pz");
    light2Folder.open()

    if (window.location.search !== "?debug") {
        document.querySelector(".lil-gui").remove()
    }

    //render
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.sortObjects = false;
    // renderer.setClearColor(0x131A3D, 1);
    renderer.setSize(window.innerWidth, window.innerHeight);

    stats = new Stats();

    container = document.getElementById('earth-container');
    // container.appendChild(renderer.domElement);
    // container.appendChild(stats.dom);

    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    console.log("resize");
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}

function animate() {
    var timer = 0.00001 * Date.now();

    for (var i = 0, il = sphereTab.length; i < il; i++) {
        var sfere = sphereTab[i];
        sfere.position.x = 400 * Math.sin(timer + i);
        sfere.position.z = 400 * Math.sin(timer + i * 1.1);
    }

    requestAnimationFrame(animate);
    render();
}

function render() {
    renderer.render(scene, camera)
    stats.update()
}