document.addEventListener('DOMContentLoaded', function() {

    function initTogglePassword() {
        const passwordToggleBtn = document.querySelector('.password-eye');
        function togglePassword() {
            var x = document.querySelector(".form__password");
            if (x.type === "password") {
                x.type = "text";
            } else {
                x.type = "password";
            }
        }
        passwordToggleBtn.addEventListener('click', togglePassword);
    }
    
    initTogglePassword();

    function initMenu() {
        const menuBtn = document.querySelector('.header__menu-btn');
        const menu = document.querySelector('.header__inner');
        const navigationLinks = document.querySelectorAll('.header__navigation li a');
        const html = document.querySelector('html');
        menuBtn.addEventListener('click', function() {
            menu.classList.toggle('active');
            menuBtn.classList.toggle('active');
            html.classList.toggle('overflow-hidden');
        })
        if (document.documentElement.clientWidth < 1025) {
            navigationLinks.forEach(item => {
            item.addEventListener('click', () => {
                menu.classList.remove('active');
                menuBtn.classList.remove('active');
                html.classList.remove('overflow-hidden');
            })
        })
        }
    }

    function initHeroSlider() {
        var swiper = new Swiper('.hero__slider', {
            loop: true,
            allowTouchMove: false,
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
                    allowTouchMove: true,
                    slidesPerView: 1,
                },
                768: {
                    allowTouchMove: false,
                },
                
            }
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
                    allowTouchMove: true,
                },
                480: {
                    slidesPerView: 2,
                    allowTouchMove: true,
                },
                768: {
                    slidesPerView: 3,
                    allowTouchMove: false,
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
                    allowTouchMove: true,
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 2,
                },
                768: {
                    allowTouchMove: false,
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
                    allowTouchMove: true,
                    slidesPerView: 1,
                },
                600: {
                    slidesPerView: 2,
                    allowTouchMove: false,
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
    
    function initModals() {
        document.querySelectorAll('[data-micromodal-trigger]').forEach(function(item){
            item.addEventListener('click', function(e) {
                e.preventDefault();

                document.querySelector('.header__inner').classList.remove('active');
                document.querySelector('.header__menu-btn').classList.remove('active');

                const modals = document.querySelectorAll('.modal');
                modals.forEach(modal => {
                    if (modal.id == item.dataset.micromodalTrigger) {
                        MicroModal.show(modal.id);
                    } else {
                        MicroModal.close(modal.id);
                    }
                })
            })
        })

        MicroModal.init({
            onShow: modal => document.querySelector('html').classList.add('overflow-hidden'), // [1]
            onClose: modal => document.querySelector('html').classList.remove('overflow-hidden'), // [2]
        });
    }

    function initScrollToBlock() {
        document.querySelectorAll('.anchor').forEach(link => {

            link.addEventListener('click', function(e) {
                e.preventDefault();

                let href = this.getAttribute('href').substring(1);
        
                const scrollTarget = document.getElementById(href);
                const topOffset = 100;
                const elementPosition = scrollTarget.getBoundingClientRect().top;
                const offsetPosition = elementPosition - topOffset;
        
                window.scrollBy({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            });
        });
    }
    
    initMenu();
    initHeroSlider();
    initGamesSlider();
    initPartnersSlider();
    initProvidersSlider();
    initModals();
    initScrollToBlock();
})