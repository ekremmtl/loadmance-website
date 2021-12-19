import gsap from 'gsap';

$(function () {
    // Animation
    let defaultEase = "circ.inOut";

    function loadAnimation() {
        setTimeout(() => {
            // Doctor Img
            $("footer .footer-top .footer-menu ul li").mousemove(function (e) {
                let itemPosition = $(this).offset()
                let imgItem = $(this).find(".footer-doctor-images");
                let mouseY = e.pageY;
                let mouseX = e.pageX;
                let calcY = (((mouseY - itemPosition.top) / $(this).height()) * 10) - 10
                let calcX = (((mouseX - itemPosition.left) / $(this).width()) * 30) - 30

                if (imgItem.length) {
                    gsap.to(imgItem.find(".doctor-img .img"), {
                        y: calcY,
                        x: calcX,
                        duration: 0.6,
                    })
                }

                //-

                $(this).find(".footer-doctor-images .doctor-img").addClass("active");
                $(this).siblings().find(".footer-doctor-images .doctor-img").removeClass("active");
            });

            $("footer .footer-top .footer-menu ul").mouseleave(function () {
                $(".footer-doctor-images .doctor-img").removeClass("active");
            });
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