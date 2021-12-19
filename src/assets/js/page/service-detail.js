import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);

$(function () {
    // Animation
    let defaultEase = "circ.inOut";

    if ($(".service-detail").length) {
        function loadAnimation() {
            setTimeout(() => {
                // Sections Title
                $(".service-detail .detail-section-title").each(function () {
                    gsap.to($(this), {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.8,
                        ease: defaultEase,

                        scrollTrigger: {
                            trigger: $(this),
                            start: "top bottom-=100",
                        }
                    })
                });

                // Title
                gsap.to(".service-detail .detail-title h2", {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.8,
                    ease: defaultEase,
                })

                gsap.to(".service-detail .detail-title h2 > span", {
                    scale: 1,
                    delay: 0.1,
                    duration: 0.8,
                    ease: defaultEase,
                })

                gsap.to(".service-detail .detail-title > span", {
                    y: 0,
                    autoAlpha: 1,
                    delay: 0.1,
                    duration: 0.8,
                    ease: defaultEase,
                })

                // Banner
                gsap.to(".banner-item", {
                    y: 0,
                    autoAlpha: 1,
                    delay: 0.2,
                    duration: 0.8,
                    ease: defaultEase,
                })

                // Default Button
                gsap.to(".service-detail .detail-content-row .default-btn", {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.8,
                    ease: defaultEase,

                    scrollTrigger: {
                        trigger: ".service-detail .detail-content-row .default-btn",
                        start: "top bottom-=100",
                    }
                })

                // Content
                gsap.to(".service-detail .detail-content-row .content-line", {
                    width: "100%",
                    duration: 0.8,
                    ease: defaultEase,

                    scrollTrigger: {
                        trigger: ".service-detail .detail-content-row .content-line",
                        start: "top bottom-=100",
                    }
                })

                gsap.to(".service-detail .detail-content-row .content-col p", {
                    y: 0,
                    autoAlpha: 1,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: defaultEase,

                    scrollTrigger: {
                        trigger: ".service-detail .detail-content-row .content-col",
                        start: "top bottom-=100",
                    }
                })

                gsap.to(".service-detail .detail-content-row .content-info .info-item", {
                    y: 0,
                    autoAlpha: 1,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: defaultEase,

                    scrollTrigger: {
                        trigger: ".service-detail .detail-content-row .content-info",
                        start: "top bottom-=100",
                    }
                })

                gsap.to(".service-detail .detail-content-row .content-info .info-item .item-img", {
                    scale: 1,
                    delay: 0.1,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: defaultEase,

                    scrollTrigger: {
                        trigger: ".service-detail .detail-content-row .content-info",
                        start: "top bottom-=100",
                    }
                })

                gsap.to(".service-detail .detail-content-row .content-info .info-item > span", {
                    y: 0,
                    autoAlpha: 1,
                    delay: 0.2,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: defaultEase,

                    scrollTrigger: {
                        trigger: ".service-detail .detail-content-row .content-info",
                        start: "top bottom-=100",
                    }
                })

                // Services
                gsap.to(".service-detail .services .services-content-row p", {
                    y: 0,
                    autoAlpha: 1,
                    delay: 0.2,
                    duration: 0.8,
                    ease: defaultEase,

                    scrollTrigger: {
                        trigger: ".service-detail .services .services-content-row p",
                        start: "top bottom-=100",
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

        // Sticky
        function stickyAnimation() {
            const stickyBar1 = gsap.to('.service-detail-sticky', {
                y: 0,
                duration: 0.5,
                ease: defaultEase,
                paused: true,
            })

            const stickyBar2 = gsap.to('.service-detail-sticky .sticky-row', {
                y: 0,
                duration: 0.5,
                ease: defaultEase,
                paused: true,
            })

            ScrollTrigger.create({
                start: $(".service-detail .detail-content-row .default-btn").offset().top + " top",

                onUpdate: (self) => {
                    if (self.direction === -1) {
                        stickyBar1.play()
                        stickyBar2.play()
                    } else {
                        stickyBar1.reverse()
                        stickyBar2.reverse()
                    }
                },
                onRefresh: () => {
                    stickyBar1.reverse()
                    stickyBar2.reverse()
                },
                onLeaveBack: () => {
                    stickyBar1.reverse()
                    stickyBar2.reverse()
                }
            });
        }

        if ($(".service-detail-sticky").length) {
            if ($(window).width() >= 768) {
                stickyAnimation();
            }

            $(window).resize(function () {
                if ($(window).width() >= 768) {
                    stickyAnimation();
                }
            });
        }

        // Doctors
        function doctorScroll() {
            let totalX = 0;
            let mainPaddingRight = parseInt($("main .main-content .main-content-container").css("padding-right"));

            $(".service-detail .doctor-list .list-body .list-item").each(function () {
                totalX += $(this).outerWidth()
            });

            let xCalc = (
                (totalX - $(".service-detail .doctor-list").width()) +
                (mainPaddingRight * 3)
            );

            $(".service-detail .doctor-list").css("height", (xCalc * 1.5) + "px")

            let startValue = 340;

            if ($(window).width() <= 1450) {
                startValue = 300
            }

            $(window).resize(function () {
                if ($(window).width() <= 1450) {
                    startValue = 300
                } else {
                    startValue = 340
                }
            });

            gsap.to('.service-detail .doctor-list .list-body', {
                x: -xCalc,
                ease: "none",

                scrollTrigger: {
                    trigger: '.service-detail .doctor-list',
                    start: "top+=" + startValue + " center",
                    end: 'bottom bottom',
                    pin: '.service-detail .doctor-list .doctor-list-container',
                    scrub: true,
                }
            })

            gsap.to('.service-detail .doctor-list .list-body .list-item .item-img', {
                x: -100,
                stagger: 0.4,
                ease: "none",

                scrollTrigger: {
                    trigger: '.service-detail .doctor-list',
                    start: "top+=" + startValue + " center",
                    end: 'bottom bottom',
                    scrub: true,
                }
            })

            gsap.to('.service-detail .doctor-list .list-body .list-item .item-info', {
                x: -100,
                stagger: 0.4,
                ease: "none",

                scrollTrigger: {
                    trigger: '.service-detail .doctor-list',
                    start: "top+=" + startValue + " center",
                    end: 'bottom bottom',
                    scrub: true,
                }
            })
        }

        let doctorsSlide;
        function doctorSlide() {
            $(".service-detail .doctor-list .doctor-list-container").addClass("swiper")
            $(".service-detail .doctor-list .doctor-list-container .list-body").addClass("swiper-wrapper")
            $(".service-detail .doctor-list .doctor-list-container .list-body .list-item").addClass("swiper-slide")

            setTimeout(() => {
                doctorsSlide = new Swiper('.service-detail .doctor-list .swiper', {
                    slidesPerView: 1,
                    spaceBetween: 24,
                    breakpoints: {
                        992: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 32,
                        },
                    },
                });
            }, 100);
        }

        if ($(window).width() >= 1200) {
            doctorScroll();
        } else {
            doctorSlide();
        }

        $(window).resize(function () {
            if ($(window).width() >= 1200) {
                doctorsSlide.destroy()
                doctorScroll();
            } else {
                doctorSlide();
            }
        });
    }
})