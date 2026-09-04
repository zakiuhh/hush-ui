/**
 * Hush UI - High-Density Metric Tile
 */
import { initSparkline } from '../sparkline/sparkline.js';

export function initMetricTile(container = document) {
  const tiles = container.querySelectorAll
    ? container.querySelectorAll('.ui-metric-tile')
    : document.querySelectorAll('.ui-metric-tile');

  tiles.forEach((tile) => {
    if (tile.dataset.metricTileInitialized === 'true') return;
    tile.dataset.metricTileInitialized = 'true';

    const periodBtns = tile.querySelectorAll('.ui-metric-period-btn');
    const valueEl = tile.querySelector('.ui-metric-value');
    const trendEl = tile.querySelector('.ui-metric-trend');
    const subtitleEl = tile.querySelector('.ui-metric-subtitle');
    const sparklineEl = tile.querySelector('.ui-sparkline');

    let periodsData = null;
    if (tile.dataset.periodsData) {
      try {
        periodsData = JSON.parse(tile.dataset.periodsData);
      } catch (e) {
        // Fallback if not valid JSON
      }
    }

    periodBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('is-active')) return;

        periodBtns.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        const periodKey = btn.dataset.period || btn.textContent.trim().toLowerCase();

        if (periodsData && periodsData[periodKey]) {
          const data = periodsData[periodKey];

          // Smooth fade transition for values
          if (valueEl && data.value) {
            valueEl.style.opacity = '0.3';
            valueEl.style.transform = 'translateY(2px)';
            setTimeout(() => {
              valueEl.textContent = data.value;
              valueEl.style.opacity = '1';
              valueEl.style.transform = 'translateY(0)';
            }, 100);
          }

          if (trendEl && data.trend) {
            trendEl.className = 'ui-metric-trend';
            const type = data.trendType || (data.trend.startsWith('+') ? 'positive' : data.trend.startsWith('-') ? 'negative' : 'neutral');
            trendEl.classList.add(`ui-metric-trend--${type}`);

            const iconSvg = type === 'positive'
              ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>`
              : type === 'negative'
              ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>`
              : '';

            trendEl.innerHTML = `${iconSvg} ${data.trend}`;
          }

          if (subtitleEl && data.subtitle) {
            subtitleEl.textContent = data.subtitle;
          }

          if (sparklineEl && data.sparkline) {
            sparklineEl.dataset.values = JSON.stringify(data.sparkline);
            sparklineEl.removeAttribute('data-sparkline-initialized');
            initSparkline(tile);
          }

          tile.dispatchEvent(new CustomEvent('metric-tile:change', {
            bubbles: true,
            detail: { period: periodKey, data }
          }));
        } else {
          tile.dispatchEvent(new CustomEvent('metric-tile:change', {
            bubbles: true,
            detail: { period: periodKey }
          }));
        }
      });
    });
  });
}
