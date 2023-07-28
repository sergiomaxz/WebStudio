const menuRefs = {
    openMenuBtn: document.querySelector('.js-open-menu'),
    closeMenuBtn: document.querySelector('.js-close-menu'),
    menu: document.querySelector('.menu__container')
};

menuRefs.openMenuBtn.addEventListener('click', toggleMenu);
menuRefs.closeMenuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menuRefs.menu.classList.toggle('is-open');
    document.body.classList.toggle('modal-open');
}