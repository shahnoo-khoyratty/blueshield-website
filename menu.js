// ===== MENU AND CARDS MOBILE INTERACTIONS =====

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {

    // --- BURGER MENU ---
    const burger = document.querySelector(".burger");
    const navMenu = document.querySelector(".nav-menu");

    if (burger && navMenu) {
        burger.addEventListener("click", function () {
            navMenu.classList.toggle("open"); // toggle open class
            burger.classList.toggle("open");  // animate burger if needed
        });
    }

    // --- CARD POPUPS (TOUCH/MOBILE) ---
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", function (e) {
            // Only on mobile (window width <= 768px)
            if (window.innerWidth <= 768) {
                const popup = card.querySelector(".popup") || card.querySelector(".tooltip");
                if (!popup) return;

                // Toggle visibility
                if (popup.style.display === "block") {
                    popup.style.display = "none";
                } else {
                    // Hide other popups first
                    cards.forEach(c => {
                        const p = c.querySelector(".popup") || c.querySelector(".tooltip");
                        if (p) p.style.display = "none";
                    });
                    popup.style.display = "block";

                    // Scroll into view if necessary
                    popup.scrollIntoView({ behavior: "smooth", block: "center" });
                }
            }
        });
    });

    // Optional: close menu when clicking outside
    document.addEventListener("click", function (e) {
        if (window.innerWidth <= 768) {
            if (!navMenu.contains(e.target) && !burger.contains(e.target)) {
                navMenu.classList.remove("open");
                burger.classList.remove("open");
            }
        }
    });

});
