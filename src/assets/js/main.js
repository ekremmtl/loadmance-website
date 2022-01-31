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

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

//--

$(function () {
    let preLoaderTimer = 1;

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
                    headerAni(preLoaderTimer)

                    if (data.next.namespace === "home-section") {
                        $("body").removeClass("overflow-initial")

                        gsap.to(".pre-loader", {
                            autoAlpha: 1,
                            ease: "none",
                            duration: 0.1,
                        })

                        setTimeout(() => {
                            homeHeroAni(preLoaderTimer)
                            homeModelAni(preLoaderTimer)
                            homeReviewsAni()
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
                    pricingSticky()
                    pricingAni(false)

                    useCaseAni(false)
                    homeReviewsAni()

                    homeHeroAni(preLoaderTimer)

                    headerAni(preLoaderTimer)
                    footerAni();

                    switchPlan()

                    if (data.next.namespace === "pricing-section") {
                        gsap.to(".pre-loader", {
                            autoAlpha: 0,
                            ease: "none",
                            duration: 0.1,
                        })

                        $("body").addClass("overflow-initial")
                    }

                    if (data.next.namespace === "use-cases-section") {
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