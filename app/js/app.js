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

    initLanguages();
    initMenu();
})