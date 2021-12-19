import gsap from 'gsap';
let defaultEase = "circ.inOut";

// Sidebar
import { sidebarCloseAnimation, buttonMenuCloseAnimation } from './layout/sidebar'

// Blog
import { blogListTransition, blogListTransition2, blogListAnimation, blogList } from './page/blog-list'
import { blogDetailAnimation } from './page/blog-detail'

function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.set(".loading-screen", { left: "-100%" });
}

$(function () {
    barba.init({
        sync: true,

        transitions: [
            {
                async leave(data) {
                    // const done = this.async();

                    // let parser = new DOMParser();
                    // let dom = parser.parseFromString(data.current.html, 'text/html');
                    // let nextProjects = dom.querySelector('.barba-container');
                    // console.log(data.next.html);

                    // setTimeout(() => {
                        // document.querySelector('.main-content-container').prepend(nextProjects);
                    // }, 10);

                    if (data.current.namespace == "blog-list-section") {
                        // setTimeout(() => {
                        // gsap.to(".blog-list .blog-list-content-container .tab-content:nth-child(2)", {
                        //     autoAlpha: 1,
                        //     y: 0,
                        //     duration: 0,
                        //     ease: "none",
                        // })

                        // gsap.to(".blog-list .blog-list-content-container .tab-content:nth-child(2) .blog-list-item .item-title", {
                        //     autoAlpha: 1,
                        //     y: 0,
                        //     duration: 0,
                        //     ease: "none",
                        // })
                        // }, 20);
                    }

                    // await delay(100000);
                    // done();
                },

                async afterEnter(data) {
                    const done = this.async();

                    console.log(data.current.namespace);
                    setTimeout(() => {
                        blogDetailAnimation(true)
                    }, 4000);

                    await delay(5000);
                    done();
                },

                async enter(data) {
                    // Sidebar  
                    buttonMenuCloseAnimation($(".main-sidebar .main-sidebar-button"))
                    sidebarCloseAnimation()

                    // Blog List
                    if (data.next.namespace == "blog-list-section") {
                        blogList()
                        blogListAnimation()
                    }

                    // Blog Detail
                    if (data.next.namespace == "blog-detail-section") {
                        blogListTransition()

                        // setTimeout(() => {
                            blogDetailAnimation(true)
                        // }, 300000000);
                    }
                },

                async once(data) {
                    // Blog List
                    if (data.next.namespace == "blog-list-section") {
                        blogList()
                        blogListAnimation()
                    }

                    blogListTransition()

                    // Blog Detail
                    blogDetailAnimation(false)
                },
            },
        ],
    });
});
