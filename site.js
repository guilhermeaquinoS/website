(() => {
  // Shared mobile navigation toggle used on all pages.
  document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-toggle');
    const menuLinks = document.querySelector('.links');

    if (!menuButton || !menuLinks) return;

    menuButton.addEventListener('click', () => {
      const isOpen = menuLinks.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      menuButton.textContent = isOpen ? '✕' : '☰';
    });
  });
})();
