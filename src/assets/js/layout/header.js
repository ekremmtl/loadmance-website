import gsap from 'gsap';

$(function () {
    // Animation
    let defaultEase = "circ.inOut";

    function loadAnimation() {
        setTimeout(() => {
            // Title
            gsap.to("header .header-title svg", {
                autoAlpha: 1,
                x: 0,
                duration: 0.8,
                ease: defaultEase
            })

            gsap.to("header .header-title > span", {
                autoAlpha: 1,
                x: 0,
                delay: 0.2,
                duration: 0.8,
                ease: defaultEase
            })

            // Logo
            gsap.to("header .header-logo", {
                autoAlpha: 1,
                duration: 0.6,
                ease: defaultEase
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
})