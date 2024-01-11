const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu'); //close option selector

hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
});

closeMenu.addEventListener('click', () => { //event listener for close option
    menu.classList.remove('open');
});