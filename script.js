/*const menuActive = document.querySelector('.mobile-menu');
const burger = document.querySelector('.mobile-menu__heading')

function toggleMenu() {
    menuActive.classList.toggle();
}

burger.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);*/


const menuActive = document.querySelector('.mobile-menu');
const burger = document.querySelector('.mobile-menu__heading');
const menuClose = document.querySelector('.mobile-menu-close'); // Assuming there's an element to close the menu

function toggleMenu() {
    menuActive.classList.toggle('active'); // Replace 'active' with the actual class name you want to toggle
}

if (burger) {
    burger.addEventListener('click', toggleMenu);
}

if (menuClose) {
    menuClose.addEventListener('click', toggleMenu);
}