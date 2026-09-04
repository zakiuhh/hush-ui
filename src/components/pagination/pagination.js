/**
 * Hush UI - Tactile Pagination Controller
 */

export function initPagination(container = document) {
  const paginations = container.querySelectorAll
    ? container.querySelectorAll('.ui-pagination')
    : document.querySelectorAll('.ui-pagination');

  paginations.forEach((pagination) => {
    if (pagination.dataset.paginationInitialized === 'true') return;
    pagination.dataset.paginationInitialized = 'true';

    const track = pagination.querySelector('.ui-pagination-track');
    const prevBtn = pagination.querySelector('.ui-pagination-prev');
    const nextBtn = pagination.querySelector('.ui-pagination-next');
    const jumpInput = pagination.querySelector('.ui-pagination-input');
    const sizeSelect = pagination.querySelector('.ui-pagination-size');
    const infoText = pagination.querySelector('.ui-pagination-info-text');

    let currentPage = parseInt(pagination.dataset.page || '1', 10);
    let totalPages = parseInt(pagination.dataset.totalPages || '10', 10);
    let pageSize = parseInt(pagination.dataset.pageSize || '10', 10);

    function renderPages() {
      if (!track) return;

      // Keep prev & next buttons, replace page pills
      const oldPills = track.querySelectorAll('.ui-pagination-btn:not(.ui-pagination-btn--nav), .ui-pagination-ellipsis');
      oldPills.forEach((p) => p.remove());

      const maxVisible = 5;
      let pages = [];

      if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
      } else {
        if (currentPage <= 3) {
          pages = [1, 2, 3, 4, '...', totalPages];
        } else if (currentPage >= totalPages - 2) {
          pages = [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
        } else {
          pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
        }
      }

      pages.forEach((p) => {
        if (p === '...') {
          const ellipsis = document.createElement('span');
          ellipsis.className = 'ui-pagination-ellipsis';
          ellipsis.textContent = '…';
          if (nextBtn) track.insertBefore(ellipsis, nextBtn);
          else track.appendChild(ellipsis);
        } else {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = `ui-pagination-btn ${p === currentPage ? 'is-active' : ''}`;
          btn.textContent = p;
          btn.dataset.page = p;

          btn.addEventListener('click', () => {
            setPage(p);
          });

          if (nextBtn) track.insertBefore(btn, nextBtn);
          else track.appendChild(btn);
        }
      });

      // Update Prev / Next button disabled state
      if (prevBtn) prevBtn.disabled = currentPage <= 1;
      if (nextBtn) nextBtn.disabled = currentPage >= totalPages;

      // Update info summary
      if (infoText) {
        infoText.textContent = `Page ${currentPage} of ${totalPages}`;
      }

      if (jumpInput) {
        jumpInput.value = currentPage;
      }
    }

    function setPage(p) {
      const target = Math.max(1, Math.min(totalPages, p));
      if (target !== currentPage) {
        currentPage = target;
        pagination.dataset.page = currentPage;
        renderPages();

        const event = new CustomEvent('page-change', {
          bubbles: true,
          detail: { page: currentPage, totalPages, pageSize }
        });
        pagination.dispatchEvent(event);
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (currentPage > 1) setPage(currentPage - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) setPage(currentPage + 1);
      });
    }

    if (jumpInput) {
      jumpInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const val = parseInt(jumpInput.value, 10);
          if (!isNaN(val)) setPage(val);
        }
      });
    }

    if (sizeSelect) {
      sizeSelect.addEventListener('change', () => {
        pageSize = parseInt(sizeSelect.value, 10);
        pagination.dataset.pageSize = pageSize;
        const event = new CustomEvent('size-change', {
          bubbles: true,
          detail: { pageSize, page: currentPage }
        });
        pagination.dispatchEvent(event);
      });
    }

    renderPages();
  });
}
