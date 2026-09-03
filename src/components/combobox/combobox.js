let isComboboxInitialized = false;

export function initCombobox() {
  if (isComboboxInitialized) return;
  isComboboxInitialized = true;

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.ui-combobox-trigger');
    const combobox = e.target.closest('.ui-combobox');
    const allCombos = document.querySelectorAll('.ui-combobox');

    if (trigger && combobox) {
      const isAlreadyOpen = combobox.classList.contains('is-open');
      allCombos.forEach((c) => c !== combobox && c.classList.remove('is-open'));
      combobox.classList.toggle('is-open', !isAlreadyOpen);
      if (!isAlreadyOpen) {
        combobox.querySelector('.ui-combobox-input')?.focus();
      }
      return;
    }

    // Handle Option Selection
    const option = e.target.closest('.ui-combobox-option');
    if (option) {
      const combo = option.closest('.ui-combobox');
      if (!combo) return;

      const val = option.dataset.value;
      const label = option.dataset.label || val;
      const isSelected = option.classList.contains('is-selected');
      const tagsContainer = combo.querySelector('.ui-combobox-tags');
      const input = combo.querySelector('.ui-combobox-input');

      if (isSelected) {
        // Deselect
        option.classList.remove('is-selected');
        const tag = tagsContainer.querySelector(`[data-val="${val}"]`);
        tag?.remove();
      } else {
        // Select
        option.classList.add('is-selected');
        const tagEl = document.createElement('span');
        tagEl.className = 'ui-combobox-tag';
        tagEl.setAttribute('data-val', val);
        tagEl.innerHTML = `
          <span>${label}</span>
          <button class="ui-combobox-tag-remove" type="button" aria-label="Remove ${label}">
            <svg class="lucide lucide-x" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        `;
        tagsContainer.insertBefore(tagEl, input);
      }

      if (input) input.value = '';
      filterComboboxOptions(combo, '');
      return;
    }

    // Handle Tag Remove
    const removeBtn = e.target.closest('.ui-combobox-tag-remove');
    if (removeBtn) {
      const tag = removeBtn.closest('.ui-combobox-tag');
      const combo = removeBtn.closest('.ui-combobox');
      const val = tag.getAttribute('data-val');
      tag.remove();

      if (combo && val) {
        const option = combo.querySelector(`.ui-combobox-option[data-value="${val}"]`);
        option?.classList.remove('is-selected');
      }
      return;
    }

    // Close on outside click
    if (!e.target.closest('.ui-combobox')) {
      allCombos.forEach((c) => c.classList.remove('is-open'));
    }
  });

  // Filter options on search input
  document.addEventListener('input', (e) => {
    if (!e.target.classList.contains('ui-combobox-input')) return;
    const input = e.target;
    const combo = input.closest('.ui-combobox');
    if (combo) {
      combo.classList.add('is-open');
      filterComboboxOptions(combo, input.value.toLowerCase().trim());
    }
  });

  function filterComboboxOptions(combo, query) {
    const options = combo.querySelectorAll('.ui-combobox-option');
    options.forEach((opt) => {
      const text = (opt.dataset.label || opt.textContent).toLowerCase();
      opt.style.display = !query || text.includes(query) ? 'flex' : 'none';
    });
  }
}
