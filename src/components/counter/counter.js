/**
 * Smoothly animates a numeric stat roller / odometer.
 * @param {HTMLElement} element The .ui-counter element
 * @param {number|string} targetValue Target numeric value
 */
export function animateCounter(element, targetValue) {
  if (!element) return;
  const roller = element.querySelector('.ui-counter-roller');
  if (!roller) return;

  const targetStr = String(targetValue);
  const chars = targetStr.split('');

  // Find existing digit columns
  const existingCols = Array.from(roller.querySelectorAll('.ui-counter-col'));

  // If column count has changed or roller is empty, rebuild DOM structure
  if (existingCols.length !== chars.length) {
    roller.innerHTML = chars.map((char) => {
      if (isNaN(char) || char === ' ') {
        return `<span class="ui-counter-char">${char}</span>`;
      }
      return `
        <span class="ui-counter-col">
          <span class="ui-counter-ribbon" data-digit="${char}">
            <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
            <span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
          </span>
        </span>
      `;
    }).join('');

    // Trigger cascading slide-in with spring physics
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const ribbons = roller.querySelectorAll('.ui-counter-ribbon');
        ribbons.forEach((ribbon, i) => {
          const digit = parseInt(ribbon.getAttribute('data-digit'), 10);
          ribbon.style.transitionDelay = `${i * 55}ms`;
          ribbon.style.transform = `translateY(-${digit * 10}%)`;
        });
      });
    });
  } else {
    // Smoothly animate existing columns to their new digit positions
    existingCols.forEach((col, i) => {
      const char = chars[i];
      const ribbon = col.querySelector('.ui-counter-ribbon');
      if (ribbon && !isNaN(char)) {
        const digit = parseInt(char, 10);
        ribbon.setAttribute('data-digit', char);
        ribbon.style.transitionDelay = `${i * 40}ms`;
        ribbon.style.transform = `translateY(-${digit * 10}%)`;
      }
    });
  }
}

let isCountersInitialized = false;

/**
 * Initializes all animated counters with data attributes on the page.
 */
export function initCounters() {
  document.querySelectorAll('[data-counter-target]').forEach((counter) => {
    const val = counter.getAttribute('data-counter-target') || '0';
    if (!counter.dataset.currentValue) {
      counter.dataset.currentValue = val;
      animateCounter(counter, val);
    }
  });

  if (isCountersInitialized) return;
  isCountersInitialized = true;

  // Global increment / decrement click handler
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-counter-increment]');
    if (!btn) return;
    const targetId = btn.getAttribute('data-counter-increment');
    const counter = (targetId ? document.getElementById(targetId) : null) || btn.closest('.ui-counter-card')?.querySelector('.ui-counter');
    if (counter) {
      const current = parseInt(counter.dataset.currentValue || '1248', 10);
      const amount = parseInt(btn.dataset.amount || '1', 10);
      const next = current + amount;
      counter.dataset.currentValue = next;
      animateCounter(counter, next);
    }
  });

  // Global randomize click handler
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-counter-random]');
    if (!btn) return;
    const targetId = btn.getAttribute('data-counter-random');
    const counter = (targetId ? document.getElementById(targetId) : null) || btn.closest('.ui-counter-card')?.querySelector('.ui-counter');
    if (counter) {
      const randomVal = Math.floor(1000 + Math.random() * 9000);
      counter.dataset.currentValue = randomVal;
      animateCounter(counter, randomVal);
    }
  });
}
