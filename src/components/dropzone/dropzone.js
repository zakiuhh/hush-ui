/**
 * Hush UI - Interactive Dropzone Component
 */
export function initDropzone(container = document) {
  const dropzones = container.querySelectorAll('.ui-dropzone');

  dropzones.forEach((dz) => {
    const input = dz.querySelector('.ui-dropzone-input');
    const fileList = dz.parentElement?.querySelector('.ui-dropzone-filelist') || dz.querySelector('.ui-dropzone-filelist');

    if (!input) return;

    ['dragenter', 'dragover'].forEach((eventName) => {
      dz.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dz.classList.add('is-dragover');
      });
    });

    ['dragleave', 'drop'].forEach((eventName) => {
      dz.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dz.classList.remove('is-dragover');
      });
    });

    dz.addEventListener('drop', (e) => {
      const files = e.dataTransfer?.files;
      if (files?.length) {
        handleFiles(files, fileList);
      }
    });

    input.addEventListener('change', () => {
      if (input.files?.length) {
        handleFiles(input.files, fileList);
      }
    });
  });

  function handleFiles(files, fileListContainer) {
    if (!fileListContainer) return;

    Array.from(files).forEach((file) => {
      const item = document.createElement('div');
      item.className = 'ui-dropzone-file-item';
      const sizeFormatted = (file.size / 1024).toFixed(1) + ' KB';

      item.innerHTML = `
        <div class="ui-dropzone-file-info">
          <svg class="lucide lucide-file" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--primary);"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>
          <div>
            <div class="ui-dropzone-file-name" title="${file.name}">${file.name}</div>
            <span class="ui-dropzone-file-size">${sizeFormatted}</span>
          </div>
        </div>
        <button class="ui-dropzone-remove-btn" type="button" aria-label="Remove file">
          <svg class="lucide lucide-trash-2" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
        </button>
      `;

      item.querySelector('.ui-dropzone-remove-btn')?.addEventListener('click', (e) => {
        e.stopPropagation();
        item.style.opacity = '0';
        item.style.transform = 'scale(0.9)';
        setTimeout(() => item.remove(), 150);
      });

      fileListContainer.appendChild(item);
    });
  }
}
