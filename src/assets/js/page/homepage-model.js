import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import * as dat from 'lil-gui'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

/*
Camera X = -120
Camera Y = 30
Camera Z = 240
Camera RY = -2

Object X = -270
Object Y = 90
Object Scale = 0

//--

Camera X = 1
Camera Y = 1
Camera Z = 400
Camera RY = 0

Object X = 140
Object Y = 0
Object Scale = 7

//--

Camera X = 45
Camera Y = 44
Camera Z = 250

Ligt2 X = -500
Ligt2 Z = 4000

Object X = 97
Object Y = 5.6
Object Z = 0
Object RX = 0.45
Object RY = 1

//--

objectColorUK = 141414
earthColoor = 141414
*/

function homeModelAni(preLoaderTimer) {
    if ($("#earth-container").length) {
        if (window.outerWidth >= 1200) {
            var container, stats;
            var camera, scene, renderer, composer, mixer;
            var lumiereS;
            var sphereTab = [];
            var light, light2;
            var animationStep = {
                frame: 0
            };

            var composerCheck = true;

            const gui = new dat.GUI()
            const clock = new THREE.Clock();

            const debugParameters = {
                objectScale: 1,
                starColor: 0xffffff,
                sceneBackground: 0x04070c,
                objectColorGermany: 0xff4d00,
                objectColorUK: 0xffffff,
                objectColorSpain: 0xff3000,
                objectColorTurkey: 0xff0000,
                earthColor: 0xffffff,
                light1Color: 0x050163,
                light2Color: 0xffffff,
            }

            const params = {
                exposure: 1.3,
                bloomStrength: 1.5,
                bloomThreshold: 0,
                bloomRadius: 0,
                cameraLookX: 0,
                cameraLookY: 0,
                cameraLookZ: 0,
            };

            init();
            animate();

            function init() {
                // Camera
                camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
                camera.position.set(-120, 30, 80);
                camera.rotation.set(0, -0.6, 0);

                scene = new THREE.Scene();

                // Stars
                lumiereS = new THREE.MeshPhongMaterial({
                    emissive: debugParameters.starColor,
                    opacity: 0,
                    transparent: true
                });

                for (var i = 0; i < 150; i++) {
                    sphereTab.push(new THREE.Mesh(new THREE.OctahedronGeometry(Math.random() * 1, 20, 20, 0), lumiereS));
                }

                for (var i = 0; i < sphereTab.length; i++) {
                    sphereTab[i].position.set(Math.random() * 600 - 300, Math.random() * 600 - 300, Math.random() * 4 - 300);
                    scene.add(sphereTab[i]);
                }

                // Lights
                light = new THREE.DirectionalLight(debugParameters.light1Color, 2); // 0x6d507b
                light.position.set(500, -500, 1200);
                scene.add(light);

                light2 = new THREE.DirectionalLight(debugParameters.light2Color, 1); // 0x419efc
                light2.position.set(2000, 1400, 1230);
                scene.add(light2);

                // Model
                const loader = new GLTFLoader()
                loader.load('./assets/model/earth.glb', modelLoad);

                let model;
                let modelLoader = 0;

                setTimeout(() => {
                    gsap.to(".pre-loader .logo-sprites-circle", {
                        opacity: 1,
                        scale: 1,
                        duration: 0.3,
                        delay: 0.1,
                        ease: "Expo.easeOut",
                    })

                    gsap.to(".pre-loader .logo-sprites-bar", {
                        rotation: -80,
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        delay: 0.2,
                        ease: "Expo.easeOut",
                    })

                    gsap.fromTo(".pre-loader .logo-sprites-bar", {
                        rotation: -80,
                    }, {
                        rotation: 80,
                        duration: 3,
                        delay: 1,
                        ease: "Expo.easeOut",
                    })

                    gsap.to(".pre-loader .logo-container", {
                        scale: 0,
                        duration: 0.3,
                        delay: 3,
                        ease: "Expo.easeOut",
                    })
                }, 500);

                function modelLoad(gltf) {
                    model = gltf.scene;

                    if (model) {
                        setTimeout(() => {
                            $("body").removeClass("overflow-hidden")
                            $("body").addClass("overflow-initial")
                        }, 5000);

                        gsap.to(window, { duration: 0, scrollTo: 0 });

                        gsap.to(".pre-loader", {
                            autoAlpha: 0,
                            duration: preLoaderTimer,
                            delay: 3.5,
                        })

                        // document.querySelector(".pre-loader").style.display = "none"

                        setTimeout(() => {
                            gsap.to(window, { duration: 0, scrollTo: 0 });
                        }, 500);

                        // Mouse Move
                        var moveCameraPositionX = 0;
                        var moveCameraPositionY = 0;
                        var moveModelRotationX = 0;
                        var moveModelRotationY = 0;

                        setTimeout(() => {
                            document.querySelector(".home-hero-container").addEventListener('mousemove', e => {
                                moveModelRotationX = (e.clientY - (window.innerHeight / 2)) * 0.0001
                                moveModelRotationY = ((e.clientX / window.innerWidth) * (0.8 - 0.65)) + 0.65

                                model.rotation.x = moveModelRotationX
                                model.rotation.y = moveModelRotationY

                                //-

                                moveCameraPositionX = (e.clientX - (window.innerWidth / 2)) * 0.005
                                moveCameraPositionY = (e.clientY - (window.innerHeight / 2)) * 0.005

                                camera.position.x = moveCameraPositionX
                                camera.position.y = moveCameraPositionY
                            });

                            window.addEventListener("scroll", function (e) {
                                if (window.scrollY > 0) {
                                    document.querySelector(".home-hero-container").classList.add("pointer-none")
                                } else {
                                    document.querySelector(".home-hero-container").classList.remove("pointer-none")
                                }
                            })
                        }, 1000);

                        // Step 1 Animation
                        gsap.to(lumiereS, {
                            opacity: 1,
                            delay: 1,
                            duration: 2,
                        })

                        gsap.to(model.position, { x: 0, y: 5.6, z: 0, ease: "none", duration: 0.1, })

                        gsap.to(model.position, {
                            x: 120,
                            y: 0,
                            z: 0,
                            ease: "Expo.easeOut",
                            delay: 3.2,
                            duration: 3,
                        })

                        gsap.to(model.scale, {
                            x: 7,
                            y: 7,
                            z: 7,
                            ease: "Expo.easeOut",
                            delay: 3.2,
                            duration: 3,
                        })

                        gsap.to(camera.position, { x: -120, y: 30, z: 80, ease: "none", duration: 0.1, })

                        gsap.to(camera.position, {
                            x: 1,
                            y: 1,
                            z: 400,
                            ease: "Expo.easeOut",
                            delay: 3.2,
                            duration: 3,
                        })

                        gsap.to(camera.rotation, {
                            y: 0,
                            ease: "Expo.easeOut",
                            delay: 3.2,
                            duration: 3,
                        })

                        // Step 2 Animation
                        gsap.fromTo(camera.position, {
                            x: 1,
                            y: 1,
                            z: 400,
                        }, {
                            x: 45,
                            y: 44,
                            z: 250,
                            scrollTrigger: {
                                trigger: "body",
                                start: "top+=" + window.innerHeight + "px bottom",
                                end: "3000px top",
                                scrub: 1.5,
                            }
                        })

                        gsap.fromTo(model.position, {
                            x: 120,
                            y: 0,
                            z: 0,
                        }, {
                            x: 97,
                            y: 5.6,
                            z: 0,
                            scrollTrigger: {
                                trigger: "body",
                                start: "top+=" + window.innerHeight + "px bottom",
                                end: "3000px top",
                                scrub: 1.5,
                            }
                        })

                        gsap.to(model.rotation, { x: 0, y: 0.65, ease: "none", duration: 0.1, })

                        gsap.fromTo(model.rotation, {
                            x: 0,
                            y: 0.65,
                        }, {
                            x: 0.45,
                            y: 1,
                            scrollTrigger: {
                                trigger: "body",
                                start: "top+=" + window.innerHeight + "px bottom",
                                end: "3000px top",
                                scrub: 1.5,
                            }
                        })

                        gsap.fromTo(light2.position, {
                            x: light2.position.x,
                            z: light2.position.z,
                        }, {
                            x: -500,
                            z: 4000,
                            scrollTrigger: {
                                trigger: "body",
                                start: "top+=" + window.innerHeight + "px bottom",
                                end: "3000px top",
                                scrub: 1.5,
                            }
                        })

                        gsap.fromTo(".world-info-container", {
                            xPercent: -50,
                            autoAlpha: 0,
                        }, {
                            xPercent: 0,
                            x: 0,
                            autoAlpha: 1,
                            ease: "none",

                            scrollTrigger: {
                                trigger: "body",
                                start: "top+=" + (window.innerHeight + 2000) + "px bottom",
                                end: "2000px top",
                                scrub: 1,
                            }
                        })

                        // Step 3
                        gsap.to(".world-info-container", {
                            scrollTrigger: {
                                trigger: "body",
                                start: "top+=" + (window.innerHeight + 3000) + "px bottom",
                                end: "3500px top",
                                scrub: 1,
                                onEnter: () => {
                                    $(".world-info-container .desc-item p:nth-child(1)").addClass('in-active')
                                    $(".world-info-container .desc-item p:nth-child(2)").addClass('active')
                                    $(".world-info-container .country-row .country-item:nth-child(1)").addClass('active')
                                    $(".world-info-container .country-row .country-item:nth-child(2)").addClass('active')
                                    $(".world-info-container .country-row .country-item:nth-child(3)").addClass('in-active')
                                },
                                onLeaveBack: () => {
                                    $(".world-info-container .desc-item p:nth-child(1)").removeClass('in-active')
                                    $(".world-info-container .desc-item p:nth-child(2)").removeClass('active')
                                    $(".world-info-container .country-row .country-item:nth-child(1)").removeClass('active')
                                    $(".world-info-container .country-row .country-item:nth-child(2)").removeClass('active')
                                    $(".world-info-container .country-row .country-item:nth-child(3)").removeClass('in-active')
                                },
                            }
                        })

                        gsap.fromTo(".world-info-container .color-check-1", {
                            color: "#ffffff",
                        }, {
                            color: "#ff4d00",

                            scrollTrigger: {
                                trigger: "body",
                                start: "top+=" + (window.innerHeight + 3000) + "px bottom",
                                end: "3500px top",
                                scrub: true,
                                onUpdate: self => {
                                    model.children[0].material.color = new THREE.Color($(".world-info-container .color-check-1").css("color"))
                                }
                            }
                        })

                        gsap.fromTo(".world-info-container .color-check-2", {
                            color: "#ffffff",
                        }, {
                            color: "#ff0000",

                            scrollTrigger: {
                                trigger: "body",
                                start: "top+=" + (window.innerHeight + 3000) + "px bottom",
                                end: "3500px top",
                                scrub: true,
                                onUpdate: self => {
                                    model.children[3].material.color = new THREE.Color($(".world-info-container .color-check-2").css("color"))
                                }
                            }
                        })

                        gsap.fromTo(".world-info-container .color-check-3", {
                            color: "#ffffff",
                        }, {
                            color: "#ff3000",

                            scrollTrigger: {
                                trigger: "body",
                                start: "top+=" + (window.innerHeight + 3000) + "px bottom",
                                end: "3500px top",
                                scrub: true,
                                onUpdate: self => {
                                    model.children[2].material.color = new THREE.Color($(".world-info-container .color-check-3").css("color"))
                                }
                            }
                        })

                        gsap.fromTo(".world-info-container .color-check-5", {
                            color: "#ffffff",
                        }, {
                            color: "#141414",

                            scrollTrigger: {
                                trigger: "body",
                                start: "top+=" + (window.innerHeight + 3000) + "px bottom",
                                end: "3500px top",
                                scrub: true,
                                onUpdate: self => {
                                    model.children[1].material.color = new THREE.Color($(".world-info-container .color-check-5").css("color"))
                                    model.children[4].material.color = new THREE.Color($(".world-info-container .color-check-5").css("color"))
                                }
                            }
                        })

                        gsap.fromTo(".world-info-container .color-check-3", {
                            color: "#ff3000",
                        }, {
                            color: "#141414",

                            scrollTrigger: {
                                trigger: "body",
                                start: "top+=" + (window.innerHeight + 3500) + "px bottom",
                                end: "4000px top",
                                scrub: true,
                                onUpdate: self => {
                                    model.children[2].material.color = new THREE.Color($(".world-info-container .color-check-3").css("color"))
                                }
                            }
                        })

                        // Step 5 to UK
                        gsap.fromTo(".world-info-container .color-check-4", {
                            color: "#141414",
                        }, {
                            color: "#ffffff",

                            scrollTrigger: {
                                trigger: "body",
                                start: "top+=" + (window.innerHeight + 4000) + "px bottom",
                                end: "5000px top",
                                scrub: true,
                                onUpdate: self => {
                                    model.children[1].material.color = new THREE.Color($(".world-info-container .color-check-4").css("color"))
                                }
                            }
                        })

                        gsap.fromTo(camera.position, {
                            x: 45,
                            y: 44,
                            z: 250,
                        }, {
                            x: 40,
                            y: 77,
                            z: 160,

                            scrollTrigger: {
                                trigger: "body",
                                start: "top+=" + (window.innerHeight + 4500) + "px bottom",
                                end: "6000px top",
                                scrub: 1.5,
                            }
                        })

                        // Step 6 Final
                        gsap.fromTo(".world-info-container .color-check-1", {
                            color: "#ff4d00",
                        }, {
                            color: "#ffffff",

                            scrollTrigger: {
                                trigger: "body",
                                start: "top+=" + (window.innerHeight + 6500) + "px bottom",
                                end: "7000px top",
                                scrub: true,
                                onUpdate: self => {
                                    model.children[0].material.color = new THREE.Color($(".world-info-container .color-check-1").css("color"))
                                }
                            }
                        })

                        gsap.fromTo(".world-info-container .color-check-2", {
                            color: "#ff0000",
                        }, {
                            color: "#ffffff",

                            scrollTrigger: {
                                trigger: "body",
                                start: "top+=" + (window.innerHeight + 6500) + "px bottom",
                                end: "7000px top",
                                scrub: true,
                                onUpdate: self => {
                                    model.children[3].material.color = new THREE.Color($(".world-info-container .color-check-2").css("color"))
                                }
                            }
                        })

                        gsap.fromTo(".world-info-container .color-check-3", {
                            color: "#141414",
                        }, {
                            color: "#ffffff",

                            scrollTrigger: {
                                trigger: "body",
                                start: "top+=" + (window.innerHeight + 6500) + "px bottom",
                                end: "7000px top",
                                scrub: true,
                                onUpdate: self => {
                                    model.children[2].material.color = new THREE.Color($(".world-info-container .color-check-3").css("color"))
                                }
                            }
                        })

                        gsap.fromTo(".world-info-container .color-check-5", {
                            color: "#141414",
                        }, {
                            color: "#ffffff",

                            scrollTrigger: {
                                trigger: "body",
                                start: "top+=" + (window.innerHeight + 6500) + "px bottom",
                                end: "7000px top",
                                scrub: true,
                                onUpdate: self => {
                                    model.children[4].material.color = new THREE.Color($(".world-info-container .color-check-5").css("color"))
                                }
                            }
                        })

                        gsap.fromTo(camera.position, {
                            x: 40,
                            y: 77,
                            z: 160,
                        }, {
                            x: 1,
                            y: 1,
                            z: 350,

                            scrollTrigger: {
                                trigger: "body",
                                start: "top+=" + (window.innerHeight + 6500) + "px bottom",
                                end: "10000px top",
                                scrub: 1.5,
                            }
                        })

                        gsap.fromTo(model.position, {
                            x: 97,
                            y: 5.6,
                            z: 0,
                        }, {
                            x: 0,
                            y: 0,
                            z: 0,
                            scrollTrigger: {
                                trigger: "body",
                                start: "top+=" + (window.innerHeight + 6500) + "px bottom",
                                end: "10000px top",
                                scrub: 1.5,
                            }
                        })

                        gsap.fromTo(model.scale, {
                            x: 7,
                            y: 7,
                            z: 7,
                        }, {
                            x: 0,
                            y: 0,
                            z: 0,
                            scrollTrigger: {
                                trigger: "body",
                                start: "top+=" + (window.innerHeight + 6500) + "px bottom",
                                end: "10000px top",
                                scrub: 1.5,
                            }
                        })

                        gsap.fromTo(model.rotation, {
                            x: 0.45,
                            y: 1,
                        }, {
                            x: 0,
                            y: 0,
                            scrollTrigger: {
                                trigger: "body",
                                start: "top+=" + (window.innerHeight + 6500) + "px bottom",
                                end: "10000px top",
                                scrub: 1.5,
                            }
                        })

                        gsap.to("#earth-container", {
                            opacity: 0,

                            scrollTrigger: {
                                trigger: "body",
                                start: "top+=" + (window.innerHeight + 6500) + "px bottom",
                                end: "10000px top",
                                scrub: 1,
                            }
                        })

                        gsap.to(".world-info-container .title", {
                            opacity: 0,

                            scrollTrigger: {
                                trigger: "body",
                                start: "top+=" + (window.innerHeight + 6500) + "px bottom",
                                end: "8000px top",
                                scrub: 1,
                            }
                        })

                        gsap.to(".world-info-container .desc-item", {
                            opacity: 0,

                            scrollTrigger: {
                                trigger: "body",
                                start: "top+=" + (window.innerHeight + 6500) + "px bottom",
                                end: "8000px top",
                                scrub: 1,
                            }
                        })

                        gsap.to(".world-info-container .line", {
                            opacity: 0,

                            scrollTrigger: {
                                trigger: "body",
                                start: "top+=" + (window.innerHeight + 6500) + "px bottom",
                                end: "8000px top",
                                scrub: 1,
                            }
                        })

                        gsap.to(".world-info-container .country-row", {
                            opacity: 0,

                            scrollTrigger: {
                                trigger: "body",
                                start: "top+=" + (window.innerHeight + 6500) + "px bottom",
                                end: "8000px top",
                                scrub: 1,
                            }
                        })
                    }

                    model.position.set(0, 5.6, 0)
                    model.scale.set(0, 0, 0)
                    model.rotation.y = 0.65

                    model.children[0].material.color = new THREE.Color(debugParameters.earthColor)
                    model.children[1].material.color = new THREE.Color(debugParameters.earthColor)
                    model.children[2].material.color = new THREE.Color(debugParameters.earthColor)
                    model.children[3].material.color = new THREE.Color(debugParameters.earthColor)
                    model.children[4].material.color = new THREE.Color(debugParameters.earthColor)

                    // model.children[0].material.color = new THREE.Color(debugParameters.objectColorGermany)
                    // model.children[1].material.color = new THREE.Color(debugParameters.objectColorUK)
                    // model.children[2].material.color = new THREE.Color(debugParameters.objectColorSpain)
                    // model.children[3].material.color = new THREE.Color(debugParameters.objectColorTurkey)
                    // model.children[4].material.color = new THREE.Color(debugParameters.earthColor)

                    // GUI
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
                    objectFolder.addColor(debugParameters, 'objectColorGermany').onChange(() => {
                        model.children[0].material.color = new THREE.Color(debugParameters.objectColorGermany)
                    })
                    objectFolder.addColor(debugParameters, 'objectColorUK').onChange(() => {
                        model.children[1].material.color = new THREE.Color(debugParameters.objectColorUK)
                    })
                    objectFolder.addColor(debugParameters, 'objectColorSpain').onChange(() => {
                        model.children[2].material.color = new THREE.Color(debugParameters.objectColorSpain)
                    })
                    objectFolder.addColor(debugParameters, 'objectColorTurkey').onChange(() => {
                        model.children[3].material.color = new THREE.Color(debugParameters.objectColorTurkey)
                    })
                    objectFolder.addColor(debugParameters, 'earthColor').onChange(() => {
                        model.children[4].material.color = new THREE.Color(debugParameters.earthColor)
                    })
                    objectFolder.open()

                    // Animation
                    mixer = new THREE.AnimationMixer(model);
                    gltf.animations.forEach((clip) => {
                        mixer.clipAction(clip).play();

                        // clip.paused = true;
                    });

                    if (mixer) {
                        mixer.setTime(0)
                    }

                    scene.add(model);
                }

                // camera.lookAt(100, 100, 0)

                // GUI
                const starFolder = gui.addFolder('Star')
                starFolder.addColor(debugParameters, 'starColor').onChange(() => {
                    lumiereS.emissive = new THREE.Color(debugParameters.starColor)
                })

                const cameraFolder = gui.addFolder('Camera')
                cameraFolder.add(camera.position, 'x').min(-500).max(2000).step(0.1).name("px");
                cameraFolder.add(camera.position, 'y').min(-500).max(2000).step(0.1).name("py");
                cameraFolder.add(camera.position, 'z').min(-500).max(4000).step(0.1).name("pz");
                cameraFolder.add(camera.rotation, 'x').min(-10).max(10).step(0.001).name("rx");
                cameraFolder.add(camera.rotation, 'y').min(-10).max(10).step(0.001).name("ry");
                cameraFolder.add(camera.rotation, 'z').min(-10).max(10).step(0.001).name("rz");
                cameraFolder.open()

                // cameraFolder.add(params, 'cameraLookX').min(-300).max(300).step(0.1).name("cameraLookX").onChange(() => {
                //     camera.lookAt(params.cameraLookX, params.cameraLookY, params.cameraLookZ)
                // });

                // cameraFolder.add(params, 'cameraLookY').min(-300).max(300).step(0.1).name("cameraLookY").onChange(() => {
                //     camera.lookAt(params.cameraLookX, params.cameraLookY, params.cameraLookZ)
                // });

                // cameraFolder.add(params, 'cameraLookZ').min(-300).max(300).step(0.1).name("cameraLookZ").onChange(() => {
                //     camera.lookAt(params.cameraLookX, params.cameraLookY, params.cameraLookZ)
                // });

                const frameCount = 3.6;

                gsap.to(animationStep, {
                    frame: frameCount - 0.00001,
                    snap: {
                        value: 0.00001
                    },
                    scrollTrigger: {
                        trigger: "body",
                        start: "top+=" + (window.innerHeight + 4000) + "px bottom",
                        end: "6000px top",
                        scrub: 1.5,
                    },
                    onUpdate: mixerUpdate
                });

                function mixerUpdate() {
                    if (mixer) {
                        mixer.setTime(animationStep.frame)
                    }
                }

                const light1Folder = gui.addFolder('Light Top Left')
                light1Folder.add(light.position, 'x').min(-500).max(2000).step(0.1).name("px");
                light1Folder.add(light.position, 'y').min(-500).max(2000).step(0.1).name("py");
                light1Folder.add(light.position, 'z').min(-500).max(4000).step(0.1).name("pz");
                light1Folder.addColor(debugParameters, 'light1Color').onChange(() => {
                    light1.color = new THREE.Color(debugParameters.light1Color)
                })
                light1Folder.open()

                const light2Folder = gui.addFolder('Light Bottom Right')
                light2Folder.add(light2.position, 'x').min(-500).max(2000).step(0.1).name("px");
                light2Folder.add(light2.position, 'y').min(-500).max(2000).step(0.1).name("py");
                light2Folder.add(light2.position, 'z').min(-500).max(4000).step(0.1).name("pz");
                light2Folder.addColor(debugParameters, 'light2Color').onChange(() => {
                    light2.color = new THREE.Color(debugParameters.light2Color)
                })
                light2Folder.open()

                gui.add(params, 'exposure', 0.1, 2).onChange(function (value) {

                    renderer.toneMappingExposure = Math.pow(value, 4.0);

                });

                gui.add(params, 'bloomThreshold', 0.0, 1.0).onChange(function (value) {

                    bloomPass.threshold = Number(value);

                });

                gui.add(params, 'bloomStrength', 0.0, 3.0).onChange(function (value) {

                    bloomPass.strength = Number(value);

                });

                gui.add(params, 'bloomRadius', 0.0, 1.0).step(0.01).onChange(function (value) {

                    bloomPass.radius = Number(value);

                });

                if (window.location.search !== "?debug") {
                    document.querySelector(".lil-gui").remove()
                }

                // Renderer
                renderer = new THREE.WebGLRenderer({
                    antialias: true,
                    alpha: true
                });
                renderer.setClearColor(0x000000, 0);
                // renderer.setClearColor(debugParameters.sceneBackground, 1);
                // renderer.setClearColor(0x131A3D, 1);
                renderer.toneMappingExposure = params.exposure;
                renderer.toneMapping = THREE.ReinhardToneMapping;
                renderer.sortObjects = false;
                renderer.setSize(window.innerWidth, window.innerHeight);

                const rendererFolder = gui.addFolder('Renderer')
                rendererFolder.addColor(debugParameters, 'sceneBackground').onChange(() => {
                    renderer.setClearColor(new THREE.Color(debugParameters.sceneBackground), 1);
                })

                // Bloom
                if (composerCheck) {
                    const renderScene = new RenderPass(scene, camera);

                    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
                    bloomPass.threshold = params.bloomThreshold;
                    bloomPass.strength = params.bloomStrength;
                    bloomPass.radius = params.bloomRadius;

                    composer = new EffectComposer(renderer);
                    composer.addPass(renderScene);
                    composer.addPass(bloomPass);
                }

                // Stats
                stats = new Stats();
                container = document.getElementById('earth-container');
                container.appendChild(renderer.domElement);
                // container.appendChild(stats.dom);

                // Resize
                window.addEventListener('resize', onWindowResize, false);
            }

            // Resize
            function onWindowResize() {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                if (composerCheck) {
                    composer.setSize(window.innerWidth, window.innerHeight);
                } else {
                    renderer.setSize(window.innerWidth, window.innerHeight);
                }

                render();
            }

            // Animate Loop
            function animate() {
                var timer = 0.00001 * Date.now();

                for (var i = 0, il = sphereTab.length; i < il; i++) {
                    var sfere = sphereTab[i];
                    sfere.position.x = 400 * Math.sin(timer + i);
                    sfere.position.z = 400 * Math.sin(timer + i * 1.1);
                }

                let mixerUpdateDelta = clock.getDelta();

                // // If in single step mode, make one step and then do nothing (until the user clicks again)
                mixerUpdateDelta = animationStep.frame;
                animationStep.frame = 0;

                if (mixer) {

                    // mixer.update(mixerUpdateDelta);
                }

                // Update the animation mixer, the stats panel, and render this frame


                requestAnimationFrame(animate);
                render();
            }

            // Render
            function render() {
                if (composerCheck) {
                    composer.render(scene, camera);
                } else {
                    renderer.render(scene, camera)
                }

                stats.update()
            }
        } else {
            $("body").removeClass("overflow-hidden")
            $("body").addClass("overflow-initial")
        }
    }
    else {
        $("body").removeClass("overflow-hidden")
        $("body").addClass("overflow-initial")
    }
}

export { homeModelAni }