import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

$(function () {
    // Main Overflow for History
    if ($(".about-section").length) {
        $("main .main-content").css("overflow", "initial")

        // Animation
        let defaultEase = "circ.inOut";

        function loadAnimation() {
            setTimeout(() => {
                // Top Links
                gsap.to(".about-section .about-header-link a", {
                    x: 0,
                    autoAlpha: 1,
                    stagger: 0.2,
                    duration: 0.8,
                    ease: defaultEase,
                })

                gsap.to(".about-section .about-header-link .line", {
                    width: "100%",
                    duration: 0.8,
                    ease: defaultEase,
                })

                // First Image
                gsap.to(".about-section .about-img", {
                    y: 0,
                    autoAlpha: 1,
                    delay: 0.2,
                    duration: 0.8,
                    ease: defaultEase,
                })

                gsap.to(".about-section .about-img .img-item", {
                    y: -100,
                    scale: 1.5,
                    ease: "none",

                    scrollTrigger: {
                        trigger: ".about-section .about-img",
                        start: "top top+=330",
                        end: "bottom top",
                        scrub: true,
                    }
                })

                // First Text
                gsap.to(".about-section .about-tab-content .content-item > .item-text .text", {
                    y: 0,
                    autoAlpha: 1,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: defaultEase,

                    scrollTrigger: {
                        trigger: ".about-section .about-tab-content .content-item > .item-text",
                        start: "top bottom-=100",
                    }
                })

                // Item Image
                gsap.to(".about-section .about-tab-content .content-item > .item-img .img-item-container", {
                    y: 0,
                    ease: "none",

                    scrollTrigger: {
                        trigger: ".about-section .about-tab-content .content-item > .item-img",
                        start: "top bottom-=100",
                        end: "center+=280 bottom-=100",
                        scrub: true,
                    }
                })

                gsap.to(".about-section .about-tab-content .content-item > .item-img .img-item-container .img-item", {
                    y: 0,
                    ease: "none",

                    scrollTrigger: {
                        trigger: ".about-section .about-tab-content .content-item > .item-img",
                        start: "top bottom-=100",
                        end: "center+=280 bottom-=100",
                        scrub: true,
                    }
                })

                // Item VM
                gsap.to(".about-section .about-tab-content .content-item > .item-vm .item-text", {
                    autoAlpha: 1,
                    y: 0,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: defaultEase,

                    scrollTrigger: {
                        trigger: ".about-section .about-tab-content .content-item > .item-vm",
                        start: "top bottom-=100",
                    }
                })

                gsap.to(".about-section .about-tab-content .content-item > .item-vm .item-title", {
                    autoAlpha: 1,
                    y: 0,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: defaultEase,

                    scrollTrigger: {
                        trigger: ".about-section .about-tab-content .content-item > .item-vm",
                        start: "top bottom-=100",
                    }
                })

                gsap.to(".about-section .about-tab-content .content-item > .item-vm .item-line", {
                    width: "100%",
                    stagger: 0.1,
                    duration: 0.8,
                    ease: defaultEase,

                    scrollTrigger: {
                        trigger: ".about-section .about-tab-content .content-item > .item-vm",
                        start: "top center",
                    }
                })

                // Item Video
                gsap.to(".about-section .content-item .item-video .img-1", {
                    y: -200,
                    ease: "none",

                    scrollTrigger: {
                        trigger: ".about-section .about-tab-content .content-item .item-video",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                })

                gsap.to(".about-section .content-item .item-video .img-2", {
                    y: -100,
                    ease: "none",

                    scrollTrigger: {
                        trigger: ".about-section .about-tab-content .content-item .item-video",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                })

                // Quick Links
                gsap.to(".about-section .quick-links .page-title", {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.8,
                    ease: defaultEase,

                    scrollTrigger: {
                        trigger: ".about-section .quick-links",
                        start: "top bottom-=200",
                    }
                })

                gsap.to(".about-section .quick-links .page-title > span", {
                    scale: 1,
                    delay: 0.1,
                    duration: 0.8,
                    ease: defaultEase,

                    scrollTrigger: {
                        trigger: ".about-section .quick-links",
                        start: "top bottom-=200",
                    }
                })

                $(".about-section .quick-links .quick-link-item").each(function () {
                    gsap.to($(this), {
                        autoAlpha: 1,
                        y: 0,
                        delay: 0.2,
                        duration: 0.8,
                        ease: defaultEase,

                        scrollTrigger: {
                            start: $(this).offset().top + " bottom-=200",
                        }
                    })
                })
            }, 500);
        }

        if ($(window).width() >= 1200) {
            loadAnimation();
        }

        $(window).resize(function () {
            if ($(window).width() >= 1200) {
                loadAnimation();
            }
        });
    }
})