let toastContainer = null;
let activeToasts = [];

function ensureContainer() {
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'ui-toast-container';
    document.body.appendChild(toastContainer);

    toastContainer.addEventListener('mouseenter', () => {
      toastContainer.classList.add('is-expanded');
    });

    toastContainer.addEventListener('mouseleave', () => {
      toastContainer.classList.remove('is-expanded');
    });
  }
  return toastContainer;
}

function updateStackPositions() {
  activeToasts.forEach((item, index) => {
    // index 0 is newest (top), 1 is behind, etc.
    item.element.setAttribute('data-stack-pos', Math.min(index, 3));
    item.element.style.setProperty('--stack-index', index);
  });
}

export function showToast({
  title,
  message,
  type = 'default',
  duration = 4000,
  action = null
}) {
  const container = ensureContainer();
  const toast = document.createElement('div');

  toast.className = `ui-toast ${type !== 'default' ? `ui-toast--${type}` : ''}`;
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');

  let actionHtml = '';
  if (action && action.label) {
    actionHtml = `<button class="ui-toast-action" type="button">${action.label}</button>`;
  }

  toast.innerHTML = `
    <span class="ui-toast-indicator" aria-hidden="true"></span>
    <div class="ui-toast-content">
      ${title ? `<div class="ui-toast-title">${title}</div>` : ''}
      ${message ? `<div class="ui-toast-message">${message}</div>` : ''}
    </div>
    ${actionHtml}
    <button class="ui-toast-close" aria-label="Dismiss notification">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  `;

  // Bind action click if provided
  if (action && typeof action.onClick === 'function') {
    toast.querySelector('.ui-toast-action')?.addEventListener('click', (e) => {
      action.onClick(e);
      removeToast();
    });
  }

  container.appendChild(toast);

  const toastItem = { element: toast, timer: null };
  activeToasts.unshift(toastItem); // Add to front of array
  updateStackPositions();

  const removeToast = () => {
    const idx = activeToasts.indexOf(toastItem);
    if (idx !== -1) {
      activeToasts.splice(idx, 1);
    }
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(16px) scale(0.9)';
    setTimeout(() => {
      toast.remove();
      updateStackPositions();
      if (activeToasts.length === 0 && toastContainer) {
        toastContainer.classList.remove('is-expanded');
      }
    }, 240);
  };

  toast.querySelector('.ui-toast-close').addEventListener('click', removeToast);

  if (duration > 0) {
    toastItem.timer = setTimeout(removeToast, duration);
  }

  return { dismiss: removeToast };
}

