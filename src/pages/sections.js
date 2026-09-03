/**
 * Hush UI Pre-Made Sections Page Controller
 */
import '../index.css';
import './sections.css';
import { SECTIONS_REGISTRY } from '../data/sections-registry.js';
import {
  initHushUI,
  toggleTheme,
  showToast,
  initCounters,
  initAccordions,
  initCombobox,
  initCommandPalette,
  initMarquee,
  initCompare,
  initSpotlight,
  initDock,
  initSliders,
  initSegmentedControls
} from '../index.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize global system listeners
  initHushUI();

  // Elements
  const themeBtn = document.getElementById('theme-btn');
  const searchInput = document.getElementById('sections-search');
  const searchClearBtn = document.getElementById('sections-search-clear');
  const categoryFilters = document.getElementById('sections-category-filters');
  const resultsCountText = document.getElementById('sections-count-text');
  const grid = document.getElementById('sections-grid');
  const emptyState = document.getElementById('sections-empty-state');
  const emptyResetBtn = document.getElementById('sections-empty-reset');

  // Modal Elements
  const modal = document.getElementById('sec-inspector-modal');
  const modalTitle = document.getElementById('sec-modal-title');
  const modalCategory = document.getElementById('sec-modal-badge');
  const stage = document.getElementById('sec-modal-stage');
  const responsiveFrame = document.getElementById('sec-responsive-frame');
  const closeBtn = document.querySelectorAll('[data-sec-modal-close]');
  const viewportBtns = document.querySelectorAll('[data-sec-viewport]');
  const viewTabBtns = document.querySelectorAll('[data-sec-view]');
  const codeTabBtns = document.querySelectorAll('[data-sec-tab]');
  const codeDisplay = document.getElementById('sec-modal-code');
  const copyBtn = document.getElementById('sec-copy-btn');
  const panePreview = document.getElementById('sec-pane-preview');
  const paneCode = document.getElementById('sec-pane-code');

  // State
  let activeCategory = 'All';
  let searchQuery = '';
  let activeSection = null;
  let activeView = 'preview'; // 'preview' | 'code'
  let activeTab = 'html'; // 'html' | 'css' | 'js'

  // Categories (Dynamically derived from registry)
  const categories = ['All', ...new Set(SECTIONS_REGISTRY.map((s) => s.category))];

  // Theme Toggle
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }

  // Render Category Filter Pills
  function renderFilters() {
    if (!categoryFilters) return;
    categoryFilters.innerHTML = categories.map((cat) => `
      <button
        class="sec-filter-btn ${cat === activeCategory ? 'is-active' : ''}"
        data-category="${cat}"
        type="button"
        role="tab"
        aria-selected="${cat === activeCategory}"
      >
        ${cat}
      </button>
    `).join('');

    categoryFilters.querySelectorAll('.sec-filter-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        activeCategory = btn.dataset.category;
        renderFilters();
        renderSections();
      });
    });
  }

  // Filter & Render Sections Grid
  function renderSections() {
    if (!grid) return;

    const filtered = SECTIONS_REGISTRY.filter((sec) => {
      const matchCat = activeCategory === 'All' || sec.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchQuery = !query ||
        sec.name.toLowerCase().includes(query) ||
        sec.category.toLowerCase().includes(query) ||
        sec.description.toLowerCase().includes(query);
      return matchCat && matchQuery;
    });

    if (resultsCountText) {
      resultsCountText.textContent = `Showing ${filtered.length} of ${SECTIONS_REGISTRY.length} sections`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = '';
      if (emptyState) emptyState.style.display = 'flex';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';

    grid.innerHTML = filtered.map((sec) => `
      <article class="ui-catalog-card" data-sec-id="${sec.id}" tabindex="0" role="button" aria-label="Inspect ${sec.name}">
        <div class="ui-catalog-card-header">
          <span class="ui-catalog-badge">${sec.category}</span>
          <h3 class="ui-catalog-title">${sec.name}</h3>
          <p class="ui-catalog-desc-snippet">${sec.description}</p>
        </div>
        <div class="ui-catalog-preview-corner" aria-hidden="true">
          ${sec.cardPreview || ''}
        </div>
        <div class="ui-catalog-inspect-hint">
          <span>Inspect section</span>
          <svg class="lucide lucide-arrow-right" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>
      </article>
    `).join('');

    // Attach click listeners to cards
    grid.querySelectorAll('.ui-catalog-card').forEach((card) => {
      card.addEventListener('click', () => {
        const sec = SECTIONS_REGISTRY.find((s) => s.id === card.dataset.secId);
        if (sec) openSectionModal(sec);
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const sec = SECTIONS_REGISTRY.find((s) => s.id === card.dataset.secId);
          if (sec) openSectionModal(sec);
        }
      });
    });
  }

  // Initialize ROI Calculator dynamically
  function initRoiCalculator(root) {
    if (!root) return;
    const teamSlider = root.querySelector('#calc-team-slider');
    const compSlider = root.querySelector('#calc-comp-slider');
    const teamDisplay = root.querySelector('#calc-team-display');
    const compDisplay = root.querySelector('#calc-comp-display');
    const hoursVal = root.querySelector('#calc-hours-val');
    const dollarsVal = root.querySelector('#calc-dollars-val');

    if (teamSlider && compSlider) {
      const calculate = () => {
        const team = parseInt(teamSlider.value, 10) || 1;
        const comps = parseInt(compSlider.value, 10) || 1;
        const hours = team * (comps * 2);
        const dollars = hours * 80;

        if (teamDisplay) teamDisplay.textContent = `${team} Dev${team > 1 ? 's' : ''}`;
        if (compDisplay) compDisplay.textContent = `${comps} Component${comps > 1 ? 's' : ''}`;
        if (hoursVal) hoursVal.textContent = hours.toLocaleString();
        if (dollarsVal) dollarsVal.textContent = dollars.toLocaleString();
      };

      window.updateRoiCalc = calculate;
      teamSlider.addEventListener('input', calculate);
      compSlider.addEventListener('input', calculate);
      calculate();
    }
  }

  // Interactive Pricing Matrix Calculator
  function initPricingInteractiveCalculator(root) {
    if (!root) return;
    const seatsSlider = root.querySelector('#sec-calc-seats');
    const seatsDisplay = root.querySelector('#sec-calc-seats-display');
    const addonCheckboxes = root.querySelectorAll('.sec-addon-check');
    const billingButtons = root.querySelectorAll('#sec-calc-billing-toggle .ui-segmented-item');
    const totalAmount = root.querySelector('#sec-calc-total-amount');
    const cycleLabel = root.querySelector('#sec-calc-cycle-label');
    const baseSubtotal = root.querySelector('#sec-calc-base-subtotal');
    const addonSubtotal = root.querySelector('#sec-calc-addon-subtotal');

    if (seatsSlider) {
      let isAnnual = false;

      const recalculate = () => {
        const seats = parseInt(seatsSlider.value, 10) || 1;
        const perSeatRate = isAnnual ? 8 : 10;
        const baseCost = seats * perSeatRate;

        let addonsCost = 0;
        addonCheckboxes.forEach((cb) => {
          if (cb.checked) {
            addonsCost += parseInt(cb.dataset.price, 10) || 0;
          }
        });

        const monthlyEquivalent = baseCost + addonsCost;
        const finalDisplayTotal = isAnnual ? monthlyEquivalent * 12 : monthlyEquivalent;

        if (seatsDisplay) seatsDisplay.textContent = `${seats} Seat${seats > 1 ? 's' : ''}`;
        if (baseSubtotal) baseSubtotal.textContent = `$${baseCost * (isAnnual ? 12 : 1)}`;
        if (addonSubtotal) addonSubtotal.textContent = `+$${addonsCost * (isAnnual ? 12 : 1)}`;
        if (totalAmount) totalAmount.textContent = `$${finalDisplayTotal.toLocaleString()}`;
        if (cycleLabel) cycleLabel.textContent = isAnnual ? '/ year' : '/ month';
      };

      seatsSlider.addEventListener('input', recalculate);
      addonCheckboxes.forEach((cb) => cb.addEventListener('change', recalculate));

      billingButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
          isAnnual = btn.dataset.billing === 'annual';
          recalculate();
        });
      });

      recalculate();
    }
  }

  // Open Section Inspector Modal
  function openSectionModal(sec) {
    activeSection = sec;
    if (modalTitle) modalTitle.textContent = sec.name;
    if (modalCategory) modalCategory.textContent = sec.category;

    if (stage) {
      stage.innerHTML = sec.previewMarkup;
      // Initialize dynamic interactive components inside stage
      initCounters();
      initAccordions();
      initCombobox();
      initCommandPalette();
      initMarquee(stage);
      initCompare();
      initSpotlight();
      initDock();
      initSliders(stage);
      initSegmentedControls(stage);
      initRoiCalculator(stage);
      initPricingInteractiveCalculator(stage);
    }

    if (window.innerWidth <= 768) {
      viewportBtns.forEach((b) => b.classList.toggle('is-active', b.dataset.secViewport === 'mobile'));
      if (responsiveFrame) {
        responsiveFrame.className = 'sec-responsive-frame frame-mobile';
      }
    }

    switchMainView('preview');
    renderActiveCode();

    if (modal) {
      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
  }

  // Close Modal
  function closeModal() {
    if (modal) {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  }

  closeBtn.forEach((btn) => btn.addEventListener('click', closeModal));

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
      escaped = escaped.replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="token-comment">$1</span>');
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
      escaped = escaped.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="token-comment">$1</span>');
      escaped = escaped.replace(/([a-zA-Z0-9\-_]+)(\s*:)([^;{}]+)(;?)/g, (match, prop, colon, val, semi) => {
        const valHighlighted = val
          .replace(/(#[a-fA-F0-9]{3,8}|var\([^)]+\)|rgba?\([^)]+\)|color-mix\([^)]+\)|calc\([^)]+\)|cubic-bezier\([^)]+\))/g, '<span class="token-function">$1</span>')
          .replace(/\b(\d+(?:\.\d+)?(?:px|rem|em|%|ms|s|deg|vw|vh)?)\b/g, '<span class="token-number">$1</span>');
        return `<span class="token-property">${prop}</span><span class="token-punct">${colon}</span>${valHighlighted}<span class="token-punct">${semi}</span>`;
      });
      escaped = escaped.replace(/([^{}]+)(?=\{)/g, '<span class="token-selector">$1</span>');
      return escaped;
    }

    if (lang === 'js') {
      let escaped = escapeHtml(code);
      escaped = escaped.replace(/(\/\/[^\n]*|\/\*[\s\S]*?\*\/)/g, '<span class="token-comment">$1</span>');
      escaped = escaped.replace(/('(?:\\'|[^'])*'|"(?:\\"|[^"])*"|`(?:\\`|[^`])*`)/g, '<span class="token-string">$1</span>');
      escaped = escaped.replace(/\b(import|export|from|const|let|var|function|return|if|else|new|class|default|async|await)\b/g, '<span class="token-keyword">$1</span>');
      escaped = escaped.replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)(?=\s*\()/g, '<span class="token-function">$1</span>');
      return escaped;
    }

    return escapeHtml(code);
  }

  // Switch View (Preview vs Code)
  function switchMainView(view) {
    activeView = view;
    viewTabBtns.forEach((btn) => {
      const isActive = btn.dataset.secView === view;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-selected', String(isActive));
    });

    if (panePreview) panePreview.style.display = view === 'preview' ? 'flex' : 'none';
    if (paneCode) paneCode.style.display = view === 'code' ? 'flex' : 'none';

    if (view === 'code') {
      renderActiveCode();
    }
  }

  viewTabBtns.forEach((btn) => {
    btn.addEventListener('click', () => switchMainView(btn.dataset.secView));
  });

  // Switch Code Subtab (HTML, CSS, JS)
  function renderActiveCode() {
    if (!activeSection || !codeDisplay) return;
    let raw = activeSection[activeTab] || '// No code available';
    if (activeTab === 'html' && raw.includes('lucide') && !raw.includes('Lucide (CDN:')) {
      raw = `<!-- Icons: Lucide (CDN: https://unpkg.com/lucide@latest | React: npm i lucide-react) -->\n${raw}`;
    }
    codeDisplay.innerHTML = highlightCode(raw, activeTab);

    codeTabBtns.forEach((btn) => {
      const isActive = btn.dataset.secTab === activeTab;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-selected', String(isActive));
    });
  }

  codeTabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeTab = btn.dataset.secTab;
      renderActiveCode();
    });
  });

  // Viewport Switcher
  viewportBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      viewportBtns.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const vp = btn.dataset.secViewport;
      if (responsiveFrame) {
        responsiveFrame.className = `sec-responsive-frame frame-${vp}`;
      }
    });
  });

  // 1-Click Copy Code
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      if (!activeSection) return;
      let code = activeSection[activeTab] || '';
      if (activeTab === 'html' && code.includes('lucide') && !code.includes('Lucide (CDN:')) {
        code = `<!-- Icons: Lucide (CDN: https://unpkg.com/lucide@latest | React: npm i lucide-react) -->\n${code}`;
      }
      try {
        await navigator.clipboard.writeText(code);
        showToast({
          title: 'Code Copied',
          message: `${activeTab.toUpperCase()} template copied to clipboard.`,
          type: 'success'
        });
      } catch (err) {
        showToast({
          title: 'Copy Failed',
          message: 'Unable to copy code to clipboard.',
          type: 'destructive'
        });
      }
    });
  }

  // Search Input Handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (searchClearBtn) {
        searchClearBtn.style.display = searchQuery ? 'flex' : 'none';
      }
      renderSections();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
      searchQuery = '';
      searchClearBtn.style.display = 'none';
      renderSections();
    });
  }

  if (emptyResetBtn) {
    emptyResetBtn.addEventListener('click', () => {
      activeCategory = 'All';
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      if (searchClearBtn) searchClearBtn.style.display = 'none';
      renderFilters();
      renderSections();
    });
  }

  // Global Keyboard Navigation
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
    if ((e.key === 'p' || e.key === 'P') && modal?.classList.contains('is-open') && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      switchMainView('preview');
    }
    if ((e.key === 'c' || e.key === 'C') && modal?.classList.contains('is-open') && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      switchMainView('code');
    }
  });

  // Mobile Navigation Drawer Toggle
  const mobileToggleBtn = document.getElementById('sections-mobile-toggle');
  const mobileMenu = document.getElementById('sections-mobile-menu');

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

  // Initial Mount
  renderFilters();
  renderSections();
});
