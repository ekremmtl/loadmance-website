
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);
const easeValue = "Expo.easeOut";

function homeSectionsAni() {
    new Swiper('.home-reviews .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 32,
        centeredSlides: true,
        roundLengths: true,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loopAdditionalSlides: 30,
        speed: 800,
    });

    if ($(window).width() > 1200) {
        setTimeout(() => {
            //-- Home Pricing
            gsap.to(".home-pricing .s-container .home-pricing-table-row .home-pricing-table-item", {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 1,
                ease: easeValue,
                delay: 0.5,

                scrollTrigger: {
                    trigger: ".home-pricing",
                    start: "top center",
                }
            })

            gsap.to(".home-pricing .s-container .home-pricing-header .switch-plan", {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: easeValue,
                delay: 0.45,

                scrollTrigger: {
                    trigger: ".home-pricing",
                    start: "top center",
                }
            })

            gsap.to(".home-pricing .s-container .home-pricing-header p", {
                y: 0,
                opacity: 0.5,
                duration: 1,
                ease: easeValue,
                delay: 0.4,

                scrollTrigger: {
                    trigger: ".home-pricing",
                    start: "top center",
                }
            })

            gsap.to(".home-pricing .s-container .home-pricing-header .home-pricing-title > span > span svg circle", {
                opacity: 1,
                duration: 1,
                ease: easeValue,
                delay: 0.3,

                scrollTrigger: {
                    trigger: ".home-pricing",
                    start: "top center",
                }
            })

            gsap.to(".home-pricing .s-container .home-pricing-header .home-pricing-title > span > span svg ellipse", {
                strokeDashoffset: 0,
                duration: 2,
                ease: easeValue,
                delay: 0.1,

                scrollTrigger: {
                    trigger: ".home-pricing",
                    start: "top center",
                }
            })

            gsap.to(".home-pricing .s-container .home-pricing-header .home-pricing-title > span", {
                opacity: 1,
                x: 0,
                stagger: 0.1,
                duration: 1,
                ease: easeValue,

                scrollTrigger: {
                    trigger: ".home-pricing",
                    start: "top center",
                }
            })

            gsap.to(".home-pricing .s-container .home-pricing-header .home-pricing-title .img", {
                scale: 1,
                duration: 1,
                delay: 0.1,
                ease: easeValue,

                scrollTrigger: {
                    trigger: ".home-pricing",
                    start: "top center",
                }
            })

            //-- Home Reviews
            gsap.to(".home-reviews .home-reviews-content .home-reviews-title", {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: easeValue,

                scrollTrigger: {
                    trigger: ".home-pricing",
                    start: "bottom bottom-=500",
                }
            })

            gsap.to(".home-reviews .home-reviews-content p", {
                x: 0,
                opacity: 1,
                duration: 1,
                delay: 0.1,
                ease: easeValue,

                scrollTrigger: {
                    trigger: ".home-pricing",
                    start: "bottom bottom-=500",
                }
            })

            gsap.to(".home-reviews .home-reviews-content .slide-btn", {
                x: 0,
                opacity: 1,
                duration: 1,
                delay: 0.2,
                ease: easeValue,

                scrollTrigger: {
                    trigger: ".home-pricing",
                    start: "bottom bottom-=500",
                }
            })

            gsap.to(".home-reviews .home-reviews-slider .home-reviews-slider-item", {
                x: 0,
                opacity: 1,
                stagger: 0.1,
                ease: easeValue,
                duration: 1,

                scrollTrigger: {
                    trigger: ".home-pricing",
                    start: "bottom bottom-=500",
                }
            })

            //-- Home FAQ
            gsap.fromTo(".home-faq .faq-title:nth-child(1)", {
                xPercent: -50,
            }, {
                xPercent: 0,

                scrollTrigger: {
                    trigger: ".home-faq",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                }
            })

            gsap.to(".home-faq .faq-title:nth-child(2)", {
                xPercent: -50,

                scrollTrigger: {
                    trigger: ".home-faq",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                }
            })

            gsap.to(".home-faq .faq-container .faq-content", {
                y: 0,
                opacity: 1,

                scrollTrigger: {
                    trigger: ".home-faq .faq-container",
                    start: "top center",
                }
            })

            gsap.to(".home-faq .faq-container .faq-item", {
                y: 0,
                opacity: 1,
                stagger: 0.1,

                scrollTrigger: {
                    trigger: ".home-faq .faq-container",
                    start: "top center",
                }
            })
        }, 3000);
    }
}

export { homeSectionsAni }