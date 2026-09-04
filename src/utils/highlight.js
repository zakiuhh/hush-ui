/**
 * Hush UI - Syntax Highlighting & HTML Escaping Utilities
 */

/**
 * Safely escapes special HTML characters to prevent XSS and preserve code formatting.
 * @param {string} str - Raw string or code.
 * @returns {string} Escaped HTML string.
 */
export function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Lightweight, zero-dependency syntax highlighter for HTML, CSS, and JS snippets.
 * Wraps tokens in Hush UI syntax classes (.token-comment, .token-string, .token-keyword, etc.).
 * @param {string} code - The code snippet to highlight.
 * @param {'html' | 'css' | 'js' | string} lang - The language mode.
 * @returns {string} Tokenized HTML snippet.
 */
export function highlightCode(code, lang) {
  if (!code) return '// No code snippet provided';

  if (lang === 'html') {
    let escaped = escapeHtml(code);
    // HTML Comments
    escaped = escaped.replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="token-comment">$1</span>');
    // HTML Tags & Attributes
    escaped = escaped.replace(/(&lt;\/?)([a-zA-Z0-9\-]+)([\s\S]*?)(\/?&gt;)/g, (match, p1, p2, p3, p4) => {
      const attrs = p3.replace(/([a-zA-Z0-9\-:@]+)(=)(&quot;.*?&quot;|&#39;.*?&#39;|"[^"]*"|'[^']*')?/g, (m, aName, eq, aVal) => {
        return `<span class="token-attr">${aName}</span>${eq || ''}${aVal ? `<span class="token-string">${aVal}</span>` : ''}`;
      });
      return `<span class="token-punct">${p1}</span><span class="token-tag">${p2}</span>${attrs}<span class="token-punct">${p4}</span>`;
    });
    return escaped;
  }

  if (lang === 'css') {
    let escaped = escapeHtml(code);
    // Comments
    escaped = escaped.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="token-comment">$1</span>');
    // CSS Properties and values
    escaped = escaped.replace(/([a-zA-Z0-9\-_]+)(\s*:)([^;{}]+)(;?)/g, (match, prop, colon, val, semi) => {
      const valHighlighted = val
        .replace(/(#[a-fA-F0-9]{3,8}|var\([^)]+\)|rgba?\([^)]+\)|color-mix\([^)]+\)|calc\([^)]+\)|cubic-bezier\([^)]+\))/g, '<span class="token-function">$1</span>')
        .replace(/\b(\d+(?:\.\d+)?(?:px|rem|em|%|ms|s|deg|vw|vh)?)\b/g, '<span class="token-number">$1</span>');
      return `<span class="token-property">${prop}</span><span class="token-punct">${colon}</span>${valHighlighted}<span class="token-punct">${semi}</span>`;
    });
    // Selectors
    escaped = escaped.replace(/([^{}]+)(?=\{)/g, '<span class="token-selector">$1</span>');
    return escaped;
  }

  if (lang === 'js') {
    let escaped = escapeHtml(code);
    // Comments
    escaped = escaped.replace(/(\/\/[^\n]*|\/\*[\s\S]*?\*\/)/g, '<span class="token-comment">$1</span>');
    // Strings
    escaped = escaped.replace(/('(?:\\'|[^'])*'|"(?:\\"|[^"])*"|`(?:\\`|[^`])*`)/g, '<span class="token-string">$1</span>');
    // Keywords
    const keywords = /\b(import|export|from|function|return|const|let|var|if|else|switch|case|break|default|new|this|async|await|try|catch|finally|throw|class|extends|typeof|instanceof|void|null|undefined|true|false)\b/g;
    escaped = escaped.replace(keywords, '<span class="token-keyword">$1</span>');
    // Function calls
    escaped = escaped.replace(/\b([a-zA-Z0-9_$]+)(?=\()/g, '<span class="token-function">$1</span>');
    // Numbers
    escaped = escaped.replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="token-number">$1</span>');
    return escaped;
  }

  return escapeHtml(code);
}
