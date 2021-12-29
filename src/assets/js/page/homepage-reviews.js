const homeReviewsLength = $(".home-reviews-slider .swiper-slide").length

new Swiper('.home-reviews .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 24,
    autoplay: {
        delay: 5000
    },
    speed: 800,
    loop: homeReviewsLength === 1 ? false : true,
    navigation: {
        nextEl: '.home-reviews .slide-button-next',
        prevEl: '.home-reviews .slide-button-prev',
    },
    breakpoints: {
        992: {
            slidesPerView: 2,
            spaceBetween: 60,
        },
    },
});