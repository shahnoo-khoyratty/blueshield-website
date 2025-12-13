// Mobile burger menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger');
  const navMenu = document.querySelector('.nav-menu');

  if (burger && navMenu) {
    burger.addEventListener('click', function() {
      navMenu.classList.toggle('show');
    });
  }
});