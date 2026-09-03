export function initSliders(container = document) {
  const root = container || document;
  root.querySelectorAll('.ui-slider').forEach((slider) => {
    const updateSlider = () => {
      const min = parseFloat(slider.min) || 0;
      const max = parseFloat(slider.max) || 100;
      const val = parseFloat(slider.value) || 0;
      const pct = ((val - min) / (max - min)) * 100;

      slider.style.setProperty('--slider-pct', `${pct}%`);

      // Update associated label if inside a container or stage
      const parent = slider.closest('.ui-slider-container, .ui-form-group, div');
      if (parent) {
        const valDisplay = parent.querySelector('#st-slider-val, #slider-val, .ui-slider-value');
        if (valDisplay) {
          valDisplay.textContent = `${Math.round(val)}%`;
        }
      }
    };

    slider.addEventListener('input', updateSlider);
    updateSlider();
  });
}
