let isDropdownsInitialized = false;

export function initDropdowns() {
  if (isDropdownsInitialized) return;
  isDropdownsInitialized = true;

  document.addEventListener('click', (e) => {
    const toggle = e.target.closest('[data-dropdown-toggle]');
    const allMenus = document.querySelectorAll('.ui-dropdown-menu');

    if (toggle) {
      const menu = toggle.nextElementSibling;
      const isOpen = menu?.classList.contains('is-open');
      allMenus.forEach((m) => m.classList.remove('is-open'));
      if (!isOpen && menu) menu.classList.add('is-open');
      e.stopPropagation();
      return;
    }

    if (!e.target.closest('.ui-dropdown-menu')) {
      allMenus.forEach((m) => m.classList.remove('is-open'));
    }
  });
}
