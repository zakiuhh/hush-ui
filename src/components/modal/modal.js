let isModalsInitialized = false;

export function initModals() {
  if (isModalsInitialized) return;
  isModalsInitialized = true;

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-modal-target]');
    if (trigger) {
      const targetId = trigger.getAttribute('data-modal-target');
      const modal = document.getElementById(targetId);
      if (modal) modal.classList.add('is-open');
    }

    const closeBtn = e.target.closest('[data-modal-close]');
    if (closeBtn) {
      const modal = closeBtn.closest('.ui-modal-backdrop');
      if (modal) modal.classList.remove('is-open');
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.ui-modal-backdrop.is-open').forEach((m) => {
        m.classList.remove('is-open');
      });
    }
  });
}
