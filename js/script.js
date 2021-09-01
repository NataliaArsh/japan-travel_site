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

