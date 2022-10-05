import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin);

function footerAni() {
    const easeValue = "Expo.easeOut";

    setTimeout(() => {
        if ($(window).width() > 1200) {
            gsap.fromTo("footer.home-footer .footer-earth", {
                y: 100,
            }, {
                y: 0,

                scrollTrigger: {
                    trigger: "footer",
                    start: "top-=60% bottom",
                    end: "top center",
                    scrub: true,
                }
            })
        }

        function marqueeItem(item, reverse, duration) {
            const dur = duration;
            let ticker = document.querySelector(item)

            let totalDistance;
            $(item).append($(item).find(".footer-marquee-item").clone());

            let footerOffset = $("footer").offset()

            function resize() {
                totalDistance = $(ticker).width() / 2;

                let tl = gsap.timeline().to(ticker, {
                    duration: dur,
                    x: reverse ? totalDistance : -totalDistance,
                    ease: "none",
                    repeat: -1,
                    overwrite: true
                });
                tl.pause()

                $(window).scroll(function () {
                    let scrollTop = $(window).scrollTop();

                    if ((scrollTop + window.innerHeight) > footerOffset.top) {
                        tl.play()
                    } else {
                        tl.pause()
                    }
                });
            }

            $(window).resize(resize);
            resize();
        }

        marqueeItem(".marquee-1", false, 25)
        marqueeItem(".marquee-2", true, 50)
    }, 300);
}

export { footerAni }