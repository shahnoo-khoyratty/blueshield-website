document.addEventListener("DOMContentLoaded", () => {

  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav");
  const dropdowns = document.querySelectorAll(".dropdown");

  // Burger toggle
  burger.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // Mobile dropdown toggle (only after clicking the parent dropdown)
  dropdowns.forEach(drop => {
    const link = drop.querySelector("a");
    link.addEventListener("click", e => {
      if (window.innerWidth <= 768) {
        e.preventDefault(); // prevent link navigation
        drop.classList.toggle("open");
      }
    });
  });

});
