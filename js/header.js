// JavaScript para cambiar la clase de la navbar según el scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');  // Selecciona la navbar
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
    navbar.classList.remove('transparent');
  } else {
    navbar.classList.add('transparent');
    navbar.classList.remove('scrolled');
  }
});

// Establece la navbar como transparente al cargar la página
document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');
  navbar.classList.add('transparent');
});
