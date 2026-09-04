/**
 * Hush UI - Floating Table of Contents / ScrollSpy Controller
 */

export function initToc(container = document) {
  const tocs = container.querySelectorAll
    ? container.querySelectorAll('.ui-toc')
    : document.querySelectorAll('.ui-toc');

  tocs.forEach((toc) => {
    if (toc.dataset.tocInitialized === 'true') return;
    toc.dataset.tocInitialized = 'true';

    const items = toc.querySelectorAll('.ui-toc-item');
    const links = toc.querySelectorAll('.ui-toc-link');
    const list = toc.querySelector('.ui-toc-list');
    const progressEl = toc.querySelector('.ui-toc-progress-text');

    // Create moving spring marker if not present
    let marker = toc.querySelector('.ui-toc-marker');
    if (!marker && list) {
      marker = document.createElement('div');
      marker.className = 'ui-toc-marker';
      list.appendChild(marker);
    }

    function setActiveItem(targetItem) {
      if (!targetItem) return;
      items.forEach((item) => item.classList.remove('is-active'));
      targetItem.classList.add('is-active');

      // Move marker to active item
      if (marker && list) {
        const itemRect = targetItem.getBoundingClientRect();
        const listRect = list.getBoundingClientRect();
        const topOffset = targetItem.offsetTop;
        marker.style.transform = `translateY(${topOffset}px)`;
        marker.style.height = `${itemRect.height}px`;
      }
    }

    // Smooth click handler
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetEl = document.querySelector(href);
          const parentItem = link.closest('.ui-toc-item');
          setActiveItem(parentItem);

          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });

    // ScrollSpy observer
    const targetIds = Array.from(links)
      .map((l) => l.getAttribute('href'))
      .filter((h) => h && h.startsWith('#'))
      .map((h) => h.slice(1));

    const targets = targetIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (targets.length > 0 && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.id;
              const matchingLink = toc.querySelector(`.ui-toc-link[href="#${id}"]`);
              if (matchingLink) {
                const parentItem = matchingLink.closest('.ui-toc-item');
                setActiveItem(parentItem);
              }
            }
          });
        },
        { rootMargin: '-20% 0px -70% 0px' }
      );

      targets.forEach((t) => observer.observe(t));
    }

    // Global reading scroll progress
    window.addEventListener(
      'scroll',
      () => {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight > 0 && progressEl) {
          const scrolled = Math.min(100, Math.max(0, Math.round((window.scrollY / docHeight) * 100)));
          progressEl.textContent = `${scrolled}%`;
        }
      },
      { passive: true }
    );

    // Initial positioning
    const activeItem = toc.querySelector('.ui-toc-item.is-active') || items[0];
    if (activeItem) {
      setTimeout(() => setActiveItem(activeItem), 50);
    }
  });
}
