/**
 * Hush UI - Password Strength Meter & Live Checklist Controller
 * Evaluates password criteria, updates spring segmented strength bar, and toggles visibility.
 */
export function initPasswordMeter(container = document) {
  const meters = container.querySelectorAll
    ? container.querySelectorAll('.ui-password-meter')
    : document.querySelectorAll('.ui-password-meter');

  meters.forEach((meter) => {
    if (meter.dataset.meterInitialized === 'true') return;
    meter.dataset.meterInitialized = 'true';

    const input = meter.querySelector('.ui-password-input');
    const toggleBtn = meter.querySelector('.ui-password-toggle-btn');
    const fieldWrap = meter.querySelector('.ui-password-field-wrap');
    const statusText = meter.querySelector('.ui-meter-status-text');

    const reqLength = meter.querySelector('[data-req="length"]');
    const reqUpper = meter.querySelector('[data-req="upper"]');
    const reqNumber = meter.querySelector('[data-req="number"]');
    const reqSymbol = meter.querySelector('[data-req="symbol"]');

    if (toggleBtn && input && fieldWrap) {
      toggleBtn.addEventListener('click', () => {
        const isPassword = input.type === 'password';
        input.type = isPassword ? 'text' : 'password';
        fieldWrap.classList.toggle('is-visible', isPassword);
        toggleBtn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
      });
    }

    if (input) {
      input.addEventListener('input', () => {
        const val = input.value;

        const hasLength = val.length >= 8;
        const hasUpper = /[A-Z]/.test(val);
        const hasNumber = /[0-9]/.test(val);
        const hasSymbol = /[^A-Za-z0-9]/.test(val);

        if (reqLength) reqLength.classList.toggle('is-met', hasLength);
        if (reqUpper) reqUpper.classList.toggle('is-met', hasUpper);
        if (reqNumber) reqNumber.classList.toggle('is-met', hasNumber);
        if (reqSymbol) reqSymbol.classList.toggle('is-met', hasSymbol);

        const score = [hasLength, hasUpper, hasNumber, hasSymbol].filter(Boolean).length;

        if (!val) {
          meter.setAttribute('data-strength', '0');
          if (statusText) statusText.textContent = 'Empty';
        } else if (score <= 1) {
          meter.setAttribute('data-strength', '1');
          if (statusText) statusText.textContent = 'Weak';
        } else if (score === 2) {
          meter.setAttribute('data-strength', '2');
          if (statusText) statusText.textContent = 'Fair';
        } else if (score === 3) {
          meter.setAttribute('data-strength', '3');
          if (statusText) statusText.textContent = 'Good';
        } else {
          meter.setAttribute('data-strength', '4');
          if (statusText) statusText.textContent = 'Strong';
        }
      });
    }
  });
}
