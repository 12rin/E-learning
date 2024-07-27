// Example JavaScript for responsive navbar
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar-items');

    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
});