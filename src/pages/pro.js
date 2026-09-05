/**
 * Hush UI Pro Showcase Page Controller
 */
import '../index.css';
import './pro.css';
import {
  initHushUI,
  toggleTheme,
  showToast,
  initMobileMenu
} from '../index.js';

export const PRO_SCREENS = [
  {
    id: 'overview',
    title: 'Full Dashboard Overview',
    category: 'all',
    categoryLabel: 'Flagship Suite',
    desc: 'The comprehensive executive dashboard bringing together real-time metrics, active orders, customer acquisition, and live sales activity.',
    darkImg: '/assets/display/full hashboard ss.png',
    lightImg: '/assets/display/full hashboard ss.png',
    badge: 'Overview',
  },
  {
    id: 'analytics',
    title: 'Deep Analytics & Conversion',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    desc: 'Real-time revenue telemetry, conversion tracking, customer retention curves, and channel performance metrics.',
    darkImg: '/assets/display/analytics.png',
    lightImg: '/assets/display/analytics.png',
    badge: 'Analytics',
  },
  {
    id: 'orders',
    title: 'Orders & Transactions',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    desc: 'High-density data grid featuring multi-tier order tracking, delivery tags, instant status filtering, and batch fulfillment actions.',
    darkImg: '/assets/display/ecommerce - orders and Transactions.png',
    lightImg: '/assets/display/ecommerce - orders and Transactions (light).png',
    badge: 'Data Table',
  },
  {
    id: 'customers',
    title: 'Customers Directory',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    desc: 'Customer profiles with lifetime spend metrics, activity tags, contact details, and pagination controls.',
    darkImg: '/assets/display/ecommerce - customers directory (dark).png',
    lightImg: '/assets/display/ecommerce - customers directory (light).png',
    badge: 'User Management',
  },
  {
    id: 'inventory',
    title: 'Product Inventory & Catalog',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    desc: 'Stock monitoring with SKU indicators, low-stock alerts, inline pricing, and catalog search.',
    darkImg: '/assets/display/ecommerce - product inventory (dark).png',
    lightImg: '/assets/display/ecommerce - product inventory (light).png',
    badge: 'Catalog Engine',
  },
  {
    id: 'promos',
    title: 'Discounts & Promotions',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    desc: 'Campaign builder for coupon codes, percentage reductions, validity countdowns, and performance trackers.',
    darkImg: '/assets/display/ecommerce - discount and promos (dark).png',
    lightImg: '/assets/display/ecommerce - discount and promos (light).png',
    badge: 'Promo Builder',
  },
  {
    id: 'workspace',
    title: 'Workspace & Team Settings',
    category: 'settings',
    categoryLabel: 'Platform Settings',
    desc: 'Team member seats, organizational profile, domain configuration, and branding customization.',
    darkImg: '/assets/display/workspace settings (dark).png',
    lightImg: '/assets/display/workspace settings (light).png',
    badge: 'Workspace Hub',
  },
  {
    id: 'security',
    title: 'Security & API Keys',
    category: 'settings',
    categoryLabel: 'Platform Settings',
    desc: 'Bearer token generation, webhook configurations, 2FA status, and cryptographic audit records.',
    darkImg: '/assets/display/security and api keys (dark).png',
    lightImg: '/assets/display/security and api keys (light).png',
    badge: 'Security Center',
  },
  {
    id: 'billing',
    title: 'Billing & Subscriptions',
    category: 'settings',
    categoryLabel: 'Platform Settings',
    desc: 'Tier usage visualizers, saved payment methods, billing address, and downloadable invoice statements.',
    darkImg: '/assets/display/billing and subscriptions (dark).png',
    lightImg: '/assets/display/billing and subscriptions (light).png',
    badge: 'Subscription Suite',
  },
  {
    id: 'notifications',
    title: 'Notification Drawer',
    category: 'ux',
    categoryLabel: 'UX & Overlays',
    desc: 'Slide-out notification panel with system alerts, order updates, priority filters, and unread badges.',
    darkImg: '/assets/display/notification panel (dark).png',
    lightImg: '/assets/display/notification panel (light).png',
    badge: 'Slide Drawer',
  },
  {
    id: 'profile',
    title: 'Profile & Account Menu',
    category: 'ux',
    categoryLabel: 'UX & Overlays',
    desc: 'Keyboard-accessible popover menu with avatar status, fast theme switching, and account shortcuts.',
    darkImg: '/assets/display/profile dropdown (dark).png',
    lightImg: '/assets/display/profile dropdown (light).png',
    badge: 'Popover Menu',
  },
  {
    id: 'docs',
    title: 'Integrated Documentation Guide',
    category: 'ux',
    categoryLabel: 'UX & Overlays',
    desc: 'Embedded developer documentation with syntax-highlighted code blocks, copy snippets, and API quick links.',
    darkImg: '/assets/display/documentation and guide (dark).png',
    lightImg: '/assets/display/documentation and guide (light).png',
    badge: 'Docs & Guides',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  initHushUI();

  // 1. Theme toggle binding
  const themeBtn = document.getElementById('theme-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      toggleTheme();
    });
  }

  // 2. Mobile Drawer Navigation
  initMobileMenu('pro-mobile-toggle', 'pro-mobile-menu');

  // 3. Early Access Notification Form
  const notifyForm = document.getElementById('pro-notify-form');
  const notifyInput = document.getElementById('pro-notify-input');
  if (notifyForm && notifyInput) {
    notifyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = notifyInput.value.trim();
      if (!email || !email.includes('@')) {
        showToast({
          message: 'Please enter a valid email address.',
          type: 'warning',
        });
        return;
      }
      // Save locally
      try {
        const list = JSON.parse(localStorage.getItem('hush_pro_early_access') || '[]');
        if (!list.includes(email)) {
          list.push(email);
          localStorage.setItem('hush_pro_early_access', JSON.stringify(list));
        }
      } catch (err) {
        console.error(err);
      }
      notifyInput.value = '';
      showToast({
        message: "✦ You're on the early notification list! We'll notify you the moment it drops.",
        type: 'success',
      });
    });
  }

  // 4. Category Filter Tabs
  const filterBtns = document.querySelectorAll('[data-pro-filter]');
  const cards = document.querySelectorAll('.pro-module-card');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const category = btn.getAttribute('data-pro-filter');

      cards.forEach((card) => {
        const cardCat = card.getAttribute('data-card-category');
        if (category === 'all' || cardCat === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 5. Fullscreen Lightbox Modal
  const modal = document.getElementById('pro-inspector-modal');
  const modalTitle = document.getElementById('pro-modal-title');
  const modalBadge = document.getElementById('pro-modal-badge');
  const modalDesc = document.getElementById('pro-modal-desc');
  const modalImg = document.getElementById('pro-modal-img');
  const modalThemeSwitcher = document.getElementById('pro-modal-theme-switcher');
  const closeBtns = document.querySelectorAll('[data-pro-modal-close]');

  let currentScreen = null;
  let forcedModalTheme = null; // 'dark' | 'light' | null (null means follow site theme)

  const openModal = (screenId) => {
    const screen = PRO_SCREENS.find((s) => s.id === screenId);
    if (!screen) return;
    currentScreen = screen;
    forcedModalTheme = null;

    if (modalTitle) modalTitle.textContent = screen.title;
    if (modalBadge) modalBadge.textContent = screen.badge;
    if (modalDesc) modalDesc.textContent = screen.desc;

    updateModalImage();

    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const updateModalImage = () => {
    if (!currentScreen || !modalImg) return;
    const isDark = forcedModalTheme
      ? forcedModalTheme === 'dark'
      : document.documentElement.classList.contains('dark');
    modalImg.src = isDark ? currentScreen.darkImg : currentScreen.lightImg;
    modalImg.alt = `${currentScreen.title} (${isDark ? 'Dark' : 'Light'})`;
  };

  const closeModal = () => {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  // Card click triggers
  document.querySelectorAll('[data-pro-inspect]').forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const screenId = trigger.getAttribute('data-pro-inspect');
      openModal(screenId);
    });
  });

  // Modal close triggers
  closeBtns.forEach((btn) => {
    btn.addEventListener('click', closeModal);
  });

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Keyboard Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  // Modal Theme Toggle Button (to toggle light/dark view inside modal)
  if (modalThemeSwitcher) {
    modalThemeSwitcher.addEventListener('click', () => {
      const isCurrentlyDark = forcedModalTheme
        ? forcedModalTheme === 'dark'
        : document.documentElement.classList.contains('dark');
      forcedModalTheme = isCurrentlyDark ? 'light' : 'dark';
      updateModalImage();
      showToast({
        message: `Previewing ${forcedModalTheme.toUpperCase()} mode view`,
        type: 'info',
      });
    });
  }
});
