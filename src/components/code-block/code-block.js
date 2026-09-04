/**
 * Hush UI - Code Block & File Tree Component
 */
import { copyToClipboard } from '../../utils/clipboard.js';

export function initCodeBlocks(container = document) {
  const blocks = container.querySelectorAll('.ui-code-block');

  blocks.forEach((block) => {
    const tabs = block.querySelectorAll('.ui-code-file-tab');
    const copyBtn = block.querySelector('.ui-code-copy-btn');
    const codeEl = block.querySelector('.ui-code-block-content code');

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => t.classList.remove('is-active'));
        tab.classList.add('is-active');
        const fileContent = tab.getAttribute('data-code');
        if (fileContent && codeEl) {
          codeEl.textContent = fileContent;
        }
      });
    });

    if (copyBtn && codeEl) {
      copyBtn.addEventListener('click', async () => {
        const text = codeEl.textContent || '';
        const ok = await copyToClipboard(text, 'Code snippet copied');
        if (ok) {
          copyBtn.classList.add('is-copied');
          const btnText = copyBtn.querySelector('span');
          const prevText = btnText ? btnText.textContent : 'Copy';
          if (btnText) btnText.textContent = 'Copied!';
          setTimeout(() => {
            copyBtn.classList.remove('is-copied');
            if (btnText) btnText.textContent = prevText;
          }, 2000);
        }
      });
    }
  });
}
