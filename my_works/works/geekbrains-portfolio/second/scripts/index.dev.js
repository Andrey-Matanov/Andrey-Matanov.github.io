"use strict";

var button = document.querySelector('.header-burger-menu');
var menu = document.querySelector('.header-menu-and-buttons');
var header_button = document.querySelector('.header-search-button');
var search_window = document.querySelector('.header-search-window');
button.addEventListener('click', function () {
  menu.classList.toggle('header-menu-and-buttons');
  menu.classList.toggle('header-burger-menu-opened');
});
header_button.addEventListener('click', function () {
  search_window.classList.toggle('header-search-window-opened');
  search_window.focus();
});
search_window.addEventListener('blur', function () {
  search_window.classList.remove('header-search-window-opened');
});
window.addEventListener('resize', function () {
  if (menu.classList.contains('header-burger-menu-opened')) {
    menu.classList.toggle('header-menu-and-buttons');
    menu.classList.toggle('header-burger-menu-opened');
  }
});