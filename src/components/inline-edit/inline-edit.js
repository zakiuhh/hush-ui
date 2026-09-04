/**
 * Hush UI - Inline Click-to-Edit Controller
 */

export function initInlineEdit(container = document) {
  const elements = container.querySelectorAll
    ? container.querySelectorAll('.ui-inline-edit')
    : document.querySelectorAll('.ui-inline-edit');

  elements.forEach((el) => {
    if (el.dataset.inlineEditInitialized === 'true') return;
    el.dataset.inlineEditInitialized = 'true';

    const view = el.querySelector('.ui-inline-edit-view');
    const textEl = el.querySelector('.ui-inline-edit-text');
    const form = el.querySelector('.ui-inline-edit-form');
    const input = el.querySelector('.ui-inline-edit-input');
    const saveBtn = el.querySelector('.ui-inline-edit-btn--save');
    const cancelBtn = el.querySelector('.ui-inline-edit-btn--cancel');

    let previousValue = textEl ? textEl.textContent.trim() : '';

    function startEdit() {
      el.classList.add('is-editing');
      if (input && textEl) {
        previousValue = textEl.textContent.trim();
        input.value = previousValue;
        setTimeout(() => {
          input.focus();
          input.select();
        }, 10);
      }
    }

    function commitSave() {
      if (!input || !textEl) return;
      const newValue = input.value.trim();

      if (newValue.length > 0) {
        textEl.textContent = newValue;
        previousValue = newValue;

        // Visual flash feedback
        el.classList.remove('is-editing');
        el.classList.add('is-saved');
        setTimeout(() => {
          el.classList.remove('is-saved');
        }, 600);

        // Custom save event
        const event = new CustomEvent('save', {
          bubbles: true,
          detail: { value: newValue }
        });
        el.dispatchEvent(event);
      } else {
        cancelEdit();
      }
    }

    function cancelEdit() {
      if (input && textEl) {
        input.value = previousValue;
      }
      el.classList.remove('is-editing');
      const event = new CustomEvent('cancel', {
        bubbles: true,
        detail: { value: previousValue }
      });
      el.dispatchEvent(event);
    }

    if (view) {
      view.addEventListener('click', startEdit);
    }

    if (saveBtn) {
      saveBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        commitSave();
      });
    }

    if (cancelBtn) {
      cancelBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        cancelEdit();
      });
    }

    if (input) {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          commitSave();
        } else if (e.key === 'Escape') {
          e.preventDefault();
          cancelEdit();
        }
      });
    }
  });
}
