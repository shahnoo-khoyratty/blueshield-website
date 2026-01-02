document.addEventListener("DOMContentLoaded", () => {

  // ===== BURGER MENU =====
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".main-nav");
  const dropdowns = document.querySelectorAll(".menu-item-has-children");

  if (burger) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  // ===== MOBILE DROPDOWNS (ACCORDION) =====
  dropdowns.forEach(drop => {
    const link = drop.querySelector("a");

    link.addEventListener("click", e => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        e.stopPropagation();

        // Close all other open dropdowns
        dropdowns.forEach(otherDrop => {
          if (otherDrop !== drop) {
            otherDrop.classList.remove("show");
          }
        });

        // Toggle current dropdown
        drop.classList.toggle("show");
      }
    });
  });

  // ===== GLOSSARY POPUPS =====
  document.querySelectorAll('.learn-more').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const popup = btn.closest('.card').querySelector('.popup');
      popup.classList.toggle('active');
    });
  });

  // Close popup if clicked outside
  document.addEventListener('click', e => {
    document.querySelectorAll('.popup').forEach(popup => {
      if (!popup.closest('.card').contains(e.target)) {
        popup.classList.remove('active');
      }
    });
  });

});
