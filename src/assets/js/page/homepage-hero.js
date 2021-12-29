import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

gsap.to(".home-hero .home-hero-content", {
    x: "-80%",
    y: "80%",
    scale: 1.3,
    autoAlpha: 0,
    filter: "blur(3px)",

    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "1000px top",
        scrub: true,
        markers: false,
    }
})

gsap.to(".home-hero .home-hero-content h1", {
    x: -80,
    z: 40,
    autoAlpha: 0,

    scrollTrigger: {
        trigger: "body",
        start: "top+=20px top",
        end: "1000px top",
        scrub: true,
        markers: false,
    }
})

gsap.to(".home-hero .home-hero-content p", {
    x: -30,
    y: -50,
    z: 10,
    autoAlpha: 0,

    scrollTrigger: {
        trigger: "body",
        start: "top+=30px top",
        end: "1000px top",
        scrub: true,
        markers: false,
    }
})

gsap.to(".home-hero .home-hero-content .content-buttons", {
    x: -40,
    y: -60,
    z: -40,
    autoAlpha: 0,

    scrollTrigger: {
        trigger: "body",
        start: "top+=40px top",
        end: "1000px top",
        scrub: true,
        markers: false,
    }
})

gsap.to(".home-hero .home-hero-content > span", {
    x: -20,
    y: -40,
    z: -70,
    autoAlpha: 0,

    scrollTrigger: {
        trigger: "body",
        start: "top+=50px top",
        end: "1000px top",
        scrub: true,
        markers: false,
    }
})

gsap.to(".home-hero .home-hero-content .scroll-down", {
    z: -200,
    autoAlpha: 0,

    scrollTrigger: {
        trigger: "body",
        start: "top+=50px top",
        end: "1000px top",
        scrub: true,
        markers: false,
    }
})

var cardOffset = document.querySelector(".home-cards-list .home-cards-list-row .home-cards-list-row-item:nth-child(1)").getBoundingClientRect();
console.log(cardOffset);