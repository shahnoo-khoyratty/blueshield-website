document.addEventListener("DOMContentLoaded", function() {
    const burger = document.getElementById("burger");
    const navMenu = document.querySelector(".nav-menu");
    const cards = document.querySelectorAll(".card");

    // Toggle mobile menu
    burger.addEventListener("click", function() {
        navMenu.classList.toggle("nav-active");
    });

    // Toggle card popups on mobile
    cards.forEach(card => {
        card.addEventListener("click", function() {
            const popup = card.querySelector(".popup");
            if (popup) {
                popup.style.display = popup.style.display === "block" ? "none" : "block";
            }
        });
    });
});
