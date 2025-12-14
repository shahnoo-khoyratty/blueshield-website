document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav");
  const dropdowns = document.querySelectorAll(".dropdown");

  // Initially hide burger
  burger.style.display = "none";

  // Show burger only after scrolling down
  window.addEventListener("scroll", () => {
    if (window.scrollY > 90) { // adjust threshold as needed
      burger.style.display = "flex";
    } else {
      burger.style.display = "none";
      nav.classList.remove("open"); // close menu if user scrolls back up
    }
  });

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
});
