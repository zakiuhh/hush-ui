/**
 * Hush UI - Before / After Comparison Slider Component
 */

export function updateComparePosition(compareEl, percentage) {
  const clamped = Math.max(0, Math.min(100, percentage));
  compareEl.style.setProperty('--clip-pos', `${clamped}%`);

  const rangeInput = compareEl.querySelector('.ui-compare-range');
  if (rangeInput && Math.abs(parseFloat(rangeInput.value) - clamped) > 0.5) {
    rangeInput.value = clamped;
  }
}

export function initCompare(container = document) {
  const compareElements = container.querySelectorAll
    ? container.querySelectorAll('.ui-compare')
    : document.querySelectorAll('.ui-compare');

  compareElements.forEach((compareEl) => {
    const rangeInput = compareEl.querySelector('.ui-compare-range');

    // 1. Native Range Slider Input (keyboard + touch + mouse fallback)
    if (rangeInput) {
      const onRangeChange = (e) => {
        updateComparePosition(compareEl, parseFloat(e.target.value));
      };
      rangeInput.removeEventListener('input', compareEl._onRangeInput || onRangeChange);
      compareEl._onRangeInput = onRangeChange;
      rangeInput.addEventListener('input', onRangeChange);
    }

    // 2. Direct Pointer & Touch Events on Container & Handle
    let isDragging = false;

    const setPosFromEvent = (e) => {
      const rect = compareEl.getBoundingClientRect();
      if (!rect.width) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const x = clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      updateComparePosition(compareEl, percentage);
    };

    const onPointerDown = (e) => {
      isDragging = true;
      compareEl.classList.add('is-dragging');
      setPosFromEvent(e);
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;
      setPosFromEvent(e);
    };

    const onPointerUp = () => {
      if (!isDragging) return;
      isDragging = false;
      compareEl.classList.remove('is-dragging');
    };

    compareEl.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);

    // Initial position sync (50%)
    const initVal = rangeInput ? parseFloat(rangeInput.value) : 50;
    updateComparePosition(compareEl, isNaN(initVal) ? 50 : initVal);
  });
}
