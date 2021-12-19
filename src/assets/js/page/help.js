import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

$(function () {
    // Animation
    let defaultEase = "circ.inOut";

    function loadAnimation() {
        setTimeout(() => {
            // Title
            if ($(".hero-page").length) {
                gsap.to(".help-page .page-title", {
                    autoAlpha: 1,
                    y: 0,
                    delay: 0.6,
                    duration: 0.8,
                    ease: defaultEase
                })

                gsap.to(".help-page .page-title > span", {
                    scale: 1,
                    delay: 0.8,
                    duration: 0.8,
                    ease: defaultEase
                })
            }

            if ($(".hero-section").length) {
                // Content
                setTimeout(() => {
                    $(".help-page .help-content .content-item").each(function () {
                        gsap.to($(this).find(".item-line"), {
                            width: "100%",
                            duration: 0.8,
                            ease: defaultEase,
                            scrollTrigger: {
                                start: $(this).offset().top + " bottom",
                            }
                        })

                        gsap.to($(this).find(".item-arrow"), {
                            autoAlpha: 1,
                            x: 0,
                            duration: 0.8,
                            stagger: 0.2,
                            ease: defaultEase,
                            scrollTrigger: {
                                start: $(this).offset().top + " bottom",
                            }
                        })

                        gsap.to($(this).find(".item-title"), {
                            autoAlpha: 1,
                            x: 0,
                            delay: 0.1,
                            duration: 0.8,
                            stagger: 0.2,
                            ease: defaultEase,
                            scrollTrigger: {
                                start: $(this).offset().top + " bottom",
                            }
                        })
                    });
                }, 1000);

                // Help Section
                gsap.to(".help-section .page-title", {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.8,
                    ease: defaultEase,

                    scrollTrigger: {
                        trigger: ".help-section",
                        start: "top bottom-=200",
                    }
                })

                gsap.to(".help-section .page-title > span", {
                    scale: 1,
                    delay: 0.1,
                    duration: 0.8,
                    ease: defaultEase,

                    scrollTrigger: {
                        trigger: ".help-section",
                        start: "top bottom-=200",
                    }
                })

                $(".help-section .help-content .content-item").each(function () {
                    gsap.to($(this).find(".item-line"), {
                        width: "100%",
                        duration: 0.8,
                        ease: defaultEase,

                        scrollTrigger: {
                            start: $(this).offset().top + " bottom",
                        }
                    })

                    gsap.to($(this).find(".item-arrow"), {
                        autoAlpha: 1,
                        x: 0,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: defaultEase,

                        scrollTrigger: {
                            start: $(this).offset().top + " bottom",
                        }
                    })

                    gsap.to($(this).find(".item-title"), {
                        autoAlpha: 1,
                        x: 0,
                        delay: 0.1,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: defaultEase,

                        scrollTrigger: {
                            start: $(this).offset().top + " bottom",
                        }
                    })
                })
            }
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

    // Content Click
    $(".help-content .content-item .item-row").click(function () {
        $(this).parent(".content-item").toggleClass("active").siblings().removeClass("active")

        if ($(this).parent(".content-item").hasClass("active")) {
            // Open
            gsap.to($(this).parent(".content-item").find(".item-text-container"), {
                height: $(this).parent(".content-item").find(".item-text").innerHeight(),
                duration: 0.8,
                ease: defaultEase,
            })

            gsap.to($(this).parent(".content-item").find(".item-text"), {
                opacity: 1,
                y: 0,
                delay: 0.1,
                duration: 0.8,
                ease: defaultEase,
            })

            gsap.to($(this).parent(".content-item").find(".item-arrow"), {
                rotate: -90,
                delay: 0.1,
                duration: 0.8,
                ease: defaultEase,
            })
        } else {
            // Close
            gsap.to($(this).parent(".content-item").find(".item-text-container"), {
                height: 0,
                duration: 0.8,
                ease: defaultEase,
            })

            gsap.to($(this).parent(".content-item").find(".item-text"), {
                opacity: 0,
                y: 24,
                delay: 0.2,
                duration: 0.8,
                ease: defaultEase,
            })

            gsap.to($(this).parent(".content-item").find(".item-arrow"), {
                rotate: 0,
                duration: 0.6,
                ease: defaultEase,
            })
        }

        // Siblings Close
        gsap.to($(this).parent(".content-item").siblings().find(".item-text-container"), {
            height: 0,
            duration: 0.8,
            ease: defaultEase,
        })

        gsap.to($(this).parent(".content-item").siblings().find(".item-text"), {
            opacity: 0,
            y: 24,
            delay: 0.2,
            duration: 0.8,
            ease: defaultEase,
        })

        gsap.to($(this).parent(".content-item").siblings().find(".item-arrow"), {
            rotate: 0,
            duration: 0.6,
            ease: defaultEase,
        })
    })

    // Content Hover
    $(".help-section .help-content .content-item .item-row").hover(function () {
        if ($(this).parent(".content-item").hasClass("active")) {
            gsap.to($(this).parent(".content-item").find(".item-arrow"), {
                rotate: -90,
                duration: 0.6,
                ease: defaultEase,
            })
        } else {
            gsap.to($(this).parent(".content-item").find(".item-arrow"), {
                rotate: 45,
                duration: 0.6,
                ease: defaultEase,
            })
        }
    }, function () {
        if (!$(this).parent(".content-item").hasClass("active")) {
            gsap.to($(this).parent(".content-item").find(".item-arrow"), {
                rotate: 0,
                duration: 0.6,
                ease: defaultEase,
            })
        }
    })
})