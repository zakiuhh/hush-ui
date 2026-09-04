/**
 * Updates the document favicon to match the active theme.
 * Uses dark coil icon for dark theme, light coil icon for light theme.
 * @param {boolean} isDark 
 */
export function updateFavicon(isDark) {
  if (typeof document === 'undefined') return;
  const iconHref = isDark ? '/assets/hush-ui-icon-coil-dark.svg' : '/assets/hush-ui-icon-coil-light.svg';
  
  let favicon = document.getElementById('app-favicon');
  if (!favicon) {
    favicon = document.querySelector("link[rel*='icon']");
  }
  
  if (favicon) {
    favicon.href = iconHref;
  } else {
    favicon = document.createElement('link');
    favicon.id = 'app-favicon';
    favicon.rel = 'icon';
    favicon.type = 'image/svg+xml';
    favicon.href = iconHref;
    document.head.appendChild(favicon);
  }
}

export function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;
  const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

  document.documentElement.classList.toggle('dark', isDark);
  updateFavicon(isDark);

  if (typeof window !== 'undefined' && !window._themeMediaListenerAttached && window.matchMedia) {
    window._themeMediaListenerAttached = true;
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        document.documentElement.classList.toggle('dark', e.matches);
        updateFavicon(e.matches);
      }
    });
  }
}

export function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateFavicon(isDark);
  return isDark;
}

