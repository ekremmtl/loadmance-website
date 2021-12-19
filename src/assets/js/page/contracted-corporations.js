import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

$(function () {
    // Animation
    let defaultEase = "circ.inOut";

    function loadAnimation() {
        setTimeout(() => {
            // Title
            gsap.to(".cc-content-item .item-title", {
                y: 0,
                autoAlpha: 1,
                stagger: 0.2,
                duration: 0.8,
                ease: defaultEase,
            })

            gsap.to(".cc-content-item .item-title span", {
                scale: 1,
                delay: 0.2,
                stagger: 0.2,
                duration: 0.8,
                ease: defaultEase,
            })

            // Line
            gsap.to(".cc-content-item .item-line", {
                width: "100%",
                stagger: 0.2,
                duration: 0.8,
                ease: defaultEase,
            })

            // List
            gsap.to(".cc-content-item .item-list ul li", {
                autoAlpha: 1,
                y: 0,
                stagger: 0.05,
                duration: 0.6,
                ease: defaultEase,
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

    // List Hover
    $(".cc-section .item-list ul li > span").mouseenter(function () {
        let itemTitle = $(this).text();
        let itemPosition = $(this).parent().position()
        let imgItem = $(this).parent().parent().prev(".list-img-container");

        if (imgItem.length) {
            gsap.to(imgItem, {
                y: (itemPosition.top - (imgItem.height() / 2)) + $(this).height(),
                x: (itemPosition.left + $(this).width()) + 10,
                duration: 0.6,
                ease: defaultEase,
            })

            imgItem.find(".img").each(function (index) {
                if ($(this).attr("data-title") == itemTitle) {
                    gsap.to($(this), {
                        opacity: 1,
                        duration: 0.6,
                        ease: defaultEase,
                    })

                    gsap.to($(this).children(), {
                        scale: 1,
                        duration: 0.6,
                        ease: defaultEase,
                    })
                } else {
                    gsap.to($(this), {
                        opacity: 0,
                        duration: 0.3,
                        ease: defaultEase,
                    })

                    gsap.to($(this).children(), {
                        scale: 1.5,
                        duration: 0.3,
                        ease: defaultEase,
                    })
                }
            });
        }
    });

    $(".cc-section .item-list ul li > span").mousemove(function (e) {
        let itemPosition = $(this).parent().offset()
        let imgItem = $(this).parent().parent().prev(".list-img-container");
        let mouseY = e.pageY;
        let mouseX = e.pageX;
        let calcY = (((mouseY - itemPosition.top) / $(this).height()) * 10) - 10
        let calcX = (((mouseX - itemPosition.left) / $(this).width()) * 30) - 30

        if (imgItem.length) {
            gsap.to(imgItem.children(".list-img"), {
                y: calcY,
                x: calcX,
                duration: 0.8,
            })
        }
    });

    $(".cc-section .item-list li").mouseleave(function () {
        gsap.to(".list-img .img", {
            opacity: 0,
            duration: 0.3,
            ease: defaultEase,
        })

        gsap.to(".list-img .img img", {
            scale: 1.5,
            duration: 0.3,
            ease: defaultEase,
        })
    });
})