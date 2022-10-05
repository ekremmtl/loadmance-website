import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function faqPage() {
    $(".faq-container .faq-item .item-header").click(function () {
        $(this).parent().toggleClass("active")
        $(this).next(".item-body").slideToggle()

        $(this).parent().siblings().removeClass("active")
        $(this).parent().siblings().find(".item-body").slideUp()
    });
}

function faqAni(enterCheck) {
    const easeValue = "Expo.easeOut";

    function allAnimation() {
        gsap.to(".faq-container", {
            y: 0,
            opacity: 1,
            delay: 1,
            duration: 1,
            ease: easeValue,
        })

        gsap.to(".faq-container .faq-item", {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            delay: 1,
            duration: 1,
            ease: easeValue,
        })
    }

    if ($(window).width() > 1200) {
        if ($(".faq-container").length) {
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

export { faqPage, faqAni }