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

