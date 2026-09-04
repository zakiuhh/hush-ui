# Hush UI

> A calm, spring-motion Hush UI design system with 51 accessible primitives and 28 responsive layout sections. Built for intentional web development with zero runtime baggage.

[![npm version](https://img.shields.io/npm/v/@zak1.uhh/hush-ui.svg)](https://www.npmjs.com/package/@zak1.uhh/hush-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](#typescript-support)

---

## Highlights

- **51 Core Primitives**: From interactive sparklines, metric tiles, and touch-swipeable carousels to date pickers, inline edit fields, scrollspy TOCs, OTP inputs, waveform players, tag inputs, and live password meters.
- **28 Pre-Made Responsive Sections**: Multi-step onboarding wizards, customer testimonial walls, interactive pricing calculators with seat sliders, customer case study heroes, and comparison matrices.
- **GPU Spring Physics**: Calibrated cubic-bezier curves for tactile hover, sliding, and click responses.
- **Sky Morphing Themes**: Dynamic light/dark theme switching with smooth transitions and CSS custom property tokens.
- **Framework Agnostic**: Works out of the box with vanilla HTML, Vite, Next.js, React, Vue, Svelte, and Astro.
- **Pure CSS + Vanilla JS**: Zero heavy runtime frameworks required.

---

## Installation

```bash
npm install @zak1.uhh/hush-ui
```

Or with yarn / pnpm / bun:

```bash
pnpm add @zak1.uhh/hush-ui
# or
yarn add @zak1.uhh/hush-ui
# or
bun add @zak1.uhh/hush-ui
```

---

## Quick Start

### 1. Import CSS and JavaScript

```javascript
// Import core styles (tokens, reset, and all primitives)
import '@zak1.uhh/hush-ui/css';

// Import initializers
import { initHushUI, toggleTheme, showToast } from '@zak1.uhh/hush-ui';

// Initialize all interactive components in the DOM
initHushUI();

// Trigger a toast notification
showToast({
  title: 'Welcome to Hush UI',
  message: 'Calm, spring-motion design tokens active.',
  type: 'success'
});

// Toggle between light and dark mode
toggleTheme();
```

---

## 51 Component Primitives

1. **Button** (`ui-button`) — Primary, Secondary, Ghost, Destructive, and Outline variants.
2. **Card** (`ui-card`) — Elevated surfaces with soft border tints and hover transitions.
3. **Modal Window** (`ui-modal`) — Focus-trapped dialogs with spring entry transitions.
4. **Accordion** (`ui-accordion`) — Animated expanding disclosure panels with chevron rotation.
5. **Tabs** (`ui-tabs`) — Sliding pill active indicators and accessible keyboard navigation.
6. **Range Slider** (`ui-slider`) — Dynamic gradient track fill with percentage synchronization.
7. **Custom Scrollbars** (`ui-scrollbar`) — Slim, pill-styled Hush UI scrollbars for WebKit & Firefox.
8. **Interactive Links** (`ui-link`) — Animated expanding underline bars and translate arrows.
9. **Infinite Marquee Ticker** (`ui-marquee`) — Hardware-accelerated gapless twin-track scrolling.
10. **Cursor Spotlight Glow Card** (`ui-spotlight`) — Real-time radial illumination following cursor coordinates.
11. **Floating Spring Dock** (`ui-dock`) — macOS-inspired bottom toolbar with proximity icon magnification.
12. **Before/After Image Slider** (`ui-compare`) — Split comparison canvas with tactile drag handle.
13. **Interactive Timeline** (`ui-timeline`) — Vertical milestone rail with pulsing indicator nodes.
14. **Toast Notifications** (`showToast()`) — Stackable popup notifications with auto-dismiss timers.
15. **Drawer Sheet** (`ui-drawer`) — Left/Right side sliding flyout sheets.
16. **Dropdown Menu** (`ui-dropdown`) — Contextual action popups with outside-click dismissal.
17. **Popover** (`ui-popover`) — Tooltip-style rich popover bubbles.
18. **Combobox** (`ui-combobox`) — Searchable autocomplete select dropdowns.
19. **Command Palette** (`ui-command`) — Global `Ctrl+K` searchable command modal.
20. **Badge & Chips** (`ui-badge`, `ui-chip`) — Status badges, version pills, and removable filter chips.
21. **Avatar & Avatar Stack** (`ui-avatar`, `ui-avatar-stack`) — Initials, images, and overlapping group stacks.
22. **Alert Banner** (`ui-alert`) — Info, Success, Warning, and Destructive notice panels.
23. **Progress Bar & Stepper** (`ui-progress`, `ui-stepper`) — Continuous progress bars and multi-step pipeline counters.
24. **Rolling Odometer Counter** (`ui-counter`) — Animated tabular numeric stat rollers.
25. **Bento Grid** (`ui-bento`) — Modular multi-span dashboard grid layout tiles.
26. **Tooltip** (`ui-tooltip`) — Lightweight CSS hover micro-tooltips.
27. **Keyboard Keycap** (`ui-kbd`) — 3D bevel styled shortcut keys.
28. **Skeleton Shimmer** (`ui-skeleton`) — Smooth wave loading placeholder shimmers.
29. **Theme Toggle Orb** (`ui-theme-toggle`) — Sky-morphing sun/moon/cloud animated switcher.
30. **Form Controls** (`ui-input`, `ui-label`, `ui-checkbox`, `ui-radio`, `ui-switch`) — Complete calibrated inputs.
31. **Stats Widget** (`ui-stat`) — Desktop metric tile with trend indicators.
32. **Breadcrumb Trail** (`ui-breadcrumb`) — Multi-level hierarchical navigation trail.
33. **Interactive Dropzone** (`ui-dropzone`) — Drag-and-drop file upload with animated dashed borders and queue preview.
34. **Code Block & File Tree** (`ui-code-block`) — Tabbed multi-file syntax code viewer with clipboard copy.
35. **Animated Number Ticker** (`ui-ticker-card`) — Smooth count-up animated KPI statistics.
36. **Tree View / Directory** (`ui-tree-view`) — Collapsible nested file and folder explorer.
37. **Interactive Rating Widget** (`ui-rating-card`) — Spring scale interactive star rating widget with live score feedback.
38. **Segmented Control Switcher** (`ui-segmented-control`) — Spring pill sliding control with keyboard navigation.
39. **Color Swatch & Hue Picker** (`ui-color-picker`) — Pastel swatch buttons with continuous hue slider and HEX copy.
40. **Custom Context Menu** (`ui-context-menu`) — Collision-aware right-click floating menu with shortcut badges.
41. **Multi-Slot OTP / PIN Input** (`ui-otp-input`) — 6-digit verification code inputs with auto-advance and backspace retreat.
42. **Audio & Waveform Player Widget** (`ui-audio-player`) — Tactile audio widget with dynamic waveform visualizer and scrubber.
43. **Tag / Token Auto-Complete Input** (`ui-tag-input`) — Pastel chip tags on Enter/Comma with backspace removal.
44. **Password Strength Meter & Live Checklist** (`ui-password-meter`) — 4-tier strength progress bar and live criteria checklist.
45. **Date Picker** (`ui-date-picker`) — Calendar popover with range capsules.
46. **Inline Edit** (`ui-inline-edit`) — In-place text editing field.
47. **Table of Contents** (`ui-toc`) — Scrollspy navigation sidebar.
48. **Pagination** (`ui-pagination`) — Tactile page navigation bar.
49. **Interactive Sparkline** (`ui-sparkline`) — SVG trend curve with bezier smoothing and hover crosshairs.
50. **High-Density Metric Tile** (`ui-metric-tile`) — KPI metric card with timeframe switcher and embedded sparkline.
51. **Touch-Swipeable Carousel** (`ui-carousel`) — Fluid card reel with swipe physics and dot indicators.

---

## 28 Pre-Made Layout Sections

1. **Split Hero with Visual Canvas** (`sec-hero-split`)
2. **Centered Conversion Hero with Search** (`sec-hero-centered`)
3. **Desktop App Frame Showcase** (`sec-hero-app`)
4. **3x3 Bento Modular Feature Matrix** (`sec-bento-matrix`)
5. **Tabbed Interactive Feature Showcase** (`sec-features-tabs`)
6. **Curated Media & Visual Gallery** (`sec-gallery-section`)
7. **3-Tier SaaS Subscription Matrix** (`sec-pricing-section`)
8. **Live Metrics & Stats Counter Ribbon** (`sec-stats-ribbon`)
9. **Masonry Testimonials & Social Proof** (`sec-testimonials-masonry`)
10. **2-Column Accordion FAQ List** (`sec-faq-section`)
11. **Leadership & Team Grid** (`sec-team-section`)
12. **Kanban Milestone Roadmap** (`sec-roadmap-section`)
13. **Interactive Split Contact Form** (`sec-contact-section`)
14. **4-Column Comprehensive Site Footer** (`sec-footer-multi`)
15. **Conversion Action Callout Banner** (`sec-cta-banner`)
16. **Lead Capture Newsletter Section** (`sec-newsletter-section`)
17. **Product Changelog & Milestone Roadmap** (`changelog-timeline`)
18. **Dual-Row Infinite Logo Cloud** (`logo-cloud-marquee`)
19. **Floating Widget Conversion CTA** (`cta-floating-widgets`)
20. **Interactive ROI & Savings Calculator** (`calculator-roi`)
21. **Feature Comparison Table** (`comparison-matrix`)
22. **Auth / Sign-In Screen** (`auth-split`)
23. **Release Notes & Changelog Feed** (`changelog-feed`)
24. **Interactive 404 / Empty State Canvas** (`error-404`)
25. **Interactive Pricing Matrix & Slider** (`pricing-interactive`)
26. **Customer Case Study & Success Story** (`case-study`)
27. **Multi-Step Onboarding Wizard** (`onboarding-wizard`)
28. **Customer Wall of Love & Video Testimonials** (`testimonial-wall`)

---

## Design Tokens & Theming

Hush UI uses clean CSS custom properties that you can easily customize:

```css
:root {
  /* Hush UI Palette Hues */
  --primary: #C9B8DB;       /* Desaturated Lilac */
  --secondary: #B8D8D0;     /* Muted Sage */
  --butter: #F3E3B5;        /* Soft Butter */
  --blush: #F0C4C4;         /* Soft Blush */
  
  /* Radii */
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-full: 9999px;

  /* Spring Curves */
  --spring-hover: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-soft-out: cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

## TypeScript Support

Hush UI is fully typed. Import types directly:

```typescript
import { initHushUI, ToastOptions, showToast } from '@zak1.uhh/hush-ui';

const toastConfig: ToastOptions = {
  title: 'Saved',
  message: 'Configuration updated successfully.',
  type: 'success',
  duration: 4000
};

showToast(toastConfig);
```

---

## License

[MIT](LICENSE) © 2026 Zaki
