import { showToast } from '../components/toast/toast.js';

/**
 * Copies text to system clipboard and triggers a contextual Hush UI toast notification.
 * @param {string} text - The text string to copy.
 * @param {string} [successMessage='Copied to clipboard!'] - Contextual feedback message.
 * @returns {Promise<boolean>}
 */
export async function copyToClipboard(text, successMessage = 'Copied to clipboard!') {
  if (!text) return false;

  try {
    await navigator.clipboard.writeText(text);
    showToast({
      title: 'Copied',
      message: successMessage,
      type: 'success',
      duration: 2500
    });
    return true;
  } catch {
    // Fallback for browsers / iframes restricting clipboard API
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);

      showToast({
        title: 'Copied',
        message: successMessage,
        type: 'success',
        duration: 2500
      });
      return true;
    } catch {
      showToast({
        title: 'Copy Failed',
        message: 'Unable to access clipboard.',
        type: 'destructive',
        duration: 3000
      });
      return false;
    }
  }
}
