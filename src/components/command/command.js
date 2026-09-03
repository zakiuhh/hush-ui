let isCommandPaletteInitialized = false;

function openCommandDialog(dialog) {
  if (!dialog) return;
  dialog.classList.add('is-open');

  const input = dialog.querySelector('.ui-command-input');
  if (input) {
    input.value = '';
    setTimeout(() => {
      input.focus();
    }, 50);
  }

  // Reset visibility
  const items = Array.from(dialog.querySelectorAll('.ui-command-item'));
  const groups = Array.from(dialog.querySelectorAll('.ui-command-group'));
  items.forEach((item, idx) => {
    item.style.display = 'flex';
    item.classList.toggle('is-selected', idx === 0);
  });
  groups.forEach((grp) => {
    grp.style.display = 'flex';
  });

  const emptyMsg = dialog.querySelector('.ui-command-empty');
  if (emptyMsg) emptyMsg.remove();
}

function closeCommandDialog(dialog) {
  if (!dialog) return;
  dialog.classList.remove('is-open');
}

function getVisibleItems(dialog) {
  return Array.from(dialog.querySelectorAll('.ui-command-item')).filter(
    (item) => item.style.display !== 'none'
  );
}

function selectItemByIndex(visibleItems, nextIndex) {
  if (visibleItems.length === 0) return;
  visibleItems.forEach((item) => item.classList.remove('is-selected'));
  const safeIndex = (nextIndex + visibleItems.length) % visibleItems.length;
  const target = visibleItems[safeIndex];
  if (target) {
    target.classList.add('is-selected');
    target.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
}

export function initCommandPalette() {
  if (isCommandPaletteInitialized) return;
  isCommandPaletteInitialized = true;

  // Open triggers
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-command-trigger]');
    if (trigger) {
      e.preventDefault();
      const targetId = trigger.getAttribute('data-command-trigger');
      const dialog = document.getElementById(targetId) || document.querySelector('.ui-command-backdrop');
      if (dialog) openCommandDialog(dialog);
      return;
    }

    // Close button
    const closeBtn = e.target.closest('[data-command-close]');
    if (closeBtn) {
      e.preventDefault();
      const dialog = closeBtn.closest('.ui-command-backdrop');
      if (dialog) closeCommandDialog(dialog);
      return;
    }

    // Direct click on command item
    const item = e.target.closest('.ui-command-item');
    if (item) {
      const dialog = item.closest('.ui-command-backdrop');
      if (dialog) closeCommandDialog(dialog);
    }
  });

  // Outside click dismissal
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('ui-command-backdrop')) {
      closeCommandDialog(e.target);
    }
  });

  // Global Keyboard Navigation & Shortcuts
  window.addEventListener('keydown', (e) => {
    const activeDialog = document.querySelector('.ui-command-backdrop.is-open');

    // 1. Global Toggle (Ctrl+K / Cmd+K)
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      const palette = document.querySelector('.ui-command-backdrop');
      if (palette) {
        e.preventDefault();
        if (palette.classList.contains('is-open')) {
          closeCommandDialog(palette);
        } else {
          openCommandDialog(palette);
        }
      }
      return;
    }

    // 2. Escape to close
    if (e.key === 'Escape') {
      if (activeDialog) {
        e.preventDefault();
        closeCommandDialog(activeDialog);
        return;
      }
    }

    if (!activeDialog) return;

    const visibleItems = getVisibleItems(activeDialog);
    const currentIndex = visibleItems.findIndex((item) => item.classList.contains('is-selected'));
    const input = activeDialog.querySelector('.ui-command-input');
    const isInputFocused = document.activeElement === input;

    // 3. Arrow Down Navigation
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = currentIndex === -1 ? 0 : currentIndex + 1;
      selectItemByIndex(visibleItems, nextIndex);
      return;
    }

    // 4. Arrow Up Navigation
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = currentIndex === -1 ? visibleItems.length - 1 : currentIndex - 1;
      selectItemByIndex(visibleItems, prevIndex);
      return;
    }

    // 5. Enter Key to Trigger Selected Item
    if (e.key === 'Enter') {
      e.preventDefault();
      const selected = visibleItems[currentIndex] || visibleItems[0];
      if (selected) {
        selected.click();
        closeCommandDialog(activeDialog);
      }
      return;
    }

    // 6. Single-key shortcuts (H, C, S, T, M) when input is empty
    if (!e.ctrlKey && !e.metaKey && !e.altKey && e.key.length === 1) {
      if (isInputFocused && input && input.value.trim() !== '') {
        // User is typing search query in input, don't hijack
        return;
      }

      const keyLower = e.key.toLowerCase();
      const matchingItem = visibleItems.find(
        (item) => item.getAttribute('data-command-key') === keyLower
      );

      if (matchingItem) {
        e.preventDefault();
        matchingItem.click();
        closeCommandDialog(activeDialog);
      }
    }
  });

  // 7. Live Real-Time Search & Filtering
  document.addEventListener('input', (e) => {
    if (!e.target.classList.contains('ui-command-input')) return;
    const input = e.target;
    const dialog = input.closest('.ui-command-backdrop');
    if (!dialog) return;

    const query = input.value.toLowerCase().trim();
    const items = Array.from(dialog.querySelectorAll('.ui-command-item'));
    const groups = Array.from(dialog.querySelectorAll('.ui-command-group'));
    const body = dialog.querySelector('.ui-command-body');

    let totalVisible = 0;

    items.forEach((item) => {
      const text = item.textContent.toLowerCase();
      const match = !query || text.includes(query);
      item.style.display = match ? 'flex' : 'none';
      if (match) totalVisible++;
    });

    groups.forEach((grp) => {
      const visibleInGrp = grp.querySelectorAll('.ui-command-item:not([style*="display: none"])');
      grp.style.display = visibleInGrp.length > 0 ? 'flex' : 'none';
    });

    // Handle Empty State
    let emptyMsg = dialog.querySelector('.ui-command-empty');
    if (totalVisible === 0) {
      if (!emptyMsg && body) {
        emptyMsg = document.createElement('div');
        emptyMsg.className = 'ui-command-empty';
        emptyMsg.style.cssText = 'text-align:center; padding:32px 16px; font-size:13px; color:var(--muted-foreground);';
        body.appendChild(emptyMsg);
      }
      if (emptyMsg) {
        emptyMsg.textContent = `No commands or components matching "${query}"`;
      }
    } else if (emptyMsg) {
      emptyMsg.remove();
    }

    // Auto-select first visible item
    const visible = getVisibleItems(dialog);
    visible.forEach((item, idx) => {
      item.classList.toggle('is-selected', idx === 0);
    });
  });

  // Mouse hover synchronization with keyboard selection
  document.addEventListener('mousemove', (e) => {
    const item = e.target.closest('.ui-command-item');
    if (item && !item.classList.contains('is-selected')) {
      const dialog = item.closest('.ui-command-backdrop');
      if (dialog) {
        dialog.querySelectorAll('.ui-command-item.is-selected').forEach((el) => {
          el.classList.remove('is-selected');
        });
        item.classList.add('is-selected');
      }
    }
  });
}
