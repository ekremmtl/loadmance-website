import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function useCaseAni(enterCheck) {
    const easeValue = "Expo.easeOut";

    function allAnimation() {
        // Banner                
        gsap.to(".page-banner .banner-bg", {
            height: "100%",
            duration: 0.8,
            ease: easeValue,
        })

        gsap.to(".page-banner .s-container .banner-breadcrumb span", {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            delay: 0.4,
            duration: 0.6,
            ease: easeValue,
        })

        gsap.to(".page-banner .s-container .banner-title h1", {
            y: 0,
            opacity: 1,
            delay: 0.5,
            duration: 0.6,
            ease: easeValue,
        })

        gsap.to(".page-banner .s-container .banner-title p", {
            y: 0,
            opacity: 1,
            delay: 0.6,
            duration: 0.6,
            ease: easeValue,
        })

        gsap.to(".page-banner .banner-circle.circle-1", {
            scale: 1,
            delay: 0.6,
            duration: 0.6,
            ease: easeValue,
        })

        // Content
        $(".usecase-detail .detail-container .detail-item").each(function (index) {
            gsap.to($(this), {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: easeValue,

                scrollTrigger: {
                    trigger: ".usecase-detail .detail-container .detail-item:nth-child(" + (index + 1) + ")",
                    start: "top bottom-=200",
                    end: "top bottom-=200"
                }
            })
        });

        // Footer
        gsap.to(".usecase-cards-circle", {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: easeValue,

            scrollTrigger: {
                trigger: ".usecase-footer",
                start: "top bottom-=400",
                end: "top bottom-=400"
            }
        })

        gsap.to(".usecase-cards .s-container h3", {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: easeValue,

            scrollTrigger: {
                trigger: ".usecase-footer",
                start: "top bottom-=400",
                end: "top bottom-=400"
            }
        })

        gsap.to(".cards-list .card-item", {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.6,
            ease: easeValue,

            scrollTrigger: {
                trigger: ".usecase-footer",
                start: "top bottom-=400",
                end: "top bottom-=400"
            }
        })

        gsap.to(".usecase-extra h4", {
            y: 0,
            opacity: 1,
            delay: 0.1,
            duration: 0.6,
            ease: easeValue,

            scrollTrigger: {
                trigger: ".usecase-extra",
                start: "top bottom-=400",
                end: "top bottom-=400"
            }
        })

        gsap.to(".usecase-extra p", {
            y: 0,
            opacity: 1,
            delay: 0.2,
            duration: 0.6,
            ease: easeValue,

            scrollTrigger: {
                trigger: ".usecase-extra",
                start: "top bottom-=400",
                end: "top bottom-=400"
            }
        })

        gsap.to(".usecase-extra .extra-link", {
            y: 0,
            opacity: 1,
            delay: 0.3,
            duration: 0.6,
            ease: easeValue,

            scrollTrigger: {
                trigger: ".usecase-extra",
                start: "top bottom-=400",
                end: "top bottom-=400"
            }
        })
    }

    if ($(window).width() > 1200) {
        if ($(".usecase-detail").length) {
            setTimeout(() => {
                gsap.to(window, { duration: 0, scrollTo: 0 });

                if (enterCheck === true) {
                    setTimeout(() => {
                        allAnimation()
                    }, 400);
                } else {
                    allAnimation()
                }
            }, 300);
        }
    }
}

export { useCaseAni }