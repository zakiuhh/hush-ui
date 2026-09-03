export const COMPONENT_REGISTRY = [
  {
    id: 'button',
    name: 'Action Button',
    category: 'Inputs',
    description: 'Hush UI action buttons with spring micro-press physics and semantic variants.',
    cardPreview: `
      <div style="display:flex; flex-direction:column; gap:6px; width:100%; max-width:115px;">
        <button class="ui-button ui-button--primary" style="padding:4px 10px; font-size:11px; width:100%;">Primary</button>
        <button class="ui-button ui-button--secondary" style="padding:4px 10px; font-size:11px; width:100%;">Secondary</button>
      </div>
    `,
    previewMarkup: `
      <div style="display:flex; gap:10px; flex-wrap:wrap; align-items:center; justify-content:center;">
        <button class="ui-button ui-button--primary">Primary</button>
        <button class="ui-button ui-button--secondary">Secondary</button>
        <button class="ui-button ui-button--accent">Accent</button>
        <button class="ui-button ui-button--destructive">Destructive</button>
        <button class="ui-button ui-button--ghost">Ghost</button>
      </div>
    `,
    html: `<button class="ui-button ui-button--primary">Primary Action</button>
<button class="ui-button ui-button--secondary">Secondary</button>
<button class="ui-button ui-button--accent">Accent</button>
<button class="ui-button ui-button--destructive">Destructive</button>
<button class="ui-button ui-button--ghost">Ghost Outline</button>`,
    css: `.ui-button {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-sm);
  background-color: var(--primary);
  color: var(--primary-foreground);
  text-decoration: none;
  transition: transform var(--duration-fast) var(--ease-soft-out),
              box-shadow var(--duration-fast) var(--ease-soft-out);
}
.ui-button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
}
.ui-button:active {
  transform: translateY(0) scale(0.97);
}`,
    js: `// Pure CSS button micro-interactions.`
  },
  {
    id: 'chip',
    name: 'Badge Chip',
    category: 'Data Display',
    description: 'Lightweight tags and metadata indicators tinted with Hush UI backgrounds.',
    cardPreview: `
      <div style="display:flex; flex-direction:column; gap:6px; align-items:center;">
        <span class="ui-chip ui-chip--primary" style="font-size:11px; padding:2px 8px;">Lilac Core</span>
        <span class="ui-chip ui-chip--secondary" style="font-size:11px; padding:2px 8px;">Sage Accent</span>
      </div>
    `,
    previewMarkup: `
      <div style="display:flex; gap:8px; align-items:center; justify-content:center; flex-wrap:wrap;">
        <span class="ui-chip ui-chip--primary">Lilac Core</span>
        <span class="ui-chip ui-chip--secondary">Sage Accent</span>
        <span class="ui-chip">Muted Base</span>
      </div>
    `,
    html: `<span class="ui-chip ui-chip--primary">Lilac Core</span>
<span class="ui-chip ui-chip--secondary">Sage Accent</span>
<span class="ui-chip">Muted Base</span>`,
    css: `.ui-chip {
  display: inline-flex;
  align-items: center;
  padding: 2px 10px;
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  border-radius: var(--radius-full);
  background-color: var(--muted);
  color: var(--muted-foreground);
}
.ui-chip--primary {
  background-color: color-mix(in srgb, var(--primary) 25%, var(--card));
  color: var(--foreground);
}
.ui-chip--secondary {
  background-color: color-mix(in srgb, var(--secondary) 25%, var(--card));
  color: var(--foreground);
}`,
    js: `// Pure CSS display badge.`
  },
  {
    id: 'controls',
    name: 'Selection Controls',
    category: 'Inputs',
    description: 'Boundary-safe toggle switches, bounce-pop checkboxes, and radio buttons.',
    cardPreview: `
      <div style="display:flex; flex-direction:column; gap:6px; align-items:flex-start;">
        <label class="ui-switch" style="font-size:11px;">
          <input type="checkbox" checked />
          <span class="ui-switch-track" style="width:34px; height:18px;"><span class="ui-switch-thumb" style="width:12px; height:12px;"></span></span>
          <span>Switch</span>
        </label>
        <label class="ui-checkbox" style="font-size:11px;">
          <input type="checkbox" checked />
          <span>Active</span>
        </label>
      </div>
    `,
    previewMarkup: `
      <div style="display:flex; gap:16px; align-items:center; justify-content:center; flex-wrap:wrap;">
        <label class="ui-switch">
          <input type="checkbox" checked />
          <span class="ui-switch-track"><span class="ui-switch-thumb"></span></span>
          <span>Switch</span>
        </label>
        <label class="ui-checkbox">
          <input type="checkbox" checked />
          <span>Checkbox</span>
        </label>
        <label class="ui-radio">
          <input type="radio" name="catalog-radio" checked />
          <span>Radio</span>
        </label>
      </div>
    `,
    html: `<!-- Toggle Switch -->
<label class="ui-switch">
  <input type="checkbox" checked />
  <span class="ui-switch-track"><span class="ui-switch-thumb"></span></span>
  <span>Auto-sync</span>
</label>

<!-- Checkbox -->
<label class="ui-checkbox">
  <input type="checkbox" checked />
  <span>Enable feature</span>
</label>

<!-- Radio -->
<label class="ui-radio">
  <input type="radio" name="plan" checked />
  <span>Selected</span>
</label>`,
    css: `.ui-switch-track {
  width: 44px;
  height: 24px;
  background-color: var(--border);
  border-radius: var(--radius-full);
  position: relative;
}
.ui-switch-thumb {
  width: 18px;
  height: 18px;
  background-color: #FFFFFF;
  border-radius: var(--radius-full);
  position: absolute;
  top: 3px;
  left: 3px;
  transition: transform var(--duration-base) cubic-bezier(0.2, 0.9, 0.3, 1.15);
}
.ui-switch input:checked + .ui-switch-track {
  background-color: var(--primary);
}
.ui-switch input:checked + .ui-switch-track .ui-switch-thumb {
  transform: translateX(20px);
}`,
    js: `// Native HTML input events. No JS required.`
  },
  {
    id: 'form',
    name: 'Text Inputs & Forms',
    category: 'Inputs',
    description: 'Clean form fields with focus rings, placeholder styling, and helper labels.',
    cardPreview: `
      <div style="width:100%; max-width:125px; display:flex; flex-direction:column; gap:4px;">
        <span style="font-size:10px; font-weight:600; color:var(--muted-foreground);">Input Field</span>
        <input type="text" class="ui-input" value="Workspace" style="font-size:11px; padding:4px 8px; width:100%;" readonly />
      </div>
    `,
    previewMarkup: `
      <div style="width:100%; max-width:320px; display:flex; flex-direction:column; gap:12px;">
        <div class="ui-form-group">
          <label class="ui-label" for="preview-field">Workspace Name</label>
          <input type="text" id="preview-field" class="ui-input" placeholder="Type here..." value="Hush UI Workspace" />
        </div>
      </div>
    `,
    html: `<div class="ui-form-group">
  <label class="ui-label" for="input-demo">Workspace Name</label>
  <input type="text" id="input-demo" class="ui-input" placeholder="Enter name..." />
</div>`,
    css: `.ui-input {
  width: 100%;
  padding: var(--space-2) var(--space-3);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  background-color: var(--card);
  border: var(--border-default);
  border-radius: var(--radius-sm);
  color: var(--foreground);
  outline: none;
  transition: border-color var(--duration-fast) var(--ease-soft-out),
              box-shadow var(--duration-fast) var(--ease-soft-out);
}
.ui-input:focus {
  border-color: var(--primary);
  box-shadow: var(--glow-primary);
}`,
    js: `// Standard form validation and input listeners.`
  },
  {
    id: 'dropdown',
    name: 'Dropdown Menu',
    category: 'Navigation',
    description: 'Floating actions menu that animates from origin with outside-click dismissal.',
    cardPreview: `
      <div style="display:flex; flex-direction:column; align-items:center; width:100%; max-width:115px;">
        <button class="ui-button ui-button--ghost" style="padding:4px 8px; font-size:11px; width:100%; border:1px solid var(--border); gap:4px;">
          <span>Options</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </button>
      </div>
    `,
    previewMarkup: `
      <div class="ui-dropdown">
        <button class="ui-button ui-button--ghost" data-dropdown-toggle style="gap:6px;">
          <span>Options Menu</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        <div class="ui-dropdown-menu">
          <button class="ui-dropdown-item" style="gap:8px; display:flex; align-items:center;">
            <svg class="lucide lucide-settings" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/></svg>
            <span>Edit Settings</span>
          </button>
          <button class="ui-dropdown-item" style="gap:8px; display:flex; align-items:center;">
            <svg class="lucide lucide-copy" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
            <span>Duplicate Canvas</span>
          </button>
          <button class="ui-dropdown-item" style="color:var(--destructive); gap:8px; display:flex; align-items:center;">
            <svg class="lucide lucide-x" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            <span>Delete Project</span>
          </button>
        </div>
      </div>
    `,
    html: `<div class="ui-dropdown">
  <button class="ui-button ui-button--ghost" data-dropdown-toggle>
    Options Menu
  </button>
  <div class="ui-dropdown-menu">
    <button class="ui-dropdown-item">Edit Settings</button>
    <button class="ui-dropdown-item">Duplicate Canvas</button>
    <button class="ui-dropdown-item" style="color: var(--destructive);">Delete Project</button>
  </div>
</div>`,
    css: `.ui-dropdown-menu {
  position: absolute;
  top: calc(100% + var(--space-2));
  left: 0;
  min-width: 190px;
  background-color: var(--popover);
  border: var(--border-default);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-lg);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-8px) scale(0.95);
  transition: all var(--duration-fast) var(--ease-soft-out);
}
.ui-dropdown-menu.is-open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0) scale(1);
}`,
    js: `import { initDropdowns } from './components/dropdown/dropdown.js';
initDropdowns();`
  },
  {
    id: 'popover',
    name: 'Popover Panel',
    category: 'Overlays',
    description: 'Contextual spring card floating relative to any interactive trigger element.',
    cardPreview: `
      <div style="display:flex; flex-direction:column; align-items:center; width:100%; max-width:115px;">
        <button class="ui-button ui-button--secondary" style="padding:4px 10px; font-size:11px; width:100%;">Popover</button>
      </div>
    `,
    previewMarkup: `
      <div class="ui-popover">
        <button class="ui-button ui-button--secondary" data-popover-target="stage-popover">
          Open Popover
        </button>
        <div id="stage-popover" class="ui-popover-content">
          <div class="ui-popover-header">Configuration Note</div>
          <div class="ui-popover-body">
            This card animates with spring easing and closes when clicking outside or pressing Escape.
          </div>
        </div>
      </div>
    `,
    html: `<div class="ui-popover">
  <button class="ui-button ui-button--secondary" data-popover-target="demo-popover">
    Open Popover
  </button>
  <div id="demo-popover" class="ui-popover-content">
    <div class="ui-popover-header">Configuration Note</div>
    <div class="ui-popover-body">
      Interactive floating card anchored to the trigger.
    </div>
  </div>
</div>`,
    css: `.ui-popover-content {
  position: absolute;
  top: calc(100% + var(--space-2));
  left: 50%;
  transform: translateX(-50%) translateY(-8px) scale(0.95);
  width: 280px;
  background-color: var(--card);
  border: var(--border-default);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  box-shadow: var(--shadow-lg);
  opacity: 0;
  visibility: hidden;
  transition: all var(--duration-fast) var(--ease-spring);
}
.ui-popover-content.is-open {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0) scale(1);
}`,
    js: `import { initPopovers } from './components/popover/popover.js';
initPopovers();`
  },
  {
    id: 'modal',
    name: 'Dialog Modal',
    category: 'Overlays',
    description: 'Focus-trapping dialog modal with backdrop blur and spring scale animations.',
    cardPreview: `
      <div style="display:flex; flex-direction:column; align-items:center; width:100%; max-width:115px;">
        <button class="ui-button ui-button--primary" style="padding:4px 10px; font-size:11px; width:100%;">Dialog</button>
      </div>
    `,
    previewMarkup: `
      <div>
        <button class="ui-button ui-button--primary" data-modal-target="stage-modal">
          Launch Dialog Modal
        </button>
        <div id="stage-modal" class="ui-modal-backdrop">
          <div class="ui-modal" role="dialog" aria-modal="true">
            <h3 style="font-size:var(--text-xl); margin-bottom:8px;">Interactive Modal</h3>
            <p style="color:var(--muted-foreground); font-size:var(--text-sm); margin-bottom:20px;">
              Backdrop blur scrim with smooth soft-out animation and Escape dismissal.
            </p>
            <div style="display:flex; justify-content:flex-end; gap:10px;">
              <button class="ui-button ui-button--ghost" data-modal-close>Cancel</button>
              <button class="ui-button" data-modal-close>Confirm Action</button>
            </div>
          </div>
        </div>
      </div>
    `,
    html: `<!-- Trigger -->
<button class="ui-button ui-button--primary" data-modal-target="demo-modal">
  Open Modal
</button>

<!-- Dialog Backdrop -->
<div id="demo-modal" class="ui-modal-backdrop">
  <div class="ui-modal" role="dialog" aria-modal="true">
    <h3>Modal Title</h3>
    <p>Dialog description content.</p>
    <button class="ui-button" data-modal-close>Close</button>
  </div>
</div>`,
    css: `.ui-modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(58, 53, 65, var(--opacity-scrim));
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: all var(--duration-slow) var(--ease-soft-out);
}
.ui-modal-backdrop.is-open {
  opacity: 1;
  visibility: visible;
}
.ui-modal {
  background-color: var(--card);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  transform: scale(0.92) translateY(14px);
  transition: transform var(--duration-slow) var(--ease-spring);
}
.ui-modal-backdrop.is-open .ui-modal {
  transform: scale(1) translateY(0);
}`,
    js: `import { initModals } from './components/modal/modal.js';
initModals();`
  },
  {
    id: 'drawer',
    name: 'Slide Drawer (Sheet)',
    category: 'Overlays',
    description: 'Off-canvas slide-out sheet with backdrop blur and customizable docking.',
    cardPreview: `
      <div style="display:flex; flex-direction:column; align-items:center; width:100%; max-width:115px;">
        <button class="ui-button ui-button--accent" style="padding:4px 8px; font-size:11px; width:100%; gap:4px; display:inline-flex; align-items:center; justify-content:center;">
          <span>Drawer</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
      </div>
    `,
    previewMarkup: `
      <div>
        <button class="ui-button ui-button--accent" data-drawer-target="stage-drawer" style="gap:6px;">
          <span>Open Slide Drawer</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
        <div id="stage-drawer" class="ui-drawer-backdrop">
          <aside class="ui-drawer" role="dialog" aria-modal="true">
            <div class="ui-drawer-header">
              <h3 style="font-size:var(--text-lg);">Workspace Settings</h3>
              <button class="ui-button ui-button--ghost" data-drawer-close style="padding:4px 8px;">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
            <div class="ui-drawer-body">
              <p style="margin-bottom:16px;">This drawer animates with GPU transforms and closes via backdrop tap or Escape.</p>
              <div class="ui-form-group">
                <label class="ui-label" for="drawer-input">Session Tag</label>
                <input type="text" id="drawer-input" class="ui-input" value="active-dev-branch" />
              </div>
            </div>
            <div class="ui-drawer-footer">
              <button class="ui-button ui-button--ghost" data-drawer-close>Cancel</button>
              <button class="ui-button" data-drawer-close>Save Changes</button>
            </div>
          </aside>
        </div>
      </div>
    `,
    html: `<!-- Drawer Trigger -->
<button class="ui-button ui-button--accent" data-drawer-target="demo-drawer">
  Open Drawer
</button>

<!-- Drawer Markup -->
<div id="demo-drawer" class="ui-drawer-backdrop">
  <aside class="ui-drawer" role="dialog" aria-modal="true">
    <div class="ui-drawer-header">
      <h3>Drawer Panel</h3>
      <button class="ui-button ui-button--ghost" data-drawer-close aria-label="Close drawer" style="padding:4px 8px;">
        <svg class="lucide lucide-x" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>
    </div>
    <div class="ui-drawer-body">Content goes here...</div>
  </aside>
</div>`,
    css: `.ui-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 380px;
  background-color: var(--card);
  transform: translateX(100%);
  transition: transform var(--duration-slow) var(--ease-soft-out);
}
.ui-drawer-backdrop.is-open .ui-drawer {
  transform: translateX(0);
}`,
    js: `import { initDrawers } from './components/drawer/drawer.js';
initDrawers();`
  },
  {
    id: 'toast',
    name: 'Stacked Toast Notifications',
    category: 'Feedback',
    description: '3D stacked notification queue with depth perspective, hover fan-out, and inline actions.',
    cardPreview: `
      <div style="position:relative; width:100%; max-width:125px; height:60px;">
        <div class="ui-toast" data-stack-pos="1" style="width:100%; padding:4px 8px; position:absolute; bottom:8px; right:0;">
          <span class="ui-toast-indicator" style="margin-top:2px; width:6px; height:6px;"></span>
          <div class="ui-toast-content">
            <div class="ui-toast-title" style="font-size:10px;">Synced</div>
          </div>
        </div>
        <div class="ui-toast" data-stack-pos="0" style="width:100%; padding:4px 8px; position:absolute; bottom:0; right:0; box-shadow:var(--shadow-xs);">
          <span class="ui-toast-indicator" style="margin-top:2px; width:6px; height:6px; background-color:var(--secondary);"></span>
          <div class="ui-toast-content">
            <div class="ui-toast-title" style="font-size:10px;">Saved</div>
          </div>
        </div>
      </div>
    `,
    previewMarkup: `
      <div style="display:flex; flex-direction:column; gap:12px; align-items:center;">
        <div style="display:flex; gap:10px; flex-wrap:wrap; justify-content:center;">
          <button class="ui-button ui-button--primary" onclick="window.triggerStageToast('default')">Queue Default</button>
          <button class="ui-button ui-button--secondary" onclick="window.triggerStageToast('success')">Queue Success</button>
          <button class="ui-button ui-button--destructive" onclick="window.triggerStageToast('destructive')">Queue Alert</button>
          <button class="ui-button ui-button--ghost" onclick="window.triggerActionToast()">Toast with Action</button>
        </div>
        <div style="display:inline-flex; align-items:center; gap:6px; font-size:11px; color:var(--muted-foreground);">
          <svg class="lucide lucide-sparkles" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--primary);"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
          <span>Click multiple times to stack cards. Hover over notifications to fan them out!</span>
        </div>
      </div>
    `,
    html: `<!-- Trigger Stacked Toast via JS -->
<button class="ui-button ui-button--primary" id="toast-btn">
  Fire Stacked Toast
</button>`,
    css: `.ui-toast-container {
  position: fixed;
  bottom: var(--space-6);
  right: var(--space-6);
  z-index: 99999;
}
.ui-toast[data-stack-pos="0"] { transform: translateY(0) scale(1); z-index: 100; }
.ui-toast[data-stack-pos="1"] { transform: translateY(-12px) scale(0.94); opacity: 0.9; z-index: 99; }
.ui-toast[data-stack-pos="2"] { transform: translateY(-24px) scale(0.88); opacity: 0.75; z-index: 98; }

/* Fan-out on hover */
.ui-toast-container:hover .ui-toast {
  transform: translateY(calc(var(--stack-index, 0) * -72px)) scale(1) !important;
  opacity: 1 !important;
}`,
    js: `import { showToast } from './components/toast/toast.js';

showToast({
  title: 'Workspace Synced',
  message: '3D stacked notification queue with action triggers.',
  type: 'success',
  duration: 4000,
  action: {
    label: 'Undo',
    onClick: () => console.log('Undo clicked')
  }
});`
  },
  {
    id: 'tabs',
    name: 'Sliding Pill Tabs',
    category: 'Navigation',
    description: 'Tab strip featuring an animated sliding pill indicator and fade-in panels.',
    cardPreview: `
      <div class="ui-tabs-list" style="padding:2px; width:100%; max-width:125px;">
        <button class="ui-tab-trigger is-active" style="padding:3px 6px; font-size:10px;">Design</button>
        <button class="ui-tab-trigger" style="padding:3px 6px; font-size:10px;">Code</button>
      </div>
    `,
    previewMarkup: `
      <div class="ui-tabs" style="width:100%; max-width:400px;">
        <div class="ui-tabs-list">
          <button class="ui-tab-trigger is-active" data-tab-target="#st-1">Design</button>
          <button class="ui-tab-trigger" data-tab-target="#st-2">Tokens</button>
          <button class="ui-tab-trigger" data-tab-target="#st-3">Exports</button>
        </div>
        <div id="st-1" class="ui-tab-panel is-active" style="padding-top:12px; font-size:var(--text-xs); color:var(--muted-foreground);">
          Design tab: Desaturated hues and 4px baseline grid.
        </div>
        <div id="st-2" class="ui-tab-panel" style="padding-top:12px; font-size:var(--text-xs); color:var(--muted-foreground);">
          Tokens tab: Global CSS variables mapped to light/dark modes.
        </div>
        <div id="st-3" class="ui-tab-panel" style="padding-top:12px; font-size:var(--text-xs); color:var(--muted-foreground);">
          Exports tab: Vite bundle compiled into standard ES modules.
        </div>
      </div>
    `,
    html: `<div class="ui-tabs">
  <div class="ui-tabs-list">
    <button class="ui-tab-trigger is-active" data-tab-target="#panel-1">Tab 1</button>
    <button class="ui-tab-trigger" data-tab-target="#panel-2">Tab 2</button>
  </div>
  <div id="panel-1" class="ui-tab-panel is-active">Content 1</div>
  <div id="panel-2" class="ui-tab-panel">Content 2</div>
</div>`,
    css: `.ui-tab-indicator {
  position: absolute;
  top: var(--space-1);
  height: calc(100% - (var(--space-1) * 2));
  background-color: var(--card);
  border-radius: var(--radius-xs);
  box-shadow: var(--shadow-xs);
  transition: transform var(--duration-base) var(--ease-soft-out),
              width var(--duration-base) var(--ease-soft-out);
}`,
    js: `import { initTabs } from './components/tabs/tabs.js';
initTabs();`
  },
  {
    id: 'accordion',
    name: 'Accordion',
    category: 'Data Display',
    description: 'Collapsible disclosure panels with rotating indicators and smooth height unfold.',
    cardPreview: `
      <div style="width:100%; max-width:125px; background:var(--card); border:1px solid var(--border); border-radius:6px; padding:6px 8px; display:flex; justify-content:space-between; align-items:center; font-size:10px;">
        <span>Collapse</span>
        <svg class="ui-accordion-icon" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
      </div>
    `,
    previewMarkup: `
      <div class="ui-accordion" style="width:100%; max-width:380px;">
        <div class="ui-accordion-item">
          <button class="ui-accordion-header">
            <span>What are tinted shadows?</span>
            <svg class="ui-accordion-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <div class="ui-accordion-content">
            <div class="ui-accordion-body">
              Tinted shadows use subtle ink pigment blends to avoid dull black-grey edges.
            </div>
          </div>
        </div>
      </div>
    `,
    html: `<div class="ui-accordion">
  <div class="ui-accordion-item">
    <button class="ui-accordion-header">
      <span>Accordion Header</span>
      <svg class="ui-accordion-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="ui-accordion-content">
      <div class="ui-accordion-body">Collapsible section body text.</div>
    </div>
  </div>
</div>`,
    css: `.ui-accordion-icon {
  transition: transform var(--duration-base) var(--ease-spring);
}
.ui-accordion-item.is-open .ui-accordion-icon {
  transform: rotate(180deg);
}`,
    js: `import { initAccordions } from './components/accordion/accordion.js';
initAccordions();`
  },
  {
    id: 'tooltip',
    name: 'Spring Tooltip',
    category: 'Overlays',
    description: 'Floating informational bubbles with spring pop-in curves and directional arrows.',
    cardPreview: `
      <div style="display:flex; flex-direction:column; align-items:center; width:100%; max-width:115px;">
        <button class="ui-button ui-button--ghost" style="padding:4px 8px; font-size:11px; width:100%; border:1px solid var(--border);">Hover Tip</button>
      </div>
    `,
    previewMarkup: `
      <div style="display:flex; gap:16px; align-items:center; justify-content:center;">
        <button class="ui-button ui-button--ghost" data-tooltip="Top floating indicator">
          Hover (Top)
        </button>
        <button class="ui-button ui-button--ghost" data-tooltip="Bottom aligned helper" data-tooltip-position="bottom">
          Hover (Bottom)
        </button>
      </div>
    `,
    html: `<button class="ui-button" data-tooltip="Helper tooltip text">
  Hover over me
</button>
<button class="ui-button" data-tooltip="Bottom helper" data-tooltip-position="bottom">
  Bottom Tooltip
</button>`,
    css: `[data-tooltip]::before {
  content: attr(data-tooltip);
  opacity: 0;
  visibility: hidden;
  transform: translateX(-50%) translateY(8px) scale(0.88);
  transition: all 260ms cubic-bezier(0.34, 1.5, 0.64, 1);
}
[data-tooltip]:hover::before {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(-6px) scale(1);
}`,
    js: `// Pure CSS-driven data-attribute tooltips.`
  },
  {
    id: 'theme-toggle',
    name: 'Morphing Sky Toggle',
    category: 'Inputs',
    description: 'Daytime sun and cloud morphs into night moon and twinkling stars.',
    cardPreview: `
      <div style="display:flex; align-items:center; justify-content:center;">
        <div class="ui-theme-toggle" style="transform:scale(0.8); margin:0; pointer-events:none;">
          <div class="ui-theme-stars"><span class="ui-star ui-star--1"></span><span class="ui-star ui-star--2"></span></div>
          <div class="ui-theme-orb"><span class="ui-moon-crater ui-moon-crater--1"></span></div>
        </div>
      </div>
    `,
    previewMarkup: `
      <button id="stage-theme-btn" class="ui-theme-toggle" type="button" aria-label="Toggle theme">
        <div class="ui-theme-stars" aria-hidden="true">
          <span class="ui-star ui-star--1"></span>
          <span class="ui-star ui-star--2"></span>
          <span class="ui-star ui-star--3"></span>
          <span class="ui-star ui-star--4"></span>
        </div>
        <div class="ui-theme-orb" aria-hidden="true">
          <span class="ui-moon-crater ui-moon-crater--1"></span>
          <span class="ui-moon-crater ui-moon-crater--2"></span>
          <span class="ui-moon-crater ui-moon-crater--3"></span>
        </div>
        <svg class="ui-theme-cloud" viewBox="0 0 34 22" fill="none" aria-hidden="true">
          <path d="M7 19h20a5 5 0 0 0 1.2-9.85A6.5 6.5 0 0 0 16 6a6.5 6.5 0 0 0-6.1 4.2A5 5 0 0 0 7 19z" fill="#FFFFFF" fill-opacity="0.92"/>
          <path d="M12 19h14a4 4 0 0 0 0-8 5 5 0 0 0-9.6-1.5A4 4 0 0 0 12 19z" fill="#FFFFFF"/>
        </svg>
      </button>
    `,
    html: `<button id="theme-btn" class="ui-theme-toggle" type="button" aria-label="Toggle theme">
  <div class="ui-theme-stars" aria-hidden="true">
    <span class="ui-star ui-star--1"></span>
    <span class="ui-star ui-star--2"></span>
    <span class="ui-star ui-star--3"></span>
    <span class="ui-star ui-star--4"></span>
  </div>
  <div class="ui-theme-orb" aria-hidden="true">
    <span class="ui-moon-crater ui-moon-crater--1"></span>
    <span class="ui-moon-crater ui-moon-crater--2"></span>
    <span class="ui-moon-crater ui-moon-crater--3"></span>
  </div>
  <svg class="ui-theme-cloud" viewBox="0 0 34 22" fill="none" aria-hidden="true">
    <path d="M7 19h20a5 5 0 0 0 1.2-9.85A6.5 6.5 0 0 0 16 6a6.5 6.5 0 0 0-6.1 4.2A5 5 0 0 0 7 19z" fill="#FFFFFF" fill-opacity="0.92"/>
  </svg>
</button>`,
    css: `.dark .ui-theme-orb {
  transform: translateX(33px);
  background-color: #EDE8F5;
  box-shadow: 0 0 10px rgba(201, 184, 219, 0.45);
}
.dark .ui-theme-cloud {
  transform: translateY(18px) scale(0.6);
  opacity: 0;
}`,
    js: `import { toggleTheme } from './utils/theme.js';
document.getElementById('theme-btn').addEventListener('click', toggleTheme);`
  },
  {
    id: 'alert',
    name: 'Alert Callout',
    category: 'Feedback',
    description: 'Prominent contextual banner callouts with Hush UI tints and dismiss actions.',
    cardPreview: `
      <div class="ui-alert ui-alert--info" style="width:100%; max-width:125px; padding:6px 8px; gap:6px;">
        <div class="ui-alert-icon" style="font-size:11px; display:flex; align-items:center;">
          <svg class="lucide lucide-info" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        </div>
        <div class="ui-alert-content">
          <div class="ui-alert-title" style="font-size:10px; margin-bottom:0;">Notice</div>
        </div>
      </div>
    `,
    previewMarkup: `
      <div class="ui-alert ui-alert--info" style="max-width:380px; width:100%;">
        <div class="ui-alert-icon">
          <svg class="lucide lucide-info" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        </div>
        <div class="ui-alert-content">
          <div class="ui-alert-title">System Status</div>
          <div class="ui-alert-description">Design tokens loaded and compiling smoothly.</div>
        </div>
        <button class="ui-alert-close" onclick="this.closest('.ui-alert').remove()">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
    `,
    html: `<div class="ui-alert ui-alert--info">
  <div class="ui-alert-icon">
    <svg class="lucide lucide-info" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
  </div>
  <div class="ui-alert-content">
    <div class="ui-alert-title">Notice Title</div>
    <div class="ui-alert-description">Contextual notification description.</div>
  </div>
  <button class="ui-alert-close" onclick="this.closest('.ui-alert').remove()">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  </button>
</div>`,
    css: `.ui-alert {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-5);
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
  background-color: var(--card);
}
.ui-alert--info {
  background-color: rgba(201, 184, 219, 0.15);
  border-color: rgba(201, 184, 219, 0.4);
}`,
    js: `// Close trigger removes element from DOM.`
  },
  {
    id: 'skeleton',
    name: 'Skeleton Loader',
    category: 'Feedback',
    description: 'Fluid shimmer gradient placeholders for loading states without layout shifts.',
    cardPreview: `
      <div style="width:100%; max-width:120px; display:flex; gap:8px; align-items:center;">
        <div class="ui-skeleton ui-skeleton--circle" style="width:26px; height:26px; flex-shrink:0;"></div>
        <div style="flex:1; display:flex; flex-direction:column; gap:4px;">
          <div class="ui-skeleton ui-skeleton--text" style="width:100%; height:7px;"></div>
          <div class="ui-skeleton ui-skeleton--text" style="width:60%; height:7px; margin-bottom:0;"></div>
        </div>
      </div>
    `,
    previewMarkup: `
      <div style="width:100%; max-width:280px; display:flex; gap:12px; align-items:center;">
        <div class="ui-skeleton ui-skeleton--circle" style="width:38px; height:38px; flex-shrink:0;"></div>
        <div style="flex:1;">
          <div class="ui-skeleton ui-skeleton--text" style="width:80%;"></div>
          <div class="ui-skeleton ui-skeleton--text" style="width:50%; margin-bottom:0;"></div>
        </div>
      </div>
    `,
    html: `<div class="ui-skeleton ui-skeleton--circle" style="width: 40px; height: 40px;"></div>
<div class="ui-skeleton ui-skeleton--text" style="width: 100%;"></div>
<div class="ui-skeleton ui-skeleton--text" style="width: 60%;"></div>`,
    css: `.ui-skeleton::after {
  content: "";
  position: absolute;
  inset: 0;
  transform: translateX(-100%);
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%);
  animation: skeleton-shimmer 1.8s infinite cubic-bezier(0.4, 0, 0.2, 1);
}`,
    js: `// Pure CSS keyframe shimmer animation.`
  },
  {
    id: 'avatar',
    name: 'Avatar & Spring Group',
    category: 'Data Display',
    description: 'Opaque stack avatars with fanning hover physics and active status badges.',
    cardPreview: `
      <div class="ui-avatar-group" style="transform:scale(0.8);">
        <div class="ui-avatar ui-avatar--lilac">ZK</div>
        <div class="ui-avatar ui-avatar--sage">AM<span class="ui-avatar-badge"></span></div>
        <div class="ui-avatar ui-avatar--blush">+3</div>
      </div>
    `,
    previewMarkup: `
      <div class="ui-avatar-group">
        <div class="ui-avatar ui-avatar--lilac">ZK</div>
        <div class="ui-avatar ui-avatar--sage">
          AM
          <span class="ui-avatar-badge"></span>
        </div>
        <div class="ui-avatar ui-avatar--blush">FL</div>
        <div class="ui-avatar ui-avatar--butter">+3</div>
      </div>
    `,
    html: `<div class="ui-avatar-group">
  <div class="ui-avatar ui-avatar--lilac">ZK</div>
  <div class="ui-avatar ui-avatar--sage">
    AM
    <span class="ui-avatar-badge"></span>
  </div>
  <div class="ui-avatar ui-avatar--blush">FL</div>
  <div class="ui-avatar ui-avatar--butter">+3</div>
</div>`,
    css: `.ui-avatar-group:hover .ui-avatar {
  margin-left: -6px;
}
.ui-avatar-group .ui-avatar:hover {
  z-index: 10;
  transform: translateY(-8px) scale(1.18);
  box-shadow: 0 0 0 3px var(--card), var(--shadow-md);
}`,
    js: `// Pure CSS spring hover transforms.`
  },
  {
    id: 'slider',
    name: 'Range Slider',
    category: 'Inputs',
    description: 'Custom thumb range slider with hover expansion and active grab states.',
    cardPreview: `
      <div style="width:100%; max-width:120px; display:flex; flex-direction:column; gap:4px;">
        <div style="display:flex; justify-content:space-between; font-size:9px; color:var(--muted-foreground);">
          <span>Value</span><span style="color:var(--primary); font-weight:600;">65%</span>
        </div>
        <input type="range" class="ui-slider" min="0" max="100" value="65" style="width:100%;" />
      </div>
    `,
    previewMarkup: `
      <div class="ui-slider-container" style="width:100%; max-width:280px;">
        <div class="ui-slider-header">
          <span>Density Scale</span>
          <span id="st-slider-val" style="color:var(--primary); font-weight:var(--font-semibold);">65%</span>
        </div>
        <input type="range" class="ui-slider" min="0" max="100" value="65" oninput="document.getElementById('st-slider-val').textContent = this.value + '%'" />
      </div>
    `,
    html: `<div class="ui-slider-container">
  <div class="ui-slider-header">
    <span>Value</span>
    <span id="slider-val">50%</span>
  </div>
  <input type="range" class="ui-slider" min="0" max="100" value="50" oninput="document.getElementById('slider-val').textContent = this.value + '%'" />
</div>`,
    css: `.ui-slider::-webkit-slider-thumb {
  width: 20px;
  height: 20px;
  border-radius: var(--radius-full);
  background-color: var(--card);
  border: 2px solid var(--primary);
  box-shadow: var(--shadow-xs);
  cursor: grab;
  transition: transform var(--duration-fast) var(--ease-spring);
}
.ui-slider::-webkit-slider-thumb:hover {
  transform: scale(1.15);
}`,
    js: `// Sync value display with native input listener.`
  },
  {
    id: 'stat',
    name: 'Metric Stat Widget',
    category: 'Data Display',
    description: 'Rainmeter-inspired desktop metric widget with trend percentages and icon header.',
    cardPreview: `
      <div class="ui-stat" style="width:100%; max-width:125px; padding:8px 10px;">
        <div class="ui-stat-header">
          <span class="ui-stat-label" style="font-size:9px;">Uptime</span>
          <span class="ui-trend ui-trend--up" style="font-size:8px; padding:1px 4px; gap:2px; display:inline-flex; align-items:center;">
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            <span>99%</span>
          </span>
        </div>
        <div class="ui-stat-value" style="font-size:16px; margin:2px 0 0 0;">99.8%</div>
      </div>
    `,
    previewMarkup: `
      <div class="ui-stat" style="width:100%; max-width:260px;">
        <div class="ui-stat-header">
          <span class="ui-stat-label">Active Deployments</span>
          <div class="ui-stat-icon">
            <svg class="lucide lucide-zap" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          </div>
        </div>
        <div class="ui-stat-value">98.2%</div>
        <div class="ui-stat-footer">
          <span class="ui-trend ui-trend--up" style="gap:4px; display:inline-flex; align-items:center;">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            <span>+0.8%</span>
          </span>
          <span>uptime stable</span>
        </div>
      </div>
    `,
    html: `<div class="ui-stat">
  <div class="ui-stat-header">
    <span class="ui-stat-label">Deployments</span>
    <div class="ui-stat-icon">
      <svg class="lucide lucide-zap" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
    </div>
  </div>
  <div class="ui-stat-value">98.2%</div>
  <div class="ui-stat-footer">
    <span class="ui-trend ui-trend--up">+0.8%</span>
    <span>uptime stable</span>
  </div>
</div>`,
    css: `.ui-stat {
  background-color: var(--card);
  border: var(--border-default);
  border-radius: var(--radius-md);
  padding: var(--space-5);
  box-shadow: var(--shadow-sm);
  transition: transform var(--duration-fast) var(--ease-spring),
              box-shadow var(--duration-fast) var(--ease-soft-out);
}
.ui-stat:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}`,
    js: `// Display card layout with semantic tokens.`
  },
  {
    id: 'progress',
    name: 'Progress & Steppers',
    category: 'Feedback',
    description: 'Gradient progress tracks and numbered multi-stage workflow pipelines.',
    cardPreview: `
      <div style="width:100%; max-width:120px; display:flex; flex-direction:column; gap:6px;">
        <div class="ui-progress-track" style="height:6px;">
          <div class="ui-progress-fill" style="width:70%;"></div>
        </div>
        <div style="display:flex; justify-content:space-between; font-size:9px; color:var(--muted-foreground);">
          <span>Progress</span><span>70%</span>
        </div>
      </div>
    `,
    previewMarkup: `
      <div style="width:100%; max-width:320px; display:flex; flex-direction:column; gap:16px;">
        <div class="ui-stepper">
          <div class="ui-stepper-line"></div>
          <div class="ui-step is-complete">
            <div class="ui-step-circle">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </div>
          <div class="ui-step is-active"><div class="ui-step-circle">2</div></div>
          <div class="ui-step"><div class="ui-step-circle">3</div></div>
        </div>
        <div class="ui-progress-track">
          <div class="ui-progress-fill" style="width:65%;"></div>
        </div>
      </div>
    `,
    html: `<!-- Stepper -->
<div class="ui-stepper">
  <div class="ui-stepper-line"></div>
  <div class="ui-step is-complete"><div class="ui-step-circle"><svg class="lucide lucide-check" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg></div></div>
  <div class="ui-step is-active"><div class="ui-step-circle">2</div></div>
  <div class="ui-step"><div class="ui-step-circle">3</div></div>
</div>

<!-- Progress Bar -->
<div class="ui-progress-track">
  <div class="ui-progress-fill" style="width: 65%;"></div>
</div>`,
    css: `.ui-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: inherit;
  transition: width 400ms var(--ease-soft-out);
}`,
    js: `// Set progress via element.style.width = percentage.`
  },
  {
    id: 'kbd',
    name: 'Keycap Badge (Kbd)',
    category: 'Data Display',
    description: 'Tactile 3D keyboard key shortcut caps with physical press depression on click.',
    cardPreview: `
      <div style="display:flex; gap:4px; align-items:center; justify-content:center;">
        <kbd class="ui-kbd" style="font-size:10px; padding:2px 5px;">Ctrl</kbd>
        <span style="font-size:9px; color:var(--muted-foreground);">+</span>
        <kbd class="ui-kbd" style="font-size:10px; padding:2px 5px;">Shift</kbd>
        <span style="font-size:9px; color:var(--muted-foreground);">+</span>
        <kbd class="ui-kbd" style="font-size:10px; padding:2px 5px;">P</kbd>
      </div>
    `,
    previewMarkup: `
      <div style="display:flex; gap:6px; align-items:center;">
        <kbd class="ui-kbd">Ctrl</kbd>
        <span style="font-size:12px; color:var(--muted-foreground);">+</span>
        <kbd class="ui-kbd">Shift</kbd>
        <span style="font-size:12px; color:var(--muted-foreground);">+</span>
        <kbd class="ui-kbd">P</kbd>
      </div>
    `,
    html: `<kbd class="ui-kbd">Ctrl</kbd>
<kbd class="ui-kbd">K</kbd>`,
    css: `.ui-kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
  font-family: monospace;
  font-size: 11px;
  background-color: var(--card);
  border: 1px solid var(--border);
  border-bottom: 2.5px solid var(--border);
  border-radius: var(--radius-xs);
  transition: transform 60ms ease, border-bottom-width 60ms ease;
}
.ui-kbd:active {
  transform: translateY(1.5px);
  border-bottom-width: 1px;
}`,
    js: `// Native HTML <kbd> element with custom styling.`
  },
  {
    id: 'breadcrumb',
    name: 'Breadcrumb Trail',
    category: 'Navigation',
    description: 'Clean path navigation links with hover states and active leaf nodes.',
    cardPreview: `
      <nav aria-label="Breadcrumb">
        <ol class="ui-breadcrumb" style="font-size:10px; gap:4px;">
          <li class="ui-breadcrumb-item"><a href="#" class="ui-breadcrumb-link" style="padding:1px 4px;">Home</a></li>
          <li class="ui-breadcrumb-separator" style="font-size:9px;">/</li>
          <li class="ui-breadcrumb-item is-current"><span class="ui-breadcrumb-link" style="padding:1px 4px;">UI</span></li>
        </ol>
      </nav>
    `,
    previewMarkup: `
      <nav aria-label="Breadcrumb">
        <ol class="ui-breadcrumb">
          <li class="ui-breadcrumb-item"><a href="#" class="ui-breadcrumb-link">Workspace</a></li>
          <li class="ui-breadcrumb-separator">/</li>
          <li class="ui-breadcrumb-item"><a href="#" class="ui-breadcrumb-link">Components</a></li>
          <li class="ui-breadcrumb-separator">/</li>
          <li class="ui-breadcrumb-item is-current"><span class="ui-breadcrumb-link">Catalog</span></li>
        </ol>
      </nav>
    `,
    html: `<nav aria-label="Breadcrumb">
  <ol class="ui-breadcrumb">
    <li class="ui-breadcrumb-item"><a href="#" class="ui-breadcrumb-link">Home</a></li>
    <li class="ui-breadcrumb-separator">/</li>
    <li class="ui-breadcrumb-item is-current"><span class="ui-breadcrumb-link">Current</span></li>
  </ol>
</nav>`,
    css: `.ui-breadcrumb-link {
  color: var(--muted-foreground);
  text-decoration: none;
  padding: 2px 6px;
  border-radius: var(--radius-xs);
  transition: all var(--duration-fast) var(--ease-soft-out);
}
.ui-breadcrumb-link:hover {
  color: var(--foreground);
  background-color: var(--muted);
}`,
    js: `// Native accessible breadcrumb navigation hierarchy.`
  },
  {
    id: 'command',
    name: 'Command Palette (Ctrl+K)',
    category: 'Overlays',
    description: 'Spotlight dialog overlay with instant fuzzy search, category groups, and keyboard shortcuts.',
    cardPreview: `
      <div style="width:100%; max-width:125px; background-color:var(--card); border:1px solid var(--border); border-radius:6px; padding:4px 6px; box-shadow:var(--shadow-xs); display:flex; flex-direction:column; gap:3px;">
        <div style="display:flex; align-items:center; gap:4px; font-size:9px; color:var(--muted-foreground); border-bottom:1px solid var(--border); padding-bottom:2px;">
          <svg class="lucide lucide-search" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <span>Search...</span>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; font-size:9px; padding:1px 3px; border-radius:3px; background:color-mix(in srgb, var(--primary) 20%, var(--card));">
          <span>Theme</span>
          <kbd class="ui-kbd" style="font-size:7px; padding:0 2px;">↵</kbd>
        </div>
      </div>
    `,
    previewMarkup: `
      <div style="display:flex; flex-direction:column; gap:12px; align-items:center;">
        <button class="ui-button ui-button--primary" data-command-trigger="demo-command-dialog" style="gap:6px;">
          <svg class="lucide lucide-search" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <span>Launch Command Palette (Ctrl+K)</span>
        </button>
        <span style="font-size:11px; color:var(--muted-foreground);">Or press <kbd class="ui-kbd">Ctrl</kbd> + <kbd class="ui-kbd">K</kbd> anywhere on the page</span>

        <!-- Command Palette Modal -->
        <div id="demo-command-dialog" class="ui-command-backdrop">
          <div class="ui-command-dialog" role="dialog" aria-modal="true">
            <div class="ui-command-header">
              <svg class="ui-command-search-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="8.5" cy="8.5" r="5.5" />
                <line x1="12.5" y1="12.5" x2="17" y2="17" stroke-linecap="round" />
              </svg>
              <input type="search" class="ui-command-input" placeholder="Type a command or search..." autofocus />
              <button class="ui-button ui-button--ghost" data-command-close style="padding:2px 8px; font-size:11px;">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
            <div class="ui-command-body">
              <div class="ui-command-group">
                <div class="ui-command-group-heading">Navigation & Pages</div>
                <button class="ui-command-item is-selected" onclick="window.location.href='/'">
                  <div class="ui-command-item-left">
                    <svg class="lucide lucide-home" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                    <span>Go to Home Page</span>
                  </div>
                  <kbd class="ui-kbd">H</kbd>
                </button>
                <button class="ui-command-item" onclick="window.location.href='/pages/components.html'">
                  <div class="ui-command-item-left">
                    <svg class="lucide lucide-layers" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>
                    <span>Components Explorer</span>
                  </div>
                  <kbd class="ui-kbd">C</kbd>
                </button>
                <button class="ui-command-item" onclick="window.location.href='/pages/sections.html'">
                  <div class="ui-command-item-left">
                    <svg class="lucide lucide-grid" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>
                    </svg>
                    <span>Pre-Made Sections</span>
                  </div>
                  <kbd class="ui-kbd">S</kbd>
                </button>
              </div>
              <div class="ui-command-group">
                <div class="ui-command-group-heading">Actions</div>
                <button class="ui-command-item" onclick="window.triggerStageToast('success')">
                  <div class="ui-command-item-left">
                    <svg class="lucide lucide-bell" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
                    <span>Fire Stacked Toast</span>
                  </div>
                  <kbd class="ui-kbd">T</kbd>
                </button>
                <button class="ui-command-item" onclick="document.getElementById('theme-btn')?.click()">
                  <div class="ui-command-item-left">
                    <svg class="lucide lucide-moon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                    <span>Switch Theme Mode</span>
                  </div>
                  <kbd class="ui-kbd">M</kbd>
                </button>
              </div>
            </div>
            <div class="ui-command-footer">
              <div class="ui-command-hints">
                <span class="ui-command-hint-item"><kbd class="ui-kbd">↑↓</kbd> Navigate</span>
                <span class="ui-command-hint-item"><kbd class="ui-kbd">↵</kbd> Select</span>
                <span class="ui-command-hint-item"><kbd class="ui-kbd">Esc</kbd> Close</span>
              </div>
              <span>Hush UI Spotlight</span>
            </div>
          </div>
        </div>
      </div>
    `,
    html: `<!-- Trigger -->
<button class="ui-button ui-button--primary" data-command-trigger="my-palette">
  Open Command Palette (Ctrl+K)
</button>

<!-- Spotlight Dialog -->
<div id="my-palette" class="ui-command-backdrop">
  <div class="ui-command-dialog">
    <div class="ui-command-header">
      <input type="search" class="ui-command-input" placeholder="Type a command..." />
    </div>
    <div class="ui-command-body">
      <div class="ui-command-group">
        <div class="ui-command-group-heading">Actions</div>
        <button class="ui-command-item">
          <span>Toggle Dark Mode</span>
          <kbd class="ui-kbd">M</kbd>
        </button>
      </div>
    </div>
  </div>
</div>`,
    css: `.ui-command-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(30, 27, 36, 0.72);
  backdrop-filter: blur(8px);
  z-index: 2500;
  display: flex;
  justify-content: center;
  padding-top: 80px;
}
.ui-command-dialog {
  width: 100%;
  max-width: 620px;
  background-color: var(--card);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  transform: scale(0.95) translateY(-12px);
  transition: transform var(--duration-slow) var(--spring-gentle);
}
.ui-command-backdrop.is-open .ui-command-dialog {
  transform: scale(1) translateY(0);
}`,
    js: `import { initCommandPalette } from './components/command/command.js';
initCommandPalette();`
  },
  {
    id: 'bento',
    name: 'Bento Grid Layout',
    category: 'Data Display',
    description: 'Asymmetrical card layout with frosted glass textures, multi-column spans, and hover aura.',
    cardPreview: `
      <div style="display:grid; grid-template-columns:1.2fr 0.8fr; gap:4px; width:100%; max-width:125px;">
        <div style="background-color:var(--card); border:1px solid var(--border); border-radius:6px; padding:6px; display:flex; flex-direction:column; gap:2px;">
          <span style="font-size:8px; font-weight:700; color:var(--primary);">Metrics</span>
          <span style="font-size:12px; font-weight:700;">99.8%</span>
        </div>
        <div style="background-color:color-mix(in srgb, var(--secondary) 20%, var(--card)); border:1px solid var(--border); border-radius:6px; padding:6px; display:flex; align-items:center; justify-content:center; font-size:12px; color:var(--primary);">
          <svg class="lucide lucide-sparkles" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
        </div>
      </div>
    `,
    previewMarkup: `
      <div class="ui-bento-grid" style="max-width:540px; width:100%;">
        <div class="ui-bento-card ui-bento-card--col-2">
          <div class="ui-bento-header">
            <div>
              <div class="ui-bento-title">System Performance</div>
              <div class="ui-bento-desc">Hardware-accelerated spring curves active.</div>
            </div>
            <div class="ui-bento-icon">
              <svg class="lucide lucide-zap" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
          </div>
          <div class="ui-bento-visual">
            <span style="font-size:var(--text-lg); font-weight:700; color:var(--foreground);">99.94% Uptime</span>
          </div>
        </div>

        <div class="ui-bento-card">
          <div class="ui-bento-header">
            <div>
              <div class="ui-bento-title">Palette</div>
              <div class="ui-bento-desc">4 Hush UI hues</div>
            </div>
          </div>
          <div style="display:flex; gap:6px; justify-content:center; margin-top:8px;">
            <span style="width:14px; height:14px; border-radius:50%; background:var(--lilac);"></span>
            <span style="width:14px; height:14px; border-radius:50%; background:var(--sage);"></span>
            <span style="width:14px; height:14px; border-radius:50%; background:var(--blush);"></span>
            <span style="width:14px; height:14px; border-radius:50%; background:var(--butter);"></span>
          </div>
        </div>
      </div>
    `,
    html: `<div class="ui-bento-grid">
  <!-- 2-Column Wide Tile -->
  <div class="ui-bento-card ui-bento-card--col-2">
    <div class="ui-bento-header">
      <div class="ui-bento-title">Featured Module</div>
      <div class="ui-bento-desc">Multi-span dashboard card.</div>
    </div>
  </div>

  <!-- Standard Tile -->
  <div class="ui-bento-card">
    <div class="ui-bento-title">Metric Tile</div>
  </div>
</div>`,
    css: `.ui-bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
}
.ui-bento-card {
  background-color: var(--card);
  border: var(--border-default);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  transition: transform 260ms var(--spring-hover), box-shadow 240ms var(--ease-soft-out);
}
.ui-bento-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary);
}
.ui-bento-card--col-2 { grid-column: span 2; }`,
    js: `// Pure CSS grid layout with semantic responsive tokens.`
  },
  {
    id: 'combobox',
    name: 'Multi-Select Combobox',
    category: 'Inputs',
    description: 'Searchable select dropdown with removable Hush UI badge chips and keyboard arrow selection.',
    cardPreview: `
      <div style="width:100%; max-width:125px; background-color:var(--card); border:1px solid var(--border); border-radius:6px; padding:4px 6px; display:flex; flex-wrap:wrap; gap:3px; align-items:center;">
        <span class="ui-combobox-tag" style="font-size:8px; padding:1px 5px; gap:3px; display:inline-flex; align-items:center;">
          <span>Tag</span>
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </span>
        <span class="ui-combobox-tag" style="font-size:8px; padding:1px 5px; gap:3px; display:inline-flex; align-items:center;">
          <span>UI</span>
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </span>
      </div>
    `,
    previewMarkup: `
      <div class="ui-combobox" id="demo-combobox" style="max-width:340px;">
        <div class="ui-combobox-trigger">
          <div class="ui-combobox-tags">
            <span class="ui-combobox-tag" data-val="tokens">
              <span>Design Tokens</span>
              <button class="ui-combobox-tag-remove" type="button" aria-label="Remove Design Tokens">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </span>
            <input type="text" class="ui-combobox-input" placeholder="Select tags..." />
          </div>
          <span class="ui-combobox-chevron">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </span>
        </div>
        <div class="ui-combobox-menu">
          <div class="ui-combobox-option is-selected" data-value="tokens" data-label="Design Tokens">
            <span>Design Tokens</span>
            <span class="ui-combobox-check">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
          </div>
          <div class="ui-combobox-option" data-value="spring" data-label="Spring Motion">
            <span>Spring Motion</span>
            <span class="ui-combobox-check">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
          </div>
          <div class="ui-combobox-option" data-value="vite" data-label="Vite Bundler">
            <span>Vite Bundler</span>
            <span class="ui-combobox-check">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
          </div>
          <div class="ui-combobox-option" data-value="darkmode" data-label="Dark Mode">
            <span>Dark Mode</span>
            <span class="ui-combobox-check">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
          </div>
        </div>
      </div>
    `,
    html: `<div class="ui-combobox">
  <div class="ui-combobox-trigger">
    <div class="ui-combobox-tags">
      <input type="text" class="ui-combobox-input" placeholder="Search & add tags..." />
    </div>
    <span class="ui-combobox-chevron">▾</span>
  </div>
  <div class="ui-combobox-menu">
    <div class="ui-combobox-option" data-value="1" data-label="Design System">Design System</div>
    <div class="ui-combobox-option" data-value="2" data-label="Spring Curves">Spring Curves</div>
  </div>
</div>`,
    css: `.ui-combobox-trigger {
  background-color: var(--card);
  border: var(--border-default);
  border-radius: var(--radius-sm);
  padding: 6px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.ui-combobox-tag {
  background-color: color-mix(in srgb, var(--primary) 22%, var(--card));
  padding: 2px 8px;
  border-radius: var(--radius-full);
  font-size: 11px;
}
.ui-combobox-menu {
  position: absolute;
  top: calc(100% + 6px);
  background-color: var(--card);
  border: var(--border-default);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-lg);
}`,
    js: `import { initCombobox } from './components/combobox/combobox.js';
initCombobox();`
  },
  {
    id: 'counter',
    name: 'Animated Stat Roller',
    category: 'Data Display',
    description: 'Vertical digit odometer roller animation with trend metrics and increment controls.',
    cardPreview: `
      <div class="ui-counter-card" style="width:100%; max-width:115px; padding:6px 8px; gap:2px; min-width:0; box-sizing:border-box;">
        <span class="ui-counter-label" style="font-size:7px; letter-spacing:0.04em;">Deployments</span>
        <div class="ui-counter" style="font-size:14px; gap:2px;">
          <span class="ui-counter-prefix" style="font-size:10px;">#</span>
          <span class="ui-counter-roller"><span style="color:var(--foreground);">1,248</span></span>
        </div>
      </div>
    `,
    previewMarkup: `
      <div class="ui-counter-card" style="max-width:320px; width:100%;">
        <span class="ui-counter-label">Active Deployments</span>
        <div class="ui-counter" id="stage-counter" data-counter-target="1248">
          <span class="ui-counter-prefix">#</span>
          <span class="ui-counter-roller"></span>
        </div>
        <div class="ui-counter-footer" style="gap:6px; flex-wrap:wrap;">
          <button class="ui-button ui-button--ghost" data-counter-increment="stage-counter" data-amount="1" style="padding:3px 8px; font-size:11px;">
            +1
          </button>
          <button class="ui-button ui-button--primary" data-counter-increment="stage-counter" data-amount="17" style="padding:3px 8px; font-size:11px;">
            +17 Count
          </button>
          <button class="ui-button ui-button--secondary" data-counter-increment="stage-counter" data-amount="100" style="padding:3px 8px; font-size:11px;">
            +100
          </button>
          <button class="ui-button ui-button--accent" data-counter-random="stage-counter" style="padding:3px 8px; font-size:11px; gap:5px; display:inline-flex; align-items:center;">
            <svg class="lucide lucide-shuffle" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"/><path d="m18 2 4 4-4 4"/><path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2"/><path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"/><path d="m18 14 4 4-4 4"/></svg>
            <span>Random</span>
          </button>
        </div>
      </div>
    `,
    html: `<div class="ui-counter-card">
  <span class="ui-counter-label">Deployments</span>
  <div class="ui-counter" id="my-counter" data-counter-target="1248">
    <span class="ui-counter-prefix">#</span>
    <span class="ui-counter-roller"></span>
  </div>
  <button data-counter-increment="my-counter" data-amount="1">+1</button>
  <button data-counter-increment="my-counter" data-amount="10">+10</button>
</div>`,
    css: `.ui-counter-roller {
  display: inline-flex;
  overflow: hidden;
  height: 1.15em;
  line-height: 1.15em;
}
.ui-counter-col {
  display: inline-block;
  height: 1.15em;
  overflow: hidden;
}
.ui-counter-ribbon {
  display: flex;
  flex-direction: column;
  transform: translateY(0);
  transition: transform 750ms cubic-bezier(0.34, 1.4, 0.64, 1);
}`,
    js: `import { initCounters, animateCounter } from './components/counter/counter.js';
initCounters();`
  },
  {
    id: 'link',
    name: 'Interactive Links',
    category: 'Typography',
    description: 'Accessible hyper-links with animated spring underlines, arrow hover glides, and muted footer variants.',
    cardPreview: `
      <div style="display:flex; flex-direction:column; gap:6px; align-items:flex-start; width:100%; max-width:115px;">
        <span class="ui-link ui-link--underline" style="font-size:11px; font-weight:600; color:var(--primary);">Learn more</span>
        <span class="ui-link ui-link--arrow" style="font-size:10px; color:var(--muted-foreground); gap:3px;">
          <span>Docs</span>
          <svg class="lucide lucide-arrow-right" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </span>
      </div>
    `,
    previewMarkup: `
      <div style="display:flex; flex-direction:column; gap:16px; align-items:center; width:100%; max-width:440px;">
        <div style="display:flex; gap:16px; flex-wrap:wrap; justify-content:center; align-items:center;">
          <a href="#demo" class="ui-link ui-link--underline" style="font-size:14px; font-weight:600;">
            <span>Animated Underline Link</span>
          </a>
          <a href="#demo" class="ui-link ui-link--arrow" style="font-size:14px; font-weight:600; gap:6px;">
            <span>Explore Primitives</span>
            <svg class="lucide lucide-arrow-right" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
        <div style="display:flex; gap:12px; flex-wrap:wrap; justify-content:center; align-items:center;">
          <a href="#demo" class="ui-link ui-link--muted" style="font-size:13px;">Footer Link (Muted)</a>
          <a href="#demo" class="ui-link ui-link--pill">
            <svg class="lucide lucide-sparkles" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
            <span>Pill Action Link</span>
          </a>
          <a href="#demo" class="ui-link ui-link--glow" style="font-size:13px; font-weight:600;">Glowing Link</a>
        </div>
      </div>
    `,
    html: `<!-- 1. Animated Spring Underline Link -->
<a href="#" class="ui-link ui-link--underline">
  <span>Animated Underline Link</span>
</a>

<!-- 2. Arrow Glide Link -->
<a href="#" class="ui-link ui-link--arrow">
  <span>Explore Primitives</span>
  <svg class="lucide lucide-arrow-right" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
</a>

<!-- 3. Muted Footer & Navigation Link -->
<a href="#" class="ui-link ui-link--muted">Footer Navigation Link</a>

<!-- 4. Interactive Pill Link -->
<a href="#" class="ui-link ui-link--pill">
  <span>Pill Action Link</span>
</a>`,
    css: `.ui-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  color: var(--foreground);
  font-weight: var(--font-medium);
  text-decoration: none;
  cursor: pointer;
  transition: color var(--duration-fast) var(--ease-soft-out);
}
.ui-link:hover {
  color: var(--primary);
}
.ui-link--underline::after {
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 260ms var(--spring-hover);
  margin-top: 2px;
}
.ui-link--underline:hover::after {
  transform: scaleX(1);
}
.ui-link--arrow:hover .lucide-arrow-right {
  transform: translateX(4px);
  transition: transform 240ms var(--spring-hover);
}
.ui-link--muted {
  color: var(--muted-foreground);
}
.ui-link--muted:hover {
  color: var(--foreground);
}`,
    js: `// Pure CSS Link primitives.`
  },
  {
    id: 'scrollbar',
    name: 'Custom Scrollbar',
    category: 'Overlays',
    description: 'Hardware-accelerated Hush UI scrollbars with slim, floating pill, and pigment theme tokens.',
    cardPreview: `
      <div style="display:flex; justify-content:space-between; width:100%; max-width:115px; height:44px; background:var(--card); border:1px solid var(--border); border-radius:6px; padding:4px 6px;">
        <div style="display:flex; flex-direction:column; gap:2px; flex:1;">
          <div style="width:70%; height:3px; background:var(--muted); border-radius:1px;"></div>
          <div style="width:85%; height:3px; background:var(--muted); border-radius:1px;"></div>
          <div style="width:50%; height:3px; background:var(--muted); border-radius:1px;"></div>
        </div>
        <div style="width:4px; height:100%; background:var(--muted); border-radius:2px; position:relative;">
          <div style="position:absolute; top:4px; left:0; width:100%; height:16px; background:var(--primary); border-radius:2px;"></div>
        </div>
      </div>
    `,
    previewMarkup: `
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; width:100%; max-width:540px;">
        <!-- Container 1: Slim Lilac Scrollbar -->
        <div class="ui-scrollbar ui-scrollbar--slim" style="height:140px; background:var(--card); border:var(--border-default); border-radius:var(--radius-md); padding:16px; display:flex; flex-direction:column; gap:8px;">
          <span class="ui-chip ui-chip--primary" style="font-size:10px;">Slim Scrollbar</span>
          <h4 style="margin:0; font-size:13px; font-weight:700;">Desaturated Pigment Rail</h4>
          <p style="font-size:11px; color:var(--muted-foreground); margin:0; line-height:1.5;">
            Hush UI scrollbars replace harsh operating system bars with smooth, non-intrusive tracks.
          </p>
          <p style="font-size:11px; color:var(--muted-foreground); margin:0; line-height:1.5;">
            Scroll down to test the slim 5px boundary-safe track. Fully compatible with dark mode and WebKit engines.
          </p>
          <p style="font-size:11px; color:var(--muted-foreground); margin:0; line-height:1.5;">
            Zero layout jump with standard CSS scrollbar-gutter property.
          </p>
        </div>

        <!-- Container 2: Floating Pill Sage Scrollbar -->
        <div class="ui-scrollbar ui-scrollbar--pill ui-scrollbar--sage" style="height:140px; background:var(--card); border:var(--border-default); border-radius:var(--radius-md); padding:16px; display:flex; flex-direction:column; gap:8px;">
          <span class="ui-chip ui-chip--secondary" style="font-size:10px;">Floating Pill (Sage)</span>
          <h4 style="margin:0; font-size:13px; font-weight:700;">Tactile Pill Indicator</h4>
          <p style="font-size:11px; color:var(--muted-foreground); margin:0; line-height:1.5;">
            Features an inset gap and rounded pill thumb tinted with the secondary sage theme pigment.
          </p>
          <p style="font-size:11px; color:var(--muted-foreground); margin:0; line-height:1.5;">
            Smooth hardware-accelerated scrolling with calibrated hover elevation.
          </p>
        </div>
      </div>
    `,
    html: `<!-- 1. Slim Scrollbar Container -->
<div class="ui-scrollbar ui-scrollbar--slim">
  <p>Scrollable content area with slim Hush UI rail...</p>
</div>

<!-- 2. Floating Pill Variant -->
<div class="ui-scrollbar ui-scrollbar--pill ui-scrollbar--sage">
  <p>Floating pill scrollbar with secondary sage accent...</p>
</div>`,
    css: `.ui-scrollbar {
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: color-mix(in srgb, var(--primary) 35%, var(--border)) transparent;
}
.ui-scrollbar::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.ui-scrollbar::-webkit-scrollbar-thumb {
  background-color: color-mix(in srgb, var(--primary) 35%, var(--border));
  border-radius: var(--radius-full);
}
.ui-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: var(--primary);
}
.ui-scrollbar--slim::-webkit-scrollbar {
  width: 5px;
}
.ui-scrollbar--pill::-webkit-scrollbar-track {
  background: color-mix(in srgb, var(--muted) 60%, var(--card));
  border-radius: var(--radius-full);
  margin: 4px;
}`,
    js: `// Pure CSS custom scrollbar rules.`
  },
  {
    id: 'compare',
    name: 'Before/After Comparison',
    category: 'Media & Visuals',
    description: 'Interactive split-view comparison slider with tactile grip handle, touch panning, and keyboard arrow controls.',
    cardPreview: `
      <div style="width:100%; max-width:125px; height:46px; border-radius:6px; overflow:hidden; border:1px solid var(--border); position:relative; background:var(--muted); display:flex;">
        <div style="width:50%; height:100%; background:linear-gradient(135deg, color-mix(in srgb, var(--primary) 30%, var(--card)), var(--card)); border-right:2px solid var(--primary);"></div>
        <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); width:14px; height:14px; border-radius:50%; background:var(--card); border:1.5px solid var(--primary); display:flex; align-items:center; justify-content:center;">
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18-6-6 6-6"/><path d="m15 6 6 6-6 6"/></svg>
        </div>
      </div>
    `,
    previewMarkup: `
      <div class="ui-compare" style="--clip-pos: 50%;">
        <!-- Before View (Unstyled Wireframe) -->
        <div class="ui-compare-item ui-compare-item--before">
          <div class="ui-compare-canvas ui-compare-canvas--wireframe">
            <span class="ui-compare-tag">Default Wireframe</span>
            <div class="ui-compare-content">
              <h4 class="ui-compare-title">Unstyled Layout</h4>
              <button type="button" class="ui-compare-mock-btn">Raw Button</button>
            </div>
          </div>
          <span class="ui-compare-badge ui-compare-badge--before">Before</span>
        </div>

        <!-- After View (Hush UI Spring) -->
        <div class="ui-compare-item ui-compare-item--after">
          <div class="ui-compare-canvas ui-compare-canvas--styled">
            <span class="ui-compare-tag" style="color:var(--primary);">✨ Hush UI Spring</span>
            <div class="ui-compare-content">
              <h4 class="ui-compare-title" style="color:var(--foreground);">Calibrated Theme</h4>
              <button type="button" class="ui-button ui-button--primary" style="padding:6px 14px; font-size:11px; pointer-events:none;">Action Button →</button>
            </div>
          </div>
          <span class="ui-compare-badge ui-compare-badge--after">After</span>
        </div>

        <!-- Divider Handle -->
        <div class="ui-compare-handle">
          <div class="ui-compare-grip">
            <svg class="lucide lucide-chevrons-left-right" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 7-5 5 5 5"/><path d="m15 7 5 5-5 5"/></svg>
          </div>
        </div>

        <!-- Accessible Range Input -->
        <input type="range" class="ui-compare-range" min="0" max="100" value="50" aria-label="Comparison slider position" />
      </div>
    `,
    html: `<!-- Before / After Comparison Slider -->
<div class="ui-compare" style="--clip-pos: 50%;">
  <!-- Before View -->
  <div class="ui-compare-item ui-compare-item--before">
    <img src="/before-image.jpg" alt="Before view" />
    <span class="ui-compare-badge ui-compare-badge--before">Before</span>
  </div>

  <!-- After View -->
  <div class="ui-compare-item ui-compare-item--after">
    <img src="/after-image.jpg" alt="After view" />
    <span class="ui-compare-badge ui-compare-badge--after">After</span>
  </div>

  <!-- Divider Handle -->
  <div class="ui-compare-handle">
    <div class="ui-compare-grip">
      <svg class="lucide lucide-chevrons-left-right" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 7-5 5 5 5"/><path d="m15 7 5 5-5 5"/></svg>
    </div>
  </div>

  <!-- Accessible Range Input -->
  <input type="range" class="ui-compare-range" min="0" max="100" value="50" aria-label="Comparison slider" />
</div>`,
    css: `.ui-compare {
  --clip-pos: 50%;
  position: relative;
  width: 100%;
  max-width: 520px;
  min-height: 220px;
  height: 250px;
  border-radius: var(--radius-lg, 16px);
  overflow: hidden;
  border: var(--border-default);
  cursor: ew-resize;
}

.ui-compare-item {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.ui-compare-item--after {
  z-index: 2;
  clip-path: inset(0 calc(100% - var(--clip-pos, 50%)) 0 0);
  -webkit-clip-path: inset(0 calc(100% - var(--clip-pos, 50%)) 0 0);
}

.ui-compare-handle {
  position: absolute;
  top: 0;
  bottom: 0;
  left: var(--clip-pos, 50%);
  width: 36px;
  margin-left: -18px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 10;
}

.ui-compare-handle::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  margin-left: -1px;
  background-color: var(--primary);
}

.ui-compare-grip {
  position: relative;
  z-index: 2;
  width: 34px;
  height: 34px;
  border-radius: var(--radius-full);
  background-color: var(--card);
  border: 2px solid var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
}`,
    js: `import { initCompare } from '@zak1.uhh/hush-ui';

// Initialize Before/After Comparison Sliders
initCompare();`
  },
  {
    id: 'marquee',
    name: 'Infinite Marquee Ticker',
    category: 'Motion & Physics',
    description: 'Hardware-accelerated continuous scrolling ribbon with hover-to-pause and edge fade gradients.',
    cardPreview: `
      <div style="display:flex; gap:6px; width:100%; max-width:125px; overflow:hidden; padding:8px 0;">
        <span style="font-size:8px; font-weight:600; padding:2px 6px; border-radius:10px; background:var(--card); border:1px solid var(--border); white-space:nowrap;">Vite</span>
        <span style="font-size:8px; font-weight:600; padding:2px 6px; border-radius:10px; background:var(--card); border:1px solid var(--border); white-space:nowrap;">React</span>
        <span style="font-size:8px; font-weight:600; padding:2px 6px; border-radius:10px; background:var(--card); border:1px solid var(--border); white-space:nowrap;">CSS</span>
      </div>
    `,
    previewMarkup: `
      <div style="display:flex; flex-direction:column; gap:16px; width:100%; max-width:540px;">
        <!-- Marquee 1: Forward -->
        <div class="ui-marquee">
          <div class="ui-marquee-track">
            <div class="ui-marquee-item"><svg class="lucide lucide-sparkles" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--primary);"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg><span>Spring Physics</span></div>
            <div class="ui-marquee-item"><svg class="lucide lucide-layers" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg><span>32 Primitives</span></div>
            <div class="ui-marquee-item"><svg class="lucide lucide-sun" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--butter);"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg><span>Sky Morph</span></div>
            <div class="ui-marquee-item"><svg class="lucide lucide-palette" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--secondary);"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg><span>Desaturated Hues</span></div>
            <div class="ui-marquee-item"><svg class="lucide lucide-cpu" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg><span>Zero Baggage</span></div>
            <div class="ui-marquee-item"><svg class="lucide lucide-shield-check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--primary);"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg><span>A11y Compliant</span></div>
          </div>
          <div class="ui-marquee-track" aria-hidden="true">
            <div class="ui-marquee-item"><svg class="lucide lucide-sparkles" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--primary);"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg><span>Spring Physics</span></div>
            <div class="ui-marquee-item"><svg class="lucide lucide-layers" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg><span>32 Primitives</span></div>
            <div class="ui-marquee-item"><svg class="lucide lucide-sun" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--butter);"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg><span>Sky Morph</span></div>
            <div class="ui-marquee-item"><svg class="lucide lucide-palette" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--secondary);"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg><span>Desaturated Hues</span></div>
            <div class="ui-marquee-item"><svg class="lucide lucide-cpu" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg><span>Zero Baggage</span></div>
            <div class="ui-marquee-item"><svg class="lucide lucide-shield-check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--primary);"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg><span>A11y Compliant</span></div>
          </div>
        </div>

        <!-- Marquee 2: Reverse -->
        <div class="ui-marquee ui-marquee--reverse ui-marquee--slow">
          <div class="ui-marquee-track">
            <div class="ui-marquee-item"><span class="ui-chip ui-chip--primary">Vanilla JS</span></div>
            <div class="ui-marquee-item"><span class="ui-chip ui-chip--secondary">Zero Runtime</span></div>
            <div class="ui-marquee-item"><span class="ui-chip ui-chip--butter">100% Responsive</span></div>
            <div class="ui-marquee-item"><span class="ui-chip ui-chip--blush">A11y Validated</span></div>
            <div class="ui-marquee-item"><span class="ui-chip ui-chip--primary">Design Tokens</span></div>
            <div class="ui-marquee-item"><span class="ui-chip ui-chip--secondary">GPU Accelerated</span></div>
          </div>
          <div class="ui-marquee-track" aria-hidden="true">
            <div class="ui-marquee-item"><span class="ui-chip ui-chip--primary">Vanilla JS</span></div>
            <div class="ui-marquee-item"><span class="ui-chip ui-chip--secondary">Zero Runtime</span></div>
            <div class="ui-marquee-item"><span class="ui-chip ui-chip--butter">100% Responsive</span></div>
            <div class="ui-marquee-item"><span class="ui-chip ui-chip--blush">A11y Validated</span></div>
            <div class="ui-marquee-item"><span class="ui-chip ui-chip--primary">Design Tokens</span></div>
            <div class="ui-marquee-item"><span class="ui-chip ui-chip--secondary">GPU Accelerated</span></div>
          </div>
        </div>
      </div>
    `,
    html: `<!-- Infinite Marquee Ticker -->
<div class="ui-marquee">
  <div class="ui-marquee-track">
    <div class="ui-marquee-item"><span>Spring Physics</span></div>
    <div class="ui-marquee-item"><span>Modular Tokens</span></div>
    <div class="ui-marquee-item"><span>Zero Runtime</span></div>
    <div class="ui-marquee-item"><span>32 Primitives</span></div>
    <div class="ui-marquee-item"><span>Sky Morph</span></div>
  </div>
  <div class="ui-marquee-track" aria-hidden="true">
    <div class="ui-marquee-item"><span>Spring Physics</span></div>
    <div class="ui-marquee-item"><span>Modular Tokens</span></div>
    <div class="ui-marquee-item"><span>Zero Runtime</span></div>
    <div class="ui-marquee-item"><span>32 Primitives</span></div>
    <div class="ui-marquee-item"><span>Sky Morph</span></div>
  </div>
</div>`,
    css: `.ui-marquee {
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  gap: var(--space-4);
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}
.ui-marquee-track {
  display: flex;
  flex-shrink: 0;
  gap: var(--space-4);
  animation: ui-marquee-scroll 24s linear infinite;
}
.ui-marquee:hover .ui-marquee-track {
  animation-play-state: paused;
}
@keyframes ui-marquee-scroll {
  0% { transform: translateX(0%); }
  100% { transform: translateX(calc(-100% - var(--space-4))); }
}`,
    js: `import { initMarquee } from './components/marquee/marquee.js';
initMarquee();`
  },
  {
    id: 'timeline',
    name: 'Interactive Timeline',
    category: 'Data Display',
    description: 'Vertical activity and changelog stream with pulse connector nodes, version pills, and timestamps.',
    cardPreview: `
      <div style="display:flex; flex-direction:column; gap:6px; width:100%; max-width:120px; padding-left:14px; position:relative;">
        <div style="position:absolute; left:4px; top:4px; bottom:4px; width:1.5px; background:var(--primary);"></div>
        <div style="display:flex; align-items:center; gap:4px;">
          <div style="width:6px; height:6px; border-radius:50%; background:var(--primary); margin-left:-13px;"></div>
          <span style="font-size:8px; font-weight:700;">v2.0 Release</span>
        </div>
        <div style="display:flex; align-items:center; gap:4px;">
          <div style="width:6px; height:6px; border-radius:50%; background:var(--secondary); margin-left:-13px;"></div>
          <span style="font-size:8px; color:var(--muted-foreground);">12 New Primitives</span>
        </div>
      </div>
    `,
    previewMarkup: `
      <div class="ui-timeline" style="max-width:460px;">
        <!-- Item 1 -->
        <div class="ui-timeline-item">
          <div class="ui-timeline-node">
            <svg class="lucide lucide-sparkles" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
          </div>
          <div class="ui-timeline-header">
            <div class="ui-timeline-title-wrap">
              <span class="ui-chip ui-chip--primary" style="font-size:10px;">v2.0 Release</span>
              <h4 class="ui-timeline-title">Spring Engine & Multi-Page</h4>
            </div>
            <span class="ui-timeline-time">Today</span>
          </div>
          <div class="ui-timeline-card">
            <p class="ui-timeline-desc">Introduced 32 core primitives with calibrated spring curves, container query frames, and dark mode tokens.</p>
          </div>
        </div>

        <!-- Item 2 -->
        <div class="ui-timeline-item">
          <div class="ui-timeline-node ui-timeline-node--secondary">
            <svg class="lucide lucide-check" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div class="ui-timeline-header">
            <div class="ui-timeline-title-wrap">
              <span class="ui-chip ui-chip--secondary" style="font-size:10px;">v1.5 Update</span>
              <h4 class="ui-timeline-title">Sections Suite & Code Tabs</h4>
            </div>
            <span class="ui-timeline-time">Yesterday</span>
          </div>
          <div class="ui-timeline-card">
            <p class="ui-timeline-desc">Added 20 pre-made production sections with live viewport switcher and pure ESM syntax highlighting.</p>
          </div>
        </div>
      </div>
    `,
    html: `<!-- Activity Timeline Stream -->
<div class="ui-timeline">
  <div class="ui-timeline-item">
    <div class="ui-timeline-node">
      <svg class="lucide lucide-sparkles" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
    </div>
    <div class="ui-timeline-header">
      <span class="ui-chip ui-chip--primary">v2.0</span>
      <h4 class="ui-timeline-title">Major System Release</h4>
      <span class="ui-timeline-time">2 hours ago</span>
    </div>
    <div class="ui-timeline-card">
      <p class="ui-timeline-desc">Full release documentation and components.</p>
    </div>
  </div>
</div>`,
    css: `.ui-timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  padding-left: 28px;
}
.ui-timeline::before {
  content: '';
  position: absolute;
  top: 8px;
  bottom: 8px;
  left: 11px;
  width: 2px;
  background: var(--primary);
}
.ui-timeline-node {
  position: absolute;
  left: -28px;
  top: 4px;
  width: 24px;
  height: 24px;
  border-radius: var(--radius-full);
  background-color: var(--card);
  border: 2px solid var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
}`,
    js: `// Pure CSS Timeline primitives.`
  },
  {
    id: 'spotlight',
    name: 'Cursor Spotlight Card',
    category: 'Motion & Physics',
    description: 'Interactive card with dynamic radial lilac/sage illumination following mouse coordinates across surfaces.',
    cardPreview: `
      <div style="width:100%; max-width:125px; height:46px; border-radius:8px; background:var(--card); border:1.5px solid var(--primary); padding:6px; position:relative; box-shadow:0 0 12px color-mix(in srgb, var(--primary) 30%, transparent);">
        <span style="font-size:8px; font-weight:700; color:var(--primary);">Spotlight</span>
        <div style="width:70%; height:2px; background:var(--muted); margin-top:3px;"></div>
      </div>
    `,
    previewMarkup: `
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; width:100%; max-width:540px;">
        <div class="ui-spotlight-card">
          <div class="ui-spotlight-content">
            <div style="width:36px; height:36px; border-radius:10px; background:color-mix(in srgb, var(--primary) 22%, var(--card)); border:1px solid var(--primary); display:flex; align-items:center; justify-content:center; color:var(--foreground);">
              <svg class="lucide lucide-sparkles" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
            </div>
            <h4 style="margin:0; font-size:14px; font-weight:700;">Dynamic Aura</h4>
            <p style="margin:0; font-size:12px; color:var(--muted-foreground); line-height:1.5;">Move your cursor across this surface to test the dual-layer radial border illumination.</p>
          </div>
        </div>

        <div class="ui-spotlight-card">
          <div class="ui-spotlight-content">
            <div style="width:36px; height:36px; border-radius:10px; background:color-mix(in srgb, var(--secondary) 22%, var(--card)); border:1px solid var(--secondary); display:flex; align-items:center; justify-content:center; color:var(--foreground);">
              <svg class="lucide lucide-zap" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <h4 style="margin:0; font-size:14px; font-weight:700;">GPU Accelerated</h4>
            <p style="margin:0; font-size:12px; color:var(--muted-foreground); line-height:1.5;">Hardware-accelerated CSS variables maintain 120fps smooth tracking.</p>
          </div>
        </div>
      </div>
    `,
    html: `<!-- Cursor Spotlight Card -->
<div class="ui-spotlight-card">
  <div class="ui-spotlight-content">
    <h3>Illuminated Feature Card</h3>
    <p>Move mouse over this card to activate radial aura.</p>
  </div>
</div>`,
    css: `.ui-spotlight-card {
  position: relative;
  background-color: var(--card);
  border: 1.5px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  overflow: hidden;
}
.ui-spotlight-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), color-mix(in srgb, var(--primary) 25%, transparent), transparent 70%);
  opacity: 0;
  transition: opacity var(--duration-base);
}
.ui-spotlight-card:hover::before {
  opacity: 1;
}`,
    js: `import { initSpotlight } from './components/spotlight/spotlight.js';
initSpotlight();`
  },
  {
    id: 'dock',
    name: 'Floating Spring Dock',
    category: 'Navigation',
    description: 'macOS-inspired floating action toolbar with proximity-based spring icon magnification and active tooltips.',
    cardPreview: `
      <div style="display:inline-flex; align-items:flex-end; gap:4px; padding:4px 8px; border-radius:20px; background:var(--card); border:1px solid var(--border); box-shadow:var(--shadow-sm);">
        <div style="width:14px; height:14px; border-radius:4px; background:var(--primary);"></div>
        <div style="width:18px; height:18px; border-radius:4px; background:var(--secondary); transform:translateY(-2px);"></div>
        <div style="width:14px; height:14px; border-radius:4px; background:var(--butter);"></div>
      </div>
    `,
    previewMarkup: `
      <div style="display:flex; justify-content:center; width:100%; padding:24px 0;">
        <nav class="ui-dock" aria-label="Quick Actions Dock">
          <button class="ui-dock-item" type="button" aria-label="Home">
            <svg class="ui-dock-icon lucide lucide-home" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            <span class="ui-dock-tooltip">Home</span>
            <span class="ui-dock-dot"></span>
          </button>
          <button class="ui-dock-item" type="button" aria-label="Components">
            <svg class="ui-dock-icon lucide lucide-layers" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>
            <span class="ui-dock-tooltip">Components</span>
          </button>
          <button class="ui-dock-item" type="button" aria-label="Sections">
            <svg class="ui-dock-icon lucide lucide-grid" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
            <span class="ui-dock-tooltip">Sections</span>
          </button>
          <div class="ui-dock-separator"></div>
          <button class="ui-dock-item" type="button" aria-label="Theme Toggle">
            <svg class="ui-dock-icon lucide lucide-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
            <span class="ui-dock-tooltip">Theme Mode</span>
          </button>
        </nav>
      </div>
    `,
    html: `<!-- Floating Spring Dock -->
<nav class="ui-dock">
  <button class="ui-dock-item" aria-label="Home">
    <svg class="ui-dock-icon lucide lucide-home" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
    <span class="ui-dock-tooltip">Home</span>
  </button>
  <button class="ui-dock-item" aria-label="Components">
    <svg class="ui-dock-icon lucide lucide-layers" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/></svg>
    <span class="ui-dock-tooltip">Components</span>
  </button>
</nav>`,
    css: `.ui-dock {
  display: inline-flex;
  align-items: flex-end;
  gap: var(--space-2);
  padding: 10px 14px;
  background-color: color-mix(in srgb, var(--card) 85%, transparent);
  backdrop-filter: blur(16px);
  border: var(--border-default);
  border-radius: var(--radius-full);
}
.ui-dock-item {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  background-color: var(--card);
  border: var(--border-default);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform-origin: bottom center;
  transition: transform 180ms var(--spring-hover);
}`,
    js: `import { initDock } from './components/dock/dock.js';

initDock();`
  },
  {
    id: 'dropzone',
    name: 'Interactive Dropzone',
    category: 'Inputs',
    description: 'Spring drag-and-drop file upload with queue preview, progress states, and removal actions.',
    cardPreview: `
      <div style="border: 2px dashed var(--border); border-radius: 8px; padding: 10px; width: 100%; max-width: 130px; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <svg class="lucide lucide-upload-cloud" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--primary);"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m16 16-4-4-4 4"/></svg>
        <span style="font-size: 10px; font-weight: 600; color: var(--foreground);">Drop files here</span>
      </div>
    `,
    previewMarkup: `
      <div style="width: 100%; max-width: 380px;">
        <div class="ui-dropzone">
          <input type="file" class="ui-dropzone-input" multiple />
          <div class="ui-dropzone-icon-box">
            <svg class="lucide lucide-upload-cloud" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m16 16-4-4-4 4"/></svg>
          </div>
          <div>
            <p class="ui-dropzone-title"><span>Click to browse</span> or drag files here</p>
            <p class="ui-dropzone-desc">Supports PNG, SVG, PDF, or JSON up to 10MB</p>
          </div>
        </div>
        <div class="ui-dropzone-filelist">
          <div class="ui-dropzone-file-item">
            <div class="ui-dropzone-file-info">
              <svg class="lucide lucide-file" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--primary);"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 2 2h12a2 2 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 2 2h4"/></svg>
              <div>
                <div class="ui-dropzone-file-name">design-system-tokens.json</div>
                <span class="ui-dropzone-file-size">42.8 KB</span>
              </div>
            </div>
            <button class="ui-dropzone-remove-btn" type="button" aria-label="Remove file">
              <svg class="lucide lucide-trash-2" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
            </button>
          </div>
        </div>
      </div>
    `,
    html: `<div class="ui-dropzone">
  <input type="file" class="ui-dropzone-input" multiple />
  <div class="ui-dropzone-icon-box">
    <svg class="lucide lucide-upload-cloud" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m16 16-4-4-4 4"/></svg>
  </div>
  <div>
    <p class="ui-dropzone-title"><span>Click to browse</span> or drag files here</p>
    <p class="ui-dropzone-desc">Supports PNG, SVG, PDF up to 10MB</p>
  </div>
</div>
<div class="ui-dropzone-filelist"></div>`,
    css: `.ui-dropzone {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-6) var(--space-4);
  border: 2px dashed var(--border);
  border-radius: var(--radius-md);
  background-color: color-mix(in srgb, var(--card) 60%, transparent);
  cursor: pointer;
  transition: all var(--duration-fast) var(--spring-hover);
}
.ui-dropzone.is-dragover {
  border-color: var(--secondary);
  transform: scale(1.02);
}`,
    js: `import { initDropzone } from './components/dropzone/dropzone.js';
initDropzone();`
  },
  {
    id: 'code-block',
    name: 'Code Block & File Tree',
    category: 'Data Display',
    description: 'Multi-file syntax viewer with tabbed file trees, clipboard copy actions, and dark syntax styling.',
    cardPreview: `
      <div style="background-color: var(--card); border: var(--border-default); border-radius: 8px; width: 100%; max-width: 130px; overflow: hidden;">
        <div style="background-color: var(--muted); padding: 3px 6px; font-size: 9px; font-family: var(--font-mono); color: var(--foreground); display: flex; align-items: center; gap: 4px;">
          <span style="width: 5px; height: 5px; border-radius: 50%; background: #ef4444;"></span>
          <span>App.jsx</span>
        </div>
        <div style="padding: 6px; font-size: 8px; font-family: var(--font-mono); color: var(--primary);">import { init } ...</div>
      </div>
    `,
    previewMarkup: `
      <div class="ui-code-block" style="width: 100%; max-width: 440px;">
        <div class="ui-code-block-header">
          <div class="ui-code-block-files">
            <button class="ui-code-file-tab is-active" type="button" data-code="import { initHushUI } from '@zak1.uhh/hush-ui';\n\n// Initialize all spring primitives\ninitHushUI();">
              <svg class="lucide lucide-file-code" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:#0ea5e9;"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m10 13-2 2 2 2"/><path d="m14 17 2-2-2-2"/></svg>
              <span>App.jsx</span>
            </button>
            <button class="ui-code-file-tab" type="button" data-code=":root {\n  --primary: #9381ff;\n  --secondary: #b8b8ff;\n  --spring-bounce: cubic-bezier(0.16, 1, 0.3, 1);\n}">
              <svg class="lucide lucide-file-text" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:#10b981;"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>
              <span>tokens.css</span>
            </button>
            <button class="ui-code-file-tab" type="button" data-code="export interface HushUIOptions {\n  theme?: 'light' | 'dark';\n  springPhysics?: boolean;\n}">
              <svg class="lucide lucide-file-cog" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:#f59e0b;"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>
              <span>types.d.ts</span>
            </button>
          </div>
          <div class="ui-code-block-actions">
            <button class="ui-code-copy-btn" type="button">
              <svg class="lucide lucide-copy" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
              <span>Copy</span>
            </button>
          </div>
        </div>
        <pre class="ui-code-block-content"><code>import { initHushUI } from '@zak1.uhh/hush-ui';

// Initialize all spring primitives
initHushUI();</code></pre>
      </div>
    `,
    html: `<div class="ui-code-block">
  <div class="ui-code-block-header">
    <div class="ui-code-block-files">
      <button class="ui-code-file-tab is-active" data-code="...">App.jsx</button>
    </div>
    <button class="ui-code-copy-btn">Copy</button>
  </div>
  <pre class="ui-code-block-content"><code>...</code></pre>
</div>`,
    css: `.ui-code-block {
  border: var(--border-default);
  border-radius: var(--radius-md);
  background-color: var(--card);
  overflow: hidden;
}
.ui-code-file-tab.is-active {
  background-color: var(--card);
  color: var(--foreground);
}`,
    js: `import { initCodeBlocks } from './components/code-block/code-block.js';
initCodeBlocks();`
  },
  {
    id: 'ticker',
    name: 'Animated Number Ticker',
    category: 'Data Display',
    description: 'Smooth count-up animated statistics and metric numbers utilizing spring physics.',
    cardPreview: `
      <div style="background-color: var(--card); border: var(--border-default); border-radius: 8px; padding: 10px; width: 100%; max-width: 120px; text-align: center;">
        <span style="font-size: 16px; font-weight: 800; font-family: var(--font-display); color: var(--foreground);">$98.4k</span>
        <div style="font-size: 9px; color: var(--muted-foreground);">Live Metrics</div>
      </div>
    `,
    previewMarkup: `
      <div class="ui-ticker-card" data-ticker data-ticker-target="128450" data-ticker-duration="1800">
        <div class="ui-ticker-value">
          <span class="ui-ticker-prefix">$</span>
          <span class="ui-ticker-number">128,450</span>
          <span class="ui-ticker-suffix">+</span>
        </div>
        <span class="ui-ticker-label">Monthly Active Developers</span>
        <button class="ui-button ui-button--ghost ui-ticker-replay-btn" type="button">
          <svg class="lucide lucide-rotate-cw" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
          <span>Replay Animation</span>
        </button>
      </div>
    `,
    html: `<div class="ui-ticker-card" data-ticker data-ticker-target="128450" data-ticker-duration="1800">
  <div class="ui-ticker-value">
    <span class="ui-ticker-prefix">$</span>
    <span class="ui-ticker-number">0</span>
    <span class="ui-ticker-suffix">+</span>
  </div>
  <span class="ui-ticker-label">Monthly Active Developers</span>
</div>`,
    css: `.ui-ticker-value {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: var(--foreground);
}`,
    js: `import { initTickers } from './components/ticker/ticker.js';
initTickers();`
  },
  {
    id: 'tree-view',
    name: 'Tree View / Directory',
    category: 'Navigation',
    description: 'Collapsible hierarchical file explorer with chevrons, folder nesting, and active selection.',
    cardPreview: `
      <div style="background-color: var(--card); border: var(--border-default); border-radius: 8px; padding: 6px 8px; width: 100%; max-width: 125px; font-size: 10px; display: flex; flex-direction: column; gap: 4px; box-sizing: border-box;">
        <div style="display: flex; align-items: center; gap: 5px; color: var(--foreground); font-weight: 600; font-size: 10px;">
          <svg class="lucide lucide-folder" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--primary); flex-shrink:0;"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
          <span>src/</span>
        </div>
        <div style="padding-left: 12px; display: flex; align-items: center; gap: 5px; color: var(--muted-foreground); font-size: 9px;">
          <svg class="lucide lucide-file-code" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:#0ea5e9; flex-shrink:0;"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 2 2h4"/><path d="m10 13-2 2 2 2"/><path d="m14 17 2-2-2-2"/></svg>
          <span>index.js</span>
        </div>
      </div>
    `,
    previewMarkup: `
      <div class="ui-tree-view">
        <div class="ui-tree-item is-open">
          <div class="ui-tree-row is-selected">
            <span class="ui-tree-chevron">
              <svg class="lucide lucide-chevron-right" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
            </span>
            <svg class="lucide lucide-folder" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--primary);"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
            <span>src/components</span>
          </div>
          <div class="ui-tree-children">
            <div class="ui-tree-item">
              <div class="ui-tree-row">
                <svg class="lucide lucide-file-code" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:#0ea5e9;"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m10 13-2 2 2 2"/><path d="m14 17 2-2-2-2"/></svg>
                <span>button.js</span>
              </div>
            </div>
            <div class="ui-tree-item">
              <div class="ui-tree-row">
                <svg class="lucide lucide-file-text" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:#10b981;"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>
                <span>button.css</span>
              </div>
            </div>
          </div>
        </div>
        <div class="ui-tree-item">
          <div class="ui-tree-row">
            <svg class="lucide lucide-file-json" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:#f59e0b;"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>
            <span>package.json</span>
          </div>
        </div>
      </div>
    `,
    html: `<div class="ui-tree-view">
  <div class="ui-tree-item is-open">
    <div class="ui-tree-row">
      <span class="ui-tree-chevron">▶</span>
      <span>src/</span>
    </div>
    <div class="ui-tree-children">
      <div class="ui-tree-row"><span>index.js</span></div>
    </div>
  </div>
</div>`,
    css: `.ui-tree-view {
  padding: 12px;
  background-color: var(--card);
  border: var(--border-default);
  border-radius: var(--radius-md);
}
.ui-tree-item.is-open > .ui-tree-children {
  display: flex;
}`,
    js: `import { initTreeViews } from './components/tree-view/tree-view.js';
initTreeViews();`
  },
  {
    id: 'rating',
    name: 'Interactive Rating Widget',
    category: 'Feedback',
    description: 'Spring scale interactive star rating widget with live score feedback and tooltip previews.',
    cardPreview: `
      <div style="background-color: var(--card); border: var(--border-default); border-radius: 8px; padding: 6px 10px; width: 100%; max-width: 125px; display: flex; flex-direction: column; align-items: center; gap: 4px; box-sizing: border-box;">
        <div style="display: flex; gap: 3px; color: #f59e0b;">
          <svg class="lucide lucide-star" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg class="lucide lucide-star" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg class="lucide lucide-star" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg class="lucide lucide-star" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg class="lucide lucide-star" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        </div>
        <span style="font-size: 9px; font-weight: 600; color: var(--muted-foreground);">5.0 Rating</span>
      </div>
    `,
    previewMarkup: `
      <div class="ui-rating-card">
        <div class="ui-rating-stars">
          <button class="ui-rating-star is-filled" type="button" data-rating-val="1" aria-label="Rate 1 star">
            <svg class="lucide lucide-star" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </button>
          <button class="ui-rating-star is-filled" type="button" data-rating-val="2" aria-label="Rate 2 stars">
            <svg class="lucide lucide-star" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </button>
          <button class="ui-rating-star is-filled" type="button" data-rating-val="3" aria-label="Rate 3 stars">
            <svg class="lucide lucide-star" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </button>
          <button class="ui-rating-star is-filled" type="button" data-rating-val="4" aria-label="Rate 4 stars">
            <svg class="lucide lucide-star" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </button>
          <button class="ui-rating-star is-filled" type="button" data-rating-val="5" aria-label="Rate 5 stars">
            <svg class="lucide lucide-star" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </button>
        </div>
        <div class="ui-rating-feedback">
          <span class="ui-rating-score-chip">5.0 / 5.0</span>
          <span class="ui-rating-feedback-text">Exceptional Motion & Design!</span>
        </div>
      </div>
    `,
    html: `<div class="ui-rating-card">
  <div class="ui-rating-stars">
    <button class="ui-rating-star is-filled" data-rating-val="1">★</button>
    <button class="ui-rating-star is-filled" data-rating-val="2">★</button>
    <button class="ui-rating-star is-filled" data-rating-val="3">★</button>
    <button class="ui-rating-star is-filled" data-rating-val="4">★</button>
    <button class="ui-rating-star is-filled" data-rating-val="5">★</button>
  </div>
  <div class="ui-rating-feedback">
    <span class="ui-rating-score-chip">5.0 / 5.0</span>
  </div>
</div>`,
    css: `.ui-rating-star {
  transition: transform var(--duration-fast) var(--spring-hover), color var(--duration-fast);
}
.ui-rating-star:hover {
  transform: scale(1.3);
  color: #f59e0b;
}`,
    js: `import { initRatings } from './components/rating/rating.js';
initRatings();`
  },
  {
    id: 'segmented',
    name: 'Segmented Control',
    category: 'Inputs',
    description: 'Sliding spring pill segmented switcher with keyboard navigation, fluid full-width mode, and badge indicators.',
    cardPreview: `
      <div style="background-color: var(--muted); border: var(--border-default); border-radius: 9999px; padding: 3px; display: flex; gap: 3px; width: 100%; max-width: 125px;">
        <div style="background-color: var(--card); border-radius: 9999px; padding: 3px 8px; font-size: 8px; font-weight: 700; box-shadow: var(--shadow-xs);">Daily</div>
        <div style="padding: 3px 8px; font-size: 8px; color: var(--muted-foreground);">Weekly</div>
      </div>
    `,
    previewMarkup: `
      <div style="display:flex; flex-direction:column; gap:16px; align-items:center; width:100%; max-width:440px;">
        <!-- Standard Segmented Pill -->
        <div class="ui-segmented-control" role="tablist" aria-label="View timeframe">
          <button class="ui-segmented-item is-active" type="button" role="tab" aria-selected="true" data-value="overview">Overview</button>
          <button class="ui-segmented-item" type="button" role="tab" aria-selected="false" data-value="analytics">Analytics</button>
          <button class="ui-segmented-item" type="button" role="tab" aria-selected="false" data-value="activity">
            <span>Activity</span>
            <span class="ui-segmented-badge">3</span>
          </button>
          <button class="ui-segmented-item" type="button" role="tab" aria-selected="false" data-value="settings">Settings</button>
        </div>

        <!-- Full-Width Fluid Segmented Control -->
        <div class="ui-segmented-control ui-segmented-control--full" role="tablist" aria-label="Subscription cycle">
          <button class="ui-segmented-item is-active" type="button" role="tab" aria-selected="true">Monthly Billing</button>
          <button class="ui-segmented-item" type="button" role="tab" aria-selected="false">
            <span>Annual Billing</span>
            <span class="ui-segmented-badge" style="background-color:var(--sage); color:#1E1B24;">-20%</span>
          </button>
        </div>
      </div>
    `,
    html: `<!-- Sliding Segmented Control (Auto-Centers Active Tab on Mobile) -->
<div class="ui-segmented-control" role="tablist" aria-label="View timeframe">
  <button class="ui-segmented-item is-active" role="tab" aria-selected="true" data-value="overview">Overview</button>
  <button class="ui-segmented-item" role="tab" aria-selected="false" data-value="analytics">Analytics</button>
  <button class="ui-segmented-item" role="tab" aria-selected="false" data-value="activity">
    <span>Activity</span>
    <span class="ui-segmented-badge">3</span>
  </button>
  <button class="ui-segmented-item" role="tab" aria-selected="false" data-value="settings">Settings</button>
</div>`,
    css: `.ui-segmented-control {
  position: relative;
  display: inline-flex;
  align-items: center;
  background-color: var(--muted);
  border-radius: var(--radius-full);
  padding: 4px;
  gap: 2px;
  max-width: 100%;
  overflow-x: auto;
  scrollbar-width: none;
  scroll-behavior: smooth;
}
.ui-segmented-control::-webkit-scrollbar {
  display: none;
}
.ui-segmented-indicator {
  position: absolute;
  top: 4px;
  bottom: 4px;
  left: 0;
  border-radius: var(--radius-full);
  background-color: var(--card);
  box-shadow: var(--shadow-xs);
  transition: transform 250ms var(--spring-hover), width 250ms var(--spring-hover);
  pointer-events: none;
  z-index: 1;
}
.ui-segmented-item {
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  font-size: var(--text-xs);
  font-weight: 600;
  color: var(--muted-foreground);
  background: transparent;
  border: none;
  cursor: pointer;
  white-space: nowrap;
}`,
    js: `import { initSegmentedControls } from '@zak1.uhh/hush-ui';

// Initializes sliding spring indicator, keyboard navigation & mobile auto-centering
initSegmentedControls();`
  },
  {
    id: 'color-picker',
    name: 'Color Swatch & Hue Picker',
    category: 'Inputs',
    description: 'Palette swatch selector with continuous hue slider, HEX preview chip, and one-click copy feedback.',
    cardPreview: `
      <div style="background:var(--card); border:var(--border-default); border-radius:8px; padding:6px 8px; display:flex; gap:4px; align-items:center;">
        <span style="width:12px; height:12px; border-radius:3px; background:#C9B8DB;"></span>
        <span style="width:12px; height:12px; border-radius:3px; background:#B8D8D0;"></span>
        <span style="width:12px; height:12px; border-radius:3px; background:#F3E3B5;"></span>
        <span style="width:12px; height:12px; border-radius:3px; background:#F0C4C4;"></span>
      </div>
    `,
    previewMarkup: `
      <div class="ui-color-picker">
        <div style="font-size:12px; font-weight:700; color:var(--foreground);">Accent Hue</div>
        <!-- Preset Pastel Swatches -->
        <div class="ui-color-swatches">
          <button class="ui-color-swatch-btn is-active" type="button" data-color="#C9B8DB" style="background-color:#C9B8DB;" aria-label="Select Lilac">
            <svg class="swatch-check" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
          </button>
          <button class="ui-color-swatch-btn" type="button" data-color="#B8D8D0" style="background-color:#B8D8D0;" aria-label="Select Sage">
            <svg class="swatch-check" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
          </button>
          <button class="ui-color-swatch-btn" type="button" data-color="#F3E3B5" style="background-color:#F3E3B5;" aria-label="Select Butter">
            <svg class="swatch-check" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
          </button>
          <button class="ui-color-swatch-btn" type="button" data-color="#F0C4C4" style="background-color:#F0C4C4;" aria-label="Select Blush">
            <svg class="swatch-check" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
          </button>
          <button class="ui-color-swatch-btn" type="button" data-color="#B8CCE8" style="background-color:#B8CCE8;" aria-label="Select Sky">
            <svg class="swatch-check" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
          </button>
        </div>

        <!-- Continuous Hue Slider -->
        <div class="ui-color-hue-bar" aria-label="Hue gradient slider">
          <div class="ui-color-hue-thumb"></div>
        </div>

        <!-- Footer Preview & Copy -->
        <div class="ui-color-footer">
          <div class="ui-color-preview-chip">
            <div class="ui-color-preview-dot" style="background-color:#C9B8DB;"></div>
            <span class="ui-color-hex-text">#C9B8DB</span>
          </div>
          <button class="ui-button ui-button--ghost ui-color-copy-btn" type="button">Copy</button>
        </div>
      </div>
    `,
    html: `<!-- Color Swatch & Hue Picker -->
<div class="ui-color-picker">
  <div class="ui-color-swatches">
    <button class="ui-color-swatch-btn is-active" data-color="#C9B8DB" style="background:#C9B8DB;">✓</button>
    <button class="ui-color-swatch-btn" data-color="#B8D8D0" style="background:#B8D8D0;"></button>
    <button class="ui-color-swatch-btn" data-color="#F3E3B5" style="background:#F3E3B5;"></button>
  </div>
  <div class="ui-color-hue-bar">
    <div class="ui-color-hue-thumb"></div>
  </div>
  <div class="ui-color-footer">
    <div class="ui-color-preview-chip">
      <div class="ui-color-preview-dot" style="background:#C9B8DB;"></div>
      <span class="ui-color-hex-text">#C9B8DB</span>
    </div>
    <button class="ui-button ui-button--ghost ui-color-copy-btn">Copy</button>
  </div>
</div>`,
    css: `.ui-color-picker {
  padding: 16px;
  background-color: var(--card);
  border: var(--border-default);
  border-radius: var(--radius-md);
  max-width: 280px;
}
.ui-color-swatch-btn:hover {
  transform: scale(1.12);
}`,
    js: `import { initColorPickers } from '@zak1.uhh/hush-ui';

initColorPickers();`
  },
  {
    id: 'context-menu',
    name: 'Custom Context Menu',
    category: 'Overlays',
    description: 'Collision-aware floating right-click context menu with keyboard shortcuts, dividers, and spring scale entry.',
    cardPreview: `
      <div style="border:1px dashed var(--border); border-radius:8px; padding:8px 12px; width:100%; max-width:125px; text-align:center;">
        <span style="font-size:9px; font-weight:600; color:var(--muted-foreground);">Right-click me</span>
      </div>
    `,
    previewMarkup: `
      <div style="display:flex; flex-direction:column; align-items:center; gap:12px; width:100%;">
        <!-- Interactive Trigger Area -->
        <div class="ui-context-target" data-context-target="demo-context-menu">
          <svg class="lucide lucide-mouse-pointer-click" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--primary); margin-bottom:6px;"><path d="m9 9 5 12 1.8-5.2L21 14Z"/><path d="M7.2 2.2 8 5.1"/><path d="m5.1 8-2.9-.8"/><path d="M14 4.1 12 6"/><path d="m6 12-1.9 2"/></svg>
          <div style="font-size:13px; font-weight:700; color:var(--foreground);">Right-Click or Tap to Open</div>
          <div style="font-size:11px; color:var(--muted-foreground); margin-top:2px;">(Supports right-click, tap, or long-press on mobile)</div>
        </div>

        <!-- Floating Context Menu -->
        <div id="demo-context-menu" class="ui-context-menu" role="menu">
          <button class="ui-context-item" type="button" role="menuitem">
            <div class="ui-context-item-left">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m18 15-6-6-6 6"/></svg>
              <span>Inspect Token</span>
            </div>
            <kbd class="ui-kbd" style="font-size:9px;">⌥I</kbd>
          </button>
          <button class="ui-context-item" type="button" role="menuitem">
            <div class="ui-context-item-left">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
              <span>Copy Component</span>
            </div>
            <kbd class="ui-kbd" style="font-size:9px;">⌘C</kbd>
          </button>
          <button class="ui-context-item" type="button" role="menuitem">
            <div class="ui-context-item-left">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              <span>Export Code</span>
            </div>
            <kbd class="ui-kbd" style="font-size:9px;">⌘E</kbd>
          </button>
          <div class="ui-context-divider"></div>
          <button class="ui-context-item ui-context-item--danger" type="button" role="menuitem">
            <div class="ui-context-item-left">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
              <span>Delete Node</span>
            </div>
            <kbd class="ui-kbd" style="font-size:9px; color:inherit;">Del</kbd>
          </button>
        </div>
      </div>
    `,
    html: `<!-- Target Area -->
<div class="ui-context-target" data-context-target="my-context-menu">
  Right-click here
</div>

<!-- Context Menu Element -->
<div id="my-context-menu" class="ui-context-menu" role="menu">
  <button class="ui-context-item" role="menuitem">Inspect Element</button>
  <button class="ui-context-item" role="menuitem">Copy Code</button>
  <div class="ui-context-divider"></div>
  <button class="ui-context-item ui-context-item--danger" role="menuitem">Delete</button>
</div>`,
    css: `.ui-context-menu {
  position: fixed;
  z-index: 9999;
  min-width: 190px;
  background-color: var(--card);
  border: var(--border-default);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  padding: 6px;
  opacity: 0;
  pointer-events: none;
  transform: scale(0.92);
  transition: opacity 160ms, transform 180ms var(--spring-hover);
}
.ui-context-menu.is-open {
  opacity: 1;
  pointer-events: auto;
  transform: scale(1);
}`,
    js: `import { initContextMenu } from '@zak1.uhh/hush-ui';

initContextMenu();`
  }
];



