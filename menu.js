document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav");
  const navMenu = document.querySelector(".nav-menu");
  const dropdowns = document.querySelectorAll(".dropdown");

  // Toggle main nav on mobile
  burger.addEventListener("click", () => {
    nav.classList.toggle("open");
    navMenu.classList.toggle("show");
  });

  // Toggle dropdowns on mobile
  dropdowns.forEach(drop => {
    const link = drop.querySelector("a");
    link.addEventListener("click", e => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        drop.classList.toggle("show");
      }
    });
  });
});