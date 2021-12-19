import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

// Animation
let defaultEase = "circ.inOut";

function blogListTransition() {
    $(".blog-list .blog-list-content-container .blog-list-item").click(function () {
        setTimeout(() => {
            blogListTransition2($(this).index() + 1, $(this).parent().index() + 1)
        }, 100);
    });
}

function blogListTransition2(itemIndex, parentIndex) {
    setTimeout(() => {
        // section.blog-list
        // height: 100vh;
        // position: fixed;
        // top: 120px;

        let tabContent = $(".blog-list .blog-list-content-container .tab-content:nth-child(" + parentIndex + ")")
        let tabContentItem = $(".blog-list .blog-list-content-container .tab-content:nth-child(" + parentIndex + ") .blog-list-item:nth-child(" + itemIndex + ")");

        gsap.to(window, { duration: 0.8, ease: defaultEase, scrollTo: tabContentItem.offset().top })

        setTimeout(() => {
            // 0, 144
            // -200, 144
            // -400, 144

            $(".blog-list .blog-list-content-container").css({
                position: "fixed",
                top: 0,
                left: "184px",
                right: "50px",
                height: "100vh",
                marginTop: 0,
            });

            setTimeout(() => {
                gsap.to(window, { duration: 0.6, delay: 0.4, ease: defaultEase, scrollTo: 0 })

                gsap.to($(".blog-list .blog-list-content-container"), {
                    y: 144,
                    duration: 0.6,
                    delay: 0.4,
                    ease: defaultEase,
                })

                // List Title
                let itemTitle = $(".blog-list .blog-list-content-container .tab-content:nth-child(" + parentIndex + ") .blog-list-item:nth-child(" + itemIndex + ") .item-title");
                let titleText = itemTitle.find("h3").text().trim()
                let titleSplit = titleText.split(" ")
                let titleOffset = itemTitle.offset()

                itemTitle.append('<h3 class="split-title"></h3>')
                for (let i = 0; i < titleSplit.length; i++) {
                    itemTitle.find(".split-title").append("<span>" + titleSplit[i] + "</span>")
                }
                itemTitle.find("h3:first-child").remove()

                // Title Absolute
                itemTitle.find(".split-title").css("height", itemTitle.find(".split-title > span:first-child").height() + "px");

                itemTitle.find(".split-title > span").each(function () {
                    let spanOffset = $(this).offset()

                    setTimeout(() => {
                        $(this).css({
                            position: "absolute",
                            top: spanOffset.top - $(this).parent().offset().top,
                            left: spanOffset.left - $(this).parent().offset().left
                        });
                    }, 100);
                });

                // Detail Title
                let detailTitle = $(".blog-detail .blog-row .blog-col .blog-title");
                let detailTitleText = detailTitle.find("h2 > span:nth-child(2)").text().trim();
                let detailTitleTextSplit = detailTitleText.split(" ");
                let detailTitleOffset = detailTitle.offset();

                detailTitle.append('<h2 class="split-title"><span>✦</span></h2>')
                for (let i = 0; i < detailTitleTextSplit.length; i++) {
                    detailTitle.find(".split-title").append("<span>" + detailTitleTextSplit[i] + "</span>")
                }
                detailTitle.find("h2:first-child").remove()

                // Animation
                setTimeout(() => {
                    gsap.to(itemTitle, {
                        width: parseFloat(detailTitle.width()),
                        x: 38,
                        // y: - titleOffset.top + detailTitleOffset.top + 7,
                        duration: 0.6,
                        ease: defaultEase,
                    })

                    gsap.to(itemTitle.find(".split-title"), {
                        scale: 1.432,
                        color: "#17256F",
                        duration: 0.6,
                        ease: defaultEase,
                    })

                    let itemSpanWidth = 0;
                    let itemSpanWidthWrapper = 0;
                    let itemY = 0;

                    let detailSpanWidth = []

                    detailTitle.find(".split-title > span").each(function (index) {
                        if (index != 0) {
                            detailSpanWidth.push($(this).width())
                        }
                    });

                    itemTitle.find(".split-title > span").each(function (index) {
                        let currentThis = $(this);
                        let currentWidth = $(this).width()

                        // Wrap
                        itemSpanWidthWrapper += parseFloat(detailSpanWidth[index] + 6.5);

                        if (itemSpanWidthWrapper > parseFloat(detailTitle.width())) {
                            itemSpanWidthWrapper = parseFloat(detailSpanWidth[index] + 6.5);

                            setTimeout(() => {
                                itemSpanWidthWrapper += parseFloat(detailSpanWidth[index] + 6.5);
                            }, 100);

                            itemY += 33
                            itemSpanWidth = -26;
                        }

                        gsap.to(currentThis, {
                            left: 0,
                            top: 0,
                            x: itemSpanWidth,
                            y: itemY,
                            duration: 0.6,
                            ease: defaultEase,
                        })

                        itemSpanWidth += parseFloat(currentWidth + parseFloat(4.5))
                    });
                }, 500);
            }, 500);
        }, 1000);

        // Title
        gsap.to(".blog-list .blog-list-title", {
            autoAlpha: 0,
            duration: 0.6,
            ease: defaultEase,
        })

        gsap.to(".blog-list .blog-list-title span", {
            scale: 0,
            duration: 0.6,
            ease: defaultEase,
        })

        // Categorie
        gsap.to(".blog-list .blog-categories .categorie-item", {
            y: -20,
            autoAlpha: 0,
            stagger: 0.1,
            duration: 0.4,
            ease: defaultEase,
        })

        // Other Tab Item
        gsap.to(tabContentItem.siblings(), {
            autoAlpha: 0,
            duration: 0.6,
            ease: defaultEase,
        })
     
        // Item Line
        gsap.to(tabContentItem.find(".item-line"), {
            width: 0,
            duration: 0.6,
            ease: defaultEase,
        })

        setTimeout(() => {
            $("main .main-content .barba-container[data-barba-namespace=blog-list-section]").remove();
        }, 2000000000);
    }, 100);
}

function blogListAnimation() {
    setTimeout(() => {
        // Title
        gsap.to(".blog-list .blog-list-title", {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: defaultEase,
        })

        gsap.to(".blog-list .blog-list-title span", {
            scale: 1,
            delay: 0.1,
            duration: 0.8,
            ease: defaultEase,
        })

        // Categorie
        gsap.to(".blog-list .blog-categories .categorie-item", {
            y: 0,
            autoAlpha: 1,
            delay: 0.3,
            stagger: 0.1,
            duration: 0.4,
            ease: defaultEase,
        })

        // Tab Content
        $(".blog-list .blog-list-item").each(function () {
            gsap.to($(this).find(".line-1"), {
                width: "100%",
                duration: 0.8,
                delay: 0.2,
                ease: defaultEase,
                scrollTrigger: {
                    start: $(this).offset().top + " bottom-=80",
                }
            })

            gsap.to($(this).find(".line-2"), {
                width: "100%",
                duration: 0.8,
                delay: 0.3,
                ease: defaultEase,
                scrollTrigger: {
                    start: $(this).offset().top + " bottom-=80",
                }
            })

            gsap.to($(this).find(".item-title"), {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                delay: 0.3,
                ease: defaultEase,
                scrollTrigger: {
                    start: $(this).offset().top + " bottom-=80",
                }
            })

            gsap.to($(this).find(".item-date"), {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                delay: 0.4,
                ease: defaultEase,
                scrollTrigger: {
                    start: $(this).offset().top + " bottom-=80",
                }
            })

            gsap.to($(this).find(".item-dr-img"), {
                autoAlpha: 1,
                x: 0,
                duration: 0.8,
                delay: 0.3,
                ease: defaultEase,
                scrollTrigger: {
                    start: $(this).offset().top + " bottom-=80",
                }
            })

            gsap.to($(this).find(".item-dr-title > span"), {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                delay: 0.4,
                ease: defaultEase,
                scrollTrigger: {
                    start: $(this).offset().top + " bottom-=80",
                }
            })

            gsap.to($(this).find(".item-dr-title > h4"), {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                delay: 0.5,
                ease: defaultEase,
                scrollTrigger: {
                    start: $(this).offset().top + " bottom-=80",
                }
            })

            gsap.to($(this).find(".item-dr-text"), {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                delay: 0.6,
                ease: defaultEase,
                scrollTrigger: {
                    start: $(this).offset().top + " bottom-=80",
                }
            })
        });
    }, 800);
}

// if ($(window).width() >= 1200) {
//     loadAnimation();
// }

// $(window).resize(function () {
//     if ($(window).width() >= 1200) {
//         loadAnimation();
//     }
// });

// Categorie
function blogList() {
    setTimeout(() => {
        $(".main-content-container").css("height", ($(".barba-container").height()) + "px")
    }, 100);

    //--

    let categorieSlide = new Swiper('.blog-categories .swiper', {
        slidesPerView: "auto",
        spaceBetween: 20,
        freeMode: true,
    });

    categorieSlide.on("transitionEnd", function () {
        let itemIndex = $(".blog-list .blog-categories .swiper-slide-active").index();
        $(".blog-list .blog-categories .swiper-slide-active .categorie-item").addClass("active")
        $(".blog-list .blog-categories .swiper-slide-active").siblings().children().removeClass("active")

        $(".blog-list .blog-list-content-container .tab-content").each(function (index) {
            if (itemIndex == index) {
                gsap.to($(this).parent(), {
                    height: $(this).height(),
                    duration: 0.6,
                    ease: defaultEase,
                })

                gsap.to($(this), {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.6,
                    ease: defaultEase,
                })
            } else {
                gsap.to($(this), {
                    y: 64,
                    autoAlpha: 0,
                    duration: 0.1,
                    ease: defaultEase,
                })
            }
        });
    })

    // Tab Content
    let firstItemHeight = $(".blog-list .blog-list-content-container .tab-content:first-child").height();
    $(".blog-list .blog-list-content-container").css("height", firstItemHeight + "px")

    $(".blog-list .blog-categories .categorie-item").click(function () {
        let itemIndex = $(this).parent().index();

        $(".blog-list .blog-categories .categorie-item").addClass("pointer-none");
        setTimeout(() => {
            $(".blog-list .blog-categories .categorie-item").removeClass("pointer-none");
        }, 700);

        $(this).addClass("active").parent().siblings().children().removeClass("active")

        $(".blog-list .blog-list-content-container .tab-content").each(function (index) {
            if (itemIndex == index) {
                gsap.to($(this).parent(), {
                    height: $(this).height(),
                    duration: 0.6,
                    ease: defaultEase,
                })

                gsap.to($(this), {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.6,
                    ease: defaultEase,
                })
            } else {
                gsap.to($(this), {
                    y: 64,
                    autoAlpha: 0,
                    duration: 0.1,
                    ease: defaultEase,
                })
            }
        });
    });
}

export { blogListTransition, blogListTransition2, blogListAnimation, blogList }