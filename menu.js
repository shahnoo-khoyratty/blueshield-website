document.addEventListener("DOMContentLoaded", () => {

  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav");
  const dropdowns = document.querySelectorAll(".dropdown");

  // Show burger menu only after scrolling down on mobile
  let isScrolled = false;
  
  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (window.innerWidth <= 768) {
      if (scrollTop > 50 && !isScrolled) {
        burger.classList.add("visible");
        isScrolled = true;
      } else if (scrollTop <= 50 && isScrolled) {
        burger.classList.remove("visible");
        nav.classList.remove("open");
        // Close all dropdowns when menu closes
        dropdowns.forEach(drop => drop.classList.remove("open"));
        isScrolled = false;
      }
    }
  });

  // Burger toggle
  burger.addEventListener("click", () => {
    nav.classList.toggle("open");
    // Close all dropdowns when burger menu is toggled
    if (!nav.classList.contains("open")) {
      dropdowns.forEach(drop => drop.classList.remove("open"));
    }
  });

  // Mobile dropdown toggle - only works when nav is open
  dropdowns.forEach(drop => {
    const link = drop.querySelector("a");
    link.addEventListener("click", e => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        // Only allow dropdown toggle if nav menu is open
        if (nav.classList.contains("open")) {
          drop.classList.toggle("open");
        }
      }
    });
  });

  // Handle window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      burger.classList.remove("visible");
      nav.classList.remove("open");
      dropdowns.forEach(drop => drop.classList.remove("open"));
      isScrolled = false;
    }
  });

});
