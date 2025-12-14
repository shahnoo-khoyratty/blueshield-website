document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector("nav");
    const dropdowns = document.querySelectorAll(".dropdown");
    const cards = document.querySelectorAll(".card");

    // Toggle mobile menu
    burger.addEventListener("click", () => {
        nav.classList.toggle("open");
    });

    // Toggle dropdowns in mobile menu
    dropdowns.forEach(drop => {
        drop.querySelector("a").addEventListener("click", e => {
            e.preventDefault();
            drop.classList.toggle("open");
        });
    });

    // Toggle card popups on mobile
    cards.forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("open");
        });
    });
});
	
