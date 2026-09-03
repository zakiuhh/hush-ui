function scrollTriggerIntoView(tabsList, activeTrigger, animate = true) {
  if (!tabsList || !activeTrigger) return;
  if (tabsList.scrollWidth > tabsList.clientWidth) {
    const triggerLeft = activeTrigger.offsetLeft;
    const triggerWidth = activeTrigger.offsetWidth;
    const listWidth = tabsList.clientWidth;
    const targetScroll = triggerLeft - (listWidth / 2) + (triggerWidth / 2);
    tabsList.scrollTo({
      left: Math.max(0, targetScroll),
      behavior: animate ? 'smooth' : 'auto'
    });
  }
}

function positionIndicator(tabsList, activeTrigger, animate = true) {
  let indicator = tabsList.querySelector('.ui-tab-indicator');
  if (!indicator) {
    indicator = document.createElement('span');
    indicator.className = 'ui-tab-indicator';
    tabsList.appendChild(indicator);
  }

  if (!activeTrigger) return;

  if (!animate) {
    indicator.style.transition = 'none';
  }

  indicator.style.width = `${activeTrigger.offsetWidth}px`;
  indicator.style.transform = `translateX(${activeTrigger.offsetLeft}px)`;

  scrollTriggerIntoView(tabsList, activeTrigger, animate);

  if (!animate) {
    // Re-enable smooth transitions after first paint
    requestAnimationFrame(() => {
      indicator.style.transition = '';
    });
  }
}

export function initTabs() {
  const tabLists = document.querySelectorAll('.ui-tabs-list');

  tabLists.forEach((tabList) => {
    const activeTrigger = tabList.querySelector('.ui-tab-trigger.is-active') || tabList.querySelector('.ui-tab-trigger');
    if (activeTrigger) {
      activeTrigger.classList.add('is-active');
      positionIndicator(tabList, activeTrigger, false);
    }
  });

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-tab-target]');
    if (!trigger) return;

    const tabGroup = trigger.closest('.ui-tabs');
    const tabList = trigger.closest('.ui-tabs-list');
    if (!tabGroup || !tabList) return;

    const targetSelector = trigger.getAttribute('data-tab-target');
    const targetPanel = tabGroup.querySelector(targetSelector);

    tabList.querySelectorAll('.ui-tab-trigger').forEach((btn) => btn.classList.remove('is-active'));
    tabGroup.querySelectorAll('.ui-tab-panel').forEach((panel) => panel.classList.remove('is-active'));

    trigger.classList.add('is-active');
    positionIndicator(tabList, trigger, true);

    if (targetPanel) {
      targetPanel.classList.add('is-active');
    }
  });

  // Reposition pill indicators on window resize
  window.addEventListener('resize', () => {
    tabLists.forEach((tabList) => {
      const activeTrigger = tabList.querySelector('.ui-tab-trigger.is-active');
      if (activeTrigger) positionIndicator(tabList, activeTrigger, false);
    });
  });
}
