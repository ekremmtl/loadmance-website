
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);
const easeValue = "Expo.easeOut";

function homeReviewsAni() {
    const homeReviewsLength = $(".home-reviews-slider .swiper-slide").length

    new Swiper('.home-reviews .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 24,
        speed: 800,
        navigation: {
            nextEl: '.home-reviews .home-reviews-content .slide-btn .btn-next',
            prevEl: '.home-reviews .home-reviews-content .slide-btn .btn-prev',
        },
        breakpoints: {
            992: {
                spaceBetween: 60,
            },
        },
    });

    if ($(window).width() > 1200) {
        // gsap.to(".image-container", {
        //     opacity: 0,
        //     duration: 0.1,
        // })

        // gsap.to(".image-container", {
        //     opacity: 1,
        //     delay: 1,
        //     duration: 0.1,
        // })

        // Dashboard SVG
        gsap.to(".home-dashboard-svg .dashboard-img .line.line-1", {
            width: "103%",

            scrollTrigger: {
                trigger: ".home-dashboard-svg",
                start: "top top",
                end: "top+=10% top",
                scrub: 1,
            }
        })

        gsap.to(".home-dashboard-svg .dashboard-img .line.line-2", {
            height: "103.2%",

            scrollTrigger: {
                trigger: ".home-dashboard-svg",
                start: "top top",
                end: "top+=10% top",
                scrub: 1,
            }
        })

        gsap.to(".home-dashboard-svg .dashboard-img .line.line-3", {
            width: "103%",

            scrollTrigger: {
                trigger: ".home-dashboard-svg",
                start: "top+=20% top",
                end: "top+=10% top",
                scrub: 1,
            }
        })

        gsap.to(".home-dashboard-svg .dashboard-img .img-submenu", {
            x: 0,
            opacity: 1,

            scrollTrigger: {
                trigger: ".home-dashboard-svg",
                start: "top+=20% top",
                end: "center top",
                scrub: 1,
            }
        })

        gsap.to(".home-dashboard-svg .dashboard-img .img-header", {
            y: 0,
            opacity: 1,

            scrollTrigger: {
                trigger: ".home-dashboard-svg",
                start: "top top",
                end: "center top",
                scrub: 1,
            }
        })

        gsap.to(".home-dashboard-svg .dashboard-img .img-title", {
            y: 0,
            opacity: 1,

            scrollTrigger: {
                trigger: ".home-dashboard-svg",
                start: "top+=10% top",
                end: "center top",
                scrub: 1,
            }
        })

        gsap.to(".home-dashboard-svg .dashboard-img .img-body .img-body-left .img-body-left-item", {
            y: 0,
            opacity: 1,
            stagger: 0.1,

            scrollTrigger: {
                trigger: ".home-dashboard-svg",
                start: "top+=30% top",
                end: "center top",
                scrub: 1,
            }
        })

        gsap.to(".home-dashboard-svg .dashboard-img .img-body .img-body-right .img-body-right-item", {
            y: 0,
            opacity: 1,
            stagger: 0.1,

            scrollTrigger: {
                trigger: ".home-dashboard-svg",
                start: "top+=30% top",
                end: "center top",
                scrub: 1,
            }
        })

        gsap.to(".home-dashboard-svg .dashboard-img .img-menu", {
            y: 0,
            opacity: 1,

            scrollTrigger: {
                trigger: ".home-dashboard-svg",
                start: "top+=40% top",
                end: "center top",
                scrub: 1,
            }
        })

        gsap.to(".home-dashboard-svg .img-line", {
            y: 0,

            scrollTrigger: {
                trigger: ".home-dashboard-svg",
                start: "top top",
                end: "center top",
                scrub: 1,
            }
        })

        gsap.to(".home-dashboard-svg .img-line .line", {
            y: 0,

            scrollTrigger: {
                trigger: ".home-dashboard-svg",
                start: "top top",
                end: "center top",
                scrub: 1,
            }
        })

        gsap.fromTo(".home-dashboard-svg .dashboard-img", {
            y: 0,
        }, {
            y: -200,
            rotateX: 3,

            scrollTrigger: {
                trigger: ".home-cards-list",
                start: "top bottom",
                end: "center top",
                scrub: 1,
            }
        })

        setTimeout(() => {

            // if ($(".logo-container").length) {
            //     gsap.to(".logo-container.logo-container-bar", {
            //         opacity: 1,
            //     })

            //     gsap.to(".logo-container .logo-sprites .logo-sprites-bar", {
            //         opacity: 0,
            //     })

            //     gsap.to(".logo-container-bar .logo-sprites-meteor > svg", {
            //         scale: 1,
            //         scrollTrigger: {
            //             trigger: "body",
            //             start: "7000px top",
            //             end: "9000px top",
            //             scrub: true,
            //             markers: false,
            //             onEnter: () => $(".logo-container-bar .logo-sprites-bar").addClass('shake-active'),
            //             onLeave: () => $(".logo-container-bar .logo-sprites-bar").removeClass('shake-active'),
            //             onEnterBack: () => $(".logo-container-bar .logo-sprites-bar").addClass('shake-active'),
            //             onLeaveBack: () => $(".logo-container-bar .logo-sprites-bar").removeClass('shake-active'),
            //         }
            //     })

            //     gsap.to(".logo-container-bar-light-2", {
            //         scale: 0,
            //     })

            //     gsap.to(".logo-container-bar-light-2", {
            //         scale: 1,
            //         y: 0,
            //         scrollTrigger: {
            //             trigger: "body",
            //             start: "7000px top",
            //             end: "8300px top",
            //             scrub: true,
            //             markers: false,
            //         }
            //     })

            //     gsap.to(".logo-container-bar .logo-sprites-meteor > span", {
            //         scale: 0,
            //         scrollTrigger: {
            //             trigger: "body",
            //             start: "7000px top",
            //             end: "8300px top",
            //             scrub: true,
            //             markers: false,
            //         }
            //     })

            //     gsap.to(".logo-container-bar .logo-sprites-meteor-flame", {
            //         opacity: 1,
            //         scrollTrigger: {
            //             trigger: "body",
            //             start: "7000px top",
            //             end: "9000px top",
            //             scrub: true,
            //             markers: false,
            //         }
            //     })

            //     gsap.to(".logo-container-bar .logo-sprites-bar > svg", {
            //         opacity: 1,
            //         scrollTrigger: {
            //             trigger: "body",
            //             start: "7000px top",
            //             end: "9000px top",
            //             scrub: true,
            //             markers: false,
            //         }
            //     })

            //     var viewportOffset = document.querySelector(".logo-container .logo-sprites .logo-sprites-bar").getBoundingClientRect();

            //     gsap.to(".logo-container.logo-container-bar", {
            //         x: Math.floor(viewportOffset.left) + 27.7,
            //         y: Math.floor(viewportOffset.top) + 68.346,
            //         scale: 1,
            //         scrollTrigger: {
            //             trigger: "body",
            //             start: "7000px top",
            //             end: "10000px top",
            //             scrub: 1.5,
            //             markers: false,
            //         }
            //     })

            //     gsap.fromTo(".logo-container-bar-light-2", {
            //         scale: 1,
            //     }, {
            //         scale: 0.3,
            //         opacity: 0,
            //         scrollTrigger: {
            //             trigger: "body",
            //             start: "7800px top",
            //             end: "9000px top",
            //             scrub: true,
            //             markers: false,
            //         }
            //     })

            //     gsap.fromTo(".logo-container.logo-container-bar", {
            //         opacity: 1,
            //     }, {
            //         opacity: 0,

            //         scrollTrigger: {
            //             trigger: "body",
            //             start: "10000px top",
            //             end: "10001px top",
            //             scrub: true,
            //             markers: false
            //         }
            //     })

            //     gsap.fromTo(".logo-container-center .logo-sprites-bar", {
            //         opacity: 0,
            //     }, {
            //         opacity: 1,

            //         scrollTrigger: {
            //             trigger: "body",
            //             start: "10000px top",
            //             end: "10001px top",
            //             scrub: true,
            //             markers: false
            //         }
            //     })

            //     gsap.to(".logo-container-center .logo-sprites-bar", {
            //         rotation: -50,
            //     })

            //     gsap.to(".logo-container-center", {
            //         x: "-12.5%",
            //     })

            //     gsap.to(".image-container .image-bg", {
            //         opacity: 1,

            //         scrollTrigger: {
            //             trigger: "body",
            //             start: "10001px top",
            //             end: "10100px top",
            //             scrub: true,
            //             markers: false,
            //         }
            //     })

            //     gsap.to(".logo-container-center .logo-sprites-circle", {
            //         opacity: 1,

            //         scrollTrigger: {
            //             trigger: "body",
            //             start: "10001px top",
            //             end: "10100px top",
            //             scrub: true,
            //             markers: false,
            //         }
            //     })

            //     gsap.fromTo(".logo-container-center .logo-sprites-bar", {
            //         rotation: -50,
            //     }, {
            //         rotation: -80,
            //         scrollTrigger: {
            //             trigger: "body",
            //             start: "10001px top",
            //             end: "10800px top",
            //             scrub: true,
            //             markers: false,
            //         }
            //     })

            //     gsap.fromTo(".logo-container-center .logo-sprites-bar", {
            //         rotation: -80,
            //     }, {
            //         rotation: -60,
            //         scrollTrigger: {
            //             trigger: "body",
            //             start: "10801px top",
            //             end: "11600px top",
            //             scrub: true,
            //             markers: false,
            //         }
            //     })

            //     gsap.fromTo(".logo-container-center .logo-sprites-bar", {
            //         rotation: -60,
            //     }, {
            //         rotation: -70,
            //         scrollTrigger: {
            //             trigger: "body",
            //             start: "11601px top",
            //             end: "11400px top",
            //             scrub: true,
            //             markers: false,
            //         }
            //     })

            //     gsap.fromTo(".logo-container-center .logo-sprites-bar", {
            //         rotation: -70,
            //     }, {
            //         rotation: 80,
            //         scrollTrigger: {
            //             trigger: "body",
            //             start: "11401px top",
            //             end: "12000px top",
            //             scrub: true,
            //             markers: false,
            //         }
            //     })

            //     gsap.fromTo(".logo-container-center .logo-sprites-bar", {
            //         rotation: 80,
            //     }, {
            //         rotation: 50,
            //         scrollTrigger: {
            //             trigger: "body",
            //             start: "12001px top",
            //             end: "12800px top",
            //             scrub: true,
            //             markers: false,
            //         }
            //     })

            //     gsap.fromTo(".logo-container-center", {
            //         x: "-12.5%",
            //     }, {
            //         x: "-50%",
            //         scrollTrigger: {
            //             trigger: "body",
            //             start: "12801px top",
            //             end: "13500px top",
            //             scrub: true,
            //             markers: false,
            //         }
            //     })

            //     gsap.to(".image-container .image-bg", {
            //         x: "0%",
            //         width: 1000,

            //         scrollTrigger: {
            //             trigger: "body",
            //             start: "12801px top",
            //             end: "13500px top",
            //             scrub: true,
            //             markers: false,
            //         }
            //     })

            //     gsap.to(".logo-container-center .logo-title > span", {
            //         opacity: 1,
            //         y: 0,
            //         stagger: 0.2,

            //         scrollTrigger: {
            //             trigger: "body",
            //             start: "12801px top",
            //             end: "13500px top",
            //             scrub: true,
            //             markers: false,
            //         }
            //     })

            //     gsap.to(".image-container .image-bg", {
            //         width: 365
            //     })

            //     gsap.fromTo(".image-container .image-bg", {
            //         width: 1000
            //     }, {
            //         width: "100%",
            //         height: "100%",
            //         y: "-50%",

            //         scrollTrigger: {
            //             trigger: "body",
            //             start: "13501px top",
            //             end: "15000px top",
            //             scrub: true,
            //             markers: false,
            //         }
            //     })

            //     gsap.fromTo(".logo-container.logo-container-center", {
            //         x: "-50%",
            //     }, {
            //         x: 110,
            //         y: 15,
            //         scale: 0.21,
            //         left: 0,
            //         top: 0,
            //         transformOrigin: "left top",

            //         scrollTrigger: {
            //             trigger: "body",
            //             start: "13501px top",
            //             end: "15000px top",
            //             scrub: true,
            //             markers: false,
            //         }
            //     })
            // }

            // // //-- Image Container

            // gsap.to(".image-container .image-header-right", {
            //     x: 0,
            //     y: 0,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: "body",
            //         start: "14500px top",
            //         end: "15000px top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".image-container .image-header-right .right-item", {
            //     scale: 1,
            //     opacity: 1,
            //     stagger: 0.1,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: "body",
            //         start: "14500px top",
            //         end: "15000px top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".image-container .image-header-right .right-item > span", {
            //     scale: 1,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: "body",
            //         start: "15000px top",
            //         end: "16000px top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".image-container .image-body-bg", {
            //     y: 0,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: "body",
            //         start: "14000px top",
            //         end: "15000px top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".logo-sprites-bar > svg > rect", {
            //     fill: "#161620",
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: "body",
            //         start: "14000px top",
            //         end: "14500px top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".image-container .image-body .image-body-page-title > span", {
            //     x: 0,
            //     y: 0,
            //     scale: 1,
            //     opacity: 1,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: "body",
            //         start: "14800px top",
            //         end: "15500px top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".image-container .image-body .image-body-page-title ul", {
            //     x: 0,
            //     y: 0,
            //     scale: 1,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: "body",
            //         start: "14800px top",
            //         end: "15500px top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".image-container .image-body .image-body-page-title ul li", {
            //     y: 0,
            //     opacity: 1,
            //     stagger: 0.1,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: "body",
            //         start: "14800px top",
            //         end: "15500px top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".image-container .image-body .image-body-sidebar .image-body-sidebar-bg", {
            //     x: 0,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: "body",
            //         start: "15500px top",
            //         end: "16000px top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".image-container .image-body .image-body-sidebar ul li svg", {
            //     scale: 1,
            //     stagger: 0.1,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: "body",
            //         start: "15500px top",
            //         end: "16000px top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".image-container .image-body .image-body-sidebar ul li > span", {
            //     x: 0,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: "body",
            //         start: "15500px top",
            //         end: "16000px top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".image-container .image-body .image-body-row .image-body-col .image-body-sidebar-item", {
            //     y: 0,
            //     opacity: 1,
            //     stagger: 0.1,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: "body",
            //         start: "16000px top",
            //         end: "16500px top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // // //-

            // gsap.to(".image-container .image-body .image-body-col:nth-child(2) .body-content-header .body-content-header-title > span", {
            //     y: 0,
            //     opacity: 1,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: "body",
            //         start: "16500px top",
            //         end: "17500px top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".image-container .image-body .image-body-col:nth-child(2) .body-content-header .body-content-header-title > p", {
            //     y: 0,
            //     opacity: 1,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: "body",
            //         start: "16500px top",
            //         end: "17500px top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".image-container .image-body .image-body-row .image-body-col:nth-child(2) .body-content-header .body-content-header-buttons .button", {
            //     x: 0,
            //     opacity: 1,
            //     stagger: 0.1,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: "body",
            //         start: "16500px top",
            //         end: "17500px top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".image-container .image-body .image-body-row .image-body-col:nth-child(2) .body-content-charts .chart-item", {
            //     y: 0,
            //     opacity: 1,
            //     stagger: 0.1,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: "body",
            //         start: "17500px top",
            //         end: "18500px top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".image-container .image-body .image-body-col:nth-child(2) .body-content-charts .chart-item .item-data", {
            //     x: 0,
            //     stagger: 0.1,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: "body",
            //         start: "17500px top",
            //         end: "18500px top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".image-container .image-body .image-body-col:nth-child(2) .body-content-charts .chart-item .item-data svg", {
            //     x: 0,
            //     stagger: 0.1,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: "body",
            //         start: "17500px top",
            //         end: "18500px top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // // //--

            // gsap.to(".body-content-overview-bg", {
            //     y: 0,
            //     opacity: 1,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: "body",
            //         start: "18500px top",
            //         end: "19500px top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".body-content-overview .overview-header", {
            //     y: 0,
            //     opacity: 1,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: "body",
            //         start: "18500px top",
            //         end: "19500px top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".body-content-overview .overview-chart .chart-value > span", {
            //     y: 0,
            //     opacity: 1,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: "body",
            //         start: "18500px top",
            //         end: "19500px top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".body-content-overview .overview-sizer", {
            //     width: "100%",
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: "body",
            //         start: "18500px top",
            //         end: "19500px top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".body-content-overview .overview-sizer > span", {
            //     width: "50%",
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: "body",
            //         start: "18500px top",
            //         end: "19500px top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".body-content-overview .overview-sizer > span > span", {
            //     scale: 1,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: "body",
            //         start: "18500px top",
            //         end: "19500px top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".body-content-overview .overview-chart .chart-item .item-value .line span", {
            //     borderWidth: 1,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: "body",
            //         start: "18500px top",
            //         end: "19500px top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".body-content-overview .overview-chart .chart-item .item-value .line span", {
            //     width: "100%",
            //     stagger: 0.1,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: "body",
            //         start: "18500px top",
            //         end: "19500px top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".body-content-overview .overview-chart .chart-item .item-value .value-svg svg", {
            //     strokeDashoffset: 0,
            //     stagger: 0.1,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: "body",
            //         start: "18500px top",
            //         end: "19500px top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".body-content-overview .overview-chart .chart-item .item-time-value .line-row", {
            //     y: 0,
            //     opacity: 1,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: "body",
            //         start: "18500px top",
            //         end: "19500px top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".body-content-overview .overview-chart .chart-item .item-time-value .value-row", {
            //     y: 0,
            //     opacity: 1,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: "body",
            //         start: "18500px top",
            //         end: "19500px top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // // //--

            // gsap.to(".image-menu", {
            //     y: 0,
            //     opacity: 1,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: "body",
            //         start: "19500px top",
            //         end: "20500px top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // // //--


            // // ScrollTrigger.create({
            // //     trigger: "body",
            // //     pin: ".sticky-container",
            // //     start: "top top",
            // //     end: "top top",
            // //     endTrigger: ".home-cards-list",
            // // });

            // const homeCardElement = $(".home-cards-list .home-cards-list-row .home-cards-list-row-item:nth-child(1)");
            // const homeCardElementOffset = homeCardElement.length ? document.querySelector(".home-cards-list .home-cards-list-row .home-cards-list-row-item:nth-child(1)").getBoundingClientRect() : 0;

            // gsap.to(".card-container", {
            //     width: homeCardElement.width(),
            //     height: homeCardElement.height(),
            //     background: "rgba(255, 255, 255, 0.07)",
            //     borderRadius: 45,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: ".home-cards-list",
            //         start: "top-=500px bottom",
            //         end: "top top",
            //         endTrigger: ".home-cards-list",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".card-container", {
            //     x: homeCardElementOffset.x,
            //     y: 120,
            //     top: "0%",
            //     left: 0,
            //     yPercent: 0,
            //     xPercent: 0,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: ".home-cards-list",
            //         start: "top bottom",
            //         end: "top top",
            //         endTrigger: ".home-cards-list",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".image-container", {
            //     width: 1500,
            //     height: 1000,
            //     x: 60,
            //     y: -20,
            //     scale: 0.45,
            //     transformOrigin: "bottom left",
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: ".home-cards-list",
            //         start: "top bottom",
            //         end: "top top",
            //         endTrigger: ".home-cards-list",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".home-cards-list .home-cards-list-row .home-cards-list-row-item:nth-child(1)", {
            //     autoAlpha: 1,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: ".home-cards-list",
            //         start: "top top",
            //         end: "top top",
            //         endTrigger: ".home-cards-list",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // //-- Image Container

            // //-- Home Card List

            // gsap.to(".home-cards-list .list-orange-light", {
            //     scale: 1,
            //     opacity: 0.2,
            //     ease: easeValue,
            //     duration: 0.5,

            //     scrollTrigger: {
            //         trigger: ".home-cards-list",
            //         start: "top top",
            //         end: "bottom top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".home-cards-list .list-green-light", {
            //     scale: 1,
            //     opacity: 0.15,
            //     ease: easeValue,
            //     duration: 0.5,

            //     scrollTrigger: {
            //         trigger: ".home-cards-list",
            //         start: "top top",
            //         end: "bottom top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".home-cards-list .list-blue-light", {
            //     scale: 1,
            //     opacity: 0.1,
            //     ease: easeValue,
            //     duration: 0.5,

            //     scrollTrigger: {
            //         trigger: ".home-cards-list",
            //         start: "top top",
            //         end: "bottom top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".home-cards-list .list-line", {
            //     y: 0,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: ".home-cards-list",
            //         start: "top top",
            //         end: "bottom top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".home-cards-list .list-line svg", {
            //     y: 0,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: ".home-cards-list",
            //         start: "top top",
            //         end: "bottom top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".home-cards-list .home-cards-list-row .home-cards-list-row-item:nth-child(2)", {
            //     y: 0,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: ".home-cards-list .home-cards-list-row .home-cards-list-row-item:nth-child(2)",
            //         start: "top-=120 bottom",
            //         end: "top-=80 top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".home-cards-list .home-cards-list-row .home-cards-list-row-item:nth-child(2) .item-green-circle", {
            //     scale: 1,
            //     opacity: 0.14,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: ".home-cards-list .home-cards-list-row .home-cards-list-row-item:nth-child(2)",
            //         start: "top-=70 top",
            //         end: "top-=50 top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".home-cards-list .home-cards-list-row .home-cards-list-row-item:nth-child(3)", {
            //     y: 0,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: ".home-cards-list .home-cards-list-row .home-cards-list-row-item:nth-child(3)",
            //         start: "top bottom",
            //         end: "top+=100 top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.fromTo(".home-cards-list .home-cards-list-row .home-cards-list-row-item:nth-child(3)", {
            //     opacity: 0,
            // }, {
            //     y: 0,
            //     opacity: 1,
            //     ease: easeValue,

            //     scrollTrigger: {
            //         trigger: ".home-cards-list .home-cards-list-row .home-cards-list-row-item:nth-child(3)",
            //         start: "top bottom",
            //         end: "top+=40 top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            // gsap.to(".home-cards-list .home-cards-list-row .home-cards-list-row-item:nth-child(4)", {
            //     y: 0,
            //     ease: easeValue,
            //     duration: 0.5,

            //     scrollTrigger: {
            //         trigger: ".home-cards-list .home-cards-list-row .home-cards-list-row-item:nth-child(4)",
            //         start: "top bottom",
            //         end: "bottom top",
            //         scrub: 1,
            //         markers: false,
            //     }
            // })

            //-- Home Card List

            //-- Home Pricing
            gsap.to(".home-pricing .s-container .home-pricing-table-row .home-pricing-table-item", {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 1,
                ease: easeValue,
                delay: 0.5,

                scrollTrigger: {
                    trigger: ".home-pricing",
                    start: "top center",
                }
            })

            gsap.to(".home-pricing .s-container .home-pricing-header .switch-plan", {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: easeValue,
                delay: 0.45,

                scrollTrigger: {
                    trigger: ".home-pricing",
                    start: "top center",
                }
            })

            gsap.to(".home-pricing .s-container .home-pricing-header p", {
                y: 0,
                opacity: 0.5,
                duration: 1,
                ease: easeValue,
                delay: 0.4,

                scrollTrigger: {
                    trigger: ".home-pricing",
                    start: "top center",
                }
            })

            gsap.to(".home-pricing .s-container .home-pricing-header .home-pricing-title > span > span svg circle", {
                opacity: 1,
                duration: 1,
                ease: easeValue,
                delay: 0.3,

                scrollTrigger: {
                    trigger: ".home-pricing",
                    start: "top center",
                }
            })

            gsap.to(".home-pricing .s-container .home-pricing-header .home-pricing-title > span > span svg ellipse", {
                strokeDashoffset: 0,
                duration: 2,
                ease: easeValue,
                delay: 0.1,

                scrollTrigger: {
                    trigger: ".home-pricing",
                    start: "top center",
                }
            })

            gsap.to(".home-pricing .s-container .home-pricing-header .home-pricing-title > span", {
                opacity: 1,
                x: 0,
                stagger: 0.1,
                duration: 1,
                ease: easeValue,

                scrollTrigger: {
                    trigger: ".home-pricing",
                    start: "top center",
                }
            })

            gsap.to(".home-pricing .s-container .home-pricing-header .home-pricing-title .img", {
                scale: 1,
                duration: 1,
                delay: 0.1,
                ease: easeValue,

                scrollTrigger: {
                    trigger: ".home-pricing",
                    start: "top center",
                }
            })

            //-- Home Reviews
            gsap.to(".home-reviews .home-reviews-content .home-reviews-title", {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: easeValue,

                scrollTrigger: {
                    trigger: ".home-pricing",
                    start: "bottom bottom-=500",
                }
            })

            gsap.to(".home-reviews .home-reviews-content p", {
                x: 0,
                opacity: 1,
                duration: 1,
                delay: 0.1,
                ease: easeValue,

                scrollTrigger: {
                    trigger: ".home-pricing",
                    start: "bottom bottom-=500",
                }
            })

            gsap.to(".home-reviews .home-reviews-content .slide-btn", {
                x: 0,
                opacity: 1,
                duration: 1,
                delay: 0.2,
                ease: easeValue,

                scrollTrigger: {
                    trigger: ".home-pricing",
                    start: "bottom bottom-=500",
                }
            })

            gsap.to(".home-reviews .home-reviews-slider .home-reviews-slider-item", {
                x: 0,
                opacity: 1,
                stagger: 0.1,
                ease: easeValue,
                duration: 1,

                scrollTrigger: {
                    trigger: ".home-pricing",
                    start: "bottom bottom-=500",
                }
            })

            //-- Home FAQ
            gsap.fromTo(".home-faq .faq-title:nth-child(1)", {
                xPercent: -50,
            }, {
                xPercent: 0,

                scrollTrigger: {
                    trigger: ".home-faq",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                }
            })

            gsap.to(".home-faq .faq-title:nth-child(2)", {
                xPercent: -50,

                scrollTrigger: {
                    trigger: ".home-faq",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                }
            })

            gsap.to(".home-faq .faq-container .faq-content", {
                y: 0,
                opacity: 1,

                scrollTrigger: {
                    trigger: ".home-faq .faq-container",
                    start: "top center",
                }
            })

            gsap.to(".home-faq .faq-container .faq-item", {
                y: 0,
                opacity: 1,
                stagger: 0.1,

                scrollTrigger: {
                    trigger: ".home-faq .faq-container",
                    start: "top center",
                }
            })
        }, 3000);
    }
}

export { homeReviewsAni }