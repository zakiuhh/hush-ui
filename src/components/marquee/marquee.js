export function initMarquee(container = document) {
  const root = container || document;
  root.querySelectorAll('.ui-marquee').forEach((marquee) => {
    const tracks = marquee.querySelectorAll('.ui-marquee-track');
    if (tracks.length === 1) {
      const clone = tracks[0].cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      marquee.appendChild(clone);
    }
  });
}
