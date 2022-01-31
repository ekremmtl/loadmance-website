import { footerAni } from './layout/footer'
import { headerAni } from './layout/header'

import './page/homepage-hero'
import './page/homepage-reviews'

import { pricingSticky, pricingAni } from './page/pricing'
import { useCaseAni } from './page/use-case'

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

var preLoaderTimer = 1;

const easeValue = "Expo.easeOut";

/* Home Hero */



/* Home Hero */

function homeAnimation() {

    var container, stats;
    var camera, scene, renderer, composer;
    var lumiereS;
    var sphereTab = [];
    var light, light2;
    const gui = new dat.GUI()
    const debugParameters = {
        objectScale: 1,
        sceneBackground: 0x141414,
        objectColorGermany: 0xff4d00,
        objectColorUK: 0xffffff,
        objectColorSpain: 0xff3000,
        objectColorTurkey: 0xff0000,
        earthColor: 0xffffff,
    }

    const params = {
        exposure: 1,
        bloomStrength: 1.5,
        bloomThreshold: 0,
        bloomRadius: 0
    };

    init();
    animate();




    if ($(".logo-container").length) {

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

        var viewportOffset = document.querySelector(".logo-container .logo-sprites .logo-sprites-bar").getBoundingClientRect();


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
            width: 1000,

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
            width: 365
        })

        gsap.fromTo(".image-container .image-bg", {
            width: 1000
        }, {
            width: "100%",
            height: "100%",
            y: "-50%",

            scrollTrigger: {
                trigger: "body",
                start: "4601px top",
                end: "7000px top",
                scrub: true,
                markers: false,
            }
        })

        gsap.fromTo(".logo-container.logo-container-center", {
            x: "-50%",
        }, {
            x: 110,
            y: 15,
            scale: 0.21,
            left: 0,
            top: 0,
            transformOrigin: "left top",

            scrollTrigger: {
                trigger: "body",
                start: "4650px top",
                end: "7000px top",
                scrub: true,
                markers: false,
            }
        })

    }




    //-- Image Container

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

    gsap.to(".logo-sprites-bar > svg > rect", {
        fill: "#161620",
        ease: easeValue,

        scrollTrigger: {
            trigger: "body",
            start: "6500px top",
            end: "6600px top",
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
            end: "8500px top",
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
            end: "8500px top",
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
            end: "8500px top",
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
            end: "8800px top",
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
            end: "8800px top",
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
            end: "8800px top",
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
            end: "9000px top",
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
            end: "9000px top",
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
            end: "9000px top",
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
            end: "9000px top",
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
            end: "9000px top",
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
            end: "9000px top",
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
            end: "9000px top",
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
            end: "9000px top",
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
            end: "9000px top",
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
            end: "9000px top",
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
            end: "9000px top",
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
            end: "9000px top",
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
            end: "10000px top",
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
            end: "10000px top",
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
            end: "8900px top",
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
            end: "8900px top",
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
            end: "8900px top",
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
            end: "8950px top",
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
            end: "8900px top",
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
            end: "10500px top",
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
            end: "10500px top",
            scrub: 1,
            markers: false,
        }
    })
    // //-

    gsap.to(".image-container .image-body .image-body-col:nth-child(2) .body-content-header .body-content-header-title > span", {
        y: 0,
        opacity: 1,
        ease: easeValue,

        scrollTrigger: {
            trigger: "body",
            start: "10000px top",
            end: "12000px top",
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
            start: "10040px top",
            end: "12000px top",
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
            start: "10100px top",
            end: "12000px top",
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
            start: "10300px top",
            end: "12300px top",
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
            start: "10400px top",
            end: "12300px top",
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
            start: "10410px top",
            end: "12300px top",
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
            start: "10420px top",
            end: "12300px top",
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
            start: "10440px top",
            end: "12300px top",
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
            start: "10440px top",
            end: "12300px top",
            scrub: 1,
            markers: false,
        }
    })

    //--

    gsap.to(".body-content-overview-bg", {
        y: 0,
        opacity: 1,
        ease: easeValue,

        scrollTrigger: {
            trigger: "body",
            start: "10500px top",
            end: "11000px top",
            scrub: 1,
            markers: false,
        }
    })

    gsap.to(".body-content-overview .overview-header > span", {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        ease: easeValue,

        scrollTrigger: {
            trigger: "body",
            start: "10600px top",
            end: "11500px top",
            scrub: 1,
            markers: false,
        }
    })

    gsap.to(".body-content-overview .overview-header .overview-header-icon", {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        ease: easeValue,

        scrollTrigger: {
            trigger: "body",
            start: "10620px top",
            end: "11500px top",
            scrub: 1,
            markers: false,
        }
    })

    gsap.to(".body-content-overview .overview-header .overview-header-icon", {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        ease: easeValue,

        scrollTrigger: {
            trigger: "body",
            start: "10620px top",
            end: "11500px top",
            scrub: 1,
            markers: false,
        }
    })

    gsap.to(".body-content-overview .overview-chart .chart-value > span", {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: easeValue,

        scrollTrigger: {
            trigger: "body",
            start: "11000px top",
            end: "12000px top",
            scrub: 1,
            markers: false,
        }
    })

    gsap.to(".body-content-overview .overview-sizer", {
        width: "100%",
        ease: easeValue,

        scrollTrigger: {
            trigger: "body",
            start: "11100px top",
            end: "12000px top",
            scrub: 1,
            markers: false,
        }
    })

    gsap.to(".body-content-overview .overview-sizer > span", {
        width: "50%",
        ease: easeValue,

        scrollTrigger: {
            trigger: "body",
            start: "11200px top",
            end: "12000px top",
            scrub: 1,
            markers: false,
        }
    })

    gsap.to(".body-content-overview .overview-sizer > span > span", {
        scale: 1,
        ease: easeValue,

        scrollTrigger: {
            trigger: "body",
            start: "11600px top",
            end: "12000px top",
            scrub: 1,
            markers: false,
        }
    })

    gsap.to(".body-content-overview .overview-chart .chart-item .item-value .line span", {
        borderWidth: 1,
        ease: easeValue,

        scrollTrigger: {
            trigger: "body",
            start: "11900px top",
            end: "12000px top",
            scrub: 1,
            markers: false,
        }
    })

    gsap.to(".body-content-overview .overview-chart .chart-item .item-value .line span", {
        width: "100%",
        stagger: 0.1,
        ease: easeValue,

        scrollTrigger: {
            trigger: "body",
            start: "11900px top",
            end: "12600px top",
            scrub: 1,
            markers: false,
        }
    })

    gsap.to(".body-content-overview .overview-chart .chart-item .item-value .value-svg svg", {
        strokeDashoffset: 0,
        stagger: 0.1,
        ease: easeValue,

        scrollTrigger: {
            trigger: "body",
            start: "11900px top",
            end: "12600px top",
            scrub: 1,
            markers: false,
        }
    })

    gsap.to(".body-content-overview .overview-chart .chart-item .item-time-value .line-row", {
        y: 0,
        opacity: 1,
        ease: easeValue,

        scrollTrigger: {
            trigger: "body",
            start: "12300px top",
            end: "12600px top",
            scrub: 1,
            markers: false,
        }
    })

    gsap.to(".body-content-overview .overview-chart .chart-item .item-time-value .value-row", {
        y: 0,
        opacity: 1,
        ease: easeValue,

        scrollTrigger: {
            trigger: "body",
            start: "12300px top",
            end: "12600px top",
            scrub: 1,
            markers: false,
        }
    })

    //--

    const homeCardElement = $(".home-cards-list .home-cards-list-row .home-cards-list-row-item:nth-child(1)");
    // const homeCardElementOffset = homeCardElement.length ? document.querySelector(".home-cards-list .home-cards-list-row .home-cards-list-row-item:nth-child(1)").getBoundingClientRect() : 0;

    gsap.to(".card-container", {
        width: homeCardElement.width(),
        height: homeCardElement.height(),
        background: "rgba(255, 255, 255, 0.07)",
        // backdropFilter: "blur(10px)",
        borderRadius: 45,
        ease: easeValue,

        scrollTrigger: {
            trigger: "body",
            start: "12800px top",
            end: "14000px top",
            scrub: 1,
            markers: false,
        }
    })

    gsap.to(".card-container", {
        x: 360,
        y: 20,
        xPercent: 0,
        Percent: 0,
        left: 0,
        ease: easeValue,

        scrollTrigger: {
            trigger: "body",
            start: "13000px top",
            end: "14000px top",
            scrub: 1,
            markers: false,
        }
    })

    gsap.to(".image-container", {
        width: "80vw",
        height: "100vh",
        x: "-23.6%",
        y: "27%",
        scale: 0.45,
        ease: easeValue,

        scrollTrigger: {
            trigger: "body",
            start: "12800px top",
            end: "14000px top",
            scrub: 1,
            markers: false,
        }
    })

    ScrollTrigger.create({
        trigger: "body",
        pin: ".sticky-container",
        start: "top top",
        end: "14050px top"
    });

    //-- Image Container

    //-- Home Card List

    gsap.to(".home-cards-list .list-orange-light", {
        scale: 1,
        opacity: 0.2,
        ease: easeValue,
        duration: 0.5,

        scrollTrigger: {
            trigger: ".home-cards-list",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            markers: false,
        }
    })

    gsap.to(".home-cards-list .list-green-light", {
        scale: 1,
        opacity: 0.15,
        ease: easeValue,
        duration: 0.5,

        scrollTrigger: {
            trigger: ".home-cards-list",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            markers: false,
        }
    })

    gsap.to(".home-cards-list .list-blue-light", {
        scale: 1,
        opacity: 0.1,
        ease: easeValue,
        duration: 0.5,

        scrollTrigger: {
            trigger: ".home-cards-list",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            markers: false,
        }
    })

    gsap.to(".home-cards-list .list-line", {
        y: 0,
        ease: easeValue,

        scrollTrigger: {
            trigger: ".home-cards-list",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            markers: false,
        }
    })

    gsap.to(".home-cards-list .list-line svg", {
        y: 0,
        ease: easeValue,

        scrollTrigger: {
            trigger: ".home-cards-list",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            markers: false,
        }
    })

    gsap.to(".home-cards-list .home-cards-list-row .home-cards-list-row-item:nth-child(2)", {
        y: 0,
        ease: easeValue,

        scrollTrigger: {
            trigger: ".home-cards-list .home-cards-list-row .home-cards-list-row-item:nth-child(2)",
            start: "top-=120 bottom",
            end: "top-=80 top",
            scrub: 1,
            markers: false,
        }
    })

    gsap.to(".home-cards-list .home-cards-list-row .home-cards-list-row-item:nth-child(2) .item-green-circle", {
        scale: 1,
        opacity: 0.14,
        ease: easeValue,

        scrollTrigger: {
            trigger: ".home-cards-list .home-cards-list-row .home-cards-list-row-item:nth-child(2)",
            start: "top-=70 top",
            end: "top-=50 top",
            scrub: 1,
            markers: false,
        }
    })

    gsap.to(".home-cards-list .home-cards-list-row .home-cards-list-row-item:nth-child(3)", {
        y: 0,
        ease: easeValue,

        scrollTrigger: {
            trigger: ".home-cards-list .home-cards-list-row .home-cards-list-row-item:nth-child(3)",
            start: "top bottom",
            end: "top+=100 top",
            scrub: 1,
            markers: false,
        }
    })

    gsap.fromTo(".home-cards-list .home-cards-list-row .home-cards-list-row-item:nth-child(3)", {
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        ease: easeValue,

        scrollTrigger: {
            trigger: ".home-cards-list .home-cards-list-row .home-cards-list-row-item:nth-child(3)",
            start: "top bottom",
            end: "top+=40 top",
            scrub: 1,
            markers: false,
        }
    })

    gsap.to(".home-cards-list .home-cards-list-row .home-cards-list-row-item:nth-child(4)", {
        y: 0,
        ease: easeValue,
        duration: 0.5,

        scrollTrigger: {
            trigger: ".home-cards-list .home-cards-list-row .home-cards-list-row-item:nth-child(4)",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            markers: false,
        }
    })

    //-- Home Card List

    //-- Home Pricing

    let sendIcon = gsap.timeline({ yoyo: true, repeat: -1, paused: true });
    let sendWing1 = gsap.timeline({ yoyo: true, repeat: -1, repeatDelay: 0.5, paused: true });
    let sendWing2 = gsap.timeline({ yoyo: true, repeat: -1, repeatDelay: 0.5, paused: true });

    sendIcon.fromTo(".home-pricing .home-pricing-icon-1", {
        y: -30,
    }, {
        y: 20,
        duration: 3,
        ease: "sine.inOut"
    })

    sendWing1.fromTo(".home-pricing .home-pricing-icon-1 img:nth-child(1)", {
        rotation: -70,
    }, {
        rotation: 10,
        duration: 1.5,
        ease: "sine.inOut"
    })

    sendWing2.fromTo(".home-pricing .home-pricing-icon-1 img:nth-child(3)", {
        rotation: 60,
    }, {
        rotation: -5,
        duration: 1.5,
        ease: "sine.inOut"
    })

    if ($(".home-pricing").length) {
        let homePricingOffset = $(".home-pricing").offset();
        $(window).scroll(function () {
            let scrollTop = $(this).scrollTop()

            if (scrollTop > homePricingOffset.top - 100 && scrollTop < homePricingOffset.top + $(".home-pricing").height()) {
                sendIcon.play();
                sendWing1.play();
                sendWing2.play();
            } else {
                sendIcon.pause();
                sendWing1.pause();
                sendWing2.pause();
            }
        });
    }

    gsap.to(".home-pricing .home-pricing-header .home-pricing-title", {
        y: 0,
        opacity: 1,
        ease: easeValue,

        scrollTrigger: {
            trigger: ".home-pricing",
            start: "top bottom-=300",
            end: "top+=500 bottom-=100",
            scrub: 1,
            markers: false,
        }
    })

    gsap.to(".home-pricing .home-pricing-header p", {
        y: 0,
        opacity: 1,
        ease: easeValue,

        scrollTrigger: {
            trigger: ".home-pricing",
            start: "top bottom-=350",
            end: "top+=500 bottom-=100",
            scrub: 1,
            markers: false,
        }
    })

    gsap.to(".home-pricing .home-pricing-header .switch-plan", {
        y: 0,
        opacity: 1,
        ease: easeValue,

        scrollTrigger: {
            trigger: ".home-pricing",
            start: "top bottom-=400",
            end: "top+=500 bottom-=100",
            scrub: 1,
            markers: false,
        }
    })

    gsap.to(".home-pricing .home-pricing-container", {
        y: 0,
        opacity: 1,
        ease: easeValue,

        scrollTrigger: {
            trigger: ".home-pricing-container",
            start: "top bottom-=300",
            end: "top+=500 bottom-=100",
            scrub: 1,
        }
    })

    gsap.to(".home-pricing .home-pricing-table .home-pricing-table-row .home-pricing-table-item span", {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: easeValue,

        scrollTrigger: {
            trigger: ".home-pricing-table",
            start: "top bottom-=200",
            end: "top+=500 bottom-=150",
            scrub: 1.5,
        }
    })

    //-- Home Pricing

    //-- Home Reviews

    gsap.to(".home-bottom-bg", {
        scale: 1,
        opacity: 1,
        ease: easeValue,

        scrollTrigger: {
            trigger: ".home-bottom",
            start: "top bottom-=200",
            end: "top+=500 bottom-=150",
            scrub: 1,
        }
    })

    gsap.to(".home-reviews-title", {
        y: 0,
        opacity: 1,
        ease: easeValue,

        scrollTrigger: {
            trigger: ".home-reviews-header",
            start: "top bottom-=200",
            end: "top+=500 bottom-=150",
            scrub: 1,
        }
    })

    gsap.to(".home-reviews .home-reviews-header-left p", {
        y: 0,
        opacity: 1,
        ease: easeValue,

        scrollTrigger: {
            trigger: ".home-reviews-header",
            start: "top bottom-=250",
            end: "top+=500 bottom-=150",
            scrub: 1,
        }
    })

    gsap.to(".home-reviews .home-reviews-slide-button", {
        x: 0,
        opacity: 1,
        ease: easeValue,

        scrollTrigger: {
            trigger: ".home-reviews-header",
            start: "top bottom-=270",
            end: "top+=500 bottom-=150",
            scrub: 1,
        }
    })

    gsap.to(".home-reviews .home-reviews-slider .home-reviews-slider-item", {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: easeValue,

        scrollTrigger: {
            trigger: ".home-reviews-slider",
            start: "top bottom-=270",
            end: "top+=500 bottom-=150",
            scrub: 1.5,
        }
    })

    //-- Home Reviews

    //-- Home Get Started



    gsap.to(".home-get-started-line div", {
        x: 0,
        ease: easeValue,

        scrollTrigger: {
            trigger: ".home-get-started",
            start: "top bottom-=200",
            end: "top+=300 bottom-=100",
            scrub: 1,
            markers: false,
        }
    })

    gsap.to(".home-get-started-line svg", {
        x: 0,
        ease: easeValue,

        scrollTrigger: {
            trigger: ".home-get-started",
            start: "top bottom-=200",
            end: "top+=300 bottom-=100",
            scrub: 1,
            markers: false,
        }
    })

    gsap.to(".home-get-started-title", {
        y: 0,
        opacity: 1,
        ease: easeValue,

        scrollTrigger: {
            trigger: ".home-get-started",
            start: "top bottom-=400",
            end: "top+=500 bottom-=100",
            scrub: 1,
            markers: false,
        }
    })

    gsap.to(".home-get-started .s-container p", {
        y: 0,
        opacity: 1,
        ease: easeValue,

        scrollTrigger: {
            trigger: ".home-get-started",
            start: "top bottom-=450",
            end: "top+=500 bottom-=100",
            scrub: 1,
            markers: false,
        }
    })

    gsap.to(".home-get-started-link", {
        y: 0,
        opacity: 1,
        ease: easeValue,

        scrollTrigger: {
            trigger: ".home-get-started",
            start: "top bottom-=500",
            end: "top+=500 bottom-=100",
            scrub: 1,
            markers: false,
        }
    })

    gsap.to(".home-get-started-images-img:nth-child(1)", {
        y: 0,
        ease: easeValue,

        scrollTrigger: {
            trigger: ".home-get-started",
            start: "center center+=200",
            end: "bottom-=100 bottom-=100",
            scrub: 1,
            markers: false,
        }
    })

    gsap.to(".home-get-started-images-img:nth-child(2)", {
        scale: 1.2,
        y: 0,
        ease: easeValue,

        scrollTrigger: {
            trigger: ".home-get-started",
            start: "center-=100 center+=200",
            end: "bottom-=100 bottom-=100",
            scrub: 1,
            markers: false,
        }
    })

    gsap.to(".home-get-started-images-img:nth-child(3)", {
        y: 0,
        ease: easeValue,

        scrollTrigger: {
            trigger: ".home-get-started",
            start: "center center+=200",
            end: "bottom-=100 bottom-=100",
            scrub: 1,
            markers: false,
        }
    })

    // gsap.to(".home-get-started .home-get-started-circle-container svg > g > g circle", {
    //     scale: 1,
    //     stagger: 0.1,
    //     ease: easeValue,

    //     scrollTrigger: {
    //         trigger: ".home-get-started",
    //         start: "center center+=200",
    //         end: "bottom-=100 bottom-=100",
    //         scrub: 1,
    //         markers: false,
    //     }
    // })

    //-- Home Get Started


    function init() {
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.set(1, 1, 400);
        camera.rotation.set(0, 0, 0);

        scene = new THREE.Scene();

        lumiereS = new THREE.MeshPhongMaterial({
            emissive: '#fff',
            opacity: 1,
            transparent: true
        });

        for (var i = 0; i < 300; i++) {
            sphereTab.push(new THREE.Mesh(new THREE.OctahedronGeometry(Math.random() * 1, 20, 20, 0), lumiereS));
        }

        for (var i = 0; i < sphereTab.length; i++) {
            sphereTab[i].position.set(Math.random() * 600 - 300, Math.random() * 600 - 300, Math.random() * 4 - 900);
            scene.add(sphereTab[i]);
        }

        // lights
        light = new THREE.DirectionalLight(0x050163, 2); // 0x6d507b
        light.position.set(500, -500, 1200);
        scene.add(light);

        light2 = new THREE.DirectionalLight(0xffffff, 1); // 0x419efc
        light2.position.set(2000, 1400, 1230);
        scene.add(light2);




        const loader = new GLTFLoader()
        loader.load('./earth.gltf', modelLoad);

        let model
        function modelLoad(gltf) {
            model = gltf.scene;

            if (model) {
                // $("body").addClass("overflow-initial")

                gsap.to(".pre-loader", {
                    autoAlpha: 0,
                    duration: preLoaderTimer,
                })

                // document.querySelector(".pre-loader").style.display = "none"

                // document.body.style.overflowY = "auto"
                // document.body.style.overflowX = "hidden"
                // setTimeout(() => {
                //     gsap.to(window, { duration: 0, scrollTo: 0 });
                // }, 500);
            }

            model.position.set(140, 0, 0)
            model.scale.set(7, 7, 7)
            model.rotation.y = 0.65

            model.traverse(function (object) {
                // main.js:478 
                // main.js:478 id1
                // main.js:478 germany
                // main.js:478 spain
                // main.js:478 turkey
                // main.js:478 earth

                // if (child.isMesh) {
                // object.material.opacity = 0.5
                // object.material.transparent = true
                // if (object.name === "tr") {
                // }

                // object.material.color = new THREE.Color(debugParameters.objectColor)
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

            // model.children[1].material.opacity = 0.1
            // model.children[1].material.transparent = true

            model.children[0].material.color = new THREE.Color(debugParameters.objectColorGermany)
            model.children[1].material.color = new THREE.Color(debugParameters.objectColorUK)
            model.children[2].material.color = new THREE.Color(debugParameters.objectColorSpain)
            model.children[3].material.color = new THREE.Color(debugParameters.objectColorTurkey)
            model.children[4].material.color = new THREE.Color(debugParameters.earthColor)

            // model.children[4].material.opacity = 0.05
            model.children[4].material.transparent = true

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

            scene.add(model);

            // console.log(model);

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

        gsap.to(camera.position, {
            x: 1,
            y: 1,
            z: 400,
        })

        gsap.fromTo(camera.position, {
            x: 1,
            y: 1,
            z: 400,
        }, {
            x: 65,
            y: 65,
            z: 240,
            scrollTrigger: {
                trigger: "body",
                start: "top+=10px top",
                end: "1000px top",
                scrub: true,
                markers: false,
            }
        })

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

        const light1Folder = gui.addFolder('Light Top Left')
        light1Folder.add(light.position, 'x').min(-500).max(2000).step(0.1).name("px");
        light1Folder.add(light.position, 'y').min(-500).max(2000).step(0.1).name("py");
        light1Folder.add(light.position, 'z').min(-500).max(4000).step(0.1).name("pz");
        light1Folder.open()

        const light2Folder = gui.addFolder('Light Bottom Right')
        light2Folder.add(light2.position, 'x').min(-500).max(2000).step(0.1).name("px");
        light2Folder.add(light2.position, 'y').min(-500).max(2000).step(0.1).name("py");
        light2Folder.add(light2.position, 'z').min(-500).max(4000).step(0.1).name("pz");
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

        //render
        renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        renderer.setClearColor(0x0D0D33, 1);

        const rendererFolder = gui.addFolder('Renderer')
        rendererFolder.addColor(debugParameters, 'sceneBackground').onChange(() => {
            renderer.setClearColor(new THREE.Color(debugParameters.sceneBackground), 1);
        })

        renderer.toneMapping = THREE.ReinhardToneMapping;
        renderer.sortObjects = false;
        // renderer.setClearColor(0x131A3D, 1);
        renderer.setSize(window.innerWidth, window.innerHeight);




        const renderScene = new RenderPass(scene, camera);

        const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
        bloomPass.threshold = params.bloomThreshold;
        bloomPass.strength = params.bloomStrength;
        bloomPass.radius = params.bloomRadius;


        composer = new EffectComposer(renderer);
        composer.addPass(renderScene);
        composer.addPass(bloomPass);




        stats = new Stats();

        container = document.getElementById('earth-container');
        container.appendChild(renderer.domElement);
        container.appendChild(stats.dom);

        window.addEventListener('resize', onWindowResize, false);
    }

    function onWindowResize() {
        console.log("resize");
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        // renderer.setSize(window.innerWidth, window.innerHeight);
        composer.setSize(window.innerWidth, window.innerHeight);

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
        // renderer.render(scene, camera)
        composer.render(scene, camera);
        stats.update()
    }
}

function switchPlan() {
    $(".switch-plan .switch-item > input").change(function () {
        if ($(this).is(":checked")) {
            $(".annual-item").css("display", "none")
            $(".monthly-item").css("display", "inline-block")
        } else {
            $(".annual-item").css("display", "inline-block")
            $(".monthly-item").css("display", "none")
        }
    })
}

function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    // gsap.to(window, { duration: 0, scrollTo: 0, delay: 1 });

    $("body").addClass("point-none")
    $("body").addClass("overflow-hidden")
    setTimeout(() => {
        $("body").removeClass("point-none")
        $("body").removeClass("overflow-hidden")
    }, 1500);

    gsap.to(".load-container", {
        autoAlpha: 1,
        duration: 0.1,
        ease: "none",
    });

    gsap.to(".load-container > span:nth-child(1)", {
        y: 0,
        delay: 0.1,
        duration: 0.8,
        ease: "Expo.easeInOut",
    });

    gsap.to(".load-container > span:nth-child(1)", {
        top: "100%",
        delay: 1,
        duration: 0.8,
        ease: "Expo.easeInOut",
    });

    gsap.to(".load-container > span:nth-child(2)", {
        y: 0,
        duration: 0.8,
        ease: "Expo.easeInOut",
    });

    gsap.to(".load-container > span:nth-child(2)", {
        top: "100%",
        delay: 0.6,
        duration: 0.8,
        ease: "Expo.easeInOut",
    });

    //--

    gsap.to(".load-container", {
        autoAlpha: 0,
        delay: 2,
        duration: 0.1,
        ease: "none",
    });

    gsap.to(".load-container > span:nth-child(1)", {
        y: "-100%",
        top: 0,
        delay: 2.5,
        duration: 0.1,
        ease: "none",
    });

    gsap.to(".load-container > span:nth-child(2)", {
        y: "-100%",
        top: 0,
        delay: 2.5,
        duration: 0.1,
        ease: "none",
    });
}

$(function () {
    gsap.to(window, { duration: 0, scrollTo: 0, delay: 1 });

    barba.init({
        sync: true,

        transitions: [
            {
                async leave(data) {
                    const done = this.async();

                    pageTransition();

                    await delay(1000);
                    done();
                },

                async enter(data) {
                    headerAni(preLoaderTimer)

                    if (data.next.namespace === "home-section") {
                        setTimeout(() => {
                            homeAnimation()
                            footerAni();
                        }, 1000);
                    }

                    if (data.next.namespace === "pricing-section") {
                        pricingSticky()
                        pricingAni(true)
                        switchPlan()
                    }

                    if (data.next.namespace === "use-cases-section") {
                        useCaseAni(true)
                    }
                },

                async once(data) {
                    homeAnimation()

                    // pricingSticky()
                    // pricingAni(false)

                    // useCaseAni(false)

                    headerAni(preLoaderTimer)
                    footerAni();

                    switchPlan()
                },
            },
        ],
    });
});

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);


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
