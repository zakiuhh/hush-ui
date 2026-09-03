/**
 * Hush UI - Animated Number Ticker Component
 */
export function initTickers(container = document) {
  const tickers = container.querySelectorAll('[data-ticker]');

  tickers.forEach((ticker) => {
    const target = parseFloat(ticker.getAttribute('data-ticker-target') || '0');
    const duration = parseInt(ticker.getAttribute('data-ticker-duration') || '1500', 10);
    const numEl = ticker.querySelector('.ui-ticker-number') || ticker;

    function runAnimation() {
      const startTime = performance.now();
      const startVal = 0;

      function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Spring easeOutQuart
        const ease = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(startVal + (target - startVal) * ease);

        numEl.textContent = current.toLocaleString();

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          numEl.textContent = target.toLocaleString();
        }
      }

      requestAnimationFrame(update);
    }

    runAnimation();

    const replayBtn = ticker.closest('.ui-ticker-card')?.querySelector('.ui-ticker-replay-btn') || ticker.querySelector('.ui-ticker-replay-btn');
    if (replayBtn) {
      replayBtn.addEventListener('click', runAnimation);
    }
  });
}
