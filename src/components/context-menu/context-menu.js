/**
 * Hush UI - Custom Context Menu Component
 */

export function openContextMenu(menuEl, x, y) {
  menuEl.classList.add('is-open');

  // Viewport Collision Check
  const menuRect = menuEl.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  let left = x;
  let top = y;

  if (x + menuRect.width > viewportWidth - 10) {
    left = Math.max(10, x - menuRect.width);
  }

  if (y + menuRect.height > viewportHeight - 10) {
    top = Math.max(10, y - menuRect.height);
  }

  menuEl.style.left = `${left}px`;
  menuEl.style.top = `${top}px`;
}

export function closeContextMenu(menuEl) {
  if (menuEl) menuEl.classList.remove('is-open');
}

export function initContextMenu(container = document) {
  const targets = container.querySelectorAll
    ? container.querySelectorAll('[data-context-target]')
    : document.querySelectorAll('[data-context-target]');

  targets.forEach((targetEl) => {
    const menuId = targetEl.dataset.contextTarget;
    const menuEl = document.getElementById(menuId) || container.querySelector(`#${menuId}`);

    if (!menuEl) return;

    // Right-Click Context Menu Trigger
    targetEl.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      openContextMenu(menuEl, e.clientX, e.clientY);
    });

    // Mobile Long-Press & Touch Click Trigger fallback
    let touchTimer = null;
    targetEl.addEventListener('touchstart', (e) => {
      touchTimer = setTimeout(() => {
        if (e.touches[0]) {
          openContextMenu(menuEl, e.touches[0].clientX, e.touches[0].clientY);
        }
      }, 400);
    }, { passive: true });

    targetEl.addEventListener('touchend', () => {
      if (touchTimer) clearTimeout(touchTimer);
    });

    targetEl.addEventListener('click', (e) => {
      if (window.innerWidth <= 768 || e.pointerType === 'touch') {
        const rect = targetEl.getBoundingClientRect();
        openContextMenu(menuEl, rect.left + 20, rect.top + (rect.height / 2));
      }
    });

    // Close on Menu Item Click
    const items = menuEl.querySelectorAll('.ui-context-item');
    items.forEach((item) => {
      item.addEventListener('click', () => {
        closeContextMenu(menuEl);
      });
    });

    // Global Outside Click / Escape to Close
    const handleOutside = (e) => {
      if (!menuEl.contains(e.target) && !targetEl.contains(e.target)) {
        closeContextMenu(menuEl);
      }
    };

    const handleKeydown = (e) => {
      if (e.key === 'Escape') closeContextMenu(menuEl);
    };

    window.addEventListener('pointerdown', handleOutside);
    window.addEventListener('keydown', handleKeydown);
  });
}
