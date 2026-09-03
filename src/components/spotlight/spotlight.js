let isSpotlightInitialized = false;

export function initSpotlight() {
  if (isSpotlightInitialized) return;
  isSpotlightInitialized = true;

  document.addEventListener('mousemove', (e) => {
    const card = e.target.closest('.ui-spotlight-card');
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
}
