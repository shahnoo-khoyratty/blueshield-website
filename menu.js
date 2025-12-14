document.addEventListener("DOMContentLoaded", () => {

  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav");
  const dropdowns = document.querySelectorAll(".dropdown");

  // Add 'scrolled' class only after scrolling
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      document.body.classList.add("scrolled");
    } else {
      document.body.classList.remove("scrolled");
    }
  });

  // Burger toggle (only works after scrolling)
  burger.addEventListener("click", () => {
    if (document.body.classList.contains("scrolled")) {
      nav.classList.toggle("open");
    }
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

});
