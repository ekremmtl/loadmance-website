import { footerAni } from './layout/footer'
import { headerAni } from './layout/header'

import { pricingSticky, pricingAni } from './page/pricing'
import { useCaseAni } from './page/use-case'

import { homeHeroAni } from './page/homepage-hero'
import { homeFaq } from './page/homepage-faq'
import { homeModelAni } from './page/homepage-model'
import { homeSectionsAni } from './page/homepage-sections' // All Animations

import { faqPage, faqAni } from './page/faq'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
gsap.config({ nullTargetWarn: false });

//--

homeFaq()

$(function () {
    let preLoaderTimer = 1;

    function marqueeContainer() {
        $(".marquee-container").each(function () {
            $(this).find(".marquee-item").each(function () {
                gsap.to($(this).find(".item-wrapper"), {
                    xPercent: -30,

                    scrollTrigger: {
                        trigger: $(this),
                        start: "top bottom",
                        end: "bottom+=200px top",
                        scrub: true,
                    }
                })
            });
        });
    }

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
        $(".annual-item").css("display", "none")
        
        $(".home-pricing-container .switch-plan .switch-item > input").change(function () {
            if ($(this).is(":checked")) {
                $(".annual-item").css("display", "flex")
                $(".monthly-item").css("display", "none")
            } else {
                $(".annual-item").css("display", "none")
                $(".monthly-item").css("display", "flex")
            }
        })
        
        $(".pricing-banner .switch-plan .switch-item > input").change(function () {
            if ($(this).is(":checked")) {
                $(".annual-item").css("display", "inline-block")
                $(".monthly-item").css("display", "none")
            } else {
                $(".annual-item").css("display", "none")
                $(".monthly-item").css("display", "inline-block")
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
                        switchPlan()

                        setTimeout(() => {
                            $("body").addClass("overflow-hidden")
                            $("body").removeClass("overflow-initial")
                        }, 100);

                        setTimeout(() => {
                            $("body").removeClass("overflow-hidden")
                            $("body").addClass("overflow-initial")
                        }, 5000);

                        headerAni(preLoaderTimer, true)
                        marqueeContainer()

                        gsap.to(".pre-loader", {
                            autoAlpha: 1,
                            ease: "none",
                            duration: 0.1,
                        })

                        setTimeout(() => {
                            homeModelAni(preLoaderTimer)
                        }, 500);

                        const loader = new GLTFLoader()
                        loader.load('./assets/model/earth.glb', function () {
                            setTimeout(() => {
                                topInfo()
                                homeHeroAni(preLoaderTimer)
                                homeSectionsAni()
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

                    if (data.next.namespace === "faq-section") {
                        headerAni(preLoaderTimer, false)
                        topInfo()
                        marqueeContainer()

                        faqPage()
                        faqAni(true)
                    }

                    if (data.next.namespace === "contract-section") {
                        headerAni(preLoaderTimer, false)
                        topInfo()

                        useCaseAni(false)
                    }
                },

                async once(data) {
                    pricingSticky()
                    pricingAni(false)

                    useCaseAni(false)

                    faqAni(false)

                    const loader = new GLTFLoader()
                    loader.load('./assets/model/earth.glb', function () {
                        setTimeout(() => {
                            homeHeroAni(preLoaderTimer)
                            homeSectionsAni()
                        }, 2500);
                    });

                    topInfo()
                    footerAni();

                    switchPlan()

                    if (data.next.namespace === "home-section") {
                        headerAni(preLoaderTimer, true)

                        // gsap.to(".pre-loader", {
                        //     autoAlpha: 0,
                        //     ease: "none",
                        //     duration: 0.1,
                        // })

                        marqueeContainer()
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

                    if (data.next.namespace === "faq-section") {
                        headerAni(preLoaderTimer, false)

                        gsap.to(".pre-loader", {
                            autoAlpha: 0,
                            ease: "none",
                            duration: 0.1,
                        })

                        $("body").addClass("overflow-initial")

                        marqueeContainer()
                        faqPage()
                    }

                    if (data.next.namespace === "contract-section") {
                        headerAni(preLoaderTimer, false)

                        gsap.to(".pre-loader", {
                            autoAlpha: 0,
                            ease: "none",
                            duration: 0.1,
                        })

                        $("body").addClass("overflow-initial")

                        useCaseAni()
                    }
                },
            },
        ],
    });

    homeModelAni(preLoaderTimer)
});