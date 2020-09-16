let button = document.querySelector('.header-burger-menu');
let menu = document.querySelector('.header-menu-and-buttons');
let header_button = document.querySelector('.header-search-button');
let search_window = document.querySelector('.header-search-window');

button.addEventListener('click', () => {
    menu.classList.toggle('header-menu-and-buttons');
    menu.classList.toggle('header-burger-menu-opened');
})

header_button.addEventListener('click', () => {
    search_window.classList.toggle('header-search-window-opened');
    search_window.focus();
})

search_window.addEventListener('blur', () => {
    search_window.classList.remove('header-search-window-opened');
})

window.addEventListener('resize', () => {
    if (menu.classList.contains('header-burger-menu-opened')) {
        menu.classList.toggle('header-menu-and-buttons');
        menu.classList.toggle('header-burger-menu-opened');
    }
})