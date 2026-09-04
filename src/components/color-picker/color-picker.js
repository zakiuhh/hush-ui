/**
 * Hush UI - Color Swatch & Hue Picker Component
 */
import { copyToClipboard } from '../../utils/clipboard.js';

function hslToHex(h, s, l) {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
}

export function setColor(pickerEl, hex) {
  const dot = pickerEl.querySelector('.ui-color-preview-dot');
  const hexText = pickerEl.querySelector('.ui-color-hex-text');

  if (dot) dot.style.backgroundColor = hex;
  if (hexText) hexText.textContent = hex;

  pickerEl.dispatchEvent(
    new CustomEvent('colorchange', {
      detail: { hex }
    })
  );
}

export function initColorPickers(container = document) {
  const pickers = container.querySelectorAll
    ? container.querySelectorAll('.ui-color-picker')
    : document.querySelectorAll('.ui-color-picker');

  pickers.forEach((pickerEl) => {
    const swatches = pickerEl.querySelectorAll('.ui-color-swatch-btn');
    const hueBar = pickerEl.querySelector('.ui-color-hue-bar');
    const hueThumb = pickerEl.querySelector('.ui-color-hue-thumb');
    const copyBtn = pickerEl.querySelector('.ui-color-copy-btn');
    const hexText = pickerEl.querySelector('.ui-color-hex-text');

    // 1. Swatch Click
    swatches.forEach((swatch) => {
      swatch.addEventListener('click', () => {
        swatches.forEach((s) => s.classList.remove('is-active'));
        swatch.classList.add('is-active');
        const color = swatch.dataset.color;
        if (color) setColor(pickerEl, color);
      });
    });

    // 2. Hue Slider Dragging
    if (hueBar && hueThumb) {
      let isDragging = false;

      const updateHue = (e) => {
        const rect = hueBar.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
        const percentage = x / rect.width;
        const hue = Math.round(percentage * 360);

        hueThumb.style.left = `${percentage * 100}%`;
        const hex = hslToHex(hue, 70, 75); // Calibrated soft saturation & lightness for Hush UI

        swatches.forEach((s) => s.classList.remove('is-active'));
        setColor(pickerEl, hex);
      };

      hueBar.addEventListener('pointerdown', (e) => {
        isDragging = true;
        updateHue(e);
      });

      window.addEventListener('pointermove', (e) => {
        if (!isDragging) return;
        updateHue(e);
      });

      window.addEventListener('pointerup', () => {
        isDragging = false;
      });
    }

    // 3. One-Click Copy Hex
    if (copyBtn && hexText) {
      copyBtn.addEventListener('click', async () => {
        const text = hexText.textContent.trim();
        const ok = await copyToClipboard(text, `Hex ${text} copied`);
        if (ok) {
          const originalText = copyBtn.textContent;
          copyBtn.textContent = 'Copied!';
          setTimeout(() => {
            copyBtn.textContent = originalText;
          }, 1500);
        }
      });
    }
  });
}
