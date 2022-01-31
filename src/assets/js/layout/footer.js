import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin);

function footerAni() {
    const easeValue = "Expo.easeOut";

    if ($(window).width() > 1200) {
        setTimeout(() => {
            function marqueeItem(item, reverse, duration) {
                const dur = duration;
                let ticker = document.querySelector(item)

                let totalDistance;
                $(item).append($(item).find(".footer-marquee-item").clone());
                let anim;

                function resize() {
                    if (anim) anim.play(0);
                    totalDistance = $(ticker).width() / 2;

                    anim = gsap.to(ticker, {
                        duration: dur,
                        x: reverse ? totalDistance : -totalDistance,
                        ease: "none",
                        repeat: -1,
                        overwrite: true
                    });
                }

                $(window).resize(resize);
                resize();
            }

            marqueeItem(".marquee-1", false, 20)
            marqueeItem(".marquee-2", true, 25)

            // Go Top
            $(".home-footer .scroll-up").click(function () {
                gsap.to(window, { duration: 0.8, scrollTo: 0, ease: easeValue });

                setTimeout(() => {
                    $("body").addClass("overflow-hidden")

                    setTimeout(() => {
                        $("body").removeClass("overflow-hidden")
                    }, 1000);
                }, 100);
            });
        }, 300);
    }
}

export { footerAni }