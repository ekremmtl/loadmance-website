import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function homeFaq() {
    $(".home-faq .faq-container .faq-item-container .faq-item .item-header").click(function () {
        $(this).parent().toggleClass("active")
        $(this).next(".item-body").slideToggle()
    });
}

export { homeFaq }