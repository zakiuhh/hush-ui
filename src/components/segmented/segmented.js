/**
 * Hush UI - Segmented Control Component
 */

export function updateSegmentedIndicator(controlEl, shouldScrollToCenter = false) {
  const activeItem = controlEl.querySelector('.ui-segmented-item.is-active');
  let indicator = controlEl.querySelector('.ui-segmented-indicator');

  if (!indicator) {
    indicator = document.createElement('div');
    indicator.className = 'ui-segmented-indicator';
    controlEl.prepend(indicator);
  }

  if (activeItem) {
    indicator.style.width = `${activeItem.offsetWidth}px`;
    indicator.style.transform = `translateX(${activeItem.offsetLeft}px)`;
    indicator.style.display = 'block';

    if (shouldScrollToCenter && controlEl.scrollWidth > controlEl.clientWidth) {
      const targetLeft = activeItem.offsetLeft - (controlEl.clientWidth / 2) + (activeItem.offsetWidth / 2);
      controlEl.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: 'smooth'
      });
    }
  } else {
    indicator.style.display = 'none';
  }
}

export function initSegmentedControls(container = document) {
  const controls = container.querySelectorAll
    ? container.querySelectorAll('.ui-segmented-control')
    : document.querySelectorAll('.ui-segmented-control');

  controls.forEach((controlEl) => {
    const items = Array.from(controlEl.querySelectorAll('.ui-segmented-item:not(:disabled)'));
    if (!items.length) return;

    // Ensure indicator exists and is aligned
    updateSegmentedIndicator(controlEl, false);

    items.forEach((item, index) => {
      // Click selection
      item.addEventListener('click', () => {
        items.forEach((el) => {
          el.classList.remove('is-active');
          el.setAttribute('aria-selected', 'false');
        });
        item.classList.add('is-active');
        item.setAttribute('aria-selected', 'true');

        // Update indicator position and center active tab into view on mobile/overflow
        updateSegmentedIndicator(controlEl, true);

        // Dispatch custom change event
        controlEl.dispatchEvent(
          new CustomEvent('change', {
            detail: { value: item.dataset.value || item.textContent.trim(), index }
          })
        );
      });

      // Keyboard navigation (ArrowLeft, ArrowRight, Home, End)
      item.addEventListener('keydown', (e) => {
        let newIndex = index;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          newIndex = (index + 1) % items.length;
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          newIndex = (index - 1 + items.length) % items.length;
        } else if (e.key === 'Home') {
          e.preventDefault();
          newIndex = 0;
        } else if (e.key === 'End') {
          e.preventDefault();
          newIndex = items.length - 1;
        }

        if (newIndex !== index) {
          items[newIndex].click();
          items[newIndex].focus();
        }
      });
    });

    // ResizeObserver to recalibrate indicator on window/card resize
    if (window.ResizeObserver) {
      const ro = new ResizeObserver(() => {
        updateSegmentedIndicator(controlEl, false);
      });
      ro.observe(controlEl);
    }
  });
}
