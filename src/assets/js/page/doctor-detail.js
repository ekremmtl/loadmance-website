import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);

$(function () {
    // Animation
    let defaultEase = "circ.inOut";

    if ($(".doctor-detail").length) {
        function loadAnimation() {
            setTimeout(() => {
                // First Content
                gsap.to(".doctor-detail .detail-content > span", {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.8,
                    ease: defaultEase,
                })

                gsap.to(".doctor-detail .detail-content .detail-title", {
                    y: 0,
                    autoAlpha: 1,
                    delay: 0.1,
                    duration: 0.8,
                    ease: defaultEase,
                })

                gsap.to(".doctor-detail .detail-content h4", {
                    y: 0,
                    autoAlpha: 1,
                    delay: 0.2,
                    duration: 0.8,
                    ease: defaultEase,
                })

                gsap.to(".doctor-detail .detail-content p", {
                    y: 0,
                    autoAlpha: 1,
                    delay: 0.3,
                    duration: 0.8,
                    ease: defaultEase,
                })

                gsap.to(".doctor-detail .detail-content .content-line", {
                    width: "100%",
                    delay: 0.3,
                    stagger: 0.2,
                    duration: 0.8,
                    ease: defaultEase,
                })

                gsap.to(".doctor-detail .detail-content .content-info li", {
                    y: 0,
                    autoAlpha: 1,
                    delay: 0.3,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: defaultEase,
                })

                gsap.to(".doctor-detail .detail-content .content-button-row", {
                    y: 0,
                    autoAlpha: 1,
                    delay: 0.4,
                    duration: 0.8,
                    ease: defaultEase,
                })

                // First Image
                gsap.to(".doctor-detail .detail-img img", {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.8,
                    ease: defaultEase,
                })

                // Tab Content
                gsap.to(".doctor-detail .detail-tab-content-container .tab-line", {
                    width: "100%",
                    duration: 0.8,
                    ease: defaultEase,

                    scrollTrigger: {
                        trigger: ".doctor-detail .detail-tab-content-container",
                        start: "top bottom-=100"
                    }
                })

                gsap.to(".doctor-detail .detail-tab-content-container .experience-item li", {
                    y: 0,
                    autoAlpha: 1,
                    stagger: 0.05,
                    duration: 0.8,
                    ease: defaultEase,

                    scrollTrigger: {
                        trigger: ".doctor-detail .detail-tab-content-container .experience-item",
                        start: "top bottom-=100"
                    }
                })

                gsap.to(".doctor-detail .detail-tab-content-container .experience-item h4", {
                    y: 0,
                    autoAlpha: 1,
                    delay: 0.2,
                    duration: 0.8,
                    ease: defaultEase,

                    scrollTrigger: {
                        trigger: ".doctor-detail .detail-tab-content-container .experience-item",
                        start: "top bottom-=100"
                    }
                })

                gsap.to(".doctor-detail .detail-tab-content-container .experience-item .count-item", {
                    y: 0,
                    autoAlpha: 1,
                    stagger: 0.2,
                    duration: 0.8,
                    ease: defaultEase,

                    scrollTrigger: {
                        trigger: ".doctor-detail .detail-tab-content-container .experience-item",
                        start: "top bottom-=100"
                    }
                })
            }, 800);
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