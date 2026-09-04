/**
 * Hush UI - Tag / Token Auto-Complete Input Controller
 * Adds tags on Enter or Comma, removes on backspace or chip click.
 */
export function initTagInput(container = document) {
  const tagInputs = container.querySelectorAll
    ? container.querySelectorAll('.ui-tag-input-container')
    : document.querySelectorAll('.ui-tag-input-container');

  tagInputs.forEach((containerEl) => {
    if (containerEl.dataset.tagInitialized === 'true') return;
    containerEl.dataset.tagInitialized = 'true';

    const wrap = containerEl.querySelector('.ui-tag-input-wrap');
    const input = containerEl.querySelector('.ui-tag-field');
    const helper = containerEl.querySelector('.ui-tag-count');
    const maxTags = parseInt(containerEl.dataset.maxTags || '8', 10);

    function getTags() {
      return Array.from(wrap.querySelectorAll('.ui-tag-chip')).map(
        (chip) => chip.dataset.value || chip.textContent.trim().replace('×', '')
      );
    }

    function updateCount() {
      if (helper) {
        helper.textContent = `${getTags().length}/${maxTags} tags`;
      }
    }

    function addTag(text) {
      const clean = text.trim().replace(/^,+|,+$/g, '');
      if (!clean) return;

      const current = getTags();
      if (current.includes(clean)) {
        // Flash duplicate
        const existing = Array.from(wrap.querySelectorAll('.ui-tag-chip')).find(
          (c) => (c.dataset.value || c.textContent.trim().replace('×', '')) === clean
        );
        if (existing) {
          existing.style.transform = 'scale(1.15)';
          existing.style.borderColor = 'var(--blush, #F0C4C4)';
          setTimeout(() => {
            existing.style.transform = '';
            existing.style.borderColor = '';
          }, 300);
        }
        return;
      }

      if (current.length >= maxTags) return;

      const chip = document.createElement('span');
      chip.className = 'ui-tag-chip';
      chip.dataset.value = clean;
      chip.innerHTML = `
        <span>${clean}</span>
        <button type="button" class="ui-tag-chip-remove" aria-label="Remove ${clean}">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      `;

      chip.querySelector('.ui-tag-chip-remove').addEventListener('click', (e) => {
        e.stopPropagation();
        chip.remove();
        updateCount();
        input.focus();
      });

      wrap.insertBefore(chip, input);
      input.value = '';
      updateCount();
    }

    if (wrap && input) {
      wrap.addEventListener('click', () => {
        input.focus();
      });

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ',') {
          e.preventDefault();
          addTag(input.value);
        } else if (e.key === 'Backspace' && !input.value) {
          const chips = wrap.querySelectorAll('.ui-tag-chip');
          if (chips.length > 0) {
            chips[chips.length - 1].remove();
            updateCount();
          }
        }
      });

      // Bind existing remove buttons
      wrap.querySelectorAll('.ui-tag-chip-remove').forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          btn.closest('.ui-tag-chip').remove();
          updateCount();
          input.focus();
        });
      });

      updateCount();
    }
  });
}
