document.addEventListener("DOMContentLoaded", function() {
    // Burger button
    const burger = document.createElement('div');
    burger.classList.add('burger');
    burger.innerHTML = '<span></span><span></span><span></span>';

    const navContainer = document.querySelector('.nav-container');
    navContainer.insertBefore(burger, navContainer.firstChild);

    const navMenu = document.querySelector('nav ul.nav-menu');

    // Toggle mobile menu
    burger.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });

    // Card popups for mobile
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const popup = card.querySelector('.popup');
            if (popup) {
                popup.classList.toggle('show');
            }
        });
    });
});
