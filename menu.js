document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav");
  const dropdowns = document.querySelectorAll(".dropdown");
  const cards = document.querySelectorAll(".card");

  // Burger toggle
  burger.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // Mobile dropdown toggle
  dropdowns.forEach(drop => {
    const link = drop.querySelector("a");
    link.addEventListener("click", e => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        drop.classList.toggle("open");
      }
    });
  });

  // Mobile card tap behavior
  cards.forEach(card => {
    card.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        card.classList.toggle("open");
      }
    });
  });
});
