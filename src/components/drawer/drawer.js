let isDrawersInitialized = false;

export function initDrawers() {
  if (isDrawersInitialized) return;
  isDrawersInitialized = true;

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-drawer-target]');
    if (trigger) {
      const targetId = trigger.getAttribute('data-drawer-target');
      const drawer = document.getElementById(targetId);
      if (drawer) drawer.classList.add('is-open');
    }

    const closeBtn = e.target.closest('[data-drawer-close]');
    if (closeBtn) {
      const drawer = closeBtn.closest('.ui-drawer-backdrop');
      if (drawer) drawer.classList.remove('is-open');
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.ui-drawer-backdrop.is-open').forEach((d) => {
        d.classList.remove('is-open');
      });
    }
  });
}
