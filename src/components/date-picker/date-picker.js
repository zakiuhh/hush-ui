/**
 * Hush UI - Interactive Date Range & Calendar Picker
 */

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export function initDatePicker(container = document) {
  const pickers = container.querySelectorAll
    ? container.querySelectorAll('.ui-date-picker')
    : document.querySelectorAll('.ui-date-picker');

  pickers.forEach((picker) => {
    if (picker.dataset.datePickerInitialized === 'true') return;
    picker.dataset.datePickerInitialized = 'true';

    const trigger = picker.querySelector('.ui-date-picker-trigger');
    const triggerText = picker.querySelector('.ui-date-picker-value');
    const dropdown = picker.querySelector('.ui-date-picker-dropdown');
    const titleEl = picker.querySelector('.ui-calendar-title');
    const daysGrid = picker.querySelector('.ui-calendar-grid-days');
    const prevBtn = picker.querySelector('.ui-calendar-prev');
    const nextBtn = picker.querySelector('.ui-calendar-next');
    const clearBtn = picker.querySelector('.ui-date-picker-clear');
    const applyBtn = picker.querySelector('.ui-date-picker-apply');
    const presetBtns = picker.querySelectorAll('.ui-date-preset-btn');

    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth();
    let startDate = null;
    let endDate = null;
    let hoveredDate = null;
    const isRange = picker.dataset.mode === 'range';

    // Parse pre-selected dates from dataset if available
    if (picker.dataset.startDate) {
      startDate = new Date(picker.dataset.startDate);
    }
    if (picker.dataset.endDate) {
      endDate = new Date(picker.dataset.endDate);
    }

    function formatDate(d) {
      if (!d) return '';
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
    }

    function updateTriggerDisplay() {
      if (!triggerText) return;
      if (startDate && endDate) {
        triggerText.textContent = `${formatDate(startDate)} – ${formatDate(endDate)}`;
      } else if (startDate) {
        triggerText.textContent = isRange ? `${formatDate(startDate)} – Select end` : formatDate(startDate);
      } else {
        triggerText.textContent = isRange ? 'Select date range' : 'Select date';
      }
    }

    function renderCalendar() {
      if (!daysGrid || !titleEl) return;

      titleEl.textContent = `${MONTH_NAMES[currentMonth]} ${currentYear}`;
      daysGrid.innerHTML = '';

      const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
      // Adjust for Monday start (0=Sunday -> 6=Sunday, 0=Monday)
      const adjustedFirstDay = firstDayIndex === 0 ? 6 : firstDayIndex - 1;
      const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

      // Empty padding cells
      for (let i = 0; i < adjustedFirstDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'ui-calendar-day is-empty';
        daysGrid.appendChild(emptyCell);
      }

      const today = new Date();

      for (let day = 1; day <= totalDays; day++) {
        const dateObj = new Date(currentYear, currentMonth, day);
        const dayBtn = document.createElement('button');
        dayBtn.type = 'button';
        dayBtn.className = 'ui-calendar-day';
        dayBtn.textContent = day;

        // Today highlight
        if (
          dateObj.getDate() === today.getDate() &&
          dateObj.getMonth() === today.getMonth() &&
          dateObj.getFullYear() === today.getFullYear()
        ) {
          dayBtn.classList.add('is-today');
        }

        // Selection states
        const time = dateObj.getTime();
        const startTime = startDate ? new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()).getTime() : null;
        const endTime = endDate ? new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()).getTime() : null;
        const hoveredTime = hoveredDate ? new Date(hoveredDate.getFullYear(), hoveredDate.getMonth(), hoveredDate.getDate()).getTime() : null;

        if (startTime && time === startTime) {
          dayBtn.classList.add('is-selected', 'is-range-start');
        }
        if (endTime && time === endTime) {
          dayBtn.classList.add('is-selected', 'is-range-end');
        }

        if (startTime && endTime && time > startTime && time < endTime) {
          dayBtn.classList.add('is-in-range');
        } else if (startTime && !endTime && hoveredTime && time > startTime && time <= hoveredTime) {
          dayBtn.classList.add('is-in-range');
        }

        dayBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          handleDateClick(dateObj);
        });

        dayBtn.addEventListener('mouseenter', () => {
          if (startDate && !endDate && isRange) {
            hoveredDate = dateObj;
            renderCalendar();
          }
        });

        daysGrid.appendChild(dayBtn);
      }
    }

    function handleDateClick(dateObj) {
      if (!isRange) {
        startDate = dateObj;
        endDate = null;
        updateTriggerDisplay();
        renderCalendar();
        close();
        dispatchChange();
        return;
      }

      if (!startDate || (startDate && endDate)) {
        startDate = dateObj;
        endDate = null;
        hoveredDate = null;
      } else if (startDate && !endDate) {
        if (dateObj < startDate) {
          endDate = startDate;
          startDate = dateObj;
        } else {
          endDate = dateObj;
        }
        hoveredDate = null;
      }

      updateTriggerDisplay();
      renderCalendar();
      dispatchChange();
    }

    function dispatchChange() {
      const event = new CustomEvent('change', {
        bubbles: true,
        detail: { startDate, endDate }
      });
      picker.dispatchEvent(event);
    }

    function open() {
      picker.classList.add('is-open');
      if (trigger) trigger.classList.add('is-open');
      renderCalendar();
    }

    function close() {
      picker.classList.remove('is-open');
      if (trigger) trigger.classList.remove('is-open');
      hoveredDate = null;
    }

    function toggle() {
      if (picker.classList.contains('is-open')) close();
      else open();
    }

    if (trigger) {
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggle();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentMonth--;
        if (currentMonth < 0) {
          currentMonth = 11;
          currentYear--;
        }
        renderCalendar();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentMonth++;
        if (currentMonth > 11) {
          currentMonth = 0;
          currentYear++;
        }
        renderCalendar();
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        startDate = null;
        endDate = null;
        hoveredDate = null;
        updateTriggerDisplay();
        renderCalendar();
        dispatchChange();
      });
    }

    if (applyBtn) {
      applyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        close();
      });
    }

    // Presets
    presetBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        presetBtns.forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        const preset = btn.dataset.preset;
        const now = new Date();

        if (preset === 'today') {
          startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
          endDate = isRange ? new Date(now.getFullYear(), now.getMonth(), now.getDate()) : null;
        } else if (preset === '7days') {
          startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 6);
          endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        } else if (preset === '30days') {
          startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 29);
          endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        } else if (preset === 'thismonth') {
          startDate = new Date(now.getFullYear(), now.getMonth(), 1);
          endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        }

        if (startDate) {
          currentMonth = startDate.getMonth();
          currentYear = startDate.getFullYear();
        }

        updateTriggerDisplay();
        renderCalendar();
        dispatchChange();
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!picker.contains(e.target)) {
        close();
      }
    });

    updateTriggerDisplay();
  });
}
