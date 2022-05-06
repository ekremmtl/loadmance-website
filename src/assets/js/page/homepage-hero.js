import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function homeHeroAni(preLoaderTimer) {
    const easeValue = "Expo.easeOut";

    // Home Hero Content Desc
    $(".home-hero .home-hero-content .content-desc .text").blast({
        delimiter: "word",
        tag: "span"
    });

    $(".home-hero .home-hero-content .content-desc .text > span").each(function () {
        let itemText = $(this).text();

        if (!$(this).hasClass('text-item-bg')) {
            $(this).text('')
            $(this).append('<span>' + itemText + '</span>')
        }
    })

    // Home Hero
    if ($(window).width() > 1200) {
        setTimeout(() => {
            // Line
            gsap.to(".home-hero .home-hero-content .content-title .title-row > .line", {
                width: "100%",
                delay: preLoaderTimer + 0.7,
                duration: 2,
                stagger: 0.1,
                ease: easeValue,
            })

            // Title
            gsap.to(".home-hero .home-hero-content .content-title .title-row .title-text > span", {
                y: 0,
                delay: preLoaderTimer + 0.9,
                duration: 1,
                stagger: 0.1,
                ease: easeValue,
            })

            gsap.to(".home-hero .home-hero-content .content-title .title-row:nth-child(1) .title > span > svg", {
                strokeDashoffset: 0,
                delay: preLoaderTimer + 1.3,
                duration: 1,
                stagger: 0.1,
                ease: easeValue,
            })

            // Star
            gsap.to(".home-hero .home-hero-content .content-title .title-row .svg-star > span", {
                height: "100%",
                delay: preLoaderTimer + 1.3,
                duration: 1,
                ease: easeValue,
            })

            gsap.to(".home-hero .home-hero-content .content-title .title-row .svg-star svg", {
                scale: 1,
                delay: preLoaderTimer + 1.3,
                duration: 0.5,
                ease: easeValue,
            })

            // Supported
            gsap.to(".home-hero .home-hero-content .content-title .title-row .supported .support-item", {
                y: 0,
                opacity: 1,
                delay: preLoaderTimer + 1.4,
                duration: 0.5,
                stagger: 0.1,
                ease: easeValue,
            })

            gsap.to(".home-hero .home-hero-content .content-title .title-row .supported > span:nth-child(3)", {
                scaleX: 1,
                delay: preLoaderTimer + 1.4,
                duration: 0.5,
                ease: easeValue,
            })

            gsap.to(".home-hero .home-hero-content .content-title .title-row .supported .line", {
                height: "100%",
                delay: preLoaderTimer + 1.4,
                duration: 0.5,
                ease: easeValue,
            })

            gsap.to(".home-hero .home-hero-content .content-title .title-row .title > span.support-img > .img-item .img > div", {
                y: 0,
                delay: preLoaderTimer + 1.6,
                duration: 1.5,
                ease: easeValue,
            })

            gsap.to(".home-hero .home-hero-content .content-title .title-row .title > span.support-img > .img-item svg", {
                opacity: 1,
                delay: preLoaderTimer + 2.6,
                duration: 0.5,
                ease: easeValue,
            })

            setTimeout(() => {
                // let supportImgTl = gsap.timeline({ yoyo: true, repeat: -1 })
                // supportImgTl.fromTo(".home-hero .home-hero-content .content-title .title-row .title > span.support-img > .img-item svg", {
                //     opacity: 1,
                // }, {
                //     opacity: 0,
                //     duration: 1,
                //     delay: 0.5,
                //     ease: easeValue,
                // })
                
                gsap.timeline().fromTo(".home-hero .home-hero-content .content-title .title-row .title > span.support-img > .img-item svg", {
                    scaleX: 1,
                }, {
                    scaleX: 0.8,
                    duration: 1,
                    delay: 0.5,
                    yoyo: true,
                    repeat: -1,
                    ease: easeValue,
                })

                // let supportImgTl2 = gsap.timeline({ yoyo: true, repeat: -1 })
                // supportImgTl2.fromTo(".home-hero .home-hero-content .content-title .title-row .title > span.support-img > span", {
                //     opacity: 1,
                // }, {
                //     opacity: 0,
                //     duration: 1,
                //     delay: 0.5,
                //     ease: easeValue,
                // })
            }, 5000);

            gsap.to(".home-hero .home-hero-content .content-title .title-row .title > .support-img > span", {
                opacity: 1,
                delay: preLoaderTimer + 2.7,
                duration: 0.3,
                ease: easeValue,
            })

            // Text
            gsap.to(".home-hero .home-hero-content .content-title > p", {
                y: 0,
                opacity: 1,
                delay: preLoaderTimer + 1.5,
                duration: 0.8,
                ease: easeValue,
            })

            gsap.to(".home-hero .home-hero-content .content-title", {
                y: -100,

                scrollTrigger: {
                    trigger: ".home-hero .home-hero-content .content-title",
                    start: "top center",
                    end: "bottom top",
                    scrub: true,
                }
            })

            // Desc
            gsap.to(".home-hero .home-hero-content .content-desc .text", {
                y: -200,

                scrollTrigger: {
                    trigger: ".home-hero .home-hero-content .content-desc",
                    start: "top bottom",
                    end: "top+=400px top",
                    scrub: true,
                }
            })

            gsap.to(".home-hero .home-hero-content .content-desc .text > span:not(.text-item-bg) > span", {
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: easeValue,

                scrollTrigger: {
                    trigger: ".home-hero .home-hero-content .content-desc",
                    start: "top top+=20%",
                }
            })

            gsap.to(".home-hero .home-hero-content .content-desc .text > .text-item-bg > .blast", {
                y: 0,
                duration: 1,
                delay: 0.5,
                ease: easeValue,

                scrollTrigger: {
                    trigger: ".home-hero .home-hero-content .content-desc",
                    start: "top top+=20%",
                }
            })

            gsap.to(".home-hero .home-hero-content .content-desc .text > .text-item-bg > .text-bg", {
                width: "100%",
                duration: 1,
                delay: 1,
                ease: easeValue,

                scrollTrigger: {
                    trigger: ".home-hero .home-hero-content .content-desc",
                    start: "top top+=20%",
                }
            })

            // Marquee
            gsap.to(".home-hero .home-hero-marquee .home-hero-marquee-line", {
                width: "100%",
                duration: 2,
                ease: easeValue,
                stagger: 0.1,

                scrollTrigger: {
                    trigger: ".home-hero .home-hero-marquee",
                    start: "top bottom-=100px",
                }
            })

            gsap.to(".home-hero .home-hero-marquee .home-hero-marquee-row", {
                xPercent: -60,

                scrollTrigger: {
                    trigger: ".home-hero .home-hero-marquee",
                    start: "top bottom",
                    end: "bottom+=3000px top",
                    scrub: true,
                }
            })

            // Cards List
            gsap.to(".home-cards-list .home-cards-list-row > svg", {
                scale: 1,
                opacity: 1,
                duration: 1,
                delay: 0.5,
                ease: easeValue,

                scrollTrigger: {
                    trigger: ".home-cards-list .home-cards-list-row",
                    start: "top center",
                }
            })

            gsap.to(".home-cards-list .home-cards-list-row .home-cards-list-row-item", {
                y: 0,
                autoAlpha: 1,
                duration: 1,
                stagger: 0.1,
                ease: easeValue,

                scrollTrigger: {
                    trigger: ".home-cards-list .home-cards-list-row",
                    start: "top center",
                }
            })
        }, 500);
    }
}

export { homeHeroAni }