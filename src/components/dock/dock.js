let isDockInitialized = false;

export function initDock() {
  if (isDockInitialized) return;
  isDockInitialized = true;

  document.querySelectorAll('.ui-dock').forEach((dock) => {
    const items = Array.from(dock.querySelectorAll('.ui-dock-item'));
    const maxDistance = 140;
    const maxScale = 1.45;

    const onMouseMove = (e) => {
      const mouseX = e.clientX;

      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemCenterX = rect.left + rect.width / 2;
        const dist = Math.abs(mouseX - itemCenterX);

        if (dist < maxDistance) {
          const factor = (1 - dist / maxDistance) * (maxScale - 1);
          const scale = 1 + factor;
          item.style.transform = `scale(${scale.toFixed(3)}) translateY(-${(factor * 12).toFixed(1)}px)`;
        } else {
          item.style.transform = 'scale(1) translateY(0)';
        }
      });
    };

    const onMouseLeave = () => {
      items.forEach((item) => {
        item.style.transform = 'scale(1) translateY(0)';
      });
    };

    dock.addEventListener('mousemove', onMouseMove);
    dock.addEventListener('mouseleave', onMouseLeave);
  });
}
