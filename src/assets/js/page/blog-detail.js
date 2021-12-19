import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Animation
let defaultEase = "circ.inOut";

function blogDetailAnimation(enterCheck) {
    if ($(".blog-detail").length) {
        setTimeout(() => {
            // Title
            if (!enterCheck) {
                gsap.to('.blog-detail .blog-title', {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.8,
                    ease: defaultEase,
                })
            } else {
                gsap.to('.blog-detail .blog-title', {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0,
                    ease: "none",
                })
            }

            // gsap.to('.blog-detail .blog-title span', {
            //     scale: 1,
            //     delay: 0.2,
            //     duration: 0.8,
            //     ease: defaultEase,
            // })

            // // Date
            // gsap.to('.blog-detail .blog-date', {
            //     autoAlpha: 1,
            //     y: 0,
            //     delay: 0.1,
            //     duration: 0.8,
            //     ease: defaultEase,
            // })

            // // Image
            // gsap.to('.blog-detail .blog-img', {
            //     autoAlpha: 1,
            //     delay: 0.2,
            //     duration: 0.8,
            //     ease: defaultEase,
            // })

            // gsap.to('.blog-detail .blog-img img', {
            //     scale: 1,
            //     delay: 0.2,
            //     duration: 0.8,
            //     ease: defaultEase,
            // })

            // gsap.to('.blog-detail .blog-img', {
            //     y: -100,
            //     ease: "none",
            //     scrollTrigger: {
            //         trigger: ".blog-detail .blog-img",
            //         start: "top center",
            //         end: "bottom top",
            //         scrub: true,
            //     }
            // })

            // // Text
            // $(".blog-detail .blog-text .text-item").each(function () {
            //     gsap.to($(this), {
            //         autoAlpha: 1,
            //         y: 0,
            //         duration: 0.8,
            //         ease: defaultEase,
            //         scrollTrigger: {
            //             start: $(this).offset().top + " bottom-=200",
            //         }
            //     })
            // });

            // // Other Links
            // gsap.to(".blog-detail .blog-other-link .other-link-line", {
            //     width: "100%",
            //     duration: 0.8,
            //     ease: defaultEase,
            //     scrollTrigger: {
            //         trigger: ".blog-detail .blog-other-link",
            //         start: "top bottom-=100",
            //     }
            // })

            // gsap.to(".blog-detail .blog-other-link .link-item", {
            //     x: 0,
            //     autoAlpha: 1,
            //     delay: 0.1,
            //     duration: 0.8,
            //     ease: defaultEase,
            //     scrollTrigger: {
            //         trigger: ".blog-detail .blog-other-link",
            //         start: "top bottom-=100",
            //     }
            // })

            // // Dr Image
            // gsap.to('.blog-detail .dr-item .item-img', {
            //     autoAlpha: 1,
            //     y: 0,
            //     delay: 0.3,
            //     duration: 0.8,
            //     ease: defaultEase,
            // })

            // // Dr Title
            // gsap.to('.blog-detail .dr-item h5', {
            //     autoAlpha: 1,
            //     y: 0,
            //     delay: 0.4,
            //     duration: 0.8,
            //     ease: defaultEase,
            // })

            // // Dr Text
            // gsap.to('.blog-detail .dr-text', {
            //     autoAlpha: 1,
            //     y: 0,
            //     delay: 0.5,
            //     duration: 0.8,
            //     ease: defaultEase,
            // })

            // // Dr Line
            // gsap.to('.blog-detail .dr-item-line', {
            //     width: "100%",
            //     delay: 0.5,
            //     duration: 0.8,
            //     ease: defaultEase,
            // })
        }, 800);

        // if ($(window).width() >= 1200) {
        //     loadAnimation();
        // }

        // $(window).resize(function () {
        //     if ($(window).width() >= 1200) {
        //         loadAnimation();
        //     }
        // });

        // Sticky
        // function stickyAnimation() {
        //     gsap.to('.blog-sticky', {
        //         scrollTrigger: {
        //             trigger: '.blog-detail',
        //             start: "top top+=100",
        //             end: 'bottom top+=50%',
        //             pin: '.blog-sticky',
        //             scrub: 1,
        //         }
        //     })
        // }

        // if ($(window).width() >= 768) {
        //     stickyAnimation();
        // }

        // $(window).resize(function () {
        //     if ($(window).width() >= 768) {
        //         stickyAnimation();
        //     }
        // });
    }
}

export { blogDetailAnimation }