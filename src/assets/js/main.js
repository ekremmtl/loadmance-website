import { footerAni } from './layout/footer'
import { headerAni } from './layout/header'

import { pricingSticky, pricingAni } from './page/pricing'
import { useCaseAni } from './page/use-case'

import { homeHeroAni } from './page/homepage-hero'
import { homeModelAni } from './page/homepage-model'
import { homeReviewsAni } from './page/homepage-reviews' // All Animations

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

//--

$(function () {
    let preLoaderTimer = 1;

    function topInfo() {
        // Top Info
        gsap.set('.top-info-wrapper', { xPercent: -50 })

        var boxWidth = parseInt($(".top-info-wrapper .top-info-boxes > span").innerWidth()),
            topInfo = document.querySelectorAll(".top-info-wrapper .top-info-boxes > span"),
            totalWidth = boxWidth * topInfo.length,
            dirFromRight = "-=" + totalWidth;

        var mod = gsap.utils.wrap(0, totalWidth);

        function marquee(which, time, direction) {
            gsap.set(which, {
                x: function (i) {
                    return i * boxWidth;
                }
            });
            var action = gsap.timeline()
                .to(which, {
                    x: direction,
                    modifiers: {
                        x: x => mod(parseFloat(x)) + "px"
                    },
                    duration: time, ease: 'none',
                    repeat: -1,
                });
            return action
        }

        var topInfoTl = gsap.timeline().add(marquee(topInfo, 40, dirFromRight), 1)

        $(window).scroll(function () {
            let scrollTop = $(window).scrollTop();

            if (scrollTop > 100) {
                topInfoTl.pause()
            } else {
                topInfoTl.play()
            }

            if (scrollTop == 0) {
                topInfoTl.play()
            }
        });
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
        gsap.to(window, { duration: 0, scrollTo: 0, delay: 1 });

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
                    gsap.to(".pre-loader", {
                        autoAlpha: 0,
                        ease: "none",
                        duration: 0.1,
                    })

                    if (data.next.namespace === "home-section") {
                        headerAni(preLoaderTimer, true)

                        gsap.to(".pre-loader", {
                            autoAlpha: 1,
                            ease: "none",
                            duration: 0.1,
                        })

                        setTimeout(() => {
                            homeModelAni(preLoaderTimer)
                        }, 500);

                        const loader = new GLTFLoader()
                        loader.load('./earth.glb', function () {
                            setTimeout(() => {
                                topInfo()
                                homeHeroAni(preLoaderTimer)
                                homeReviewsAni()
                                footerAni();
                            }, 3000);
                        });
                    }

                    if (data.next.namespace === "pricing-section") {
                        headerAni(preLoaderTimer, false)
                        topInfo()

                        pricingSticky()
                        pricingAni(true)
                        switchPlan()
                    }

                    if (data.next.namespace === "use-cases-section") {
                        headerAni(preLoaderTimer, false)
                        topInfo()

                        useCaseAni(true)
                    }
                },

                async once(data) {
                    pricingSticky()
                    pricingAni(false)

                    useCaseAni(false)

                    const loader = new GLTFLoader()
                    loader.load('./earth.glb', function () {
                        setTimeout(() => {
                            homeHeroAni(preLoaderTimer)
                            homeReviewsAni()
                        }, 2500);
                    });

                    topInfo()
                    footerAni();

                    switchPlan()

                    if (data.next.namespace === "home-section") {
                        headerAni(preLoaderTimer, true)
                    }

                    if (data.next.namespace === "pricing-section") {
                        headerAni(preLoaderTimer, false)

                        gsap.to(".pre-loader", {
                            autoAlpha: 0,
                            ease: "none",
                            duration: 0.1,
                        })

                        $("body").addClass("overflow-initial")
                    }

                    if (data.next.namespace === "use-cases-section") {
                        headerAni(preLoaderTimer, false)

                        gsap.to(".pre-loader", {
                            autoAlpha: 0,
                            ease: "none",
                            duration: 0.1,
                        })

                        $("body").addClass("overflow-initial")
                    }
                },
            },
        ],
    });

    homeModelAni(preLoaderTimer)
});