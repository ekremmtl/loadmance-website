import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

$(function () {
    // Animation
    let defaultEase = "circ.inOut";

    function loadAnimation() {
        setTimeout(() => {
            // Sections Title
            $(".hero-section-title").each(function () {
                if ($(this).hasClass("hero-reviews-title")) {
                    gsap.to($(this), {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.6,
                        ease: defaultEase,

                        scrollTrigger: {
                            trigger: $(this),
                            start: "top bottom-=200",
                        }
                    })

                    gsap.to($(this).children("span"), {
                        scale: 1,
                        delay: 0.2,
                        duration: 0.6,
                        ease: defaultEase,

                        scrollTrigger: {
                            trigger: $(this),
                            start: "top bottom-=200",
                        }
                    })
                } else {
                    gsap.to($(this), {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.6,
                        ease: defaultEase,

                        scrollTrigger: {
                            trigger: $(this),
                            start: "top bottom-=100",
                        }
                    })

                    gsap.to($(this).children("span"), {
                        scale: 1,
                        delay: 0.2,
                        duration: 0.6,
                        ease: defaultEase,

                        scrollTrigger: {
                            trigger: $(this),
                            start: "top bottom-=100",
                        }
                    })
                }
            });

            // Sections Text
            $(".hero-section-text").each(function () {
                if ($(this).hasClass("hero-reviews-text")) {
                    gsap.to($(this).children("p"), {
                        y: 0,
                        autoAlpha: 1,
                        delay: 0.1,
                        duration: 0.6,
                        ease: defaultEase,

                        scrollTrigger: {
                            trigger: $(this),
                            start: "top bottom-=200",
                        }
                    })
                } else {
                    gsap.to($(this).children("p"), {
                        y: 0,
                        autoAlpha: 1,
                        delay: 0.1,
                        duration: 0.6,
                        ease: defaultEase,

                        scrollTrigger: {
                            trigger: $(this),
                            start: "top bottom-=100",
                        }
                    })
                }
            });

            // Doctors View All
            if ($(".hero-doctors").length) {
                gsap.to(".hero-doctors .view-all-btn", {
                    y: 0,
                    autoAlpha: 1,
                    delay: 0.2,
                    duration: 0.6,
                    ease: defaultEase,

                    scrollTrigger: {
                        trigger: ".hero-doctors .view-all-btn",
                        start: "top bottom-=100",
                    }
                })
            }

            // Reviews
            if ($(".hero-reviews").length) {
                gsap.to(".hero-reviews .reviews-images .profile-item .item-bg .bg", {
                    "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",

                    scrollTrigger: {
                        trigger: ".hero-reviews",
                        start: "top center",
                        end: "center+=100 center",
                        scrub: 0.5,
                    }
                })

                // Stars
                gsap.to(".hero-reviews .reviews-content .rate-item", {
                    scale: 1,
                    stagger: 0.05,
                    duration: 0.6,
                    ease: defaultEase,

                    scrollTrigger: {
                        trigger: ".hero-reviews .reviews-content .rate-row",
                        start: "top bottom-=200",
                    }
                })

                gsap.to(".hero-reviews .reviews-content .rate-item .item-star-fill", {
                    x: 0,
                    delay: 0.4,
                    stagger: 0.05,
                    duration: 0.6,
                    ease: defaultEase,

                    scrollTrigger: {
                        trigger: ".hero-reviews .reviews-content .rate-row",
                        start: "top bottom-=200",
                    }
                })

                gsap.to(".hero-reviews .reviews-content .rate-item .item-star-fill span", {
                    x: 0,
                    delay: 0.4,
                    stagger: 0.05,
                    duration: 0.6,
                    ease: defaultEase,

                    scrollTrigger: {
                        trigger: ".hero-reviews .reviews-content .rate-row",
                        start: "top bottom-=200",
                    }
                })

                // Rate Title
                gsap.to(".hero-reviews .reviews-content .content-rate a", {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: defaultEase,

                    scrollTrigger: {
                        trigger: ".hero-reviews .reviews-content .content-rate a",
                        start: "top bottom-=200",
                    }
                })

                gsap.to(".hero-reviews .reviews-content .content-rate a .line", {
                    width: "100%",
                    delay: 0.1,
                    duration: 0.6,
                    ease: defaultEase,

                    scrollTrigger: {
                        trigger: ".hero-reviews .reviews-content .content-rate a",
                        start: "top bottom-=200",
                    }
                })

                // Text
                gsap.to(".hero-reviews .reviews-content .content-text", {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: defaultEase,

                    scrollTrigger: {
                        trigger: ".hero-reviews .reviews-content .content-text",
                        start: "top bottom-=200",
                    }
                })

                // Author
                gsap.to(".hero-reviews .reviews-content .content-author span", {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: defaultEase,

                    scrollTrigger: {
                        trigger: ".hero-reviews .reviews-content .content-author",
                        start: "top bottom-=200",
                    }
                })

                gsap.to(".hero-reviews .reviews-content .content-author p", {
                    y: 0,
                    opacity: 1,
                    delay: 0.1,
                    duration: 0.6,
                    ease: defaultEase,

                    scrollTrigger: {
                        trigger: ".hero-reviews .reviews-content .content-author",
                        start: "top bottom-=200",
                    }
                })

                // Medical Title
                gsap.to(".hero-reviews .reviews-images .profile-item .item-medical-title", {
                    opacity: 1,
                    y: 0,

                    scrollTrigger: {
                        trigger: ".hero-reviews",
                        start: "top+=50 center",
                        end: "center-=200 center",
                        scrub: 0.5,
                    }
                })

                gsap.to(".hero-reviews .reviews-images .profile-item .item-medical-title span", {
                    scale: 1,

                    scrollTrigger: {
                        trigger: ".hero-reviews",
                        start: "top+=100 center",
                        end: "center-=200 center",
                        scrub: 0.5,
                    }
                })

                gsap.to(".hero-reviews .reviews-images .profile-item .item-medical-title", {
                    opacity: 1,
                    y: 0,

                    scrollTrigger: {
                        trigger: ".hero-reviews",
                        start: "top center",
                        end: "center+=100 center",
                        scrub: 0.5,
                    }
                })

                // Profile Image
                gsap.to(".hero-reviews .reviews-images .profile-item .item-img img", {
                    opacity: 1,
                    y: 0,

                    scrollTrigger: {
                        trigger: ".hero-reviews",
                        start: "top center",
                        end: "center-=200 center",
                        scrub: 0.5,
                    }
                })

                gsap.to(".hero-reviews .reviews-images .profile-item .item-img .img-line:nth-child(1)", {
                    width: "100%",

                    scrollTrigger: {
                        trigger: ".hero-reviews",
                        start: "top center",
                        end: "center-=200 center",
                        scrub: 0.5,
                    }
                })

                gsap.to(".hero-reviews .reviews-images .profile-item .item-img .img-line:nth-child(4)", {
                    height: "100%",

                    scrollTrigger: {
                        trigger: ".hero-reviews",
                        start: "top center",
                        end: "center-=200 center",
                        scrub: 0.5,
                    }
                })

                gsap.to(".hero-reviews .reviews-images .profile-item .item-img .img-line:nth-child(2)", {
                    height: "100%",

                    scrollTrigger: {
                        trigger: ".hero-reviews",
                        start: "top center",
                        end: "center-=200 center",
                        scrub: 0.5,
                    }
                })

                gsap.to(".hero-reviews .reviews-images .profile-item .item-img .img-line:nth-child(3)", {
                    width: "100%",

                    scrollTrigger: {
                        trigger: ".hero-reviews",
                        start: "top center",
                        end: "center-=200 center",
                        scrub: 0.5,
                    }
                })

                // Profile Title
                gsap.to(".hero-reviews .reviews-images .profile-item .item-title .title", {
                    opacity: 1,
                    x: 0,

                    scrollTrigger: {
                        trigger: ".hero-reviews",
                        start: "top center",
                        end: "center-=200 center",
                        scrub: 0.5,
                    }
                })

                gsap.to(".hero-reviews .reviews-images .profile-item .item-title .line", {
                    width: "100%",
                    x: 0,

                    scrollTrigger: {
                        trigger: ".hero-reviews",
                        start: "top+=100 center",
                        end: "center-=200 center",
                        scrub: 0.5,
                    }
                })

                gsap.to(".hero-reviews .reviews-images .profile-item .item-title p", {
                    opacity: 1,
                    x: 0,

                    scrollTrigger: {
                        trigger: ".hero-reviews",
                        start: "top+=200 center",
                        end: "center-=200 center",
                        scrub: 0.5,
                    }
                })

                // Profile Text Bar
                gsap.to(".hero-reviews .reviews-images .profile-item .item-body span:nth-child(1)", {
                    width: "100%",

                    scrollTrigger: {
                        trigger: ".hero-reviews",
                        start: "top+=220 center",
                        end: "center-=100 center",
                        scrub: 0.5,
                    }
                })

                gsap.to(".hero-reviews .reviews-images .profile-item .item-body span:nth-child(2)", {
                    width: "88%",

                    scrollTrigger: {
                        trigger: ".hero-reviews",
                        start: "top+=240 center",
                        end: "center-=100 center",
                        scrub: 0.5,
                    }
                })

                gsap.to(".hero-reviews .reviews-images .profile-item .item-body span:nth-child(3)", {
                    width: "88%",

                    scrollTrigger: {
                        trigger: ".hero-reviews",
                        start: "top+=260 center",
                        end: "center-=100 center",
                        scrub: 0.5,
                    }
                })

                gsap.to(".hero-reviews .reviews-images .profile-item .item-body span:nth-child(4)", {
                    width: "100%",

                    scrollTrigger: {
                        trigger: ".hero-reviews",
                        start: "top+=280 center",
                        end: "center-=100 center",
                        scrub: 0.5,
                    }
                })

                gsap.to(".hero-reviews .reviews-images .profile-item .item-body span:nth-child(5)", {
                    width: "88%",

                    scrollTrigger: {
                        trigger: ".hero-reviews",
                        start: "top+=300 center",
                        end: "center-=100 center",
                        scrub: 0.5,
                    }
                })

                gsap.to(".hero-reviews .reviews-images .profile-item .item-body span:nth-child(6)", {
                    width: "88%",

                    scrollTrigger: {
                        trigger: ".hero-reviews",
                        start: "top+=320 center",
                        end: "center-=100 center",
                        scrub: 0.5,
                    }
                })

                // Tel Image
                gsap.to(".hero-reviews .reviews-images .img-item", {
                    y: 0,
                    rotation: 11,

                    scrollTrigger: {
                        trigger: ".hero-reviews",
                        start: "top top",
                        end: "center+=200 center",
                        scrub: 0.5,
                    }
                })
            }

            // Insurance View All
            if ($(".hero-insurance").length) {
                gsap.to(".hero-insurance .view-all-btn", {
                    y: 0,
                    autoAlpha: 1,
                    delay: 0.2,
                    duration: 0.6,
                    ease: defaultEase,

                    scrollTrigger: {
                        trigger: ".hero-insurance .view-all-btn",
                        start: "top bottom-=100",
                    }
                })

                // Insurance Images
                let layoutWrapperRow = $(".hero-insurance .insurance-images .img-row")

                layoutWrapperRow.css({ width: "auto" });
                let layoutWrapperWidth = layoutWrapperRow.width();
                layoutWrapperRow.width(layoutWrapperWidth);

                $(".hero-insurance .insurance-images .marquee-wrapper").each(function (index) {
                    for (let i = 0; i < 5; i++) {
                        $(this).find(".img-row").clone().appendTo($(this));
                    }
                });

                let layoutAction1 = gsap.to('.hero-insurance .insurance-images .marquee-wrapper:nth-child(1) .img-row', {
                    x: -layoutWrapperWidth,
                    repeat: -1,
                    paused: true
                });

                gsap.set($(".hero-insurance .insurance-images .marquee-wrapper:nth-child(2)"), { x: -layoutWrapperWidth - 20 })
                let layoutAction2 = gsap.to('.hero-insurance .insurance-images .marquee-wrapper:nth-child(2) .img-row', {
                    x: layoutWrapperWidth,
                    repeat: -1,
                    paused: true
                });

                let delayedCall;

                ScrollTrigger.create({
                    trigger: ".hero-insurance .insurance-images",
                    start: "top bottom",
                    onUpdate: (self) => {
                        let velo = self.getVelocity();
                        let speed = velo * 0.0001;

                        layoutAction1.play();
                        layoutAction2.play();

                        if (delayedCall)
                            delayedCall.kill();
                        delayedCall = gsap.delayedCall(0.1, () => {
                            layoutAction1.pause()
                            layoutAction2.pause()
                        });

                        gsap.set(layoutAction1, { timeScale: speed });
                        gsap.set(layoutAction2, { timeScale: speed });
                    }
                });
            }
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

    new Swiper('.hero-doctors .swiper', {
        scrollbar: {
            el: ".hero-doctors .swiper .swiper-scrollbar",
            draggable: true,
        },
        freeMode: true,
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 24,
        breakpoints: {
            992: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 32,
            },
        },
    });
})