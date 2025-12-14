document.addEventListener("DOMContentLoaded", () => {

  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav");
  const dropdowns = document.querySelectorAll(".dropdown");

  // Changed: Show burger menu only after scrolling down on mobile
  let isScrolled = false;
  
  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (window.innerWidth <= 768) {
      if (scrollTop > 50 && !isScrolled) {
        burger.classList.add("visible");
        isScrolled = true;
      } else if (scrollTop <= 50 && isScrolled) {
        burger.classList.remove("visible");
        nav.classList.remove("open"); // Close menu when returning to top
        isScrolled = false;
      }
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

  // Handle window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      burger.classList.remove("visible");
      nav.classList.remove("open");
      isScrolled = false;
    }
  });

});
