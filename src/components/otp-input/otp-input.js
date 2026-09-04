/**
 * Hush UI - Multi-Slot OTP / PIN Input Controller
 * Handles auto-advance, backspace retreat, paste distribution, and completion callback.
 */
export function initOtpInput(container = document) {
  const otpGroups = container.querySelectorAll
    ? container.querySelectorAll('.ui-otp-container')
    : document.querySelectorAll('.ui-otp-container');

  otpGroups.forEach((group) => {
    if (group.dataset.otpInitialized === 'true') return;
    group.dataset.otpInitialized = 'true';

    const slots = Array.from(group.querySelectorAll('.ui-otp-slot'));
    const slotsWrap = group.querySelector('.ui-otp-slots') || group;

    slots.forEach((slot, index) => {
      // Input Handler (auto-advance)
      slot.addEventListener('input', (e) => {
        const val = slot.value.replace(/\D/g, '');
        slot.value = val ? val.slice(-1) : '';

        if (slot.value) {
          slot.classList.add('is-filled');
          if (index < slots.length - 1) {
            slots[index + 1].focus();
            slots[index + 1].select();
          }
        } else {
          slot.classList.remove('is-filled');
        }

        checkCompletion();
      });

      // Keydown Handler (backspace & navigation)
      slot.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !slot.value && index > 0) {
          slots[index - 1].focus();
          slots[index - 1].value = '';
          slots[index - 1].classList.remove('is-filled');
          checkCompletion();
        } else if (e.key === 'ArrowLeft' && index > 0) {
          e.preventDefault();
          slots[index - 1].focus();
          slots[index - 1].select();
        } else if (e.key === 'ArrowRight' && index < slots.length - 1) {
          e.preventDefault();
          slots[index + 1].focus();
          slots[index + 1].select();
        }
      });

      // Paste Handler (distribute digits)
      slot.addEventListener('paste', (e) => {
        e.preventDefault();
        const pasteData = (e.clipboardData || window.clipboardData).getData('text').replace(/\D/g, '');
        if (!pasteData) return;

        const chars = pasteData.slice(0, slots.length - index).split('');
        chars.forEach((char, i) => {
          if (slots[index + i]) {
            slots[index + i].value = char;
            slots[index + i].classList.add('is-filled');
          }
        });

        const nextIndex = Math.min(index + chars.length, slots.length - 1);
        slots[nextIndex].focus();
        checkCompletion();
      });
    });

    function checkCompletion() {
      const code = slots.map((s) => s.value).join('');
      slotsWrap.classList.remove('is-error');

      if (code.length === slots.length) {
        slotsWrap.classList.add('is-success');
        group.dispatchEvent(new CustomEvent('otp:complete', { detail: { code } }));
      } else {
        slotsWrap.classList.remove('is-success');
      }
    }
  });
}
