import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function homeHeroAni(preLoaderTimer) {
    const easeValue = "Expo.easeOut";

    if ($(window).width() > 1200) {
        gsap.to(".home-hero .home-hero-content h1", { y: 40, opacity: 0, duration: 0.1 })
        gsap.to(".home-hero .home-hero-content p", { y: 40, opacity: 0, duration: 0.1 })
        gsap.to(".home-hero .home-hero-content .content-buttons", { y: 40, opacity: 0, duration: 0.1 })
        gsap.to(".home-hero .home-hero-content > span", { y: 40, opacity: 0, duration: 0.1 })
        gsap.to(".home-hero .home-hero-content .scroll-down", { y: 40, opacity: 0, duration: 0.1 })
        gsap.to(".home-hero .home-hero-content .scroll-down > span", { y: 30, opacity: 0, duration: 0.1 })

        setTimeout(() => {
            gsap.to(".home-hero .home-hero-light", {
                scale: 1,
                opacity: 1,
                ease: easeValue,
                delay: preLoaderTimer + 1,
                duration: 0.8
            })

            gsap.to(".home-hero .home-hero-content h1", {
                y: 0,
                opacity: 1,
                ease: easeValue,
                delay: preLoaderTimer + 1,
                duration: 0.8
            })

            gsap.to(".home-hero .home-hero-content p", {
                y: 0,
                opacity: 1,
                ease: easeValue,
                delay: preLoaderTimer + 1.1,
                duration: 0.8
            })

            gsap.to(".home-hero .home-hero-content .content-buttons", {
                y: 0,
                opacity: 1,
                ease: easeValue,
                delay: preLoaderTimer + 1.2,
                duration: 0.8
            })

            gsap.to(".home-hero .home-hero-content > span", {
                y: 0,
                opacity: 1,
                ease: easeValue,
                delay: preLoaderTimer + 1.3,
                duration: 0.8
            })

            gsap.to(".home-hero .home-hero-content .scroll-down", {
                y: 0,
                opacity: 1,
                ease: easeValue,
                delay: preLoaderTimer + 1.4,
                duration: 0.8
            })

            gsap.to(".home-hero .home-hero-content .scroll-down > span", {
                y: 0,
                opacity: 1,
                ease: easeValue,
                delay: preLoaderTimer + 1.5,
                duration: 0.8
            })

            // Step 2
            setTimeout(() => {
                gsap.fromTo(".home-hero .home-hero-content h1", {
                    y: 0,
                    opacity: 1,
                }, {
                    y: -40,
                    opacity: 0,

                    scrollTrigger: {
                        trigger: ".home-hero",
                        start: "top+=" + (window.innerHeight + 10) + "px bottom",
                        end: "top+=" + (window.innerHeight + 100) + "px bottom",
                        scrub: 1,
                    }
                })

                gsap.fromTo(".home-hero .home-hero-content p", {
                    y: 0,
                    opacity: 1,
                }, {
                    y: -40,
                    opacity: 0,

                    scrollTrigger: {
                        trigger: ".home-hero",
                        start: "top+=" + (window.innerHeight + 10) + "px bottom",
                        end: "top+=" + (window.innerHeight + 150) + "px bottom",
                        scrub: 1,
                        markers: false,
                    }
                })

                gsap.fromTo(".home-hero .home-hero-content .content-buttons", {
                    y: 0,
                    opacity: 1,
                }, {
                    y: -40,
                    opacity: 0,

                    scrollTrigger: {
                        trigger: ".home-hero",
                        start: "top+=" + (window.innerHeight + 10) + "px bottom",
                        end: "top+=" + (window.innerHeight + 200) + "px bottom",
                        scrub: 1,
                        markers: false,
                    }
                })

                gsap.fromTo(".home-hero .home-hero-content > span", {
                    y: 0,
                    opacity: 1,
                }, {
                    y: -40,
                    opacity: 0,

                    scrollTrigger: {
                        trigger: ".home-hero",
                        start: "top+=" + (window.innerHeight + 10) + "px bottom",
                        end: "top+=" + (window.innerHeight + 250) + "px bottom",
                        scrub: 1,
                        markers: false,
                    }
                })

                gsap.fromTo(".home-hero .home-hero-content .scroll-down", {
                    y: 0,
                    opacity: 1,
                }, {
                    y: -40,
                    opacity: 0,

                    scrollTrigger: {
                        trigger: ".home-hero",
                        start: "top+=" + (window.innerHeight + 10) + "px bottom",
                        end: "top+=" + (window.innerHeight + 300) + "px bottom",
                        scrub: 1,
                        markers: false,
                    }
                })

                gsap.fromTo(".home-hero .home-hero-content .scroll-down > span", {
                    y: 0,
                    opacity: 1,
                }, {
                    y: -30,
                    opacity: 0,

                    scrollTrigger: {
                        trigger: ".home-hero",
                        start: "top+=" + (window.innerHeight + 10) + "px bottom",
                        end: "top+=" + (window.innerHeight + 350) + "px bottom",
                        scrub: 1,
                        markers: false,
                    }
                })
            }, 3000);
        }, 500);
    }
}

export { homeHeroAni }