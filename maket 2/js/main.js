(function(){
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__list');
    const menuClose = document.querySelector('.header__list-close')

    burger.addEventListener('click', () => {
        menu.classList.add('header__list-active')
    });
    menuClose.addEventListener('click', () => {
        menu.classList.remove('header__list-active')
    })
}())