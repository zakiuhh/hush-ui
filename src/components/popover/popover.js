let isPopoversInitialized = false;

export function initPopovers() {
  if (isPopoversInitialized) return;
  isPopoversInitialized = true;

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-popover-target]');
    const allPopovers = document.querySelectorAll('.ui-popover-content');

    if (trigger) {
      const targetId = trigger.getAttribute('data-popover-target');
      const targetPopover = document.getElementById(targetId);
      const isOpen = targetPopover?.classList.contains('is-open');

      allPopovers.forEach((p) => p.classList.remove('is-open'));
      if (!isOpen && targetPopover) targetPopover.classList.add('is-open');
      e.stopPropagation();
      return;
    }

    if (!e.target.closest('.ui-popover-content')) {
      allPopovers.forEach((p) => p.classList.remove('is-open'));
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.ui-popover-content.is-open').forEach((p) => {
        p.classList.remove('is-open');
      });
    }
  });
}
