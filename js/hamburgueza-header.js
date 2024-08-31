const menuToggle = document.querySelector('.menu-toggle');
const header = document.querySelector('.header-22');

menuToggle.addEventListener('click', () => {
    header.classList.toggle('active');
});
