// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true, // Enable continuous loop mode
    slidesPerView: 1, // Show one slide at a time

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 3,
            spaceBetween: 15
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
