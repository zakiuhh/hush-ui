/**
 * Hush UI - Interactive Sparkline & Mini Trend Chart
 */

export function initSparkline(container = document) {
  const sparklines = container.querySelectorAll
    ? container.querySelectorAll('.ui-sparkline')
    : document.querySelectorAll('.ui-sparkline');

  sparklines.forEach((sparkline, sparkIdx) => {
    if (sparkline.dataset.sparklineInitialized === 'true') return;
    sparkline.dataset.sparklineInitialized = 'true';

    // Parse data points
    let rawData = sparkline.dataset.values || '';
    let values = [];
    if (rawData) {
      try {
        values = rawData.startsWith('[') ? JSON.parse(rawData) : rawData.split(',').map(v => parseFloat(v.trim()));
      } catch (e) {
        values = rawData.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
      }
    }

    if (!values || values.length === 0) {
      values = [24, 38, 29, 45, 52, 48, 65, 59, 78, 85, 82, 96];
    }

    const prefix = sparkline.dataset.prefix || '';
    const suffix = sparkline.dataset.suffix || '';
    const showPeaks = sparkline.dataset.showPeaks === 'true';
    const showLabels = sparkline.dataset.showLabels === 'true';
    const width = 300;
    const height = 80;
    const padding = 8;

    const minVal = Math.min(...values);
    const maxVal = Math.max(...values);
    const range = maxVal - minVal || 1;

    // Coordinate mapping
    const points = values.map((val, idx) => {
      const x = padding + (idx / (values.length - 1)) * (width - padding * 2);
      const y = height - padding - ((val - minVal) / range) * (height - padding * 2);
      return { x, y, val, idx };
    });

    // Smooth Bezier Curve Path Builder
    function getBezierPath(pts) {
      if (pts.length < 2) return '';
      let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
      for (let i = 0; i < pts.length - 1; i++) {
        const p0 = pts[i === 0 ? 0 : i - 1];
        const p1 = pts[i];
        const p2 = pts[i + 1];
        const p3 = pts[i + 2] || p2;

        const cp1x = p1.x + (p2.x - p0.x) / 6;
        const cp1y = p1.y + (p2.y - p0.y) / 6;
        const cp2x = p2.x - (p3.x - p1.x) / 6;
        const cp2y = p2.y - (p3.y - p1.y) / 6;

        d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
      }
      return d;
    }

    const linePathD = getBezierPath(points);
    const areaPathD = `${linePathD} L ${points[points.length - 1].x.toFixed(1)} ${height} L ${points[0].x.toFixed(1)} ${height} Z`;

    const gradId = `sparkline-grad-${Math.random().toString(36).slice(2, 9)}`;

    // Peak points
    let peakDotsHtml = '';
    if (showPeaks) {
      const maxPt = points.reduce((prev, curr) => (curr.val > prev.val ? curr : prev), points[0]);
      const minPt = points.reduce((prev, curr) => (curr.val < prev.val ? curr : prev), points[0]);
      peakDotsHtml = `
        <circle class="ui-sparkline-peak-dot" cx="${maxPt.x}" cy="${maxPt.y}" />
        <circle class="ui-sparkline-peak-dot" cx="${minPt.x}" cy="${minPt.y}" />
      `;
    }

    sparkline.innerHTML = `
      <div class="ui-sparkline-canvas-wrap">
        <svg class="ui-sparkline-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">
          <defs>
            <linearGradient id="${gradId}" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="currentColor" stop-opacity="0.32" />
              <stop offset="100%" stop-color="currentColor" stop-opacity="0.0" />
            </linearGradient>
          </defs>
          <path class="ui-sparkline-area" fill="url(#${gradId})" d="${areaPathD}" />
          <path class="ui-sparkline-line" d="${linePathD}" />
          ${peakDotsHtml}
        </svg>
        <div class="ui-sparkline-crosshair"></div>
        <div class="ui-sparkline-dot"></div>
        <div class="ui-sparkline-tooltip"></div>
      </div>
    `;

    const wrap = sparkline.querySelector('.ui-sparkline-canvas-wrap');
    const crosshair = sparkline.querySelector('.ui-sparkline-crosshair');
    const dot = sparkline.querySelector('.ui-sparkline-dot');
    const tooltip = sparkline.querySelector('.ui-sparkline-tooltip');

    wrap.addEventListener('mouseenter', () => {
      wrap.classList.add('is-hovered');
    });

    wrap.addEventListener('mouseleave', () => {
      wrap.classList.remove('is-hovered');
    });

    wrap.addEventListener('mousemove', (e) => {
      const rect = wrap.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const pct = Math.max(0, Math.min(1, mouseX / rect.width));
      
      // Find nearest point
      const targetX = padding + pct * (width - padding * 2);
      let closest = points[0];
      let minDist = Math.abs(points[0].x - targetX);
      for (let i = 1; i < points.length; i++) {
        const dist = Math.abs(points[i].x - targetX);
        if (dist < minDist) {
          minDist = dist;
          closest = points[i];
        }
      }

      // Convert point coords to percentages of wrapper
      const dotLeftPct = (closest.x / width) * 100;
      const dotTopPct = (closest.y / height) * 100;

      crosshair.style.left = `${dotLeftPct}%`;
      dot.style.left = `${dotLeftPct}%`;
      dot.style.top = `${dotTopPct}%`;

      const formattedVal = `${prefix}${typeof closest.val === 'number' && !Number.isInteger(closest.val) ? closest.val.toFixed(1) : closest.val}${suffix}`;
      tooltip.textContent = formattedVal;
      tooltip.style.left = `${dotLeftPct}%`;

      sparkline.dispatchEvent(new CustomEvent('sparkline:hover', {
        bubbles: true,
        detail: { index: closest.idx, value: closest.val, point: closest }
      }));
    });
  });
}
