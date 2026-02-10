const dropdownButtons = document.querySelectorAll('.dropdown');

dropdownButtons.forEach(button => {
    const menu = button.nextElementSibling;
    button.addEventListener('click', () => {
        menu.classList.toggle('active');
        button.classList.toggle('open');
    });
});

const mobileMenu = document.querySelector('.mobile-menu');
const pageContent = document.querySelector('main');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const mainContent = document.querySelector('main');

openMenu.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    mobileMenu.toggleAttribute('hidden');
    mainContent.classList.toggle('darkerScreen');
    pageContent.toggleAttribute('inert', hidden);
    document.body.classList.toggle('menu-open');

    const isOpen = !mobileMenu.hasAttribute('hidden');
    openMenu.setAttribute('aria-expanded', isOpen);
    closeMenu.setAttribute('aria-expanded', isOpen);
}