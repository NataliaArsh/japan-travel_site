// создание фона для хедера, когда страница скролится, на более чем 50 px,.. 
//.. и отключение его при возвращении обратно в начало
// создаю самовызывающуюся функцию
// код внутри нее отработает сразу при загрузке script.js
(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());

// открытие меню при нажатии на бургер
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__menu');
    const menuCloseItem = document.querySelector('.header__close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__menu-active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__menu-active');
    });
}());

// Scroll to anchors
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight = document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = function (currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());