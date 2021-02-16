document.addEventListener('DOMContentLoaded', function() {

    function initLanguages() {
        const languages = document.querySelector('.header__languages');

        languages.addEventListener('click', function() {
            languages.classList.toggle('active');
        })
    }

    function initMenu() {
        const menuBtn = document.querySelector('.header__menu-btn');
        const menu = document.querySelector('.header__inner');
        menuBtn.addEventListener('click', function() {
            menu.classList.toggle('active');
            menuBtn.classList.toggle('active');
        })
    }

    function initHeroSliders() {
        var swiper = new Swiper('.hero__slider', {
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    function initGamesSliders() {
        var swiper = new Swiper('.games__slider', {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    initLanguages();
    initMenu();
    initHeroSliders();
    initGamesSliders();
})