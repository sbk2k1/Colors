const menu = document.querySelector('#mobile-menu')
const menuLinks= document.querySelector('.navbar__menu')

//Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)