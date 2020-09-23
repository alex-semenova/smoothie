$(function(){
    var burger = document.querySelector('.openMenu');
    var menu = document.querySelector('.header__menu');

    burger.addEventListener('click', function () {

    if (menu.classList.contains('menu-closed')) {
        menu.classList.remove('menu-closed');
        menu.classList.add('menu-opened');
    } else {
        menu.classList.add('menu-closed');
        menu.classList.remove('menu-opened');
    }
    });

  
});