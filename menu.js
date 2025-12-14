document.addEventListener("DOMContentLoaded", () => {

    const burger = document.querySelector(".burger");
    const nav = document.querySelector("nav");
    const dropdowns = document.querySelectorAll(".dropdown");
    const cards = document.querySelectorAll(".card");

    burger.addEventListener("click", () => {
        nav.classList.toggle("open");
    });

    dropdowns.forEach(drop => {
        drop.querySelector("a").addEventListener("click", e => {
            e.preventDefault();
            drop.classList.toggle("open");
        });
    });

    cards.forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("open");
        });
    });

});
