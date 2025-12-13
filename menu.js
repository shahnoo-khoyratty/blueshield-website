document.addEventListener('DOMContentLoaded', function() {

    // ===== Burger menu toggle =====
    const burger = document.createElement('div');
    burger.classList.add('burger');
    burger.innerHTML = '<div></div><div></div><div></div>';
    
    const navContainer = document.querySelector('.nav-container');
    navContainer.insertBefore(burger, navContainer.querySelector('.logo'));

    const navMenu = document.querySelector('.nav-menu');
    burger.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });

    // ===== Card tap for mobile =====
    if(window.innerWidth <= 768){
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const popup = card.querySelector('.popup, .tooltip');
            if(popup){
                card.addEventListener('click', () => {
                    popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
                    card.scrollIntoView({behavior:'smooth', block:'start'}); // optional, scroll to card
                });
            }
        });
    }

});
