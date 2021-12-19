import gsap from 'gsap';

// Animation
let defaultEase = "circ.inOut";

function loadAnimation() {
    // Button
    $(".main-sidebar .main-sidebar-button").addClass("pointer-none");
    setTimeout(() => {
        $(".main-sidebar .main-sidebar-button").removeClass("pointer-none");
    }, 2000);

    setTimeout(() => {
        // Background
        gsap.to(".main-sidebar", {
            duration: 0.6,
            background: "#F7FBFC",
            ease: defaultEase
        })

        // Line
        gsap.to(".main-sidebar .line-1", {
            height: "100%",
            duration: 1,
            ease: defaultEase
        })

        // Button
        gsap.to(".main-sidebar .main-sidebar-button > span", {
            width: "100%",
            duration: 1,
            ease: defaultEase
        })

        gsap.to(".main-sidebar .main-sidebar-button > span:nth-child(2)", {
            y: 0,
            delay: 0.7,
            duration: 1,
            ease: defaultEase
        })

        // Other Link
        gsap.to(".main-sidebar .main-sidebar-other-link .other-link-line", {
            width: "100%",
            delay: 0.3,
            duration: 1,
            ease: defaultEase
        })

        gsap.to(".main-sidebar .main-sidebar-other-link .other-link-arrow", {
            x: 0,
            y: 0,
            delay: 0.3,
            duration: 1.5,
            ease: defaultEase
        })

        gsap.to(".main-sidebar .main-sidebar-other-link .other-link-arrow .arrow", {
            x: 0,
            y: 0,
            delay: 0.3,
            duration: 1.5,
            ease: defaultEase
        })

        gsap.to(".main-sidebar .main-sidebar-other-link > span", {
            x: 0,
            delay: 0.5,
            duration: 1.5,
            ease: defaultEase
        })

        gsap.to(".main-sidebar .main-sidebar-other-link > span > span", {
            x: 0,
            delay: 0.5,
            duration: 1.5,
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

// Sidebar
let menuOpenCheck = false;

// Sidebar Open
function sidebarOpenAnimation() {
    // Sidebar
    gsap.to(".main-sidebar", {
        flex: "0 0 324px",
        marginRight: -190,
        duration: 1,
        ease: defaultEase
    })

    // Content
    gsap.to(".main-content-container", {
        left: 190,
        duration: 1,
        ease: defaultEase
    })

    gsap.to(".service-detail-sticky", {
        left: 324,
        duration: 1,
        ease: defaultEase
    })

    // Other Link
    gsap.to(".main-sidebar .main-sidebar-other-link .other-link-line", {
        width: 0,
        duration: 1,
        ease: defaultEase
    })

    gsap.to(".main-sidebar .main-sidebar-other-link > span", {
        x: "-100%",
        duration: 1,
        ease: defaultEase
    })

    gsap.to(".main-sidebar .main-sidebar-other-link > span > span", {
        x: "120%",
        duration: 1,
        ease: defaultEase
    })

    gsap.to(".main-sidebar .main-sidebar-other-link .other-link-arrow", {
        x: "-100%",
        duration: 1,
        ease: defaultEase
    })

    gsap.to(".main-sidebar .main-sidebar-other-link .other-link-arrow .arrow", {
        x: "100%",
        duration: 1,
        ease: defaultEase
    })
}

// Sidebar Close
function sidebarCloseAnimation() {
    // Sidebar
    gsap.to(".main-sidebar", {
        flex: "0 0 134px",
        marginRight: 0,
        duration: 1,
        ease: defaultEase
    })

    // Content
    gsap.to(".main-content-container", {
        left: 0,
        duration: 1,
        ease: defaultEase
    })

    gsap.to(".service-detail-sticky", {
        left: 134,
        duration: 1,
        ease: defaultEase
    })

    // Other Link
    gsap.to(".main-sidebar .main-sidebar-other-link .other-link-line", {
        width: "100%",
        duration: 1,
        ease: defaultEase
    })

    gsap.to(".main-sidebar .main-sidebar-other-link > span", {
        x: "0%",
        duration: 1,
        ease: defaultEase
    })

    gsap.to(".main-sidebar .main-sidebar-other-link > span > span", {
        x: "0%",
        duration: 1,
        ease: defaultEase
    })

    gsap.to(".main-sidebar .main-sidebar-other-link .other-link-arrow", {
        x: "0%",
        duration: 1,
        ease: defaultEase
    })

    gsap.to(".main-sidebar .main-sidebar-other-link .other-link-arrow .arrow", {
        x: "0%",
        duration: 1,
        ease: defaultEase
    })
}

// Sidebar Mobile Open
function sidebarMobileOpenAnimation() {
    // Sidebar
    gsap.to("main > .main-sidebar", {
        x: 0,
        duration: 1,
        ease: defaultEase
    })

    // Overlay
    gsap.to(".main-sidebar-overlay", {
        autoAlpha: 1,
        duration: 1,
        ease: defaultEase
    })
}

// Sidebar Mobile Close
function sidebarMobileCloseAnimation() {
    // Sidebar
    gsap.to("main > .main-sidebar", {
        x: "-100%",
        duration: 1,
        ease: defaultEase
    })

    // Overlay
    gsap.to(".main-sidebar-overlay", {
        autoAlpha: 0,
        duration: 1,
        ease: defaultEase
    })
}

// Button & Menu Open
function buttonMenuOpenAnimation(item, mobile) {
    // Button
    if (mobile == "mobile") {
        gsap.to(item.find("span:nth-child(1)"), {
            y: 4,
            duration: 0.6,
            ease: defaultEase
        })

        gsap.to(item.find("span:nth-child(2)"), {
            y: -5,
            duration: 0.6,
            ease: defaultEase
        })
    } else {
        gsap.to(item.find("span:nth-child(1)"), {
            y: 0,
            duration: 0.6,
            ease: defaultEase
        })

        gsap.to(item.find("span:nth-child(2)"), {
            y: -9,
            duration: 0.6,
            ease: defaultEase
        })
    }


    // Menu
    gsap.to(".main-sidebar .main-sidebar-menu ul li", {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        stagger: 0.1,
        ease: defaultEase
    })
}

// Button & Menu Close
function buttonMenuCloseAnimation(item) {
    // Button
    gsap.to(item.find("span:nth-child(1)"), {
        y: 0,
        duration: 0.6,
        ease: defaultEase
    })

    gsap.to(item.find("span:nth-child(2)"), {
        y: 0,
        duration: 0.6,
        ease: defaultEase
    })

    // Menu
    gsap.to(".main-sidebar .main-sidebar-menu ul li", {
        y: -24,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: defaultEase
    })

    gsap.to(".main-sidebar .main-sidebar-menu ul li", {
        y: 24,
        autoAlpha: 0,
        delay: 0.7,
        duration: 0.1,
        stagger: 0.1,
        ease: "none"
    })
}

// Overlay Click
$(".main-sidebar-overlay").click(function () {
    menuOpenCheck = false;

    sidebarMobileCloseAnimation()
    buttonMenuCloseAnimation($(".main-sidebar .main-sidebar-button"))
});

// Button Click
$(".main-sidebar .main-sidebar-button").click(function () {
    menuOpenCheck = !menuOpenCheck;

    $(this).addClass("pointer-none")
    setTimeout(() => {
        $(this).removeClass("pointer-none")
    }, 1000);

    if (menuOpenCheck) {
        // Animations
        if ($(window).width() >= 991) {
            buttonMenuOpenAnimation($(this))
            sidebarOpenAnimation()
        } else {
            buttonMenuOpenAnimation($(this), "mobile")
            sidebarMobileOpenAnimation()
        }

        $(window).resize(function () {
            if ($(window).width() >= 991) {
                sidebarOpenAnimation();
            } else {
                sidebarMobileOpenAnimation();
            }
        });
    } else {
        buttonMenuCloseAnimation($(this))

        // Animations
        if ($(window).width() >= 991) {
            sidebarCloseAnimation()
        } else {
            sidebarMobileCloseAnimation();
        }

        $(window).resize(function () {
            if ($(window).width() >= 991) {
                sidebarCloseAnimation();
            } else {
                sidebarMobileCloseAnimation();
            }
        });
    }
});

// Button Hover
$(".main-sidebar .main-sidebar-button").hover(function () {
    gsap.to($(this).find("span:nth-child(1)"), {
        y: -6,
        duration: 0.6,
        ease: defaultEase
    })

    gsap.to($(this).find("span:nth-child(2)"), {
        y: 6,
        duration: 0.6,
        ease: defaultEase
    })
}, function () {
    gsap.to($(this).find("span:nth-child(1)"), {
        y: 0,
        duration: 0.6,
        ease: defaultEase
    })

    if (menuOpenCheck) {
        gsap.to($(this).find("span:nth-child(2)"), {
            y: -9,
            duration: 0.6,
            ease: defaultEase
        })
    } else {
        gsap.to($(this).find("span:nth-child(2)"), {
            y: 0,
            duration: 0.6,
            ease: defaultEase
        })
    }
});

// Other Link Hover
$(".main-sidebar .main-sidebar-other-link").hover(function () {
    gsap.to($(this).find(".arrow svg path"), {
        fill: "#fea0a1",
        duration: 0.1,
    })

    gsap.to($(this).children("span"), {
        color: "#fea0a1",
        duration: 0.1,
    })
}, function () {
    gsap.to($(this).find(".arrow svg path"), {
        fill: "#162A4C",
        duration: 0.1,
    })

    gsap.to($(this).children("span"), {
        color: "#162A4C",
        duration: 0.1,
    })
});

export { sidebarCloseAnimation, buttonMenuCloseAnimation }