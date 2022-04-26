import gsap from 'gsap'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

function headerAni(preLoaderTimer, homeCheck) {
    const easeValue = "Expo.easeOut";

    function ani() {
        gsap.to(".top-info", {
            y: 0,
            delay: preLoaderTimer,
            duration: 1,
            ease: easeValue,
        })

        gsap.to(".top-info .top-info-wrapper span", {
            opacity: 1,
            stagger: 0.1,
            delay: preLoaderTimer,
            duration: 1,
            ease: easeValue,
        })

        gsap.to("header .header-logo a img", {
            y: 0,
            opacity: 1,
            delay: preLoaderTimer + 0.2,
            duration: 1,
            ease: easeValue,
        })

        gsap.to("header .header-logo a:nth-child(2)", {
            y: 0,
            opacity: 1,
            delay: preLoaderTimer + 0.3,
            duration: 1,
            ease: easeValue,
        })

        gsap.to("header .header-menu > ul > li", {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: preLoaderTimer + 0.5,
            stagger: 0.05,
            ease: easeValue,
        })

        gsap.to("header .header-right .header-button", {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: preLoaderTimer + 0.8,
            ease: easeValue,
        })
    }

    if ($(window).width() > 1200) {
        if (homeCheck) {
            const loader = new GLTFLoader()
            loader.load('./earth.glb', function () {
                setTimeout(() => {
                    ani()
                }, 3000);
            });
        } else {
            setTimeout(() => {
                ani()
            }, 300);
        }
    }

    // Mobile Menu
    $(".mobile-menu > ul > li > a").click(function () {
        $(this).next("ul").toggleClass("submenu-active")

        if ($(this).next("ul").length) {
            $(this).next("ul").slideToggle()

            if ($(this).next("ul").hasClass("submenu-active")) {
                gsap.to($(this).next("ul").children("li"), {
                    y: 0,
                    autoAlpha: 1,
                    duration: 1,
                    stagger: 0.1,
                    ease: easeValue,
                })
            } else {
                gsap.to($(this).next("ul").children("li"), {
                    y: 10,
                    autoAlpha: 0,
                    duration: 1,
                    stagger: 0.1,
                    ease: easeValue,
                })
            }
        }
    });

    $("header .mobile-menu-button").click(function () {
        $("body").toggleClass("mobile-menu-active")

        if ($("body").hasClass("mobile-menu-active")) {
            gsap.to($(this), {
                y: 7,
                duration: 1,
                ease: easeValue,
            })

            gsap.to($(this).children("span:nth-child(2)"), {
                y: -9,
                duration: 1,
                ease: easeValue,
            })

            gsap.to(".mobile-menu", {
                autoAlpha: 1,
                duration: 1,
                ease: easeValue,
            })

            gsap.to(".mobile-menu > ul > li", {
                y: 0,
                autoAlpha: 1,
                stagger: 0.1,
                duration: 1,
                delay: 0.3,
                ease: easeValue,
            })
        } else {
            gsap.to($(this), {
                y: 0,
                duration: 0.6,
                ease: easeValue,
            })

            gsap.to($(this).children("span:nth-child(2)"), {
                y: 0,
                duration: 0.6,
                ease: easeValue,
            })

            gsap.to(".mobile-menu", {
                autoAlpha: 0,
                duration: 0.6,
                delay: 0.3,
                ease: easeValue,
            })

            gsap.to(".mobile-menu > ul > li", {
                y: 20,
                autoAlpha: 0,
                stagger: 0.1,
                duration: 0.6,
                ease: easeValue,
            })

            $(".mobile-menu > ul > li > ul").removeClass("submenu-active")
            $(".mobile-menu > ul > li > ul").slideUp()

            gsap.to(".mobile-menu > ul > li > ul > li", {
                y: 10,
                autoAlpha: 0,
                duration: 1,
                stagger: 0.1,
                ease: easeValue,
            })
        }
    });
}

export { headerAni }