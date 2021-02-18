document.addEventListener('DOMContentLoaded', function() {

    function initLanguages() {
        if (window.innerWidth > 1024) {
            const languages = document.querySelector('.header__languages');

            languages.addEventListener('click', function() {
                languages.classList.toggle('active');
            })
        }
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

    function initHeroSlider() {
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

    function initGamesSlider() {
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
                
            }
        });
    }

    function initPartnersSlider() {
        var swiper = new Swiper('.partners__slider', {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
                nextEl: '.partners__next',
                prevEl: '.partners__prev',
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
                
            }
        });
    }

    function initProvidersSlider() {
        var swiper = new Swiper('.providers__slider', {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
                nextEl: '.providers__next',
                prevEl: '.providers__prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                600: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
                
            }
        });
    }

    function initScrollToTop() {
        const scrollArrow = document.querySelector('.footer__arrow');
        let intervalId = 0;
        function scrollStep() {
            if (window.pageYOffset === 0) {
                clearInterval(intervalId);
            }
            window.scroll(0, window.pageYOffset - 50);

        }
        
        function scrollToTop() {
            document.querySelector('html').style.height = 'auto';
            document.body.style.height = 'auto';
            intervalId = setInterval(scrollStep, 16.66);
            
            setTimeout(function() {
                document.querySelector('html').style.height = '';
                document.body.style.height = '';
            }, 300)
        }
        scrollArrow.addEventListener('click', scrollToTop);
        
    }
    
    function initModals() {
        document.querySelectorAll('[data-micromodal-trigger]').forEach(function(item){
            item.addEventListener('click', function(e) {
                e.preventDefault();

                document.querySelector('.header__inner').classList.remove('active');
                document.querySelector('.header__menu-btn').classList.remove('active');
                document.querySelector('html').classList.remove('overflow-hidden');
            })
        })
        document.querySelector('.modal__registration').addEventListener('click', function() {
            MicroModal.close('modal-2');
            MicroModal.show('modal-1');
        })
        document.querySelector('.modal__sign').addEventListener('click', function() {
            MicroModal.close('modal-1');
            MicroModal.show('modal-2');
        })

        MicroModal.init({
            onShow: modal => document.querySelector('html').classList.add('overflow-hidden'), // [1]
            onClose: modal => document.querySelector('html').classList.remove('overflow-hidden'), // [2]
        });
    }

    
    initLanguages();
    initMenu();
    initHeroSlider();
    initGamesSlider();
    initPartnersSlider();
    initProvidersSlider();
    initModals();
    initScrollToTop();
})