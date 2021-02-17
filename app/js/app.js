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
        const html = document.querySelector('html');
        menuBtn.addEventListener('click', function() {
            menu.classList.toggle('active');
            menuBtn.classList.toggle('active');
            html.classList.toggle('overflow-hidden');
        })
    }

    function initHeroSliders() {
        var swiper = new Swiper('.hero__slider', {
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
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
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                769: {
                    slidesPerView: 3,
                },
            }
        });
    }

    initLanguages();
    initMenu();
    initHeroSliders();
    initGamesSliders();
})