document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  const navBackdrop = document.querySelector('.nav-backdrop');

  if (!navToggle || !mainNav || !navBackdrop) return;

  function closeMenu() {
    navToggle.setAttribute('aria-expanded', 'false');
    mainNav.classList.remove('open');
    navBackdrop.classList.remove('active');
  }

  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isExpanded));
    mainNav.classList.toggle('open');
    navBackdrop.classList.toggle('active');
  });

  navBackdrop.addEventListener('click', closeMenu);
});
