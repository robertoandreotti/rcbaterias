// ===== MENU MOBILE TOGGLE =====
const menuToggle = document.querySelector('.menu-toggle');
const menuIcon = document.querySelector('.menu-icon');
const menuClose = document.querySelector('.menu-close');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', function () {
  const isActive = nav.classList.toggle('active');
  menuIcon.style.display = isActive ? 'none' : 'inline';
  menuClose.style.display = isActive ? 'inline' : 'none';
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    nav.classList.remove('active');
    menuIcon.style.display = 'inline';
    menuClose.style.display = 'none';
  });
});

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-question').forEach(function (button) {
  button.addEventListener('click', function () {
    const item = this.closest('.faq-item');
    const isActive = item.classList.contains('active');

    // Fechar todos
    document.querySelectorAll('.faq-item').forEach(function (el) {
      el.classList.remove('active');
    });

    // Abrir o clicado (se não estava aberto)
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// ===== SMOOTH SCROLL (fallback para navegadores antigos) =====
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== HEADER SCROLL EFFECT =====
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', function () {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 100) {
    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
  } else {
    header.style.boxShadow = 'none';
  }
  lastScroll = currentScroll;
});
