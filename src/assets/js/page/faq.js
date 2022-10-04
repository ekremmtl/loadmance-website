import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function faqPage() {
    $(".faq-container .faq-item .item-header").click(function () {
        $(this).parent().toggleClass("active")
        $(this).next(".item-body").slideToggle()

        $(this).parent().siblings().removeClass("active")
        $(this).parent().siblings().find(".item-body").slideUp()
    });
}

export { faqPage }