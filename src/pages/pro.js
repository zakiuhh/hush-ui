/**
 * Hush UI Pro Showcase Page Controller
 * Executive Dashboard Kit
 */
import '../index.css';
import './pro.css';
import {
  initHushUI,
  toggleTheme,
  showToast,
  initMobileMenu
} from '../index.js';
import { updateComparePosition } from '../components/compare/compare.js';

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

  // 3. Early Access Waitlist Form
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
      try {
        const list = JSON.parse(localStorage.getItem('hush_pro_waitlist') || '[]');
        if (!list.includes(email)) {
          list.push(email);
          localStorage.setItem('hush_pro_waitlist', JSON.stringify(list));
        }
      } catch (err) {
        console.error(err);
      }
      notifyInput.value = '';
      showToast({
        message: "✦ You're on the Executive Dashboard Kit waitlist! We'll notify you the moment checkout opens.",
        type: 'success',
      });
    });
  }

  // 4. Hero Theme Compare Presets (Light / 50/50 Split / Dark)
  const heroCompare = document.getElementById('pro-hero-compare');
  const heroRange = document.getElementById('pro-hero-range');
  const heroPresetBtns = document.querySelectorAll('[data-hero-preset]');

  let heroSmoothTimer = null;
  heroPresetBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const pos = parseFloat(btn.getAttribute('data-hero-preset'));
      heroPresetBtns.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      if (heroCompare) {
        heroCompare.classList.add('ui-compare--smooth');
        updateComparePosition(heroCompare, pos);
        clearTimeout(heroSmoothTimer);
        heroSmoothTimer = setTimeout(() => {
          heroCompare.classList.remove('ui-compare--smooth');
        }, 360);
      }
    });
  });

  if (heroRange) {
    heroRange.addEventListener('input', () => {
      const val = Math.round(parseFloat(heroRange.value));
      heroPresetBtns.forEach((b) => {
        const pVal = Math.round(parseFloat(b.getAttribute('data-hero-preset')));
        b.classList.toggle('is-active', val === pVal);
      });
    });
  }

  // 5. Fullscreen Lightbox Modal Inspector
  const modal = document.getElementById('pro-inspector-modal');
  const heroZoomBtn = document.getElementById('pro-hero-zoom-btn');
  const modalCompare = document.getElementById('pro-modal-compare');
  const modalRange = document.getElementById('pro-modal-compare-range');
  const modalPresetBtns = document.querySelectorAll('[data-modal-preset]');
  const closeBtns = document.querySelectorAll('[data-pro-modal-close]');

  const openModal = () => {
    if (!modal) return;
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    // Synchronize modal compare slider position with hero compare slider
    if (heroRange && modalCompare) {
      const currentVal = parseFloat(heroRange.value) || 50;
      updateComparePosition(modalCompare, currentVal);
      modalPresetBtns.forEach((b) => {
        const pVal = Math.round(parseFloat(b.getAttribute('data-modal-preset')));
        b.classList.toggle('is-active', Math.round(currentVal) === pVal);
      });
    }
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  if (heroZoomBtn) {
    heroZoomBtn.addEventListener('click', openModal);
  }

  // Modal Presets (Light / Split / Dark)
  let modalSmoothTimer = null;
  modalPresetBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const pos = parseFloat(btn.getAttribute('data-modal-preset'));
      modalPresetBtns.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      if (modalCompare) {
        modalCompare.classList.add('ui-compare--smooth');
        updateComparePosition(modalCompare, pos);
        clearTimeout(modalSmoothTimer);
        modalSmoothTimer = setTimeout(() => {
          modalCompare.classList.remove('ui-compare--smooth');
        }, 360);
      }
    });
  });

  if (modalRange) {
    modalRange.addEventListener('input', () => {
      const val = Math.round(parseFloat(modalRange.value));
      modalPresetBtns.forEach((b) => {
        const pVal = Math.round(parseFloat(b.getAttribute('data-modal-preset')));
        b.classList.toggle('is-active', val === pVal);
      });
    });
  }

  // Close handlers
  closeBtns.forEach((btn) => {
    btn.addEventListener('click', closeModal);
  });

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
});
