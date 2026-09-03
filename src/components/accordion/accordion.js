export function initAccordions() {
  document.addEventListener('click', (e) => {
    const header = e.target.closest('.ui-accordion-header');
    if (!header) return;

    const item = header.closest('.ui-accordion-item');
    const content = item.querySelector('.ui-accordion-content');
    const isOpen = item.classList.contains('is-open');

    if (isOpen) {
      content.style.maxHeight = null;
      item.classList.remove('is-open');
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      item.classList.add('is-open');
    }
  });
}
