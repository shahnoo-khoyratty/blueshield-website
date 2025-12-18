document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav");
  const dropdowns = document.querySelectorAll(".dropdown");

  burger.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  dropdowns.forEach(drop => {
    const link = drop.querySelector("a");
    link.addEventListener("click", e => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        drop.classList.toggle("open");
      }
    });
  });
});