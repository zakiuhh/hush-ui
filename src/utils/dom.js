/**
 * Hush UI - DOM Utilities & Helpers
 */

/**
 * Initializes an accessible mobile navigation drawer toggle.
 * Handles open/close, aria states, outside clicks, and keyboard Escape dismiss.
 * @param {string} toggleId - Element ID for the toggle trigger button.
 * @param {string} menuId - Element ID for the mobile menu container.
 */
export function initMobileMenu(toggleId, menuId) {
  const toggleBtn = document.getElementById(toggleId);
  const menu = document.getElementById(menuId);
  if (!toggleBtn || !menu) return;

  const openIcon = toggleBtn.querySelector('.mobile-toggle-open');
  const closeIcon = toggleBtn.querySelector('.mobile-toggle-close');

  const setOpen = (open) => {
    menu.classList.toggle('is-open', open);
    toggleBtn.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-hidden', String(!open));
    if (openIcon) openIcon.style.display = open ? 'none' : 'block';
    if (closeIcon) closeIcon.style.display = open ? 'block' : 'none';
  };

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = menu.classList.contains('is-open');
    setOpen(!isOpen);
  });

  document.addEventListener('click', (e) => {
    if (menu.classList.contains('is-open') && !menu.contains(e.target) && !toggleBtn.contains(e.target)) {
      setOpen(false);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      setOpen(false);
      toggleBtn.focus();
    }
  });
}
