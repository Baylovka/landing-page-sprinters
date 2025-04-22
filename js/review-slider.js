const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 250,
    slidesPerView: 1,
    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        834: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 2,
        },
    },

    pagination: {
        el: '.pagination',
        bulletClass: 'pagination__bullet',
        bulletActiveClass: 'pagination__bullet--active',
        clickable: true,
    },
});