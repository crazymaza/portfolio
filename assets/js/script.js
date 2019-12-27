(function () {

    //Получаем нужные элементы со страницы.
    const btn = document.querySelector('.contact-form .btn');
    const upButton = document.querySelector('.up');

    //Убираем действие по умолчанию при отправке формы.
    btn.addEventListener('click', (e) => {
        e.preventDefault();
    });

    //Добавляем появление элемента при прокрутке страницы.
    window.addEventListener('scroll', () => {
        if ((window.pageYOffset || document.documentElement.scrollTop) > 200) {
            upButton.style.opacity = '0.6';
        } else {
            upButton.style.opacity = '0';
        }
    });

    //Добавили прокрутку до верха страницы.
    //Плавная прокрутка добавляется в css свойством scroll-behavior: smooth; к html.
    upButton.addEventListener('click', () => {
        window.scrollTo(0, 0);
    });

















})();