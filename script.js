const dropdownButtons = document.querySelectorAll('.dropdown');

dropdownButtons.forEach(button => {
    const menu = button.nextElementSibling;
    button.addEventListener('click', () => {
        menu.classList.toggle('active');
        button.classList.toggle('open');
    });
}); 