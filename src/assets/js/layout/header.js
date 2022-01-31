import gsap from 'gsap'

function headerAni(preLoaderTimer) {
    const easeValue = "Expo.easeOut";

    if ($(window).width() > 1200) {
        setTimeout(() => {
            gsap.to("header a img", {
                y: 0,
                opacity: 1,
                delay: preLoaderTimer,
                duration: 1,
                ease: easeValue,
            })

            gsap.to("header .header-right > ul > li", {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: preLoaderTimer + 0.5,
                stagger: 0.05,
                ease: easeValue,
            })

            gsap.to("header .header-right .header-button", {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: preLoaderTimer + 0.8,
                ease: easeValue,
            })
        }, 300);
    }
}

export { headerAni }