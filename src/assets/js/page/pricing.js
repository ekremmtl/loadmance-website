import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function pricingSticky() {
    if ($(window).width() >= 992) {
        var pricingPlanItem = $(".pricing-content .content-plan");

        if (pricingPlanItem.length) {
            $(window).scroll(function () {
                var scrollTop = $(this).scrollTop()

                if (scrollTop > 340) {
                    pricingPlanItem.addClass("active");
                } else {
                    pricingPlanItem.removeClass("active");
                }
            })
        }
    }
}

function pricingAni(enterCheck) {
    const easeValue = "Expo.easeOut";

    function allAnimation() {
        // Banner                
        gsap.to(".pricing-banner-bg", {
            x: 0,
            duration: 1.5,
            ease: easeValue,
        })

        gsap.to(".pricing-banner-bg > span", {
            x: 0,
            duration: 1.5,
            ease: easeValue,
        })

        gsap.to(".pricing-banner .s-container h1", {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 1,
            ease: easeValue,
        })

        gsap.to(".pricing-banner .switch-plan", {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 1.3,
            ease: easeValue,
        })

        // Content                
        gsap.to(".pricing-content .content-plan-container", {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 1.4,
            ease: easeValue,
        })

        gsap.to(".pricing-content .content-body .body-item .item-title", {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 1.4,
            ease: easeValue,
        })

        gsap.to(".pricing-content .content-body .body-item .item-list .list-item .list-row .row-item", {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 1.4,
            stagger: 0.1,
            ease: easeValue,
        })

        gsap.to(".pricing-content .content-info", {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: easeValue,

            scrollTrigger: {
                trigger: ".pricing-content .content-info",
                start: "top bottom-=100",
            }
        })
    }

    if ($(window).width() > 1200) {
        if ($(".pricing-content").length) {
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

export { pricingSticky, pricingAni }