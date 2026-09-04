import '../index.css';
import './components.css';
import { COMPONENT_REGISTRY } from '../data/registry.js';
import {
  initHushUI,
  toggleTheme,
  showToast,
  initCommandPalette,
  initCombobox,
  initCounters,
  initCompare,
  initMarquee,
  initSpotlight,
  initDock,
  initSliders,
  initDropzone,
  initCodeBlocks,
  initTickers,
  initTreeViews,
  initRatings,
  initSegmentedControls,
  initColorPickers,
  initContextMenu,
  initOtpInput,
  initAudioPlayer,
  initTagInput,
  initPasswordMeter,
  initDatePicker,
  initInlineEdit,
  initToc,
  initPagination,
  initSparkline,
  initMetricTile,
  initCarousel
} from '../index.js';

// Expose toast triggers for interactive preview demos
window.triggerStageToast = (type = 'default') => {
  const configs = {
    default: {
      title: 'System Notice',
      message: 'Hush UI design tokens and spring physics active.',
      type: 'default'
    },
    success: {
      title: 'Workspace Synced',
      message: 'All component styles and spring curves applied.',
      type: 'success'
    },
    destructive: {
      title: 'Action Triggered',
      message: 'Contextual notification fired inside the interactive stage.',
      type: 'destructive'
    }
  };
  showToast(configs[type] || configs.default);
};

window.triggerActionToast = () => {
  showToast({
    title: 'File Archived',
    message: 'Item moved to workspace archive queue.',
    type: 'default',
    action: {
      label: 'Undo Action',
      onClick: () => {
        showToast({
          title: 'Action Reverted',
          message: 'File restored successfully.',
          type: 'success'
        });
      }
    }
  });
};

window.__demoToast = () => window.triggerStageToast('success');

// Lightweight fast syntax highlighter for HTML, CSS, and JS
function highlightCode(code, lang) {
  if (!code) return '// No code snippet provided';

  const escapeHtml = (str) =>
    str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

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

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Global Hush UI listeners
  initHushUI();

  // Elements
  const themeBtn = document.getElementById('theme-btn');
  const searchInput = document.getElementById('catalog-search');
  const searchClearBtn = document.getElementById('search-clear-btn');
  const categoryFilters = document.getElementById('category-filters');
  const resultsCountText = document.getElementById('results-count-text');
  const countBadge = document.getElementById('component-count-badge');
  const grid = document.getElementById('catalog-grid');
  const emptyState = document.getElementById('catalog-empty-state');
  const emptyResetBtn = document.getElementById('empty-reset-btn');

  // Inspector Elements
  const modalBackdrop = document.getElementById('inspector-modal');
  const stage = document.getElementById('inspector-stage');
  const title = document.getElementById('inspector-title');
  const desc = document.getElementById('inspector-desc');
  const badge = document.getElementById('inspector-badge');
  const idBadge = document.getElementById('inspector-id');
  const indexText = document.getElementById('inspector-index-text');
  const prevBtn = document.getElementById('inspector-prev-btn');
  const nextBtn = document.getElementById('inspector-next-btn');
  const codeView = document.getElementById('inspector-code');
  const copyBtn = document.getElementById('copy-code-btn');
  const copyBtnText = document.getElementById('copy-btn-text');
  const codeMetaBadge = document.getElementById('code-meta-badge');
  const stageResetBtn = document.getElementById('stage-reset-btn');
  const playgroundPanel = document.getElementById('playground-panel');
  const sidebar = document.getElementById('inspector-sidebar');
  const sidebarToggleBtn = document.getElementById('sidebar-toggle-btn');
  const sidebarCloseBtn = document.getElementById('sidebar-close-btn');

  // Application State
  let activeCategory = 'all';
  let searchQuery = '';
  let activeComponent = null;
  let activeMainView = 'preview'; // 'preview' | 'code'
  let activeTab = 'html'; // 'html' | 'css' | 'js'
  let currentViewport = 'full';
  let currentStageBg = 'dots';
  let isSidebarCollapsed = false;

  // Live Playground Props State
  let playgroundProps = {
    size: 'md',
    variant: 'primary',
    state: 'default'
  };

  // Helper to determine if a component has actual functional JavaScript
  function hasFunctionalJs(comp) {
    if (!comp || !comp.js) return false;
    const trimmed = comp.js.trim();
    const codeOnly = trimmed
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/\/\/.*/g, '')
      .trim();
    return codeOnly.length > 0;
  }

  // Switch between top-level Preview and Code views
  function switchMainView(view) {
    activeMainView = view;
    document.querySelectorAll('.ui-view-tab-btn').forEach((btn) => {
      const isActive = btn.dataset.view === view;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-selected', String(isActive));
    });

    const panePreview = document.getElementById('pane-preview');
    const paneCode = document.getElementById('pane-code');

    if (panePreview) panePreview.classList.toggle('is-active', view === 'preview');
    if (paneCode) paneCode.classList.toggle('is-active', view === 'code');

    if (view === 'code') {
      renderActiveCode();
    }
  }

  // Toggle Studio Controls Sidebar
  function toggleSidebar(forceState) {
    isSidebarCollapsed = typeof forceState === 'boolean' ? forceState : !isSidebarCollapsed;
    sidebar?.classList.toggle('is-collapsed', isSidebarCollapsed);
    sidebarToggleBtn?.classList.toggle('is-active', !isSidebarCollapsed);
  }

  // Theme Toggle Listener
  themeBtn?.addEventListener('click', toggleTheme);

  // Derive unique categories from registry
  const categories = ['all', ...Array.from(new Set(COMPONENT_REGISTRY.map((c) => c.category)))];

  // Render Category Filter Pills
  function renderCategoryPills() {
    if (!categoryFilters) return;

    categoryFilters.innerHTML = categories.map((cat) => {
      const count = cat === 'all'
        ? COMPONENT_REGISTRY.length
        : COMPONENT_REGISTRY.filter((c) => c.category === cat).length;
      const label = cat === 'all' ? 'All Components' : cat;
      const isActive = cat === activeCategory;

      return `
        <button
          type="button"
          class="catalog-filter-pill ${isActive ? 'is-active' : ''}"
          data-category="${cat}"
          role="tab"
          aria-selected="${isActive}"
        >
          <span>${label}</span>
          <span class="filter-count-badge">${count}</span>
        </button>
      `;
    }).join('');
  }

  // Get Filtered Components List
  function getFilteredComponents() {
    const q = searchQuery.trim().toLowerCase();
    return COMPONENT_REGISTRY.filter((comp) => {
      const matchCategory = activeCategory === 'all' || comp.category === activeCategory;
      const matchSearch =
        !q ||
        comp.name.toLowerCase().includes(q) ||
        comp.id.toLowerCase().includes(q) ||
        comp.category.toLowerCase().includes(q) ||
        (comp.description && comp.description.toLowerCase().includes(q));
      return matchCategory && matchSearch;
    });
  }

  // Render Catalog Cards
  function renderGrid() {
    const filtered = getFilteredComponents();

    // Update Counter texts
    if (countBadge) countBadge.textContent = `${COMPONENT_REGISTRY.length} Components`;
    if (resultsCountText) {
      if (searchQuery.trim() || activeCategory !== 'all') {
        resultsCountText.textContent = `Showing ${filtered.length} of ${COMPONENT_REGISTRY.length} components`;
      } else {
        resultsCountText.textContent = `Showing all ${filtered.length} components`;
      }
    }

    if (filtered.length === 0) {
      grid.innerHTML = '';
      if (emptyState) emptyState.style.display = 'flex';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';

    grid.innerHTML = filtered.map((comp) => `
      <article
        class="ui-catalog-card"
        data-component-id="${comp.id}"
        tabindex="0"
        role="button"
        aria-label="Inspect ${comp.name}"
      >
        <div class="ui-catalog-card-header">
          <span class="ui-catalog-badge">${comp.category}</span>
          <h3 class="ui-catalog-title">${comp.name}</h3>
          <p class="ui-catalog-desc-snippet">${comp.description || ''}</p>
        </div>
        <div class="ui-catalog-preview-corner" aria-hidden="true">
          ${comp.cardPreview || comp.previewMarkup}
        </div>
        <div class="ui-catalog-inspect-hint">
          <span>Inspect component</span>
          <svg class="lucide lucide-arrow-right" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>
      </article>
    `).join('');
  }

  // Apply Live Playground Props to Stage Elements
  function applyPlaygroundProps() {
    if (!activeComponent) return;

    const variant = playgroundProps.variant || 'primary';
    const size = playgroundProps.size || 'md';
    const state = playgroundProps.state || 'default';

    // 1. Buttons (ONLY for Button component itself)
    if (activeComponent.id === 'button') {
      const buttons = stage.querySelectorAll('.ui-button');
      buttons.forEach((btn, idx) => {
        // Size
        btn.classList.remove('ui-button--sm', 'ui-button--lg');
        if (size === 'sm') btn.classList.add('ui-button--sm');
        if (size === 'lg') btn.classList.add('ui-button--lg');

        // Variant (only when single custom button or user customized variant)
        if (buttons.length === 1) {
          btn.classList.remove('ui-button--primary', 'ui-button--secondary', 'ui-button--accent', 'ui-button--destructive', 'ui-button--ghost');
          btn.classList.add(`ui-button--${variant}`);
        }

        // State
        btn.disabled = state === 'disabled';
        if (state === 'loading') {
          btn.innerHTML = `<span class="ui-spinner" style="display:inline-block; width:12px; height:12px; border:2px solid currentColor; border-right-color:transparent; border-radius:50%; animation:spin 0.6s linear infinite; margin-right:6px;"></span>Loading...`;
        } else if (state === 'icon') {
          const iconSvg = `<svg class="lucide lucide-sparkles" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px;" aria-hidden="true"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`;
          const defaultLabels = ['Primary', 'Secondary', 'Accent', 'Destructive', 'Ghost'];
          const label = defaultLabels[idx] || 'Action';
          btn.innerHTML = `${iconSvg}<span>${label}</span>`;
        }
      });
    }

    // 2. Chips (ONLY for Chip component)
    if (activeComponent.id === 'chip') {
      const chips = stage.querySelectorAll('.ui-chip');
      chips.forEach((chip) => {
        chip.classList.remove('ui-chip--sm', 'ui-chip--lg', 'ui-chip--primary', 'ui-chip--secondary', 'ui-chip--accent', 'ui-chip--destructive');
        chip.classList.add(`ui-chip--${variant}`);
        if (size === 'sm') chip.style.fontSize = '10px';
        if (size === 'lg') chip.style.fontSize = '14px';
        if (size === 'md') chip.style.fontSize = '';
      });
    }

    // 3. Inputs & Forms (ONLY for form / controls component)
    if (activeComponent.id === 'form' || activeComponent.id === 'controls') {
      const inputs = stage.querySelectorAll('.ui-input, .ui-combobox-input, textarea');
      inputs.forEach((inp) => {
        inp.disabled = state === 'disabled';
        if (size === 'sm') inp.style.padding = '6px 10px';
        if (size === 'lg') inp.style.padding = '14px 18px';
        if (size === 'md') inp.style.padding = '';
        if (variant) inp.style.borderColor = `var(--${variant === 'ghost' ? 'border' : variant})`;
      });
    }

    // 4. Badges (ONLY for badge component)
    if (activeComponent.id === 'badge') {
      const badges = stage.querySelectorAll('.ui-badge, .ui-catalog-badge');
      badges.forEach((b) => {
        b.classList.remove('ui-badge--primary', 'ui-badge--secondary', 'ui-badge--accent', 'ui-badge--destructive');
        b.classList.add(`ui-badge--${variant}`);
      });
    }

    // 5. Alerts (ONLY for alert component)
    if (activeComponent.id === 'alert') {
      const alerts = stage.querySelectorAll('.ui-alert');
      alerts.forEach((alt) => {
        alt.classList.remove('ui-alert--info', 'ui-alert--success', 'ui-alert--warning', 'ui-alert--destructive');
        const alertTypeMap = { primary: 'info', secondary: 'success', accent: 'warning', destructive: 'destructive', ghost: 'info' };
        alt.classList.add(`ui-alert--${alertTypeMap[variant] || 'info'}`);
      });
    }

    // 6. Avatars (ONLY for avatar component)
    if (activeComponent.id === 'avatar') {
      const avatars = stage.querySelectorAll('.ui-avatar');
      avatars.forEach((av) => {
        av.classList.remove('ui-avatar--lilac', 'ui-avatar--sage', 'ui-avatar--butter', 'ui-avatar--blush');
        const avatarMap = { primary: 'lilac', secondary: 'sage', accent: 'butter', destructive: 'blush', ghost: 'lilac' };
        av.classList.add(`ui-avatar--${avatarMap[variant] || 'lilac'}`);
      });
    }

    // 7. Progress bars (ONLY for progress component)
    if (activeComponent.id === 'progress') {
      const progressFills = stage.querySelectorAll('.ui-progress-fill');
      progressFills.forEach((pf) => {
        pf.style.backgroundColor = `var(--${variant === 'ghost' ? 'primary' : variant})`;
      });
    }

    // 8. Sliders & Switches (ONLY for slider component)
    if (activeComponent.id === 'slider') {
      const sliders = stage.querySelectorAll('.ui-slider, .ui-switch input');
      sliders.forEach((sl) => {
        sl.disabled = state === 'disabled';
      });
    }

    // Update code view to match customized props
    renderActiveCode();
  }

  // Initialize stage-specific interactive listeners
  function initStageInteractive(comp) {
    // 1. Theme toggle button in stage
    const stageThemeBtn = stage.querySelector('#stage-theme-btn');
    if (stageThemeBtn) {
      stageThemeBtn.addEventListener('click', toggleTheme);
    }

    // 2. Tab indicator positioning in stage
    stage.querySelectorAll('.ui-tabs-list').forEach((tabList) => {
      const activeTrigger = tabList.querySelector('.ui-tab-trigger.is-active') || tabList.querySelector('.ui-tab-trigger');
      if (activeTrigger) {
        activeTrigger.classList.add('is-active');
        let indicator = tabList.querySelector('.ui-tab-indicator');
        if (!indicator) {
          indicator = document.createElement('span');
          indicator.className = 'ui-tab-indicator';
          tabList.appendChild(indicator);
        }
        requestAnimationFrame(() => {
          indicator.style.width = `${activeTrigger.offsetWidth}px`;
          indicator.style.transform = `translateX(${activeTrigger.offsetLeft}px)`;
        });
      }
    });

    // 3. Range slider oninput
    const stageSlider = stage.querySelector('.ui-slider');
    const stageSliderVal = stage.querySelector('#st-slider-val');
    if (stageSlider && stageSliderVal) {
      stageSlider.addEventListener('input', () => {
        stageSliderVal.textContent = `${stageSlider.value}%`;
      });
    }

    // 4. Initialize dynamic components in stage if applicable
    initCommandPalette();
    initCombobox();
    initCounters();
    initCompare(stage);
    initMarquee(stage);
    initSpotlight();
    initDock();
    initSliders(stage);
    initDropzone(stage);
    initCodeBlocks(stage);
    initTickers(stage);
    initTreeViews(stage);
    initRatings(stage);
    initSegmentedControls(stage);
    initColorPickers(stage);
    initContextMenu(stage);
    initOtpInput(stage);
    initAudioPlayer(stage);
    initTagInput(stage);
    initPasswordMeter(stage);
    initDatePicker(stage);
    initInlineEdit(stage);
    initToc(stage);
    initPagination(stage);
    initSparkline(stage);
    initMetricTile(stage);
    initCarousel(stage);
  }

  // Open Inspector Modal
  function openInspector(comp) {
    if (!comp) return;
    activeComponent = comp;

    // Update Header Info
    if (title) title.textContent = comp.name;
    if (desc) desc.textContent = comp.description;
    if (badge) badge.textContent = comp.category;
    if (idBadge) idBadge.textContent = `#${comp.id}`;

    // Update Nav indices
    const filtered = getFilteredComponents();
    const currIndex = filtered.findIndex((c) => c.id === comp.id);
    if (indexText) {
      indexText.textContent = currIndex >= 0
        ? `${currIndex + 1} / ${filtered.length}`
        : `1 / ${COMPONENT_REGISTRY.length}`;
    }

    // Inject into interactive live stage
    stage.innerHTML = comp.previewMarkup;
    initStageInteractive(comp);

    // Auto-detect mobile viewport on small screens
    if (window.innerWidth <= 640) {
      currentViewport = 'mobile';
      document.querySelectorAll('[data-viewport]').forEach((b) => {
        b.classList.toggle('is-active', b.dataset.viewport === 'mobile');
      });
    }

    // Apply active playground props & stage settings
    applyPlaygroundProps();
    applyStageSettings();

    // Check if component has functional JavaScript
    const hasJs = hasFunctionalJs(comp);
    const jsTabBtn = document.getElementById('js-code-tab-btn');
    if (jsTabBtn) {
      jsTabBtn.style.display = hasJs ? 'inline-flex' : 'none';
    }

    // If active tab was 'js' but this component has no JS, fallback to 'html'
    if (activeTab === 'js' && !hasJs) {
      activeTab = 'html';
    }

    // Update subtab buttons active state
    document.querySelectorAll('.ui-code-tab-btn').forEach((btn) => {
      const isActive = btn.dataset.tab === activeTab;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-selected', String(isActive));
    });

    // Ensure active view pane is synced (Preview by default or persisted)
    switchMainView(activeMainView);

    renderActiveCode();
    modalBackdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function applyStageSettings() {
    stage.classList.remove('viewport-tablet', 'viewport-mobile', 'bg-clean', 'bg-dark');
    if (currentViewport === 'tablet') stage.classList.add('viewport-tablet');
    if (currentViewport === 'mobile') stage.classList.add('viewport-mobile');

    if (currentStageBg === 'clean') stage.classList.add('bg-clean');
    if (currentStageBg === 'dark') stage.classList.add('bg-dark');
  }

  function generateCustomizedCode() {
    if (!activeComponent) return '';
    let code = activeComponent[activeTab] || '// No code available';

    if (activeTab === 'html') {
      const variantClass = `ui-button--${playgroundProps.variant}`;
      const sizeClass = playgroundProps.size !== 'md' ? ` ui-button--${playgroundProps.size}` : '';
      const disabledAttr = playgroundProps.state === 'disabled' ? ' disabled' : '';

      if (activeComponent.id === 'button') {
        const iconSnippet = playgroundProps.state === 'icon' ? '<svg class="lucide lucide-sparkles" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg> ' : '';
        code = `<button class="ui-button ${variantClass}${sizeClass}"${disabledAttr}>\n  ${iconSnippet}<span>Action Button</span>\n</button>`;
      } else if (activeComponent.id === 'chip') {
        code = `<span class="ui-chip ui-chip--${playgroundProps.variant}">\n  <span>Active Filter</span>\n</span>`;
      }

      if (code.includes('lucide') && !code.includes('Lucide (CDN:')) {
        code = `<!-- Icons: Lucide (CDN: https://unpkg.com/lucide@latest | React: npm i lucide-react) -->\n${code}`;
      }
    }
    return code;
  }

  function renderActiveCode() {
    if (!activeComponent) return;
    const rawCode = generateCustomizedCode();
    codeView.innerHTML = highlightCode(rawCode, activeTab);

    if (codeMetaBadge) {
      const lineCount = rawCode.split('\n').length;
      const langNames = { html: 'HTML Element', css: 'CSS Ruleset', js: 'JavaScript' };
      codeMetaBadge.textContent = `${langNames[activeTab] || activeTab.toUpperCase()} (${lineCount} lines)`;
    }
  }

  function navigateInspector(direction) {
    const filtered = getFilteredComponents();
    if (!filtered.length) return;

    let currentIndex = filtered.findIndex((c) => c.id === activeComponent?.id);
    if (currentIndex === -1) currentIndex = 0;

    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = filtered.length - 1;
    if (nextIndex >= filtered.length) nextIndex = 0;

    openInspector(filtered[nextIndex]);
  }

  // Close Inspector Modal
  function closeModal() {
    modalBackdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  // Event Listeners

  // Category Filter Pill Click
  categoryFilters?.addEventListener('click', (e) => {
    const btn = e.target.closest('.catalog-filter-pill');
    if (!btn) return;
    activeCategory = btn.dataset.category || 'all';
    renderCategoryPills();
    renderGrid();
  });

  // Search Input Handler
  searchInput?.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    if (searchClearBtn) {
      searchClearBtn.style.display = searchQuery ? 'flex' : 'none';
    }
    renderGrid();
  });

  searchClearBtn?.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    searchQuery = '';
    searchClearBtn.style.display = 'none';
    searchInput?.focus();
    renderGrid();
  });

  emptyResetBtn?.addEventListener('click', () => {
    activeCategory = 'all';
    searchQuery = '';
    if (searchInput) searchInput.value = '';
    if (searchClearBtn) searchClearBtn.style.display = 'none';
    renderCategoryPills();
    renderGrid();
  });

  // Card click listener & keyboard activation
  grid.addEventListener('click', (e) => {
    const card = e.target.closest('[data-component-id]');
    if (!card) return;
    const compId = card.getAttribute('data-component-id');
    const comp = COMPONENT_REGISTRY.find((c) => c.id === compId);
    if (comp) openInspector(comp);
  });

  grid.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('[data-component-id]');
      if (card) {
        e.preventDefault();
        const compId = card.getAttribute('data-component-id');
        const comp = COMPONENT_REGISTRY.find((c) => c.id === compId);
        if (comp) openInspector(comp);
      }
    }
  });

  // Prev / Next Inspector Navigation
  prevBtn?.addEventListener('click', () => navigateInspector(-1));
  nextBtn?.addEventListener('click', () => navigateInspector(1));

  // Playground Knobs Event Delegation
  playgroundPanel?.addEventListener('click', (e) => {
    const btn = e.target.closest('.playground-btn');
    if (!btn) return;

    const group = btn.closest('.playground-segmented');
    const propName = group?.dataset.prop;
    const val = btn.dataset.val;

    if (propName && val) {
      group.querySelectorAll('.playground-btn').forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      playgroundProps[propName] = val;
      applyPlaygroundProps();
    }
  });

  // Code Tab switching (HTML / CSS / JS)
  document.querySelectorAll('.ui-code-tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.ui-code-tab-btn').forEach((b) => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');
      activeTab = btn.dataset.tab;
      renderActiveCode();
    });
  });

  // Copy Code to Clipboard with animated toast and checkmark
  copyBtn?.addEventListener('click', async () => {
    if (!activeComponent) return;
    const textToCopy = generateCustomizedCode();

    try {
      await navigator.clipboard.writeText(textToCopy);
      if (copyBtnText) copyBtnText.textContent = 'Copied!';
      copyBtn.style.backgroundColor = 'var(--secondary)';

      showToast({
        title: 'Code Copied',
        message: `${activeComponent.name} ${activeTab.toUpperCase()} copied to clipboard.`,
        type: 'success',
        duration: 2500
      });

      setTimeout(() => {
        if (copyBtnText) copyBtnText.textContent = 'Copy Code';
        copyBtn.style.backgroundColor = '';
      }, 1800);
    } catch (err) {
      console.error('Clipboard copy failed:', err);
    }
  });

  // Viewport Switcher Controls
  document.querySelectorAll('[data-viewport]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-viewport]').forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      currentViewport = btn.dataset.viewport;
      applyStageSettings();
    });
  });

  // Stage Background Switcher Controls
  document.querySelectorAll('[data-stage-bg]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-stage-bg]').forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      currentStageBg = btn.dataset.stageBg;
      applyStageSettings();
    });
  });

  // Stage Reset Action
  stageResetBtn?.addEventListener('click', () => {
    if (!activeComponent) return;
    stage.innerHTML = activeComponent.previewMarkup;
    initStageInteractive(activeComponent);

    // Reset playground knobs
    playgroundProps = { size: 'md', variant: 'primary', state: 'default' };
    document.querySelectorAll('.playground-segmented').forEach((group) => {
      group.querySelectorAll('.playground-btn').forEach((b) => {
        const isDefault = b.dataset.val === 'md' || b.dataset.val === 'primary' || b.dataset.val === 'default';
        b.classList.toggle('is-active', isDefault);
      });
    });

    renderActiveCode();

    showToast({
      title: 'Stage Reset',
      message: 'Interactive preview state restored.',
      type: 'default',
      duration: 1800
    });
  });

  // Top-Level View Switcher (Preview vs Code)
  document.querySelectorAll('.ui-view-tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;
      if (view) switchMainView(view);
    });
  });

  // Sidebar Toggle Listeners
  sidebarToggleBtn?.addEventListener('click', () => toggleSidebar());
  sidebarCloseBtn?.addEventListener('click', () => toggleSidebar(true));

  // Close Inspector Listeners
  document.querySelectorAll('[data-inspector-close]').forEach((btn) => {
    btn.addEventListener('click', closeModal);
  });

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  // Global Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    // Focus search on '/' when not in an input
    if (
      e.key === '/' &&
      document.activeElement !== searchInput &&
      !modalBackdrop.classList.contains('is-open') &&
      !document.querySelector('.ui-command-backdrop.is-open')
    ) {
      e.preventDefault();
      searchInput?.focus();
      return;
    }

    // Modal active shortcuts
    if (modalBackdrop.classList.contains('is-open')) {
      const childOpenModal = stage.querySelector('.ui-modal-backdrop.is-open, .ui-drawer-backdrop.is-open, .ui-command-backdrop.is-open');

      // 'O' to toggle sidebar controls when not in input
      if (
        (e.key === 'o' || e.key === 'O') &&
        document.activeElement.tagName !== 'INPUT' &&
        document.activeElement.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        toggleSidebar();
        return;
      }

      // 'P' for Preview View, 'C' for Code View
      if (
        (e.key === 'p' || e.key === 'P') &&
        document.activeElement.tagName !== 'INPUT' &&
        document.activeElement.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        switchMainView('preview');
        return;
      }

      if (
        (e.key === 'c' || e.key === 'C') &&
        document.activeElement.tagName !== 'INPUT' &&
        document.activeElement.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        switchMainView('code');
        return;
      }

      if (e.key === 'Escape') {
        if (childOpenModal) {
          childOpenModal.classList.remove('is-open');
        } else {
          closeModal();
        }
      } else if (e.key === 'ArrowLeft' && document.activeElement !== searchInput) {
        navigateInspector(-1);
      } else if (e.key === 'ArrowRight' && document.activeElement !== searchInput) {
        navigateInspector(1);
      }
    }
  });

  // Mobile Navigation Drawer Toggle
  const mobileToggleBtn = document.getElementById('components-mobile-toggle');
  const mobileMenu = document.getElementById('components-mobile-menu');

  if (mobileToggleBtn && mobileMenu) {
    const openIcon = mobileToggleBtn.querySelector('.mobile-toggle-open');
    const closeIcon = mobileToggleBtn.querySelector('.mobile-toggle-close');

    const toggleMenu = (show) => {
      const isOpen = typeof show === 'boolean' ? show : !mobileMenu.classList.contains('is-open');
      mobileMenu.classList.toggle('is-open', isOpen);
      mobileMenu.setAttribute('aria-hidden', String(!isOpen));
      mobileToggleBtn.setAttribute('aria-expanded', String(isOpen));
      if (openIcon) openIcon.style.display = isOpen ? 'none' : 'block';
      if (closeIcon) closeIcon.style.display = isOpen ? 'block' : 'none';
    };

    mobileToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !mobileToggleBtn.contains(e.target)) {
        toggleMenu(false);
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        toggleMenu(false);
      }
    });
  }

  // Initial Render
  renderCategoryPills();
  renderGrid();
});

