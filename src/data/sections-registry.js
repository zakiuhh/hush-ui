/**
 * Hush UI Pre-Made Sections Registry
 * Production-grade, fully responsive layout templates built with 100% Lucide SVG icons (Zero Emojis).
 */

export const SECTIONS_REGISTRY = [
  // --------------------------------------------------------------------------
  // HEROES
  // --------------------------------------------------------------------------
  {
    id: 'hero-split',
    name: 'SaaS Split Hero with Sandbox',
    category: 'Heroes',
    description: 'High-converting split hero section featuring left value propositions and right interactive glass widget sandbox.',
    cardPreview: `
      <div style="display:flex; flex-direction:column; gap:4px; width:100%; max-width:130px;">
        <div style="display:flex; gap:3px; align-items:center;">
          <span style="height:4px; width:28px; border-radius:2px; background:var(--primary);"></span>
          <span style="height:4px; width:14px; border-radius:2px; background:var(--muted-foreground); opacity:0.4;"></span>
        </div>
        <div style="background:var(--card); border:1px solid var(--border); border-radius:6px; padding:5px 6px; display:flex; justify-content:space-between; align-items:center; box-shadow:var(--shadow-xs);">
          <span style="font-size:9px; font-weight:700;">#4,890</span>
          <span style="width:6px; height:6px; border-radius:50%; background:var(--sage);"></span>
        </div>
      </div>
    `,
    previewMarkup: `
      <section class="sec-hero-split">
        <div class="sec-hero-content">
          <div class="sec-badge">
            <svg class="lucide lucide-sparkles" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
            <span>Production-Ready Design System</span>
          </div>
          <h1 class="sec-hero-title">Build interfaces that feel calmer, lighter, and smoother.</h1>
          <p class="sec-hero-desc">Desaturated Hush UI primitive tokens, calibrated GPU spring motion, and 25+ modular accessible components with zero runtime baggage.</p>
          <div class="sec-hero-actions">
            <a href="/pages/components.html" class="ui-button ui-button--primary" style="gap:8px;">
              <span>Explore Components</span>
              <svg class="lucide lucide-arrow-right" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a href="#demo" class="ui-button ui-button--ghost" style="gap:6px;">
              <svg class="lucide lucide-terminal" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>
              <span>Quick Install</span>
            </a>
          </div>
          <div class="sec-hero-avatars-row">
            <div class="ui-avatar-group">
              <div class="ui-avatar ui-avatar--lilac">ZK</div>
              <div class="ui-avatar ui-avatar--sage">AM<span class="ui-avatar-badge"></span></div>
              <div class="ui-avatar ui-avatar--blush">FL</div>
              <div class="ui-avatar ui-avatar--butter">+8</div>
            </div>
            <span class="sec-avatar-caption">Trusted by 1,400+ frontend engineers worldwide</span>
          </div>
        </div>

        <div class="sec-hero-sandbox">
          <div class="sec-glass-card">
            <div class="sec-card-top">
              <div style="display:flex; align-items:center; gap:8px;">
                <span class="sec-dot sec-dot--green"></span>
                <span style="font-size:12px; font-weight:600;">System Telemetry</span>
              </div>
              <span class="ui-chip ui-chip--secondary" style="font-size:10px;">Live v1.0</span>
            </div>
            <div class="ui-counter-card" style="box-shadow:none; border:none; padding:12px 0;">
              <span class="ui-counter-label">Monthly Active Deployments</span>
              <div class="ui-counter" data-counter-target="4890">
                <span class="ui-counter-prefix">#</span>
                <span class="ui-counter-roller"></span>
              </div>
            </div>
            <div class="sec-card-row">
              <label class="ui-switch">
                <input type="checkbox" checked />
                <span class="ui-switch-track"><span class="ui-switch-thumb"></span></span>
                <span style="font-size:12px;">Spring GPU Curve</span>
              </label>
              <button class="ui-button ui-button--secondary" style="font-size:11px; padding:3px 10px;">
                Optimal
              </button>
            </div>
          </div>
        </div>
      </section>
    `,
    html: `<section class="sec-hero-split">
  <div class="sec-hero-content">
    <div class="sec-badge">
      <svg class="lucide lucide-sparkles" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
      <span>Production-Ready Design System</span>
    </div>
    <h1 class="sec-hero-title">Build interfaces that feel calmer, lighter, and smoother.</h1>
    <p class="sec-hero-desc">Desaturated Hush UI primitive tokens, calibrated GPU spring motion, and 25+ modular accessible components with zero runtime baggage.</p>
    <div class="sec-hero-actions">
      <a href="/pages/components.html" class="ui-button ui-button--primary">
        <span>Explore Components</span>
      </a>
      <button class="ui-button ui-button--ghost">
        <span>Quick Install</span>
      </button>
    </div>
    <div class="sec-hero-avatars-row">
      <div class="ui-avatar-group">
        <div class="ui-avatar ui-avatar--lilac">ZK</div>
        <div class="ui-avatar ui-avatar--sage">AM<span class="ui-avatar-badge"></span></div>
        <div class="ui-avatar ui-avatar--blush">FL</div>
        <div class="ui-avatar ui-avatar--butter">+8</div>
      </div>
      <span class="sec-avatar-caption">Trusted by 1,400+ frontend engineers</span>
    </div>
  </div>

  <div class="sec-hero-sandbox">
    <div class="sec-glass-card">
      <div class="sec-card-top">
        <span class="sec-dot sec-dot--green"></span>
        <span class="ui-chip ui-chip--secondary">Live v1.0</span>
      </div>
      <div class="ui-counter" data-counter-target="4890">
        <span class="ui-counter-prefix">#</span>
        <span class="ui-counter-roller"></span>
      </div>
    </div>
  </div>
</section>`,
    css: `.sec-hero-split {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 48px;
  align-items: center;
  padding: 56px 32px;
  max-width: 1140px;
  margin: 0 auto;
}
.sec-hero-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.6vw, 3.2rem);
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin: 8px 0;
  color: var(--foreground);
}
.sec-hero-desc {
  font-size: var(--text-base);
  line-height: var(--leading-base);
  color: var(--muted-foreground);
  margin-bottom: 20px;
  max-width: 520px;
}
.sec-hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 24px;
}
.sec-glass-card {
  background-color: var(--card);
  border: var(--border-default);
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  gap: 16px;
}
@media (max-width: 860px) {
  .sec-hero-split {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 32px 20px;
  }
}`,
    js: `import { initHushUI, initCounters } from '@zak1.uhh/hush-ui';
initHushUI();
initCounters();`
  },
  {
    id: 'hero-centered',
    name: 'Centered Launch Hero with Search',
    category: 'Heroes',
    description: 'Minimalist centered hero section with Fraunces display typography, integrated search bar, and badge indicators.',
    cardPreview: `
      <div style="display:flex; flex-direction:column; align-items:center; gap:4px; width:100%; max-width:130px; text-align:center;">
        <span style="height:3px; width:20px; border-radius:2px; background:var(--primary);"></span>
        <span style="font-size:9px; font-weight:700; line-height:1.2;">Design System</span>
        <div style="background:var(--card); border:1px solid var(--border); border-radius:12px; padding:3px 8px; font-size:7px; width:80%; color:var(--muted-foreground);">Search components...</div>
      </div>
    `,
    previewMarkup: `
      <section class="sec-hero-centered">
        <div class="sec-badge" style="margin-bottom:12px;">
          <svg class="lucide lucide-sparkles" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
          <span>Announcing Hush UI v1.0 Release</span>
        </div>
        <h1 class="sec-hero-title" style="font-size:clamp(2.2rem, 4.2vw, 3.8rem); max-width:820px; text-align:center;">
          The serene design system for intentional web developers.
        </h1>
        <p class="sec-hero-desc" style="max-width:580px; text-align:center; margin-bottom:28px;">
          Engineered with soft desaturated Hush UI palettes, zero external runtime bloat, and calibrated GPU physics for calming digital experiences.
        </p>
        <div class="sec-centered-search-box">
          <svg class="lucide lucide-search" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--muted-foreground);"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input type="text" class="sec-centered-search-input" placeholder="Search 25+ primitives (e.g. command, counter, bento...)" />
          <button class="ui-button ui-button--primary" style="padding:6px 14px; font-size:12px;">Search Primitives</button>
        </div>
        <div class="sec-pill-tags-row">
          <span class="ui-chip ui-chip--primary" style="font-size:11px;">Zero Runtime Baggage</span>
          <span class="ui-chip ui-chip--secondary" style="font-size:11px;">100% Lucide Icons</span>
          <span class="ui-chip ui-chip--accent" style="font-size:11px;">Vanilla + React + Vue</span>
        </div>
      </section>
    `,
    html: `<section class="sec-hero-centered">
  <div class="sec-badge">
    <span>Announcing Hush UI v1.0 Release</span>
  </div>
  <h1 class="sec-hero-title">The serene design system for intentional web developers.</h1>
  <p class="sec-hero-desc">Engineered with soft desaturated Hush UI palettes and zero external runtime bloat.</p>
  <div class="sec-centered-search-box">
    <input type="text" class="sec-centered-search-input" placeholder="Search primitives..." />
    <button class="ui-button ui-button--primary">Search Primitives</button>
  </div>
</section>`,
    css: `.sec-hero-centered {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 64px 24px;
  max-width: 960px;
  margin: 0 auto;
}
.sec-centered-search-box {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--card);
  border: var(--border-default);
  border-radius: var(--radius-full);
  padding: 6px 8px 6px 16px;
  width: 100%;
  max-width: 520px;
  box-shadow: var(--shadow-sm);
  margin-bottom: 24px;
}
.sec-centered-search-input {
  flex: 1;
  border: none;
  background: transparent;
  color: var(--foreground);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  outline: none;
}
@media (max-width: 640px) {
  .sec-centered-search-box {
    flex-direction: column;
    border-radius: var(--radius-md);
    padding: 10px;
  }
}`,
    js: `// Instant search filter handler
document.querySelector('.sec-centered-search-input')?.addEventListener('input', (e) => {
  console.log('Searching for:', e.target.value);
});`
  },
  {
    id: 'hero-app-mockup',
    name: 'Floating App Showcase Hero',
    category: 'Heroes',
    description: 'Hero section with action buttons and floating angled glass dashboard preview mockup.',
    cardPreview: `
      <div style="display:flex; flex-direction:column; gap:4px; width:100%; max-width:130px; align-items:center;">
        <span style="font-size:8px; font-weight:700;">Calm Dashboard</span>
        <div style="background:var(--card); border:1px solid var(--border); border-radius:6px; width:100%; height:38px; padding:4px; box-shadow:var(--shadow-md); display:flex; gap:3px;">
          <div style="width:20px; background:var(--muted); border-radius:3px;"></div>
          <div style="flex:1; background:color-mix(in srgb, var(--primary) 15%, var(--card)); border-radius:3px;"></div>
        </div>
      </div>
    `,
    previewMarkup: `
      <section class="sec-hero-app">
        <div class="sec-badge" style="margin-bottom:12px;">
          <svg class="lucide lucide-zap" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          <span>Hardware-Accelerated Physics</span>
        </div>
        <h1 class="sec-hero-title" style="font-size:clamp(2.2rem, 4vw, 3.4rem); text-align:center; max-width:760px;">
          Empower your web applications with calm, tactile spring interfaces.
        </h1>
        <p class="sec-hero-desc" style="text-align:center; max-width:540px; margin-bottom:28px;">
          Replace chaotic neon accents with balanced, human-friendly Hush UI pigments that reduce visual fatigue.
        </p>
        <div style="display:flex; gap:12px; margin-bottom:48px; flex-wrap:wrap; justify-content:center;">
          <a href="/pages/components.html" class="ui-button ui-button--primary" style="padding:10px 22px; gap:8px;">
            <span>Browse Components (25)</span>
            <svg class="lucide lucide-arrow-right" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a href="/pages/sections.html" class="ui-button ui-button--secondary" style="padding:10px 18px; gap:6px;">
            <svg class="lucide lucide-layers" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>
            <span>Pre-Made Templates</span>
          </a>
        </div>

        <!-- Floating Dashboard Window Mockup -->
        <div class="sec-mockup-frame">
          <div class="sec-mockup-topbar">
            <div style="display:flex; gap:6px;">
              <span style="width:10px; height:10px; border-radius:50%; background:var(--blush);"></span>
              <span style="width:10px; height:10px; border-radius:50%; background:var(--butter);"></span>
              <span style="width:10px; height:10px; border-radius:50%; background:var(--sage);"></span>
            </div>
            <div style="font-size:11px; color:var(--muted-foreground); font-family:var(--font-mono, monospace);">https://app.hushui.dev/dashboard</div>
            <div style="width:30px;"></div>
          </div>
          <div class="sec-mockup-body">
            <div class="sec-mockup-sidebar">
              <div class="sec-mockup-nav-item is-active"><svg class="lucide lucide-home" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> <span>Overview</span></div>
              <div class="sec-mockup-nav-item"><svg class="lucide lucide-activity" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg> <span>Analytics</span></div>
              <div class="sec-mockup-nav-item"><svg class="lucide lucide-settings" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg> <span>Settings</span></div>
            </div>
            <div class="sec-mockup-content">
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
                <div class="sec-stat-box" style="background:var(--background); padding:12px; border-radius:8px; border:var(--border-default);">
                  <span style="font-size:11px; color:var(--muted-foreground);">Throughput</span>
                  <span style="font-size:18px; font-weight:700;">14.2k req/s</span>
                </div>
                <div class="sec-stat-box" style="background:var(--background); padding:12px; border-radius:8px; border:var(--border-default);">
                  <span style="font-size:11px; color:var(--muted-foreground);">Latency Avg</span>
                  <span style="font-size:18px; font-weight:700; color:var(--secondary);">12.4 ms</span>
                </div>
              </div>
              <div class="ui-progress-track" style="height:8px;"><div class="ui-progress-fill" style="width:82%;"></div></div>
            </div>
          </div>
        </div>
      </section>
    `,
    html: `<section class="sec-hero-app">
  <div class="sec-badge">
    <span>Hardware-Accelerated Physics</span>
  </div>
  <h1 class="sec-hero-title">Empower your web applications with calm, tactile spring interfaces.</h1>
  <p class="sec-hero-desc">Replace chaotic neon accents with balanced, human-friendly Hush UI pigments.</p>
  <div class="sec-mockup-frame">
    <div class="sec-mockup-topbar">
      <span>https://app.hushui.dev</span>
    </div>
    <div class="sec-mockup-body">
      <!-- Mockup Dashboard Container -->
    </div>
  </div>
</section>`,
    css: `.sec-hero-app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 24px 48px 24px;
  max-width: 1080px;
  margin: 0 auto;
}
.sec-mockup-frame {
  width: 100%;
  max-width: 860px;
  background-color: var(--card);
  border: 1px solid color-mix(in srgb, var(--primary) 40%, var(--border));
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
}`,
    js: `// Interactive dashboard tab router.`
  },

  // --------------------------------------------------------------------------
  // GALLERY & MEDIA
  // --------------------------------------------------------------------------
  {
    id: 'gallery-masonry',
    name: 'Bento Media & Image Gallery',
    category: 'Gallery',
    description: 'Dynamic 3-column media masonry gallery with frosted Hush UI overlay badges, category filter chips, and zoom aura.',
    cardPreview: `
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:3px; width:100%; max-width:130px;">
        <div style="background:var(--lilac); opacity:0.6; height:24px; border-radius:4px;"></div>
        <div style="background:var(--sage); opacity:0.6; height:24px; border-radius:4px;"></div>
        <div style="background:var(--butter); opacity:0.6; height:20px; border-radius:4px;"></div>
        <div style="background:var(--blush); opacity:0.6; height:20px; border-radius:4px;"></div>
      </div>
    `,
    previewMarkup: `
      <section class="sec-gallery-section">
        <div class="sec-section-header">
          <span class="ui-catalog-badge">Visual Showcase</span>
          <h2 class="sec-section-title">Crafted with Hush UI Harmony</h2>
          <p class="sec-section-subtitle">Explore real-world interfaces and tactile components built with our tokens.</p>
        </div>

        <div class="sec-gallery-grid">
          <!-- Item 1: Large Span -->
          <div class="sec-gallery-item sec-gallery-item--wide">
            <div class="sec-gallery-bg" style="background: linear-gradient(135deg, color-mix(in srgb, var(--lilac) 40%, var(--card)), var(--card));">
              <div class="sec-gallery-card-inner">
                <span class="ui-chip ui-chip--primary" style="font-size:10px;">Interface</span>
                <h4 style="margin:8px 0 4px 0; font-size:16px;">Spotlight Dialog Architecture</h4>
                <p style="font-size:11px; color:var(--muted-foreground); margin:0;">Fuzzy search token parser</p>
              </div>
            </div>
          </div>

          <!-- Item 2 -->
          <div class="sec-gallery-item">
            <div class="sec-gallery-bg" style="background: linear-gradient(135deg, color-mix(in srgb, var(--sage) 40%, var(--card)), var(--card));">
              <div class="sec-gallery-card-inner">
                <span class="ui-chip ui-chip--secondary" style="font-size:10px;">Color Swatch</span>
                <h4 style="margin:8px 0 4px 0; font-size:14px;">Sage Token Pigment</h4>
              </div>
            </div>
          </div>

          <!-- Item 3 -->
          <div class="sec-gallery-item">
            <div class="sec-gallery-bg" style="background: linear-gradient(135deg, color-mix(in srgb, var(--butter) 40%, var(--card)), var(--card));">
              <div class="sec-gallery-card-inner">
                <span class="ui-chip ui-chip--accent" style="font-size:10px;">Motion</span>
                <h4 style="margin:8px 0 4px 0; font-size:14px;">Spring Curve Physics</h4>
              </div>
            </div>
          </div>

          <!-- Item 4: Wide -->
          <div class="sec-gallery-item sec-gallery-item--wide">
            <div class="sec-gallery-bg" style="background: linear-gradient(135deg, color-mix(in srgb, var(--blush) 40%, var(--card)), var(--card));">
              <div class="sec-gallery-card-inner">
                <span class="ui-chip ui-chip--destructive" style="font-size:10px;">Components</span>
                <h4 style="margin:8px 0 4px 0; font-size:16px;">3D Stacked Toast Engine</h4>
                <p style="font-size:11px; color:var(--muted-foreground); margin:0;">Cascading notification stack</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,
    html: `<section class="sec-gallery-section">
  <div class="sec-section-header">
    <span class="ui-catalog-badge">Visual Showcase</span>
    <h2 class="sec-section-title">Crafted with Hush UI Harmony</h2>
    <p class="sec-section-subtitle">Explore real-world interfaces and tactile components built with our tokens.</p>
  </div>
  <div class="sec-gallery-grid">
    <div class="sec-gallery-item sec-gallery-item--wide">
      <h4>Spotlight Dialog Architecture</h4>
    </div>
    <div class="sec-gallery-item">
      <h4>Sage Token Pigment</h4>
    </div>
  </div>
</section>`,
    css: `.sec-gallery-section {
  padding: 56px 32px;
  max-width: 1140px;
  margin: 0 auto;
}
.sec-section-title {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3.2vw, 2.4rem);
  line-height: 1.22;
  letter-spacing: -0.02em;
  margin: 8px 0;
  color: var(--foreground);
}
.sec-gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.sec-gallery-item {
  background-color: var(--card);
  border: var(--border-default);
  border-radius: var(--radius-lg);
  overflow: hidden;
  height: 200px;
}
@media (max-width: 860px) {
  .sec-gallery-grid {
    grid-template-columns: 1fr;
  }
}`,
    js: `// Pure CSS responsive gallery grid.`
  },

  // --------------------------------------------------------------------------
  // FEATURES
  // --------------------------------------------------------------------------
  {
    id: 'bento-matrix',
    name: 'Bento Grid Feature Matrix',
    category: 'Features',
    description: 'Modern asymmetrical bento grid showcase with span-2 metric highlight card, Hush UI swatch cluster, and live micro-actions.',
    cardPreview: `
      <div style="display:grid; grid-template-columns:1.2fr 0.8fr; gap:4px; width:100%; max-width:130px;">
        <div style="background:var(--card); border:1px solid var(--border); border-radius:6px; padding:4px 6px; display:flex; flex-direction:column; gap:2px;">
          <span style="font-size:7px; font-weight:700; color:var(--primary);">FPS</span>
          <span style="font-size:10px; font-weight:700;">120</span>
        </div>
        <div style="background:color-mix(in srgb, var(--secondary) 25%, var(--card)); border:1px solid var(--border); border-radius:6px; display:flex; align-items:center; justify-content:center; color:var(--primary);">
          <svg class="lucide lucide-zap" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        </div>
      </div>
    `,
    previewMarkup: `
      <section class="sec-bento-matrix">
        <div class="sec-section-header">
          <span class="ui-catalog-badge">Architectural Highlights</span>
          <h2 class="sec-section-title">Designed with deep aesthetic intentionality</h2>
          <p class="sec-section-subtitle">Every pixel, spring curve, and pigment token is calibrated for focus and visual serenity.</p>
        </div>

        <div class="sec-bento-container">
          <!-- Card 1: 2-Column Wide Lead Metric -->
          <div class="sec-bento-tile sec-bento-tile--wide">
            <div class="sec-bento-tile-top">
              <div>
                <span class="ui-chip ui-chip--primary" style="font-size:10px;">GPU Spring Engine</span>
                <h3 style="font-size:var(--text-xl); font-weight:700; margin:8px 0 4px 0;">Boundary-Safe Motion Physics</h3>
                <p style="font-size:var(--text-sm); color:var(--muted-foreground); margin:0;">Zero layout reflows using CSS transform matrix cubic-beziers.</p>
              </div>
              <div class="sec-bento-icon-box">
                <svg class="lucide lucide-zap" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
            </div>
            <div class="sec-metric-bar-visual">
              <div style="display:flex; justify-content:space-between; font-size:12px; font-weight:600; margin-bottom:6px;">
                <span>Frame Rate Consistency</span>
                <span style="color:var(--primary);">120 FPS</span>
              </div>
              <div class="ui-progress-track" style="height:8px;">
                <div class="ui-progress-fill" style="width:96%;"></div>
              </div>
            </div>
          </div>

          <!-- Card 2: 1-Column Palette -->
          <div class="sec-bento-tile">
            <div class="sec-bento-tile-top">
              <div>
                <span class="ui-chip ui-chip--secondary" style="font-size:10px;">Color Pigments</span>
                <h3 style="font-size:var(--text-base); font-weight:700; margin:8px 0 4px 0;">Tinted Ink Shadows</h3>
              </div>
              <div class="sec-bento-icon-box">
                <svg class="lucide lucide-palette" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2Z"/></svg>
              </div>
            </div>
            <div style="display:flex; gap:8px; align-items:center; justify-content:center; padding:16px 0;">
              <span style="width:24px; height:24px; border-radius:50%; background:var(--lilac); box-shadow:var(--shadow-xs);" title="Lilac"></span>
              <span style="width:24px; height:24px; border-radius:50%; background:var(--sage); box-shadow:var(--shadow-xs);" title="Sage"></span>
              <span style="width:24px; height:24px; border-radius:50%; background:var(--blush); box-shadow:var(--shadow-xs);" title="Blush"></span>
              <span style="width:24px; height:24px; border-radius:50%; background:var(--butter); box-shadow:var(--shadow-xs);" title="Butter"></span>
            </div>
          </div>

          <!-- Card 3: 1-Column Frameworks -->
          <div class="sec-bento-tile">
            <div class="sec-bento-tile-top">
              <div>
                <span class="ui-chip" style="font-size:10px;">Zero Lock-In</span>
                <h3 style="font-size:var(--text-base); font-weight:700; margin:8px 0 4px 0;">Vanilla Primitives</h3>
              </div>
              <div class="sec-bento-icon-box">
                <svg class="lucide lucide-code" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
            </div>
            <p style="font-size:var(--text-xs); color:var(--muted-foreground); line-height:1.5;">Drop directly into React, Vue, Svelte, or standard static HTML pipelines without polyfills.</p>
          </div>

          <!-- Card 4: 2-Column Wide Spotlight -->
          <div class="sec-bento-tile sec-bento-tile--wide">
            <div class="sec-bento-tile-top">
              <div>
                <span class="ui-chip ui-chip--accent" style="font-size:10px;">Spotlight Dialog</span>
                <h3 style="font-size:var(--text-xl); font-weight:700; margin:8px 0 4px 0;">Global Command Palette</h3>
                <p style="font-size:var(--text-sm); color:var(--muted-foreground); margin:0;">Fuzzy search, keyboard group navigators, and Ctrl+K global hotkey hook.</p>
              </div>
              <div class="sec-bento-icon-box">
                <svg class="lucide lucide-terminal" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>
              </div>
            </div>
            <div style="display:flex; align-items:center; gap:8px; margin-top:8px;">
              <kbd class="ui-kbd">Ctrl</kbd>
              <kbd class="ui-kbd">K</kbd>
              <span style="font-size:12px; color:var(--muted-foreground);">Instant spotlight launcher</span>
            </div>
          </div>
        </div>
      </section>
    `,
    html: `<section class="sec-bento-matrix">
  <div class="sec-bento-container">
    <div class="sec-bento-tile sec-bento-tile--wide">
      <h3>GPU Spring Engine</h3>
      <p>Boundary-safe motion physics with 120 FPS consistency.</p>
    </div>
    <div class="sec-bento-tile">
      <h3>Tinted Ink Shadows</h3>
    </div>
  </div>
</section>`,
    css: `.sec-bento-matrix {
  padding: 56px 32px;
  max-width: 1140px;
  margin: 0 auto;
}
.sec-bento-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.sec-bento-tile--wide {
  grid-column: span 2;
}
@media (max-width: 860px) {
  .sec-bento-container {
    grid-template-columns: 1fr;
  }
}`,
    js: `// Pure CSS grid.`
  },
  {
    id: 'features-tabs',
    name: 'Interactive Tabbed Feature Showcase',
    category: 'Features',
    description: 'Tabbed feature switcher where selecting a category dynamically updates the interactive preview demonstration canvas.',
    cardPreview: `
      <div style="display:flex; flex-direction:column; gap:3px; width:100%; max-width:130px;">
        <div style="display:flex; gap:2px;">
          <span style="background:var(--primary); height:4px; flex:1; border-radius:2px;"></span>
          <span style="background:var(--muted); height:4px; flex:1; border-radius:2px;"></span>
          <span style="background:var(--muted); height:4px; flex:1; border-radius:2px;"></span>
        </div>
        <div style="background:var(--card); border:1px solid var(--border); border-radius:6px; padding:6px; font-size:8px; font-weight:600;">Interactive Demo</div>
      </div>
    `,
    previewMarkup: `
      <section class="sec-features-tabs">
        <div class="sec-section-header">
          <span class="ui-catalog-badge">Deep Exploration</span>
          <h2 class="sec-section-title">Built for developer velocity and joy</h2>
          <p class="sec-section-subtitle">Click through the architecture pillars to test interactive primitives in action.</p>
        </div>

        <div class="sec-feature-tab-bar">
          <button class="sec-feature-tab is-active" type="button">
            <svg class="lucide lucide-palette" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2Z"/></svg>
            <span>Color Tokens</span>
          </button>
          <button class="sec-feature-tab" type="button">
            <svg class="lucide lucide-activity" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            <span>Spring Physics</span>
          </button>
          <button class="sec-feature-tab" type="button">
            <svg class="lucide lucide-terminal" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>
            <span>Command Palette</span>
          </button>
        </div>

        <div class="sec-feature-tab-stage">
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:32px; align-items:center;">
            <div>
              <span class="ui-chip ui-chip--primary" style="font-size:10px;">Token Architecture</span>
              <h3 style="font-size:var(--text-xl); font-weight:700; margin:8px 0 12px 0;">Desaturated Pigment Mapping</h3>
              <p style="font-size:var(--text-sm); color:var(--muted-foreground); line-height:1.6;">
                Every primitive derives from pure CSS variables without build steps. Tokens gracefully morph across light, dark, and custom sky themes.
              </p>
              <div style="display:flex; gap:8px; margin-top:16px;">
                <span class="ui-badge" style="background:var(--lilac); color:var(--ink);">--lilac</span>
                <span class="ui-badge" style="background:var(--sage); color:var(--ink);">--sage</span>
                <span class="ui-badge" style="background:var(--blush); color:var(--ink);">--blush</span>
                <span class="ui-badge" style="background:var(--butter); color:var(--ink);">--butter</span>
              </div>
            </div>
            <div style="background:var(--card); border:var(--border-default); border-radius:var(--radius-md); padding:24px; box-shadow:var(--shadow-sm);">
              <div style="font-size:12px; font-weight:700; margin-bottom:12px;">Interactive Switcher</div>
              <label class="ui-switch" style="margin-bottom:12px;">
                <input type="checkbox" checked />
                <span class="ui-switch-track"><span class="ui-switch-thumb"></span></span>
                <span style="font-size:13px;">Live Palette State</span>
              </label>
              <div class="ui-progress-track"><div class="ui-progress-fill" style="width:75%;"></div></div>
            </div>
          </div>
        </div>
      </section>
    `,
    html: `<section class="sec-features-tabs">
  <div class="sec-feature-tab-bar">
    <button class="sec-feature-tab is-active">Color Tokens</button>
    <button class="sec-feature-tab">Spring Physics</button>
  </div>
  <div class="sec-feature-tab-stage">
    <!-- Live Demo View -->
  </div>
</section>`,
    css: `.sec-features-tabs {
  padding: 56px 32px;
  max-width: 1140px;
  margin: 0 auto;
}
.sec-feature-tab-bar {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}
.sec-feature-tab {
  padding: 8px 18px;
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: 600;
  border: var(--border-default);
  background-color: var(--card);
  color: var(--muted-foreground);
  cursor: pointer;
}
.sec-feature-tab.is-active {
  background-color: var(--primary);
  color: var(--primary-foreground);
}`,
    js: `// Tab click listener
document.querySelectorAll('.sec-feature-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.sec-feature-tab').forEach(t => t.classList.remove('is-active'));
    tab.classList.add('is-active');
  });
});`
  },

  // --------------------------------------------------------------------------
  // TESTIMONIALS & SOCIAL PROOF
  // --------------------------------------------------------------------------
  {
    id: 'testimonials-grid',
    name: '3-Column Verified Testimonials',
    category: 'Testimonials',
    description: 'Three-column social proof grid with 5-star ratings, author avatar badges, and verified developer quotes.',
    cardPreview: `
      <div style="display:flex; flex-direction:column; gap:4px; width:100%; max-width:130px; background:var(--card); border:1px solid var(--border); border-radius:6px; padding:6px;">
        <div style="display:flex; gap:2px; color:var(--butter);">
          <svg class="lucide lucide-sparkles" width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
          <svg class="lucide lucide-sparkles" width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
          <svg class="lucide lucide-sparkles" width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
          <svg class="lucide lucide-sparkles" width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
          <svg class="lucide lucide-sparkles" width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
        </div>
        <span style="font-size:7px; color:var(--muted-foreground);">"Best Hush UI tokens ever."</span>
      </div>
    `,
    previewMarkup: `
      <section class="sec-testimonials-section">
        <div class="sec-section-header">
          <span class="ui-catalog-badge">Social Proof</span>
          <h2 class="sec-section-title">Loved by engineers building modern web apps</h2>
          <p class="sec-section-subtitle">Here is what developers are saying about shipping faster with Hush UI.</p>
        </div>

        <div class="sec-testimonials-grid">
          <!-- Card 1 -->
          <div class="sec-testimonial-card">
            <div style="display:flex; gap:2px; color:var(--butter); margin-bottom:12px;">
              <svg class="lucide lucide-sparkles" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
              <svg class="lucide lucide-sparkles" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
              <svg class="lucide lucide-sparkles" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
              <svg class="lucide lucide-sparkles" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
              <svg class="lucide lucide-sparkles" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
            </div>
            <p style="font-size:var(--text-sm); line-height:1.6; color:var(--foreground); margin-bottom:18px;">
              "The spring curves feel so tactile and organic. We migrated our dashboard in 2 days and our users constantly praise the calming aesthetic."
            </p>
            <div style="display:flex; align-items:center; gap:10px;">
              <div class="ui-avatar ui-avatar--lilac">ZK</div>
              <div>
                <div style="font-size:13px; font-weight:700;">Zaki K.</div>
                <div style="font-size:11px; color:var(--muted-foreground);">Founder @ Stackflow</div>
              </div>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="sec-testimonial-card">
            <div style="display:flex; gap:2px; color:var(--butter); margin-bottom:12px;">
              <svg class="lucide lucide-sparkles" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
              <svg class="lucide lucide-sparkles" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
              <svg class="lucide lucide-sparkles" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
              <svg class="lucide lucide-sparkles" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
              <svg class="lucide lucide-sparkles" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
            </div>
            <p style="font-size:var(--text-sm); line-height:1.6; color:var(--foreground); margin-bottom:18px;">
              "Having 0 runtime dependencies while getting full dark mode, spotlight search, and rolling stats out-of-the-box is incredible."
            </p>
            <div style="display:flex; align-items:center; gap:10px;">
              <div class="ui-avatar ui-avatar--sage">AM</div>
              <div>
                <div style="font-size:13px; font-weight:700;">Alex M.</div>
                <div style="font-size:11px; color:var(--muted-foreground);">Senior Frontend Engineer</div>
              </div>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="sec-testimonial-card">
            <div style="display:flex; gap:2px; color:var(--butter); margin-bottom:12px;">
              <svg class="lucide lucide-sparkles" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
              <svg class="lucide lucide-sparkles" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
              <svg class="lucide lucide-sparkles" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
              <svg class="lucide lucide-sparkles" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
              <svg class="lucide lucide-sparkles" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
            </div>
            <p style="font-size:var(--text-sm); line-height:1.6; color:var(--foreground); margin-bottom:18px;">
              "The design tokens allow us to customize client brands seamlessly without overriding hundreds of utility classes."
            </p>
            <div style="display:flex; align-items:center; gap:10px;">
              <div class="ui-avatar ui-avatar--blush">FL</div>
              <div>
                <div style="font-size:13px; font-weight:700;">Flora L.</div>
                <div style="font-size:11px; color:var(--muted-foreground);">Design Director</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,
    html: `<section class="sec-testimonials-section">
  <div class="sec-section-header">
    <span class="ui-catalog-badge">Social Proof</span>
    <h2 class="sec-section-title">Loved by engineers building modern web apps</h2>
  </div>
  <div class="sec-testimonials-grid">
    <div class="sec-testimonial-card">
      <p>"The spring curves feel so tactile and organic."</p>
      <h4>Zaki K.</h4>
    </div>
  </div>
</section>`,
    css: `.sec-testimonials-section {
  padding: 56px 32px;
  max-width: 1140px;
  margin: 0 auto;
}
.sec-testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}
.sec-testimonial-card {
  background-color: var(--card);
  border: var(--border-default);
  border-radius: var(--radius-lg);
  padding: 28px;
}`,
    js: `// Pure CSS grid layout.`
  },

  // --------------------------------------------------------------------------
  // PRICING
  // --------------------------------------------------------------------------
  {
    id: 'pricing-tiers',
    name: '3-Tier Subscription Pricing',
    category: 'Pricing',
    description: 'Three-column responsive pricing table with highlighted popular tier, feature checklist, and spring hover elevation.',
    cardPreview: `
      <div style="display:flex; gap:4px; width:100%; max-width:130px; align-items:flex-end;">
        <div style="flex:1; background:var(--card); border:1px solid var(--border); border-radius:4px; padding:4px 2px; text-align:center; font-size:8px;">$0</div>
        <div style="flex:1.2; background:color-mix(in srgb, var(--primary) 20%, var(--card)); border:1px solid var(--primary); border-radius:4px; padding:6px 2px; text-align:center; font-size:9px; font-weight:700;">$29</div>
        <div style="flex:1; background:var(--card); border:1px solid var(--border); border-radius:4px; padding:4px 2px; text-align:center; font-size:8px;">$99</div>
      </div>
    `,
    previewMarkup: `
      <section class="sec-pricing-section">
        <div class="sec-section-header">
          <span class="ui-catalog-badge">Flexible Plans</span>
          <h2 class="sec-section-title">Transparent, predictable pricing</h2>
          <p class="sec-section-subtitle">Start free on individual projects, scale seamlessly across your entire team.</p>
        </div>

        <div class="sec-pricing-grid">
          <!-- Tier 1: Starter -->
          <div class="sec-pricing-card">
            <div>
              <span class="sec-pricing-tier-name">Hobby</span>
              <div class="sec-price-row">
                <span class="sec-price-val">$0</span>
                <span class="sec-price-period">/ forever</span>
              </div>
              <p class="sec-pricing-desc">For personal side-projects and prototype experimentation.</p>
            </div>
            <ul class="sec-pricing-features">
              <li><svg class="lucide lucide-check" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> <span>All 25 core UI primitives</span></li>
              <li><svg class="lucide lucide-check" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> <span>Standard CSS variables</span></li>
              <li><svg class="lucide lucide-check" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> <span>Community support</span></li>
            </ul>
            <button class="ui-button ui-button--ghost" style="width:100%; justify-content:center;">Get Started Free</button>
          </div>

          <!-- Tier 2: Pro (Highlighted) -->
          <div class="sec-pricing-card sec-pricing-card--popular">
            <div class="sec-popular-badge">
              <svg class="lucide lucide-sparkles" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
              <span>Most Popular</span>
            </div>
            <div>
              <span class="sec-pricing-tier-name">Pro Team</span>
              <div class="sec-price-row">
                <span class="sec-price-val">$29</span>
                <span class="sec-price-period">/ month</span>
              </div>
              <p class="sec-pricing-desc">For growing startups and production SaaS engineering teams.</p>
            </div>
            <ul class="sec-pricing-features">
              <li><svg class="lucide lucide-check" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> <span>Everything in Hobby</span></li>
              <li><svg class="lucide lucide-check" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> <span>All 16+ Pre-Made Sections</span></li>
              <li><svg class="lucide lucide-check" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> <span>Figma design token kit</span></li>
              <li><svg class="lucide lucide-check" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> <span>Priority email support</span></li>
            </ul>
            <button class="ui-button ui-button--primary" style="width:100%; justify-content:center;">Upgrade to Pro</button>
          </div>

          <!-- Tier 3: Enterprise -->
          <div class="sec-pricing-card">
            <div>
              <span class="sec-pricing-tier-name">Enterprise</span>
              <div class="sec-price-row">
                <span class="sec-price-val">$99</span>
                <span class="sec-price-period">/ month</span>
              </div>
              <p class="sec-pricing-desc">Custom token pipelines, SLAs, and dedicated design assistance.</p>
            </div>
            <ul class="sec-pricing-features">
              <li><svg class="lucide lucide-check" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> <span>Unlimited seats & repos</span></li>
              <li><svg class="lucide lucide-check" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> <span>Custom theme authoring</span></li>
              <li><svg class="lucide lucide-check" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> <span>99.9% uptime SLA</span></li>
            </ul>
            <button class="ui-button ui-button--secondary" style="width:100%; justify-content:center;">Contact Sales</button>
          </div>
        </div>
      </section>
    `,
    html: `<section class="sec-pricing-section">
  <div class="sec-pricing-grid">
    <div class="sec-pricing-card">
      <span class="sec-pricing-tier-name">Hobby</span>
      <div class="sec-price-row"><span class="sec-price-val">$0</span></div>
      <button class="ui-button ui-button--ghost">Get Started Free</button>
    </div>
    <div class="sec-pricing-card sec-pricing-card--popular">
      <span class="sec-pricing-tier-name">Pro Team</span>
      <div class="sec-price-row"><span class="sec-price-val">$29</span></div>
      <button class="ui-button ui-button--primary">Upgrade to Pro</button>
    </div>
  </div>
</section>`,
    css: `.sec-pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}`,
    js: `// Checkout routing event listener.`
  },

  // --------------------------------------------------------------------------
  // STATS
  // --------------------------------------------------------------------------
  {
    id: 'stats-ribbon',
    name: 'Stats & Social Proof Ribbon',
    category: 'Stats',
    description: 'Full-width statistics ribbon with 4 metrics, cascading odometer numbers, and live trend indicators.',
    cardPreview: `
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:4px; width:100%; max-width:130px; background:var(--card); border:1px solid var(--border); border-radius:6px; padding:5px 6px;">
        <div style="display:flex; flex-direction:column;"><span style="font-size:10px; font-weight:700;">99.8%</span><span style="font-size:7px; color:var(--muted-foreground);">SLA</span></div>
        <div style="display:flex; flex-direction:column;"><span style="font-size:10px; font-weight:700;">1.4k+</span><span style="font-size:7px; color:var(--muted-foreground);">Users</span></div>
      </div>
    `,
    previewMarkup: `
      <section class="sec-stats-ribbon">
        <div class="sec-stats-grid">
          <div class="sec-stat-box">
            <div class="sec-stat-num">
              <span class="ui-counter" data-counter-target="99">
                <span class="ui-counter-roller"></span>
              </span>
              <span>.8%</span>
            </div>
            <div class="sec-stat-label">System Uptime SLA</div>
            <div class="sec-stat-trend">
              <svg class="lucide lucide-activity" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              <span>Verified 30-day</span>
            </div>
          </div>

          <div class="sec-stat-box">
            <div class="sec-stat-num">
              <span class="ui-counter" data-counter-target="1400">
                <span class="ui-counter-roller"></span>
              </span>
              <span>+</span>
            </div>
            <div class="sec-stat-label">Engineers & Teams</div>
            <div class="sec-stat-trend">
              <svg class="lucide lucide-sparkles" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
              <span>Across 40 countries</span>
            </div>
          </div>

          <div class="sec-stat-box">
            <div class="sec-stat-num">
              <span class="ui-counter" data-counter-target="25">
                <span class="ui-counter-roller"></span>
              </span>
              <span>+</span>
            </div>
            <div class="sec-stat-label">Modular UI Primitives</div>
            <div class="sec-stat-trend">
              <svg class="lucide lucide-layers" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>
              <span>Zero dependencies</span>
            </div>
          </div>

          <div class="sec-stat-box">
            <div class="sec-stat-num">
              <span>0</span>
              <span style="font-size:20px; color:var(--primary);">ms</span>
            </div>
            <div class="sec-stat-label">Runtime Bundle Bloat</div>
            <div class="sec-stat-trend">
              <svg class="lucide lucide-zap" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              <span>Pure CSS + ESM</span>
            </div>
          </div>
        </div>
      </section>
    `,
    html: `<section class="sec-stats-ribbon">
  <div class="sec-stats-grid">
    <div class="sec-stat-box">
      <div class="sec-stat-num">99.8%</div>
      <div class="sec-stat-label">System Uptime SLA</div>
    </div>
    <div class="sec-stat-box">
      <div class="sec-stat-num">1,400+</div>
      <div class="sec-stat-label">Engineers & Teams</div>
    </div>
  </div>
</section>`,
    css: `.sec-stats-ribbon {
  background-color: var(--card);
  border: var(--border-default);
  border-radius: var(--radius-lg);
  padding: 36px 32px;
  max-width: 1140px;
  margin: 32px auto;
}
.sec-stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
}
@media (max-width: 860px) {
  .sec-stats-grid {
    grid-template-columns: 1fr 1fr;
  }
}`,
    js: `import { initCounters } from '@zak1.uhh/hush-ui';
initCounters();`
  },

  // --------------------------------------------------------------------------
  // FAQ
  // --------------------------------------------------------------------------
  {
    id: 'faq-accordion',
    name: 'Split FAQ with Accordions',
    category: 'FAQ',
    description: 'Split 2-column FAQ section featuring category intro on left and smooth height unfolding disclosure accordions on right.',
    cardPreview: `
      <div style="display:flex; flex-direction:column; gap:3px; width:100%; max-width:130px;">
        <div style="background:var(--card); border:1px solid var(--border); border-radius:4px; padding:3px 6px; font-size:8px; display:flex; justify-content:space-between; align-items:center;">
          <span>React / Vue?</span><span style="font-size:7px;">▾</span>
        </div>
        <div style="background:color-mix(in srgb, var(--primary) 15%, var(--card)); border:1px solid var(--primary); border-radius:4px; padding:4px 6px; font-size:8px;">
          <span>Zero wrappers</span>
        </div>
      </div>
    `,
    previewMarkup: `
      <section class="sec-faq-section">
        <div class="sec-faq-left">
          <span class="ui-catalog-badge">Common Questions</span>
          <h2 class="sec-section-title" style="margin:8px 0 12px 0;">Frequently Asked Questions</h2>
          <p class="sec-section-subtitle">Everything you need to know about incorporating Hush UI into your codebase.</p>
          <div style="margin-top:24px;">
            <a href="mailto:support@hushui.dev" class="ui-button ui-button--ghost" style="gap:6px;">
              <svg class="lucide lucide-inbox" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>
              <span>Have another question? Email us</span>
            </a>
          </div>
        </div>

        <div class="sec-faq-right">
          <div class="ui-accordion">
            <div class="ui-accordion-item is-open">
              <button class="ui-accordion-header">
                <span>Can I use this with React, Vue, or Next.js?</span>
                <svg class="ui-accordion-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
              </button>
              <div class="ui-accordion-content">
                <div class="ui-accordion-body">
                  Yes! All components are built with standard semantic HTML and CSS custom properties (variables), meaning they can be directly copied into JSX, Vue templates, or Astro components with zero wrappers.
                </div>
              </div>
            </div>

            <div class="ui-accordion-item">
              <button class="ui-accordion-header">
                <span>How does dark mode work without flash of unstyled content?</span>
                <svg class="ui-accordion-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
              </button>
              <div class="ui-accordion-content">
                <div class="ui-accordion-body">
                  Dark mode is controlled via a simple <code>.dark</code> class on the root <code>&lt;html&gt;</code> tag. Color tokens dynamically re-map with GPU acceleration, and preferences are automatically saved in <code>localStorage</code>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,
    html: `<section class="sec-faq-section">
  <div class="ui-accordion">
    <div class="ui-accordion-item is-open">
      <button class="ui-accordion-header"><span>Can I use this with React?</span></button>
      <div class="ui-accordion-content"><div class="ui-accordion-body">Yes! Standard HTML/CSS tokens.</div></div>
    </div>
  </div>
</section>`,
    css: `.sec-faq-section {
  display: grid;
  grid-template-columns: 1fr 1.35fr;
  gap: 48px;
  padding: 56px 32px;
  max-width: 1140px;
  margin: 0 auto;
}
@media (max-width: 860px) {
  .sec-faq-section {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}`,
    js: `import { initAccordions } from '@zak1.uhh/hush-ui';
initAccordions();`
  },

  // --------------------------------------------------------------------------
  // TEAM & CONTRIBUTORS
  // --------------------------------------------------------------------------
  {
    id: 'team-grid',
    name: '4-Column Core Contributors',
    category: 'Team',
    description: 'Grid showcase featuring core design architects, engineers, role tags, and verified social links.',
    cardPreview: `
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:4px; width:100%; max-width:130px;">
        <div style="background:var(--card); border:1px solid var(--border); border-radius:6px; padding:4px; text-align:center;">
          <div style="width:14px; height:14px; border-radius:50%; background:var(--lilac); margin:0 auto 2px auto;"></div>
          <span style="font-size:7px; font-weight:700;">Zaki</span>
        </div>
        <div style="background:var(--card); border:1px solid var(--border); border-radius:6px; padding:4px; text-align:center;">
          <div style="width:14px; height:14px; border-radius:50%; background:var(--sage); margin:0 auto 2px auto;"></div>
          <span style="font-size:7px; font-weight:700;">Alex</span>
        </div>
      </div>
    `,
    previewMarkup: `
      <section class="sec-team-section">
        <div class="sec-section-header">
          <span class="ui-catalog-badge">Human Touch</span>
          <h2 class="sec-section-title">Engineered by design architects & developers</h2>
          <p class="sec-section-subtitle">Meet the team dedicated to crafting calmer, lighter web design standards.</p>
        </div>

        <div class="sec-team-grid">
          <div class="sec-team-card">
            <div class="ui-avatar ui-avatar--lilac" style="width:48px; height:48px; font-size:16px; margin:0 auto 12px auto;">ZK</div>
            <h4 style="font-size:15px; font-weight:700; margin:0 0 2px 0;">Zaki K.</h4>
            <span class="ui-chip ui-chip--primary" style="font-size:10px; margin-bottom:10px;">Design Systems Lead</span>
            <p style="font-size:12px; color:var(--muted-foreground); line-height:1.5;">Passionate about desaturated Hush UI pigments and accessible typography.</p>
          </div>

          <div class="sec-team-card">
            <div class="ui-avatar ui-avatar--sage" style="width:48px; height:48px; font-size:16px; margin:0 auto 12px auto;">AM</div>
            <h4 style="font-size:15px; font-weight:700; margin:0 0 2px 0;">Alex M.</h4>
            <span class="ui-chip ui-chip--secondary" style="font-size:10px; margin-bottom:10px;">Motion Physicist</span>
            <p style="font-size:12px; color:var(--muted-foreground); line-height:1.5;">Hardware-accelerated CSS transform matrices and spring cubic-beziers.</p>
          </div>

          <div class="sec-team-card">
            <div class="ui-avatar ui-avatar--blush" style="width:48px; height:48px; font-size:16px; margin:0 auto 12px auto;">FL</div>
            <h4 style="font-size:15px; font-weight:700; margin:0 0 2px 0;">Flora L.</h4>
            <span class="ui-chip ui-chip--destructive" style="font-size:10px; margin-bottom:10px;">Accessibility Lead</span>
            <p style="font-size:12px; color:var(--muted-foreground); line-height:1.5;">ARIA screen reader contracts, keyboard traps, and high-contrast dark modes.</p>
          </div>

          <div class="sec-team-card">
            <div class="ui-avatar ui-avatar--butter" style="width:48px; height:48px; font-size:16px; margin:0 auto 12px auto;">RN</div>
            <h4 style="font-size:15px; font-weight:700; margin:0 0 2px 0;">Ryan N.</h4>
            <span class="ui-chip ui-chip--accent" style="font-size:10px; margin-bottom:10px;">Core Infrastructure</span>
            <p style="font-size:12px; color:var(--muted-foreground); line-height:1.5;">Zero-bundle ESM pipeline packaging and Vite/Rollup tree-shaking.</p>
          </div>
        </div>
      </section>
    `,
    html: `<section class="sec-team-section">
  <div class="sec-team-grid">
    <div class="sec-team-card">
      <div class="ui-avatar ui-avatar--lilac">ZK</div>
      <h4>Zaki K.</h4>
      <span class="ui-chip ui-chip--primary">Design Lead</span>
    </div>
  </div>
</section>`,
    css: `.sec-team-section {
  padding: 56px 32px;
  max-width: 1140px;
  margin: 0 auto;
}
.sec-team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}`,
    js: `// Team profile viewer.`
  },

  // --------------------------------------------------------------------------
  // ROADMAP & TIMELINE
  // --------------------------------------------------------------------------
  {
    id: 'roadmap-timeline',
    name: 'Product Roadmap & Milestones',
    category: 'Roadmap',
    description: '3-column milestone roadmap showing Shipped v1.0, In-Progress v1.2, and Planned v2.0 feature deliverables.',
    cardPreview: `
      <div style="display:flex; gap:3px; width:100%; max-width:130px;">
        <div style="flex:1; background:var(--card); border:1px solid var(--border); border-radius:4px; padding:4px 2px; text-align:center; font-size:7px;"><span style="color:var(--sage); font-weight:700;">●</span> v1.0</div>
        <div style="flex:1; background:var(--card); border:1px solid var(--border); border-radius:4px; padding:4px 2px; text-align:center; font-size:7px;"><span style="color:var(--primary); font-weight:700;">●</span> v1.2</div>
      </div>
    `,
    previewMarkup: `
      <section class="sec-roadmap-section">
        <div class="sec-section-header">
          <span class="ui-catalog-badge">Future Horizons</span>
          <h2 class="sec-section-title">Product Roadmap & Release Timeline</h2>
          <p class="sec-section-subtitle">Track our open progress as we expand the Hush UI design ecosystem.</p>
        </div>

        <div class="sec-roadmap-grid">
          <!-- Column 1: Shipped -->
          <div class="sec-roadmap-col">
            <div class="sec-roadmap-col-header">
              <span class="ui-chip ui-chip--secondary" style="font-size:11px;">Shipped v1.0</span>
              <span style="font-size:11px; color:var(--muted-foreground);">Completed</span>
            </div>
            <div class="sec-roadmap-card">
              <h5 style="margin:0 0 4px 0; font-size:13px; font-weight:700;">25 Core Primitives</h5>
              <p style="margin:0; font-size:11px; color:var(--muted-foreground);">All standard buttons, dialogs, counters, combobox, and switches.</p>
            </div>
            <div class="sec-roadmap-card">
              <h5 style="margin:0 0 4px 0; font-size:13px; font-weight:700;">Spotlight Command Palette</h5>
              <p style="margin:0; font-size:11px; color:var(--muted-foreground);">Global hotkey Ctrl+K and fuzzy search.</p>
            </div>
          </div>

          <!-- Column 2: In Progress -->
          <div class="sec-roadmap-col">
            <div class="sec-roadmap-col-header">
              <span class="ui-chip ui-chip--primary" style="font-size:11px;">In Progress v1.2</span>
              <span style="font-size:11px; color:var(--primary);">Active Sprint</span>
            </div>
            <div class="sec-roadmap-card" style="border-color:var(--primary);">
              <h5 style="margin:0 0 4px 0; font-size:13px; font-weight:700;">Pre-Made Sections Library</h5>
              <p style="margin:0; font-size:11px; color:var(--muted-foreground);">16+ responsive marketing & SaaS layout blocks.</p>
            </div>
            <div class="sec-roadmap-card">
              <h5 style="margin:0 0 4px 0; font-size:13px; font-weight:700;">Figma Tokens Sync</h5>
              <p style="margin:0; font-size:11px; color:var(--muted-foreground);">Automated GitHub token export plugin.</p>
            </div>
          </div>

          <!-- Column 3: Planned -->
          <div class="sec-roadmap-col">
            <div class="sec-roadmap-col-header">
              <span class="ui-chip" style="font-size:11px;">Planned v2.0</span>
              <span style="font-size:11px; color:var(--muted-foreground);">Q4 2026</span>
            </div>
            <div class="sec-roadmap-card">
              <h5 style="margin:0 0 4px 0; font-size:13px; font-weight:700;">React & Vue Wrappers</h5>
              <p style="margin:0; font-size:11px; color:var(--muted-foreground);">Official npm packages with full TypeScript props.</p>
            </div>
          </div>
        </div>
      </section>
    `,
    html: `<section class="sec-roadmap-section">
  <div class="sec-roadmap-grid">
    <div class="sec-roadmap-col">
      <span class="ui-chip ui-chip--secondary">Shipped v1.0</span>
      <h4>25 Core Primitives</h4>
    </div>
  </div>
</section>`,
    css: `.sec-roadmap-section {
  padding: 56px 32px;
  max-width: 1140px;
  margin: 0 auto;
}
.sec-roadmap-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
@media (max-width: 860px) {
  .sec-roadmap-grid {
    grid-template-columns: 1fr;
  }
}`,
    js: `// Roadmap interactive filters.`
  },

  // --------------------------------------------------------------------------
  // CTA & LEAD CAPTURE
  // --------------------------------------------------------------------------
  {
    id: 'cta-banner',
    name: 'Frosted Ambient CTA Banner',
    category: 'CTA',
    description: 'Centered call-to-action banner card with glowing Hush UI radial aura, dual action triggers, and toast preview trigger.',
    cardPreview: `
      <div style="background:color-mix(in srgb, var(--primary) 15%, var(--card)); border:1px solid var(--primary); border-radius:8px; padding:6px 8px; width:100%; max-width:130px; text-align:center; display:flex; flex-direction:column; gap:3px;">
        <span style="font-size:8px; font-weight:700;">Start Building</span>
        <span style="background:var(--primary); color:var(--primary-foreground); border-radius:3px; padding:2px; font-size:7px; font-weight:600;">Get Started →</span>
      </div>
    `,
    previewMarkup: `
      <section class="sec-cta-banner">
        <div class="sec-cta-card">
          <span class="ui-chip ui-chip--primary" style="font-size:11px; margin-bottom:12px;">Get Started Today</span>
          <h2 class="sec-cta-title">Bring serene Hush UI aesthetics to your next web app.</h2>
          <p class="sec-cta-subtitle">Zero dependencies. 25+ accessible components. Built with pure modern web standards.</p>
          <div class="sec-cta-actions">
            <a href="/pages/components.html" class="ui-button ui-button--primary" style="padding:10px 22px; gap:8px;">
              <span>Explore All Components</span>
              <svg class="lucide lucide-arrow-right" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a href="https://github.com" target="_blank" class="ui-button ui-button--ghost" style="padding:10px 18px; gap:6px;">
              <svg class="lucide lucide-code" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              <span>Star on GitHub</span>
            </a>
          </div>
        </div>
      </section>
    `,
    html: `<section class="sec-cta-banner">
  <div class="sec-cta-card">
    <h2 class="sec-cta-title">Bring serene Hush UI aesthetics to your next web app.</h2>
    <p class="sec-cta-subtitle">Zero dependencies. 25+ accessible components.</p>
    <div class="sec-cta-actions">
      <a href="/pages/components.html" class="ui-button ui-button--primary">Explore All Components →</a>
    </div>
  </div>
</section>`,
    css: `.sec-cta-banner {
  position: relative;
  max-width: 1040px;
  margin: 48px auto;
  padding: 0 24px;
}
.sec-cta-card {
  background-color: var(--card);
  border: 1px solid color-mix(in srgb, var(--primary) 40%, var(--border));
  border-radius: var(--radius-lg);
  padding: 48px 32px;
  text-align: center;
}`,
    js: `// Button action routing.`
  },
  {
    id: 'newsletter-card',
    name: 'Minimalist Lead Capture Newsletter',
    category: 'Forms',
    description: 'Centered frosted glass newsletter box with email input, instant success feedback, and privacy pill.',
    cardPreview: `
      <div style="background:var(--card); border:1px solid var(--border); border-radius:6px; padding:5px 6px; width:100%; max-width:130px; display:flex; flex-direction:column; gap:3px;">
        <span style="font-size:7px; font-weight:700;">Subscribe</span>
        <div style="background:var(--muted); height:6px; border-radius:2px;"></div>
      </div>
    `,
    previewMarkup: `
      <section class="sec-newsletter-section">
        <div class="sec-newsletter-card">
          <div class="ui-avatar ui-avatar--lilac" style="width:40px; height:40px; margin-bottom:12px;">
            <svg class="lucide lucide-inbox" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>
          </div>
          <h2 style="font-family:var(--font-display); font-size:24px; font-weight:700; margin:0 0 8px 0;">Join the Hush UI Release Dispatch</h2>
          <p style="font-size:13px; color:var(--muted-foreground); margin:0 0 24px 0; max-width:440px;">
            Get notified about new components, design token updates, and Figma kits. Zero spam, unsubscribe anytime.
          </p>
          <form onsubmit="event.preventDefault(); window.triggerHomeToast();" class="sec-newsletter-form">
            <input type="email" class="ui-input" placeholder="Enter your work email address..." required style="flex:1;" />
            <button type="submit" class="ui-button ui-button--primary" style="padding:10px 20px; font-weight:600;">Subscribe</button>
          </form>
        </div>
      </section>
    `,
    html: `<section class="sec-newsletter-section">
  <div class="sec-newsletter-card">
    <h2>Join the Hush UI Release Dispatch</h2>
    <form class="sec-newsletter-form">
      <input type="email" class="ui-input" placeholder="Enter your email..." required />
      <button type="submit" class="ui-button ui-button--primary">Subscribe</button>
    </form>
  </div>
</section>`,
    css: `.sec-newsletter-section {
  padding: 48px 24px;
  max-width: 860px;
  margin: 0 auto;
}
.sec-newsletter-card {
  background-color: var(--card);
  border: var(--border-default);
  border-radius: var(--radius-lg);
  padding: 40px 32px;
  text-align: center;
}`,
    js: `// Subscription submit handler.`
  },
  {
    id: 'contact-split',
    name: 'Split Contact & Inquiry Form',
    category: 'Forms',
    description: 'Split contact section with office info on left and form with Combobox tag picker and focus states on right.',
    cardPreview: `
      <div style="background:var(--card); border:1px solid var(--border); border-radius:6px; padding:5px 6px; width:100%; max-width:130px; display:flex; flex-direction:column; gap:3px;">
        <div style="height:5px; background:var(--muted); border-radius:2px;"></div>
        <div style="height:5px; background:var(--muted); border-radius:2px;"></div>
        <div style="background:var(--primary); height:6px; border-radius:2px; margin-top:2px;"></div>
      </div>
    `,
    previewMarkup: `
      <section class="sec-contact-section">
        <div class="sec-contact-info">
          <span class="ui-catalog-badge">Get in Touch</span>
          <h2 class="sec-section-title" style="margin:8px 0 12px 0;">Let's discuss your next project</h2>
          <p class="sec-section-subtitle">Have a custom design system requirement or want to partner with us? Drop us a line.</p>
          
          <div class="sec-contact-details">
            <div class="sec-contact-row">
              <div class="sec-contact-icon">
                <svg class="lucide lucide-inbox" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>
              </div>
              <div>
                <div style="font-size:11px; color:var(--muted-foreground);">Email Inquiries</div>
                <div style="font-size:13px; font-weight:600;">hello@hushui.dev</div>
              </div>
            </div>
          </div>
        </div>

        <div class="sec-contact-form-card">
          <form onsubmit="event.preventDefault(); window.triggerHomeToast();" style="display:flex; flex-direction:column; gap:16px;">
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
              <div class="ui-form-group">
                <label class="ui-label" for="sec-contact-name">Your Name</label>
                <input type="text" id="sec-contact-name" class="ui-input" placeholder="Jane Doe" required />
              </div>
              <div class="ui-form-group">
                <label class="ui-label" for="sec-contact-email">Email Address</label>
                <input type="email" id="sec-contact-email" class="ui-input" placeholder="jane@example.com" required />
              </div>
            </div>

            <div class="ui-form-group">
              <label class="ui-label">Project Inquiries (Select Tags)</label>
              <div class="ui-combobox">
                <div class="ui-combobox-trigger">
                  <div class="ui-combobox-tags">
                    <span class="ui-combobox-tag" data-val="design-system">
                      <span>Design System</span>
                      <button class="ui-combobox-tag-remove" type="button" aria-label="Remove tag">
                        <svg class="lucide lucide-x" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                      </button>
                    </span>
                    <input type="text" class="ui-combobox-input" placeholder="Add tags..." />
                  </div>
                  <span class="ui-combobox-chevron">▾</span>
                </div>
                <div class="ui-combobox-menu">
                  <div class="ui-combobox-option is-selected" data-value="design-system" data-label="Design System">Design System</div>
                  <div class="ui-combobox-option" data-value="tokens" data-label="CSS Tokens">CSS Tokens</div>
                  <div class="ui-combobox-option" data-value="audit" data-label="UI/UX Audit">UI/UX Audit</div>
                </div>
              </div>
            </div>

            <div class="ui-form-group">
              <label class="ui-label" for="sec-contact-msg">Message</label>
              <textarea id="sec-contact-msg" class="ui-input" rows="3" placeholder="Tell us about your project..."></textarea>
            </div>

            <button type="submit" class="ui-button ui-button--primary" style="width:100%; justify-content:center; padding:10px 16px;">
              Send Message →
            </button>
          </form>
        </div>
      </section>
    `,
    html: `<section class="sec-contact-section">
  <div class="sec-contact-info">
    <h2>Let's discuss your next project</h2>
  </div>
  <div class="sec-contact-form-card">
    <form>
      <input type="text" class="ui-input" placeholder="Name" />
      <input type="email" class="ui-input" placeholder="Email" />
      <button type="submit" class="ui-button ui-button--primary">Send Message</button>
    </form>
  </div>
</section>`,
    css: `.sec-contact-section {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 48px;
  padding: 56px 32px;
  max-width: 1140px;
  margin: 0 auto;
}
@media (max-width: 860px) {
  .sec-contact-section {
    grid-template-columns: 1fr;
  }
}`,
    js: `import { initCombobox } from '@zak1.uhh/hush-ui';
initCombobox();`
  },

  // --------------------------------------------------------------------------
  // FOOTERS
  // --------------------------------------------------------------------------
  {
    id: 'footer-multi',
    name: 'Multi-Column Brand Footer',
    category: 'Footers',
    description: 'Comprehensive navigation footer with 4 categorized link columns, newsletter input, copyright row, and theme switch.',
    cardPreview: `
      <div style="display:flex; justify-content:space-between; align-items:center; width:100%; max-width:130px; background:var(--card); border-top:1px solid var(--border); padding:6px 4px 2px 4px;">
        <span style="font-size:7px; font-weight:700; color:var(--primary); display:inline-flex; align-items:center; gap:2px;"><svg class="lucide lucide-sparkles" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>UI</span>
        <span style="font-size:7px; color:var(--muted-foreground);">System</span>
        <span style="font-size:7px; color:var(--muted-foreground);">Docs</span>
      </div>
    `,
    previewMarkup: `
      <footer class="sec-footer-multi">
        <div class="sec-footer-top">
          <!-- Column 1: Brand -->
          <div class="sec-footer-brand-col">
            <div style="display:flex; align-items:center; gap:8px; font-weight:700; font-size:18px;">
              <div style="width:28px; height:28px; border-radius:6px; background:color-mix(in srgb, var(--primary) 25%, var(--card)); border:1px solid var(--primary); display:flex; align-items:center; justify-content:center;">
                <svg class="lucide lucide-sparkles" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
              </div>
              <span>Hush UI</span>
            </div>
            <p style="font-size:var(--text-xs); color:var(--muted-foreground); line-height:1.6; margin:12px 0 16px 0;">
              Calm, motion-driven UI components engineered with desaturated Hush UI primitives.
            </p>
            <div class="sec-newsletter-bar">
              <input type="email" class="ui-input" placeholder="Enter your email..." style="font-size:11px; padding:6px 10px;" />
              <button class="ui-button ui-button--primary" style="font-size:11px; padding:6px 12px;">Join</button>
            </div>
          </div>

          <!-- Column 2: System -->
          <div class="sec-footer-links-col">
            <div class="sec-footer-col-title">System</div>
            <a href="/pages/components.html" class="sec-footer-link">Components (25)</a>
            <a href="/pages/sections.html" class="sec-footer-link">Pre-Made Sections</a>
            <a href="/#tokens" class="sec-footer-link">Design Tokens</a>
            <a href="/#motion" class="sec-footer-link">Spring Curves</a>
          </div>

          <!-- Column 3: Resources -->
          <div class="sec-footer-links-col">
            <div class="sec-footer-col-title">Resources</div>
            <a href="#" class="sec-footer-link">Figma Library</a>
            <a href="#" class="sec-footer-link">Documentation</a>
            <a href="#" class="sec-footer-link">GitHub Repo</a>
            <a href="#" class="sec-footer-link">Release Notes</a>
          </div>

          <!-- Column 4: Community -->
          <div class="sec-footer-links-col">
            <div class="sec-footer-col-title">Community</div>
            <a href="#" class="sec-footer-link">Discord Server</a>
            <a href="#" class="sec-footer-link">Twitter / X</a>
            <a href="#" class="sec-footer-link">Contributing</a>
            <a href="#" class="sec-footer-link">License (MIT)</a>
          </div>
        </div>

        <div class="sec-footer-bottom">
          <span>© 2026 Hush UI Suite. Designed for intentional web development.</span>
          <div style="display:flex; gap:16px;">
            <a href="#" class="sec-footer-link" style="font-size:11px;">Privacy Policy</a>
            <a href="#" class="sec-footer-link" style="font-size:11px;">Terms of Service</a>
          </div>
        </div>
      </footer>
    `,
    html: `<footer class="sec-footer-multi">
  <div class="sec-footer-top">
    <div class="sec-footer-brand-col">
      <h3>Hush UI</h3>
      <p>Calm, motion-driven UI components.</p>
    </div>
    <div class="sec-footer-links-col">
      <h4>System</h4>
      <a href="/pages/components.html">Components (25)</a>
      <a href="/pages/sections.html">Sections (12+)</a>
    </div>
  </div>
  <div class="sec-footer-bottom">
    <span>© 2026 Hush UI Suite</span>
  </div>
</footer>`,
    css: `.sec-footer-multi {
  border-top: var(--border-default);
  padding: 56px 32px 32px 32px;
  max-width: 1140px;
  margin: 48px auto 0 auto;
}
.sec-footer-top {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 36px;
}
@media (max-width: 860px) {
  .sec-footer-top {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
}
@media (max-width: 480px) {
  .sec-footer-top {
    grid-template-columns: 1fr;
  }
}`,
    js: `// Footer navigation link router.`
  },

  // --------------------------------------------------------------------------
  // 17. PRODUCT CHANGELOG & ROADMAP
  // --------------------------------------------------------------------------
  {
    id: 'changelog-timeline',
    name: 'Product Changelog & Milestone Roadmap',
    category: 'Features',
    description: 'Chronological release log with animated pulse nodes, version pills, category tags, and feature summaries.',
    cardPreview: `
      <div style="display:flex; flex-direction:column; gap:4px; width:100%; max-width:125px; padding-left:12px; position:relative;">
        <div style="position:absolute; left:3px; top:2px; bottom:2px; width:1.5px; background:var(--primary);"></div>
        <div style="display:flex; align-items:center; gap:3px;">
          <div style="width:5px; height:5px; border-radius:50%; background:var(--primary); margin-left:-11px;"></div>
          <span style="font-size:7px; font-weight:700;">v2.0 Spring Engine</span>
        </div>
        <div style="display:flex; align-items:center; gap:3px;">
          <div style="width:5px; height:5px; border-radius:50%; background:var(--secondary); margin-left:-11px;"></div>
          <span style="font-size:7px; color:var(--muted-foreground);">v1.8 Sections</span>
        </div>
      </div>
    `,
    previewMarkup: `
      <section class="sec-changelog-section">
        <div class="sec-section-header">
          <span class="ui-catalog-badge">Changelog & Milestones</span>
          <h2 class="sec-section-title">Continuous innovation, version by version</h2>
          <p class="sec-section-subtitle">Track every release, component primitive addition, and performance upgrade.</p>
        </div>

        <div class="sec-changelog-wrapper">
          <div class="ui-timeline">
            <!-- Release 1 -->
            <div class="ui-timeline-item">
              <div class="ui-timeline-node">
                <svg class="lucide lucide-sparkles" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
              </div>
              <div class="ui-timeline-header">
                <div class="ui-timeline-title-wrap">
                  <span class="ui-chip ui-chip--primary">v2.0 Major Release</span>
                  <h3 class="ui-timeline-title">Spring Physics & Interactive Studio</h3>
                </div>
                <span class="ui-timeline-time">September 2026</span>
              </div>
              <div class="ui-timeline-card">
                <p class="ui-timeline-desc">Engineered 32 core primitives with calibrated spring curves, container query frame viewports, and pure ESM syntax highlighting.</p>
                <div style="display:flex; gap:6px; margin-top:10px; flex-wrap:wrap;">
                  <span class="ui-chip ui-chip--primary" style="font-size:10px;">32 Components</span>
                  <span class="ui-chip ui-chip--secondary" style="font-size:10px;">Container Queries</span>
                  <span class="ui-chip ui-chip--accent" style="font-size:10px;">Sky Morph Theme</span>
                </div>
              </div>
            </div>

            <!-- Release 2 -->
            <div class="ui-timeline-item">
              <div class="ui-timeline-node ui-timeline-node--secondary">
                <svg class="lucide lucide-check" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div class="ui-timeline-header">
                <div class="ui-timeline-title-wrap">
                  <span class="ui-chip ui-chip--secondary">v1.5 Feature Pack</span>
                  <h3 class="ui-timeline-title">Pre-Made Production Sections Suite</h3>
                </div>
                <span class="ui-timeline-time">August 2026</span>
              </div>
              <div class="ui-timeline-card">
                <p class="ui-timeline-desc">Shipped 20 responsive layout templates covering Hero splits, Bento galleries, SaaS pricing, and interactive calculators.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,
    html: `<section class="sec-changelog-section">
  <div class="sec-section-header">
    <span class="ui-catalog-badge">Changelog</span>
    <h2 class="sec-section-title">Continuous Innovation</h2>
  </div>
  <div class="ui-timeline">
    <div class="ui-timeline-item">
      <div class="ui-timeline-node">
        <svg class="lucide lucide-sparkles" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
      </div>
      <div class="ui-timeline-header">
        <span class="ui-chip ui-chip--primary">v2.0</span>
        <h4>Spring Engine & Tokens</h4>
      </div>
      <div class="ui-timeline-card">
        <p>Complete release notes and components.</p>
      </div>
    </div>
  </div>
</section>`,
    css: `.sec-changelog-section {
  padding: 80px 24px;
  max-width: 840px;
  margin: 0 auto;
}
.sec-changelog-wrapper {
  margin-top: 48px;
  display: flex;
  justify-content: center;
}`,
    js: `// Pure CSS timeline roadmap.`
  },

  // --------------------------------------------------------------------------
  // 18. ANIMATED LOGO CLOUD & MARQUEE TICKER
  // --------------------------------------------------------------------------
  {
    id: 'logo-cloud-marquee',
    name: 'Dual-Row Infinite Logo Cloud',
    category: 'Social Proof',
    description: 'Hardware-accelerated dual scrolling marquee ribbons with brand logo badges and live stats counter.',
    cardPreview: `
      <div style="display:flex; flex-direction:column; gap:4px; width:100%; max-width:125px; overflow:hidden;">
        <div style="display:flex; gap:3px;">
          <div style="width:28px; height:12px; border-radius:4px; background:var(--card); border:1px solid var(--border);"></div>
          <div style="width:28px; height:12px; border-radius:4px; background:var(--card); border:1px solid var(--border);"></div>
          <div style="width:28px; height:12px; border-radius:4px; background:var(--card); border:1px solid var(--border);"></div>
        </div>
        <div style="display:flex; gap:3px; transform:translateX(-10px);">
          <div style="width:28px; height:12px; border-radius:4px; background:var(--card); border:1px solid var(--border);"></div>
          <div style="width:28px; height:12px; border-radius:4px; background:var(--card); border:1px solid var(--border);"></div>
          <div style="width:28px; height:12px; border-radius:4px; background:var(--card); border:1px solid var(--border);"></div>
        </div>
      </div>
    `,
    previewMarkup: `
      <section class="sec-logo-cloud-section">
        <div class="sec-section-header">
          <span class="ui-catalog-badge">Partner Ecosystem</span>
          <h2 class="sec-section-title">Trusted by engineering teams worldwide</h2>
          <p class="sec-section-subtitle">Over 4,800+ developers build faster with Hush UI primitives.</p>
        </div>

        <div style="display:flex; flex-direction:column; gap:16px; margin-top:36px;">
          <!-- Marquee Row 1 (Forward) -->
          <div class="ui-marquee">
            <div class="ui-marquee-track">
              <div class="ui-marquee-item"><svg class="lucide lucide-cpu" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--primary);"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg><span>NextGen Core</span></div>
              <div class="ui-marquee-item"><svg class="lucide lucide-box" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--secondary);"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg><span>Vite Framework</span></div>
              <div class="ui-marquee-item"><svg class="lucide lucide-layers" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--butter);"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg><span>Spring Physics Labs</span></div>
              <div class="ui-marquee-item"><svg class="lucide lucide-shield-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--primary);"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg><span>Fintech Cloud</span></div>
              <div class="ui-marquee-item"><svg class="lucide lucide-sparkles" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--secondary);"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg><span>Supabase Studio</span></div>
              <div class="ui-marquee-item"><svg class="lucide lucide-zap" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--butter);"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg><span>Turborepo Monorepo</span></div>
            </div>
            <div class="ui-marquee-track" aria-hidden="true">
              <div class="ui-marquee-item"><svg class="lucide lucide-cpu" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--primary);"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg><span>NextGen Core</span></div>
              <div class="ui-marquee-item"><svg class="lucide lucide-box" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--secondary);"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg><span>Vite Framework</span></div>
              <div class="ui-marquee-item"><svg class="lucide lucide-layers" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--butter);"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg><span>Spring Physics Labs</span></div>
              <div class="ui-marquee-item"><svg class="lucide lucide-shield-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--primary);"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg><span>Fintech Cloud</span></div>
              <div class="ui-marquee-item"><svg class="lucide lucide-sparkles" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--secondary);"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg><span>Supabase Studio</span></div>
              <div class="ui-marquee-item"><svg class="lucide lucide-zap" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--butter);"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg><span>Turborepo Monorepo</span></div>
            </div>
          </div>

          <!-- Marquee Row 2 (Reverse) -->
          <div class="ui-marquee ui-marquee--reverse ui-marquee--slow">
            <div class="ui-marquee-track">
              <div class="ui-marquee-item"><span class="ui-chip ui-chip--primary">Design Tokens</span></div>
              <div class="ui-marquee-item"><span class="ui-chip ui-chip--secondary">Zero Baggage</span></div>
              <div class="ui-marquee-item"><span class="ui-chip ui-chip--butter">A11y Validated</span></div>
              <div class="ui-marquee-item"><span class="ui-chip ui-chip--blush">GPU Optimized</span></div>
              <div class="ui-marquee-item"><span class="ui-chip ui-chip--primary">Spring Curves</span></div>
              <div class="ui-marquee-item"><span class="ui-chip ui-chip--secondary">CSS Variables</span></div>
            </div>
            <div class="ui-marquee-track" aria-hidden="true">
              <div class="ui-marquee-item"><span class="ui-chip ui-chip--primary">Design Tokens</span></div>
              <div class="ui-marquee-item"><span class="ui-chip ui-chip--secondary">Zero Baggage</span></div>
              <div class="ui-marquee-item"><span class="ui-chip ui-chip--butter">A11y Validated</span></div>
              <div class="ui-marquee-item"><span class="ui-chip ui-chip--blush">GPU Optimized</span></div>
              <div class="ui-marquee-item"><span class="ui-chip ui-chip--primary">Spring Curves</span></div>
              <div class="ui-marquee-item"><span class="ui-chip ui-chip--secondary">CSS Variables</span></div>
            </div>
          </div>
        </div>
      </section>
    `,
    html: `<section class="sec-logo-cloud-section">
  <div class="sec-section-header">
    <span class="ui-catalog-badge">Partners</span>
    <h2 class="sec-section-title">Trusted Worldwide</h2>
  </div>
  <div class="ui-marquee">
    <div class="ui-marquee-track">
      <div class="ui-marquee-item"><span>Brand One</span></div>
      <div class="ui-marquee-item"><span>Brand Two</span></div>
      <div class="ui-marquee-item"><span>Brand Three</span></div>
    </div>
    <div class="ui-marquee-track" aria-hidden="true">
      <div class="ui-marquee-item"><span>Brand One</span></div>
      <div class="ui-marquee-item"><span>Brand Two</span></div>
      <div class="ui-marquee-item"><span>Brand Three</span></div>
    </div>
  </div>
</section>`,
    css: `.sec-logo-cloud-section {
  padding: 72px 24px;
  max-width: 1140px;
  margin: 0 auto;
}`,
    js: `import { initMarquee } from './components/marquee/marquee.js';
initMarquee();`
  },

  // --------------------------------------------------------------------------
  // 19. HIGH-CONVERSION FLOATING WIDGET CTA
  // --------------------------------------------------------------------------
  {
    id: 'cta-floating-widgets',
    name: 'Floating Widget Conversion CTA',
    category: 'CTA',
    description: 'High-conversion call-to-action banner with newsletter subscription input and floating spring widget cards.',
    cardPreview: `
      <div style="display:flex; flex-direction:column; gap:4px; width:100%; max-width:125px; background:linear-gradient(135deg, color-mix(in srgb, var(--primary) 25%, var(--card)), var(--card)); border:1px solid var(--border); border-radius:8px; padding:6px; text-align:center; align-items:center; position:relative; overflow:hidden;">
        <span style="font-size:8px; font-weight:700;">Start Shipping</span>
        <div style="width:70%; height:8px; border-radius:4px; background:var(--primary);"></div>
        <div style="position:absolute; top:2px; right:4px; width:6px; height:6px; border-radius:50%; background:var(--secondary);"></div>
      </div>
    `,
    previewMarkup: `
      <section class="sec-cta-floating-section">
        <div class="sec-cta-floating-box">
          <!-- Floating UI Widget 1: Top-Left Developer Stack -->
          <div class="sec-cta-widget sec-cta-widget--tl">
            <div style="display:flex; align-items:center; gap:8px;">
              <div class="ui-avatar-stack">
                <div class="ui-avatar ui-avatar--sm ui-avatar--lilac"><span>ZK</span></div>
                <div class="ui-avatar ui-avatar--sm ui-avatar--sage"><span>AL</span></div>
                <div class="ui-avatar ui-avatar--sm ui-avatar--butter"><span>EM</span></div>
              </div>
              <span style="font-size:11px; font-weight:700; color:var(--foreground);">4,800+ Devs Active</span>
            </div>
          </div>

          <!-- Floating UI Widget 2: Top-Right Performance Pill -->
          <div class="sec-cta-widget sec-cta-widget--tr">
            <div style="display:flex; align-items:center; gap:6px;">
              <svg class="lucide lucide-zap" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--butter);"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              <span style="font-size:11px; font-weight:700; color:var(--foreground);">99.8% Speed Score</span>
            </div>
          </div>

          <!-- Floating UI Widget 3: Bottom-Left Spring Switch -->
          <div class="sec-cta-widget sec-cta-widget--bl">
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="ui-chip ui-chip--primary" style="font-size:10px; padding:2px 8px;">Spring Physics</span>
              <span style="font-size:11px; color:var(--muted-foreground);">120 FPS</span>
            </div>
          </div>

          <!-- Floating UI Widget 4: Bottom-Right Theme Swatch -->
          <div class="sec-cta-widget sec-cta-widget--br">
            <div style="display:flex; align-items:center; gap:6px;">
              <span style="width:8px; height:8px; border-radius:50%; background:var(--primary);"></span>
              <span style="width:8px; height:8px; border-radius:50%; background:var(--secondary);"></span>
              <span style="font-size:11px; font-weight:600; color:var(--foreground);">Calibrated Hues</span>
            </div>
          </div>

          <!-- Center Content Stack -->
          <div class="sec-cta-floating-content">
            <span class="ui-catalog-badge" style="margin-bottom:12px;">Instant Setup</span>
            <h2 class="sec-cta-title">Build calmer, spring-driven web apps today</h2>
            <p class="sec-cta-subtitle">
              Drop Hush UI tokens and primitives directly into any Vite, Next.js, or vanilla HTML project. Zero configuration required.
            </p>

            <form class="sec-cta-form" onsubmit="event.preventDefault(); window.triggerActionToast && window.triggerActionToast();">
              <input type="email" class="ui-input" placeholder="Enter your work email..." required style="max-width:320px; background:var(--card);" />
              <button type="submit" class="ui-button ui-button--primary" style="padding:10px 22px; gap:8px;">
                <span>Get Started Free</span>
                <svg class="lucide lucide-arrow-right" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </form>

            <div style="display:flex; align-items:center; justify-content:center; gap:18px; margin-top:20px; flex-wrap:wrap;">
              <span class="ui-link ui-link--muted" style="font-size:12px; gap:4px; display:inline-flex; align-items:center;">
                <svg class="lucide lucide-check" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>MIT Licensed</span>
              </span>
              <span class="ui-link ui-link--muted" style="font-size:12px; gap:4px; display:inline-flex; align-items:center;">
                <svg class="lucide lucide-check" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>No Framework Lock-in</span>
              </span>
              <span class="ui-link ui-link--muted" style="font-size:12px; gap:4px; display:inline-flex; align-items:center;">
                <svg class="lucide lucide-check" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>100% TypeSafe</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    `,
    html: `<section class="sec-cta-floating-section">
  <div class="sec-cta-floating-box">
    <!-- Floating Badge Mockups -->
    <div class="sec-cta-widget sec-cta-widget--tl">4.8k+ Devs</div>
    <div class="sec-cta-widget sec-cta-widget--tr">99.8% Speed</div>
    
    <div class="sec-cta-floating-content">
      <span class="ui-catalog-badge">Get Started</span>
      <h2 class="sec-cta-title">Build calmer interfaces today</h2>
      <form class="sec-cta-form">
        <input type="email" class="ui-input" placeholder="Your work email" required />
        <button type="submit" class="ui-button ui-button--primary">Get Started</button>
      </form>
    </div>
  </div>
</section>`,
    css: `.sec-cta-floating-section {
  padding: 80px 24px;
  max-width: 1140px;
  margin: 0 auto;
}
.sec-cta-floating-box {
  position: relative;
  background: linear-gradient(135deg, color-mix(in srgb, var(--primary) 20%, var(--card)), color-mix(in srgb, var(--secondary) 15%, var(--card)));
  border: 1.5px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 64px 32px;
  text-align: center;
  box-shadow: var(--shadow-lg);
  overflow: hidden;
}
.sec-cta-widget {
  position: absolute;
  background: var(--card);
  border: 1px solid var(--border);
  padding: 8px 14px;
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-md);
  animation: cta-float-1 6s ease-in-out infinite alternate;
}
.sec-cta-widget--tl { top: 24px; left: 28px; }
.sec-cta-widget--tr { top: 24px; right: 28px; animation-name: cta-float-2; }
.sec-cta-widget--bl { bottom: 24px; left: 28px; animation-name: cta-float-2; }
.sec-cta-widget--br { bottom: 24px; right: 28px; }

@keyframes cta-float-1 {
  0% { transform: translateY(0px); }
  100% { transform: translateY(-8px); }
}
@keyframes cta-float-2 {
  0% { transform: translateY(0px); }
  100% { transform: translateY(8px); }
}`,
    js: `// Conversion CTA form handler.`
  },

  // --------------------------------------------------------------------------
  // 20. INTERACTIVE ROI & SAVINGS CALCULATOR
  // --------------------------------------------------------------------------
  {
    id: 'calculator-roi',
    name: 'Interactive ROI & Savings Calculator',
    category: 'Pricing',
    description: 'Dynamic value calculator with dual range sliders that reactively computes hours and dollars saved with rolling odometer counters.',
    cardPreview: `
      <div style="display:flex; flex-direction:column; gap:4px; width:100%; max-width:125px; background:var(--card); border:1px solid var(--border); border-radius:6px; padding:6px;">
        <span style="font-size:7px; font-weight:700; color:var(--primary);">Hours Saved</span>
        <span style="font-size:12px; font-weight:700;">140 hrs/mo</span>
        <div style="width:80%; height:3px; background:var(--primary); border-radius:2px;"></div>
      </div>
    `,
    previewMarkup: `
      <section class="sec-calculator-section">
        <div class="sec-section-header">
          <span class="ui-catalog-badge">Value Metric</span>
          <h2 class="sec-section-title">Calculate your engineering time saved</h2>
          <p class="sec-section-subtitle">See how much design and styling time Hush UI primitives save your team every sprint.</p>
        </div>

        <div class="sec-calculator-grid">
          <!-- Left: Interactive Knobs -->
          <div class="sec-calculator-controls">
            <div class="ui-form-group">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <label class="ui-label" style="font-weight:700;">Frontend Engineers</label>
                <span id="calc-team-display" class="ui-chip ui-chip--primary" style="font-weight:700;">5 Devs</span>
              </div>
              <input type="range" class="ui-slider" id="calc-team-slider" min="1" max="25" value="5" oninput="window.updateRoiCalc && window.updateRoiCalc()" />
            </div>

            <div class="ui-form-group" style="margin-top:20px;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <label class="ui-label" style="font-weight:700;">Components Integrated</label>
                <span id="calc-comp-display" class="ui-chip ui-chip--secondary" style="font-weight:700;">16 Components</span>
              </div>
              <input type="range" class="ui-slider" id="calc-comp-slider" min="4" max="32" value="16" oninput="window.updateRoiCalc && window.updateRoiCalc()" />
            </div>
          </div>

          <!-- Right: Dynamic Live Result Cards -->
          <div class="sec-calculator-results">
            <div class="ui-counter-card" style="box-shadow:var(--shadow-sm);">
              <span class="ui-counter-label">Estimated Hours Saved / Mo</span>
              <div class="ui-counter">
                <span class="ui-counter-prefix">+</span>
                <span id="calc-hours-val" style="font-size:var(--text-3xl); font-weight:800; color:var(--foreground);">160</span>
                <span style="font-size:var(--text-base); font-weight:600; color:var(--muted-foreground); margin-left:4px;">hrs</span>
              </div>
              <span style="font-size:11px; color:var(--muted-foreground);">Based on 8 hrs saved per component per dev</span>
            </div>

            <div class="ui-counter-card" style="box-shadow:var(--shadow-sm); background:color-mix(in srgb, var(--secondary) 15%, var(--card)); border-color:var(--secondary);">
              <span class="ui-counter-label">Monthly Value Unlocked</span>
              <div class="ui-counter">
                <span class="ui-counter-prefix">$</span>
                <span id="calc-dollars-val" style="font-size:var(--text-3xl); font-weight:800; color:var(--foreground);">12,800</span>
              </div>
              <span style="font-size:11px; color:var(--muted-foreground);">Calculated at $80/hr engineering value</span>
            </div>
          </div>
        </div>
      </section>
    `,
    html: `<section class="sec-calculator-section">
  <div class="sec-section-header">
    <h2 class="sec-section-title">ROI Calculator</h2>
  </div>
  <div class="sec-calculator-grid">
    <div class="sec-calculator-controls">
      <label>Team Size</label>
      <input type="range" class="ui-slider" id="calc-team-slider" min="1" max="25" value="5" />
    </div>
    <div class="sec-calculator-results">
      <div class="ui-counter-card">
        <span class="ui-counter-label">Hours Saved</span>
        <div id="calc-hours-val">160 hrs</div>
      </div>
    </div>
  </div>
</section>`,
    css: `.sec-calculator-section {
  padding: 80px 24px;
  max-width: 1040px;
  margin: 0 auto;
}
.sec-calculator-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 32px;
  margin-top: 40px;
  align-items: center;
}
@media (max-width: 768px) {
  .sec-calculator-grid {
    grid-template-columns: 1fr;
  }
}`,
    js: `// Interactive ROI dynamic recalculation
function updateRoiCalc() {
  const team = parseInt(document.getElementById('calc-team-slider')?.value || 5);
  const comps = parseInt(document.getElementById('calc-comp-slider')?.value || 16);
  const hours = team * (comps * 2);
  const dollars = hours * 80;

  const teamDisplay = document.getElementById('calc-team-display');
  const compDisplay = document.getElementById('calc-comp-display');
  const hoursVal = document.getElementById('calc-hours-val');
  const dollarsVal = document.getElementById('calc-dollars-val');

  if (teamDisplay) teamDisplay.textContent = team + ' Devs';
  if (compDisplay) compDisplay.textContent = comps + ' Components';
  if (hoursVal) hoursVal.textContent = hours.toLocaleString();
  if (dollarsVal) dollarsVal.textContent = dollars.toLocaleString();
}
window.updateRoiCalc = updateRoiCalc;`
  },
  {
    id: 'comparison-matrix',
    name: 'Feature Comparison Table',
    category: 'Marketing',
    description: 'Detailed feature comparison table comparing Hush UI against generic kits with checkmarks and tooltips.',
    cardPreview: `
      <div style="display:flex; flex-direction:column; gap:4px; width:100%; max-width:130px; font-size:9px; background:var(--card); padding:8px; border:var(--border-default); border-radius:6px;">
        <div style="display:flex; justify-content:space-between; font-weight:700; border-bottom:1px solid var(--border); padding-bottom:3px;">
          <span>Feature</span><span style="color:var(--primary);">Hush</span><span>Other</span>
        </div>
        <div style="display:flex; justify-content:space-between; color:var(--muted-foreground);">
          <span>Springs</span><span style="color:#10b981;">✓</span><span>—</span>
        </div>
        <div style="display:flex; justify-content:space-between; color:var(--muted-foreground);">
          <span>Zero-JS</span><span style="color:#10b981;">✓</span><span>—</span>
        </div>
      </div>
    `,
    previewMarkup: `
      <section class="sec-comparison-section">
        <div class="sec-section-header" style="text-align:center; max-width:680px; margin:0 auto 36px auto;">
          <span class="ui-catalog-badge">Feature Matrix</span>
          <h2 class="sec-section-title" style="margin:8px 0 12px 0;">Why teams choose Hush UI</h2>
          <p class="sec-section-subtitle">A direct comparison of motion physics, token ergonomics, and architectural overhead.</p>
        </div>

        <div class="sec-comparison-table-wrapper">
          <table class="sec-comparison-table">
            <thead>
              <tr>
                <th style="width:42%;">Capability</th>
                <th class="col-highlight" style="width:30%;">
                  <div style="display:flex; align-items:center; gap:6px; justify-content:center;">
                    <svg class="lucide lucide-sparkles" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--primary);"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                    <span>Hush UI</span>
                  </div>
                </th>
                <th style="width:28%;">Generic Kits</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Spring Micro-Press Physics</strong><div class="sec-table-sub">Cubic-bezier curves with zero layout reflows</div></td>
                <td class="col-highlight"><span class="check-icon">✓ Built-in</span></td>
                <td><span class="cross-icon">— None</span></td>
              </tr>
              <tr>
                <td><strong>Zero Framework Lock-in</strong><div class="sec-table-sub">Pure semantic CSS + vanilla JS ES Modules</div></td>
                <td class="col-highlight"><span class="check-icon">✓ Framework Agnostic</span></td>
                <td><span class="cross-icon">⚠ React / Tailwind Only</span></td>
              </tr>
              <tr>
                <td><strong>Runtime Bundle Overhead</strong><div class="sec-table-sub">Gzipped core stylesheet and modules</div></td>
                <td class="col-highlight"><strong style="color:var(--foreground);">~11 KB gzip</strong></td>
                <td><span class="cross-icon">85+ KB</span></td>
              </tr>
              <tr>
                <td><strong>Theme Morphing Engine</strong><div class="sec-table-sub">Sky moon/crater transitions with CSS tokens</div></td>
                <td class="col-highlight"><span class="check-icon">✓ Included</span></td>
                <td><span class="cross-icon">— Manual setup</span></td>
              </tr>
              <tr>
                <td><strong>Spotlight & Command Palette</strong><div class="sec-table-sub">Global keyboard-driven dialog overlays</div></td>
                <td class="col-highlight"><span class="check-icon">✓ Ready-to-use</span></td>
                <td><span class="cross-icon">— Separate package</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    `,
    html: `<div class="sec-comparison-table-wrapper">
  <table class="sec-comparison-table">
    <thead>
      <tr>
        <th>Capability</th>
        <th class="col-highlight">Hush UI</th>
        <th>Generic Kits</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Spring Micro-Press Physics</td>
        <td class="col-highlight">✓ Built-in</td>
        <td>— None</td>
      </tr>
    </tbody>
  </table>
</div>`,
    css: `.sec-comparison-table {
  width: 100%;
  border-collapse: collapse;
}
.col-highlight {
  background-color: color-mix(in srgb, var(--primary) 10%, var(--card));
}`,
    js: `// Pure semantic table styling.`
  },
  {
    id: 'auth-split',
    name: 'Auth / Sign-In Screen',
    category: 'Application',
    description: 'Split authentication screen with OAuth buttons, floating inputs, and ambient customer quote preview.',
    cardPreview: `
      <div style="display:flex; border:var(--border-default); border-radius:6px; overflow:hidden; width:100%; max-width:130px; height:80px;">
        <div style="flex:1; background:var(--card); padding:6px; display:flex; flex-direction:column; gap:3px;">
          <div style="font-size:7px; font-weight:700;">Sign in</div>
          <div style="height:8px; background:var(--muted); border-radius:2px;"></div>
          <div style="height:8px; background:var(--primary); border-radius:2px; margin-top:2px;"></div>
        </div>
        <div style="flex:1; background:color-mix(in srgb, var(--primary) 20%, var(--card)); padding:6px;"></div>
      </div>
    `,
    previewMarkup: `
      <section class="sec-auth-section">
        <div class="sec-auth-container">
          <!-- Left: Login Form -->
          <div class="sec-auth-form-card">
            <div style="margin-bottom:20px;">
              <span class="ui-catalog-badge">Authentication</span>
              <h2 style="font-size:var(--text-xl); font-weight:700; margin:6px 0 4px 0;">Welcome back</h2>
              <p style="color:var(--muted-foreground); font-size:var(--text-xs); margin:0;">Enter your credentials to access your Hush UI workspace.</p>
            </div>

            <!-- Social OAuth Buttons -->
            <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:16px;">
              <button class="ui-button ui-button--ghost" type="button" style="width:100%; justify-content:center; gap:8px; font-size:12px;">
                <svg class="lucide lucide-github" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                <span>Continue with GitHub</span>
              </button>
            </div>

            <div style="display:flex; align-items:center; gap:10px; margin-bottom:16px;">
              <span style="flex:1; height:1px; background:var(--border);"></span>
              <span style="font-size:10px; color:var(--muted-foreground); text-transform:uppercase;">or with email</span>
              <span style="flex:1; height:1px; background:var(--border);"></span>
            </div>

            <form style="display:flex; flex-direction:column; gap:12px;" onsubmit="event.preventDefault();">
              <div class="ui-form-group">
                <label class="ui-label" style="font-size:11px;">Work Email</label>
                <input type="email" class="ui-input" placeholder="alex@company.com" required style="font-size:12px;" />
              </div>
              <div class="ui-form-group">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <label class="ui-label" style="font-size:11px;">Password</label>
                  <a href="#" style="font-size:10px; color:var(--primary); text-decoration:none;">Forgot?</a>
                </div>
                <input type="password" class="ui-input" placeholder="••••••••••••" required style="font-size:12px;" />
              </div>
              <button class="ui-button ui-button--primary" type="submit" style="width:100%; justify-content:center; margin-top:6px; font-size:12px; gap:6px;">
                <span>Sign In to Dashboard</span>
                <svg class="lucide lucide-arrow-right" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </form>
          </div>

          <!-- Right: Visual Testimonial Backdrop -->
          <div class="sec-auth-visual-card">
            <div class="ui-catalog-badge" style="width:fit-content; background:rgba(255,255,255,0.2); color:#ffffff; border-color:transparent;">Design System Suite</div>
            <h3 style="font-size:var(--text-lg); font-weight:700; color:#ffffff; margin:16px 0 8px 0; line-height:1.35;">"Hush UI elevated our interface velocity by 300% without adding framework debt."</h3>
            <div style="display:flex; align-items:center; gap:10px; margin-top:20px;">
              <div class="ui-avatar ui-avatar--lilac" style="width:36px; height:36px;">SA</div>
              <div>
                <div style="font-size:12px; font-weight:700; color:#ffffff;">Sarah Al-Rashid</div>
                <div style="font-size:11px; color:rgba(255,255,255,0.75);">VP Design @ Apex Cloud</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,
    html: `<div class="sec-auth-container">
  <div class="sec-auth-form-card">
    <h2>Welcome back</h2>
    <form>
      <input type="email" class="ui-input" placeholder="name@domain.com" />
      <input type="password" class="ui-input" placeholder="••••••••" />
      <button class="ui-button ui-button--primary">Sign In</button>
    </form>
  </div>
</div>`,
    css: `.sec-auth-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  max-width: 880px;
  margin: 0 auto;
}
@media (max-width: 768px) {
  .sec-auth-container { grid-template-columns: 1fr; }
}`,
    js: `// Form submission handler.`
  },
  {
    id: 'changelog-feed',
    name: 'Release Notes & Changelog',
    category: 'Marketing',
    description: 'Chronological release log with semantic version tags, feature chips, and code diff highlights.',
    cardPreview: `
      <div style="display:flex; flex-direction:column; gap:6px; width:100%; max-width:130px; font-size:9px; background:var(--card); padding:8px; border:var(--border-default); border-radius:6px;">
        <div style="display:flex; align-items:center; gap:4px;">
          <span style="background:#10b981; color:#fff; padding:1px 4px; border-radius:3px; font-size:7px; font-weight:700;">v2.4</span>
          <span style="font-weight:700;">Dropzones</span>
        </div>
        <div style="color:var(--muted-foreground); font-size:8px;">Spring drag upload & tickers</div>
      </div>
    `,
    previewMarkup: `
      <section class="sec-changelog-section">
        <div class="sec-section-header" style="text-align:center; max-width:640px; margin:0 auto 36px auto;">
          <span class="ui-catalog-badge">Release Log</span>
          <h2 class="sec-section-title" style="margin:8px 0 12px 0;">Continuous Motion Refinement</h2>
          <p class="sec-section-subtitle">Track new primitives, spring easing improvements, and token additions.</p>
        </div>

        <div class="sec-changelog-timeline">
          <!-- Release 1 -->
          <div class="sec-changelog-item">
            <div class="sec-changelog-meta">
              <span class="ui-chip ui-chip--primary" style="font-size:11px; font-weight:700;">v2.4.0</span>
              <span style="font-size:11px; color:var(--muted-foreground);">September 2026</span>
            </div>
            <div class="sec-changelog-body">
              <h3 style="font-size:var(--text-base); font-weight:700; margin:0 0 6px 0;">Interactive Dropzones & Animated Tickers</h3>
              <p style="color:var(--muted-foreground); font-size:var(--text-xs); line-height:1.6; margin:0 0 12px 0;">
                Introduced 5 new primitives including Drag & Drop file dropzones, multi-file code blocks with tabbed syntax trees, live rating widgets, and animated KPI tickers.
              </p>
              <div style="display:flex; gap:6px; flex-wrap:wrap;">
                <span class="ui-chip ui-chip--secondary" style="font-size:10px;">+ Dropzone</span>
                <span class="ui-chip ui-chip--secondary" style="font-size:10px;">+ Code Block</span>
                <span class="ui-chip ui-chip--secondary" style="font-size:10px;">+ Rating Widget</span>
                <span class="ui-chip ui-chip--secondary" style="font-size:10px;">+ Number Ticker</span>
              </div>
            </div>
          </div>

          <!-- Release 2 -->
          <div class="sec-changelog-item">
            <div class="sec-changelog-meta">
              <span class="ui-chip ui-chip--secondary" style="font-size:11px; font-weight:700;">v2.3.0</span>
              <span style="font-size:11px; color:var(--muted-foreground);">August 2026</span>
            </div>
            <div class="sec-changelog-body">
              <h3 style="font-size:var(--text-base); font-weight:700; margin:0 0 6px 0;">Mobile Responsive Overhaul & Sliding Tabs</h3>
              <p style="color:var(--muted-foreground); font-size:var(--text-xs); line-height:1.6; margin:0 0 12px 0;">
                Upgraded sliding pill tabs to automatically center active items into view with horizontal touch scrolling and added responsive navigation drawers across all pages.
              </p>
              <div style="display:flex; gap:6px; flex-wrap:wrap;">
                <span class="ui-chip" style="font-size:10px;">✓ Sliding Pill Easing</span>
                <span class="ui-chip" style="font-size:10px;">✓ Mobile Drawers</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,
    html: `<div class="sec-changelog-timeline">
  <div class="sec-changelog-item">
    <div class="sec-changelog-meta">
      <span class="ui-chip ui-chip--primary">v2.4.0</span>
      <span>September 2026</span>
    </div>
    <div class="sec-changelog-body">
      <h3>Interactive Dropzones & Tickers</h3>
      <p>Introduced 5 new motion primitives.</p>
    </div>
  </div>
</div>`,
    css: `.sec-changelog-timeline {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 760px;
  margin: 0 auto;
}`,
    js: `// Static timeline layout.`
  },
  {
    id: 'error-404',
    name: 'Interactive 404 / Empty State',
    category: 'Application',
    description: 'Playful error state with floating spring cards, search box, and quick recovery actions.',
    cardPreview: `
      <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; background:var(--card); border:var(--border-default); border-radius:6px; padding:10px; width:100%; max-width:130px; text-align:center;">
        <span style="font-size:18px; font-weight:900; color:var(--primary); font-family:var(--font-display);">404</span>
        <span style="font-size:8px; color:var(--muted-foreground);">Page Not Found</span>
      </div>
    `,
    previewMarkup: `
      <section class="sec-error-section">
        <div class="sec-error-container">
          <div class="sec-error-badge-404">404</div>
          <h2 style="font-size:clamp(1.6rem, 3.5vw, 2.4rem); font-weight:800; letter-spacing:-0.02em; margin:0 0 8px 0;">Lost in the design system?</h2>
          <p style="color:var(--muted-foreground); font-size:var(--text-sm); max-width:480px; margin:0 auto 24px auto; line-height:1.6;">
            The component primitive, section layout, or route you are looking for has been moved or does not exist.
          </p>

          <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
            <a href="/" class="ui-button ui-button--primary" style="gap:6px; font-size:12px;">
              <svg class="lucide lucide-home" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <span>Return to Overview</span>
            </a>
            <a href="/pages/components.html" class="ui-button ui-button--secondary" style="gap:6px; font-size:12px;">
              <svg class="lucide lucide-layers" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/></svg>
              <span>Browse Catalog (37)</span>
            </a>
          </div>
        </div>
      </section>
    `,
    html: `<section class="sec-error-section">
  <div class="sec-error-badge-404">404</div>
  <h2>Lost in the design system?</h2>
  <p>The component or route does not exist.</p>
  <a href="/" class="ui-button ui-button--primary">Return Home</a>
</section>`,
    css: `.sec-error-section {
  text-align: center;
  padding: 80px 24px;
}
.sec-error-badge-404 {
  font-size: clamp(4rem, 10vw, 7rem);
  font-weight: 900;
  color: var(--primary);
  line-height: 1;
}`,
    js: `// Static 404 handler.`
  },
  {
    id: 'pricing-interactive',
    name: 'Interactive Pricing Matrix & Slider',
    category: 'Pricing',
    description: 'Real-time SaaS billing calculator with interactive seats slider, modular add-on toggles, and live summary calculation.',
    cardPreview: `
      <div style="display:flex; flex-direction:column; gap:4px; width:100%; max-width:130px; font-size:9px; background:var(--card); padding:8px; border:var(--border-default); border-radius:6px; box-sizing:border-box;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-weight:700; font-size:8px;">12 Seats</span>
          <span style="background:var(--sage); color:#1E1B24; padding:1px 4px; border-radius:3px; font-size:7px; font-weight:700;">-20%</span>
        </div>
        <div style="height:3px; background:var(--primary); border-radius:2px; width:65%;"></div>
        <div style="font-weight:800; font-size:12px; color:var(--primary); font-family:var(--font-mono);">$198<span style="font-size:8px; font-weight:400; color:var(--muted-foreground);">/mo</span></div>
      </div>
    `,
    previewMarkup: `
      <section class="sec-pricing-interactive-section">
        <div style="text-align:center; max-width:600px; margin:0 auto 36px auto;">
          <span class="ui-catalog-badge">Flexible Billing</span>
          <h2 style="font-size:clamp(1.5rem, 3.5vw, 2.2rem); font-weight:800; margin:10px 0 8px 0; color:var(--foreground);">Predictable, Transparent Pricing</h2>
          <p style="font-size:13px; color:var(--muted-foreground); margin:0;">Scale team seats and add-ons dynamically with zero surprise overage fees.</p>
        </div>

        <div class="sec-pricing-calc-grid">
          <!-- Left: Controls (Seats Slider + Add-ons) -->
          <div class="sec-pricing-calc-box">
            <!-- Billing Frequency Pill -->
            <div style="display:flex; justify-content:center;">
              <div class="ui-segmented-control" id="sec-calc-billing-toggle">
                <button class="ui-segmented-item is-active" type="button" data-billing="monthly">Monthly</button>
                <button class="ui-segmented-item" type="button" data-billing="annual">
                  <span>Annually</span>
                  <span class="ui-segmented-badge" style="background:var(--sage); color:#1E1B24;">-20%</span>
                </button>
              </div>
            </div>

            <!-- Seat Slider -->
            <div class="sec-calc-slider-group">
              <div class="sec-calc-slider-header">
                <label for="sec-calc-seats" style="font-size:13px; font-weight:700; color:var(--foreground);">Team Seats</label>
                <span class="sec-calc-seats-badge" id="sec-calc-seats-display">12 Seats</span>
              </div>
              <input type="range" id="sec-calc-seats" class="ui-slider" min="1" max="50" value="12" style="width:100%;" />
              <div style="display:flex; justify-content:space-between; font-size:10px; color:var(--muted-foreground);">
                <span>1 Seat</span>
                <span>25 Seats</span>
                <span>50+ Seats</span>
              </div>
            </div>

            <!-- Add-on Options -->
            <div style="display:flex; flex-direction:column; gap:8px;">
              <span style="font-size:12px; font-weight:700; color:var(--foreground);">Modular Add-ons</span>
              <div class="sec-addon-list">
                <label class="sec-addon-item">
                  <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" class="ui-checkbox sec-addon-check" data-price="49" checked />
                    <span class="sec-addon-label" style="font-size:12px; color:var(--foreground);">24/7 Dedicated Support SLA</span>
                  </div>
                  <span style="font-family:var(--font-mono); font-size:12px; font-weight:700; color:var(--primary);">+$49/mo</span>
                </label>
                <label class="sec-addon-item">
                  <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" class="ui-checkbox sec-addon-check" data-price="29" checked />
                    <span class="sec-addon-label" style="font-size:12px; color:var(--foreground);">Custom Domain & SSL Provisioning</span>
                  </div>
                  <span style="font-family:var(--font-mono); font-size:12px; font-weight:700; color:var(--primary);">+$29/mo</span>
                </label>
                <label class="sec-addon-item">
                  <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" class="ui-checkbox sec-addon-check" data-price="19" />
                    <span class="sec-addon-label" style="font-size:12px; color:var(--foreground);">Compliance & Audit Logging (SOC2)</span>
                  </div>
                  <span style="font-family:var(--font-mono); font-size:12px; font-weight:700; color:var(--primary);">+$19/mo</span>
                </label>
              </div>
            </div>
          </div>

          <!-- Right: Dynamic Summary Card -->
          <div class="sec-pricing-summary-card">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:0.04em;">Estimated Total</span>
              <span class="ui-chip ui-chip--primary" style="font-size:10px;">Instant Setup</span>
            </div>

            <div class="sec-summary-price-display">
              <span class="sec-summary-amount" id="sec-calc-total-amount">$198</span>
              <span style="font-size:14px; color:var(--muted-foreground);" id="sec-calc-cycle-label">/ month</span>
            </div>

            <div style="border-top:1px dashed var(--border); padding-top:14px; display:flex; flex-direction:column; gap:6px; font-size:12px; color:var(--muted-foreground);">
              <div style="display:flex; justify-content:space-between;">
                <span>Base Plan (12 seats × $10):</span>
                <span id="sec-calc-base-subtotal" style="font-weight:600; color:var(--foreground); font-family:var(--font-mono);">$120</span>
              </div>
              <div style="display:flex; justify-content:space-between;">
                <span>Active Add-ons:</span>
                <span id="sec-calc-addon-subtotal" style="font-weight:600; color:var(--foreground); font-family:var(--font-mono);">+$78</span>
              </div>
            </div>

            <button class="ui-button ui-button--primary" style="width:100%; justify-content:center; padding:12px; font-size:13px; margin-top:8px;">
              <span>Start 14-Day Free Trial</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </section>
    `,
    html: `<!-- Interactive SaaS Pricing Matrix -->
<section class="sec-pricing-interactive-section">
  <div class="sec-pricing-calc-grid">
    <div class="sec-pricing-calc-box">
      <!-- Seats Slider -->
      <label for="seats">Team Seats</label>
      <input type="range" id="seats" min="1" max="50" value="10" />
      
      <!-- Add-ons -->
      <label><input type="checkbox" data-price="49" checked /> 24/7 SLA (+$49/mo)</label>
    </div>

    <div class="sec-pricing-summary-card">
      <h3>Estimated Total</h3>
      <div class="sec-summary-amount" id="total">$149 / mo</div>
      <button class="ui-button ui-button--primary">Get Started</button>
    </div>
  </div>
</section>`,
    css: `.sec-pricing-calc-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 32px;
}
@media (max-width: 768px) {
  .sec-pricing-calc-grid {
    grid-template-columns: 1fr;
  }
}`,
    js: `// Interactive price calculation script.`
  },
  {
    id: 'case-study',
    name: 'Customer Case Study & Success Story',
    category: 'Social Proof',
    description: 'Enterprise success story hero with client pullquote, executive bio, and high-impact KPI statistic cards.',
    cardPreview: `
      <div style="display:flex; flex-direction:column; gap:5px; width:100%; max-width:130px; font-size:9px; background:var(--card); padding:8px; border:var(--border-default); border-radius:6px; box-sizing:border-box;">
        <div style="font-size:7px; font-weight:700; color:var(--primary); letter-spacing:0.04em;">HYPERSCALE INC.</div>
        <div style="font-size:8px; font-weight:600; line-height:1.2; color:var(--foreground);">“Boosted conversions by 42%”</div>
        <div style="display:flex; gap:4px; margin-top:2px;">
          <span style="font-size:8px; font-weight:800; color:var(--primary); font-family:var(--font-mono);">+240%</span>
          <span style="font-size:7px; color:var(--muted-foreground);">Velocity</span>
        </div>
      </div>
    `,
    previewMarkup: `
      <section class="sec-case-study-section">
        <div class="sec-case-study-grid">
          <!-- Left: Narrative & Pull-Quote -->
          <div class="sec-case-story-content">
            <div class="sec-case-client-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--primary);"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <span>CUSTOMER SUCCESS STORY · HYPERSCALE INC.</span>
            </div>

            <blockquote class="sec-case-quote">
              “Migrating to Hush UI cut our design debt in half and boosted product checkout conversions by 42% in under 3 weeks. The spring physics feel effortless.”
            </blockquote>

            <div class="sec-case-author">
              <div class="ui-avatar ui-avatar--md">
                <span class="ui-avatar-initials" style="background:var(--primary); color:#1E1B24;">SK</span>
              </div>
              <div>
                <div style="font-size:13px; font-weight:700; color:var(--foreground);">Sophia Kim</div>
                <div style="font-size:11px; color:var(--muted-foreground);">VP of Product Engineering @ Hyperscale</div>
              </div>
            </div>

            <div style="display:flex; gap:10px; margin-top:6px;">
              <a href="#read-case" class="ui-link ui-link--arrow" style="font-size:13px; font-weight:700;">
                <span>Read Full Technical Case Study</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </div>

          <!-- Right: KPI Statistic Cards -->
          <div class="sec-case-kpi-grid">
            <div class="sec-kpi-card">
              <span class="sec-kpi-number">+240%</span>
              <span class="sec-kpi-label">Pipeline Velocity & Release Speed</span>
            </div>
            <div class="sec-kpi-card">
              <span class="sec-kpi-number">99.98%</span>
              <span class="sec-kpi-label">Component Render & Uptime Reliability</span>
            </div>
            <div class="sec-kpi-card">
              <span class="sec-kpi-number">10x</span>
              <span class="sec-kpi-label">Faster Developer Onboarding Time</span>
            </div>
          </div>
        </div>
      </section>
    `,
    html: `<!-- Customer Case Study Section -->
<section class="sec-case-study-section">
  <div class="sec-case-study-grid">
    <div class="sec-case-story-content">
      <blockquote class="sec-case-quote">
        “Hush UI cut our design debt in half and boosted conversion by 42%.”
      </blockquote>
      <div class="sec-case-author">
        <span class="ui-avatar-initials">SK</span>
        <span>Sophia Kim · VP of Engineering</span>
      </div>
    </div>

    <div class="sec-case-kpi-grid">
      <div class="sec-kpi-card">
        <span class="sec-kpi-number">+240%</span>
        <span>Pipeline Velocity</span>
      </div>
    </div>
  </div>
</section>`,
    css: `.sec-case-study-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;
}
@media (max-width: 768px) {
  .sec-case-study-grid {
    grid-template-columns: 1fr;
  }
}`,
    js: `// Static case study hero layout.`
  },
  {
    id: 'onboarding-wizard',
    name: 'Multi-Step Onboarding Wizard',
    category: 'Forms',
    description: 'Interactive 3-step setup flow with progress track, input validation, integration selectors, and celebratory completion state.',
    cardPreview: `
      <div style="display:flex; flex-direction:column; gap:4px; width:100%; max-width:130px; font-size:8px; background:var(--card); padding:8px; border:var(--border-default); border-radius:6px;">
        <div style="display:flex; gap:3px;">
          <span style="flex:1; height:3px; border-radius:2px; background:var(--primary);"></span>
          <span style="flex:1; height:3px; border-radius:2px; background:var(--muted);"></span>
          <span style="flex:1; height:3px; border-radius:2px; background:var(--muted);"></span>
        </div>
        <div style="font-weight:700; color:var(--foreground); margin-top:2px;">Step 1: Workspace</div>
        <div style="height:10px; background:var(--muted); border-radius:3px;"></div>
      </div>
    `,
    previewMarkup: `
      <section class="sec-wizard-section" style="padding: clamp(24px, 5vw, 64px) 16px; max-width: 720px; margin: 0 auto;">
        <div class="sec-wizard-card">
          <!-- Wizard Stepper Header -->
          <div class="sec-wizard-stepper">
            <div class="sec-step-item is-active" data-step="1">
              <div class="sec-step-number">1</div>
              <span class="sec-step-title">Workspace</span>
            </div>
            <div class="sec-step-line"></div>
            <div class="sec-step-item" data-step="2">
              <div class="sec-step-number">2</div>
              <span class="sec-step-title">Team</span>
            </div>
            <div class="sec-step-line"></div>
            <div class="sec-step-item" data-step="3">
              <div class="sec-step-number">3</div>
              <span class="sec-step-title">Integrations</span>
            </div>
          </div>

          <!-- Step 1 Pane: Workspace Details -->
          <div class="sec-wizard-pane is-active" data-pane="1">
            <h3 class="sec-pane-title">Create your workspace</h3>
            <p class="sec-pane-subtitle">Give your team a dedicated space to collaborate with Hush UI.</p>
            <div class="sec-form-group">
              <label class="ui-label">Workspace Name</label>
              <input type="text" class="ui-input" id="wizard-ws-name" value="Acme Design Studio" placeholder="e.g. Acme Design Studio" />
            </div>
            <div class="sec-form-group">
              <label class="ui-label">Workspace URL</label>
              <div style="display:flex; align-items:center; gap:6px;">
                <span style="font-size:var(--text-xs); color:var(--muted-foreground);">hushui.com/</span>
                <input type="text" class="ui-input" value="acme-design" placeholder="acme" />
              </div>
            </div>
          </div>

          <!-- Step 2 Pane: Invite Team -->
          <div class="sec-wizard-pane" data-pane="2">
            <h3 class="sec-pane-title">Invite your teammates</h3>
            <p class="sec-pane-subtitle">Add members by email to start building together right away.</p>
            <div class="sec-form-group">
              <label class="ui-label">Teammate Email Addresses</label>
              <input type="email" class="ui-input" placeholder="colleague@acme.com" value="alex@acme.com, sarah@acme.com" />
              <span style="font-size:11px; color:var(--muted-foreground);">Separate multiple emails with commas.</span>
            </div>
            <div class="sec-form-group">
              <label class="ui-label">Default Role</label>
              <select class="ui-input" style="cursor:pointer;">
                <option>Editor (Full Access)</option>
                <option>Viewer (Read Only)</option>
                <option>Admin (Workspace Owner)</option>
              </select>
            </div>
          </div>

          <!-- Step 3 Pane: Integrations -->
          <div class="sec-wizard-pane" data-pane="3">
            <h3 class="sec-pane-title">Connect tools</h3>
            <p class="sec-pane-subtitle">Select the apps you want to sync with your components.</p>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:10px; margin: 16px 0;">
              <label style="display:flex; align-items:center; gap:8px; padding:10px 14px; border:1px solid var(--border); border-radius:var(--radius-md); background:var(--card); cursor:pointer;">
                <input type="checkbox" checked />
                <span style="font-size:var(--text-xs); font-weight:600;">GitHub Sync</span>
              </label>
              <label style="display:flex; align-items:center; gap:8px; padding:10px 14px; border:1px solid var(--border); border-radius:var(--radius-md); background:var(--card); cursor:pointer;">
                <input type="checkbox" checked />
                <span style="font-size:var(--text-xs); font-weight:600;">Figma Tokens</span>
              </label>
              <label style="display:flex; align-items:center; gap:8px; padding:10px 14px; border:1px solid var(--border); border-radius:var(--radius-md); background:var(--card); cursor:pointer;">
                <input type="checkbox" />
                <span style="font-size:var(--text-xs); font-weight:600;">Slack Alerts</span>
              </label>
            </div>
          </div>

          <!-- Footer Actions -->
          <div class="sec-wizard-footer">
            <button type="button" class="ui-button ui-button--ghost sec-wizard-prev-btn" style="visibility:hidden;">Back</button>
            <button type="button" class="ui-button ui-button--primary sec-wizard-next-btn">Continue</button>
          </div>
        </div>
      </section>
    `,
    html: `<!-- Multi-Step Onboarding Wizard Section -->
<section class="sec-wizard-section">
  <div class="sec-wizard-card">
    <div class="sec-wizard-stepper">
      <div class="sec-step-item is-active" data-step="1">
        <div class="sec-step-number">1</div>
        <span>Workspace</span>
      </div>
      <div class="sec-step-line"></div>
      <div class="sec-step-item" data-step="2">
        <div class="sec-step-number">2</div>
        <span>Team</span>
      </div>
      <div class="sec-step-line"></div>
      <div class="sec-step-item" data-step="3">
        <div class="sec-step-number">3</div>
        <span>Integrations</span>
      </div>
    </div>

    <!-- Panes -->
    <div class="sec-wizard-pane is-active" data-pane="1">
      <h3>Create your workspace</h3>
      <input type="text" class="ui-input" placeholder="Workspace name" />
    </div>

    <div class="sec-wizard-footer">
      <button class="ui-button ui-button--ghost sec-wizard-prev-btn">Back</button>
      <button class="ui-button ui-button--primary sec-wizard-next-btn">Continue</button>
    </div>
  </div>
</section>`,
    css: `.sec-wizard-section {
  padding: clamp(24px, 5vw, 64px) 16px;
  max-width: 720px;
  margin: 0 auto;
}
.sec-wizard-card {
  background-color: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl, 20px);
  padding: clamp(20px, 4vw, 36px);
  box-shadow: var(--shadow-md);
}
.sec-wizard-stepper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
}
.sec-step-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: var(--text-xs);
  font-weight: 600;
  color: var(--muted-foreground);
}
.sec-step-item.is-active {
  color: var(--primary);
}
.sec-step-number {
  width: 28px;
  height: 28px;
  border-radius: var(--radius-full);
  background-color: var(--muted);
  display: flex;
  align-items: center;
  justify-content: center;
}
.sec-step-item.is-active .sec-step-number {
  background-color: var(--primary);
  color: var(--primary-foreground);
}
.sec-step-line {
  flex: 1;
  height: 2px;
  background-color: var(--border);
  margin: 0 8px;
}
.sec-wizard-pane {
  display: none;
  flex-direction: column;
  gap: 16px;
}
.sec-wizard-pane.is-active {
  display: flex;
}
.sec-wizard-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
}`,
    js: `// Multi-step wizard navigation controller
const wizard = document.querySelector('.sec-wizard-section');
if (wizard) {
  let step = 1;
  const nextBtn = wizard.querySelector('.sec-wizard-next-btn');
  const prevBtn = wizard.querySelector('.sec-wizard-prev-btn');

  function update() {
    wizard.querySelectorAll('.sec-step-item').forEach(el => {
      const s = parseInt(el.dataset.step, 10);
      el.classList.toggle('is-active', s === step);
    });
    wizard.querySelectorAll('.sec-wizard-pane').forEach(el => {
      const p = parseInt(el.dataset.pane, 10);
      el.classList.toggle('is-active', p === step);
    });
    prevBtn.style.visibility = step > 1 ? 'visible' : 'hidden';
    nextBtn.textContent = step === 3 ? 'Finish Setup' : 'Continue';
  }

  nextBtn.addEventListener('click', () => {
    if (step < 3) { step++; update(); }
    else alert('Workspace setup complete!');
  });
  prevBtn.addEventListener('click', () => {
    if (step > 1) { step--; update(); }
  });
}`
  },
  {
    id: 'testimonial-wall',
    name: 'Customer Wall of Love & Testimonials',
    category: 'Social Proof',
    description: 'Authentic 3-column responsive review grid featuring customer ratings, verified reviewer profiles, and category filters.',
    cardPreview: `
      <div style="display:flex; flex-direction:column; gap:5px; width:100%; max-width:130px; font-size:7px; background:var(--card); padding:8px; border:var(--border-default); border-radius:6px; box-sizing:border-box;">
        <div style="color:#F59E0B; font-size:8px; letter-spacing:1px;">★★★★★</div>
        <div style="font-size:7.5px; font-weight:600; color:var(--foreground); line-height:1.25;">"Cut bundle size by 84%"</div>
        <div style="font-size:6.5px; color:var(--muted-foreground);">Elena Rostova · Veloce</div>
      </div>
    `,
    previewMarkup: `
      <section class="sec-wall-section">
        <!-- Header -->
        <div class="sec-wall-header">
          <span class="ui-catalog-badge">Wall of Love</span>
          <h2 class="sec-wall-title">
            Trusted by Leading Product Teams
          </h2>
          <p class="sec-wall-subtitle">
            See how engineers, designers, and founders use Hush UI to craft calm, high-performance interfaces.
          </p>

          <!-- Interactive Filter Tabs -->
          <div class="sec-wall-filters">
            <button type="button" class="sec-wall-filter-btn is-active" data-filter="all">All Reviews (6)</button>
            <button type="button" class="sec-wall-filter-btn" data-filter="engineering">Engineering</button>
            <button type="button" class="sec-wall-filter-btn" data-filter="design">Design</button>
            <button type="button" class="sec-wall-filter-btn" data-filter="founders">Founders</button>
          </div>
        </div>

        <!-- 3-Column Masonry Grid -->
        <div class="sec-wall-grid">
          <!-- Column 1 -->
          <div class="sec-wall-col">
            <!-- Review 1 -->
            <div class="sec-wall-card" data-category="founders">
              <div class="sec-wall-stars">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <p class="sec-wall-quote">
                "Hush UI gave our entire product suite an unfair design advantage. Our engineering velocity tripled without adding an ounce of runtime framework debt."
              </p>
              <div class="sec-wall-card-footer">
                <div class="sec-wall-author-group">
                  <div class="ui-avatar ui-avatar--sage" style="width:36px; height:36px;">MK</div>
                  <div class="sec-wall-author-details">
                    <div class="sec-wall-author-name">Marcus Kane</div>
                    <div class="sec-wall-author-role">Founder @ Stride AI</div>
                  </div>
                </div>
                <span class="sec-wall-tag">Verified Customer</span>
              </div>
            </div>

            <!-- Review 2 -->
            <div class="sec-wall-card" data-category="engineering">
              <div class="sec-wall-stars">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <p class="sec-wall-quote">
                "Replacing bulky React UI libraries with pure CSS Hush UI cut our JavaScript bundle size by 84%. The spring physics are pure delight on mobile devices."
              </p>
              <div class="sec-wall-card-footer">
                <div class="sec-wall-author-group">
                  <div class="ui-avatar ui-avatar--lilac" style="width:36px; height:36px;">ER</div>
                  <div class="sec-wall-author-details">
                    <div class="sec-wall-author-name">Elena Rostova</div>
                    <div class="sec-wall-author-role">Lead Frontend @ Veloce</div>
                  </div>
                </div>
                <span class="sec-wall-tag">Frontend</span>
              </div>
            </div>
          </div>

          <!-- Column 2 -->
          <div class="sec-wall-col">
            <!-- Review 3 -->
            <div class="sec-wall-card" data-category="founders">
              <div class="sec-wall-stars">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <p class="sec-wall-quote">
                "The accessible keyboard navigation, focus indicators, and tokenized light/dark theme switching worked out of the box on day one. Our QA pass took zero extra time."
              </p>
              <div class="sec-wall-card-footer">
                <div class="sec-wall-author-group">
                  <div class="ui-avatar ui-avatar--butter" style="width:36px; height:36px;">JH</div>
                  <div class="sec-wall-author-details">
                    <div class="sec-wall-author-name">Julian Hayes</div>
                    <div class="sec-wall-author-role">Head of Product @ Loomic</div>
                  </div>
                </div>
                <span class="sec-wall-tag">Product Lead</span>
              </div>
            </div>

            <!-- Review 4 -->
            <div class="sec-wall-card" data-category="design">
              <div class="sec-wall-stars">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <p class="sec-wall-quote">
                "Finally a UI library that respects typography, pastel aesthetics, and micro-interactions. The spring docks and color pickers feel bespoke and calm."
              </p>
              <div class="sec-wall-card-footer">
                <div class="sec-wall-author-group">
                  <div class="ui-avatar ui-avatar--blush" style="width:36px; height:36px;">SL</div>
                  <div class="sec-wall-author-details">
                    <div class="sec-wall-author-name">Sophia Lin</div>
                    <div class="sec-wall-author-role">Principal Designer @ Aura</div>
                  </div>
                </div>
                <span class="sec-wall-tag">Design System</span>
              </div>
            </div>
          </div>

          <!-- Column 3 -->
          <div class="sec-wall-col">
            <!-- Review 5 -->
            <div class="sec-wall-card" data-category="engineering">
              <div class="sec-wall-stars">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <p class="sec-wall-quote">
                "I've used Tailwind, Chakra, and Radix. Hush UI is the first system that feels genuinely calm and joyful to write vanilla code in. The components just work."
              </p>
              <div class="sec-wall-card-footer">
                <div class="sec-wall-author-group">
                  <div class="ui-avatar ui-avatar--sage" style="width:36px; height:36px;">AR</div>
                  <div class="sec-wall-author-details">
                    <div class="sec-wall-author-name">Alex Rivera</div>
                    <div class="sec-wall-author-role">Fullstack Engineer</div>
                  </div>
                </div>
                <span class="sec-wall-tag">Verified Developer</span>
              </div>
            </div>

            <!-- Review 6 -->
            <div class="sec-wall-card" data-category="founders">
              <div class="sec-wall-stars">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <p class="sec-wall-quote">
                "Our team of 40 developers standardized on Hush UI tokens across 6 applications in under a week. It eliminated hundreds of lines of boilerplate CSS."
              </p>
              <div class="sec-wall-card-footer">
                <div class="sec-wall-author-group">
                  <div class="ui-avatar ui-avatar--lilac" style="width:36px; height:36px;">TP</div>
                  <div class="sec-wall-author-details">
                    <div class="sec-wall-author-name">Tariq Patel</div>
                    <div class="sec-wall-author-role">VP Engineering @ CloudScale</div>
                  </div>
                </div>
                <span class="sec-wall-tag">Enterprise Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,
    html: `<!-- Customer Wall of Love & Testimonials Section -->
<section class="sec-wall-section">
  <div class="sec-wall-header">
    <span class="ui-catalog-badge">Wall of Love</span>
    <h2 class="sec-wall-title">Trusted by Leading Product Teams</h2>
    <p class="sec-wall-subtitle">See how developers and designers use Hush UI.</p>
  </div>

  <div class="sec-wall-grid">
    <!-- Testimonial Card -->
    <div class="sec-wall-card">
      <div class="sec-wall-stars">★★★★★</div>
      <p class="sec-wall-quote">"Hush UI gave our product suite an unfair design advantage."</p>
      <div class="sec-wall-card-footer">
        <div class="sec-wall-author-group">
          <div class="ui-avatar ui-avatar--sage">MK</div>
          <div class="sec-wall-author-details">
            <div class="sec-wall-author-name">Marcus Kane</div>
            <div class="sec-wall-author-role">Founder @ Stride AI</div>
          </div>
        </div>
        <span class="sec-wall-tag">Verified Customer</span>
      </div>
    </div>
  </div>
</section>`,
    css: `.sec-wall-section {
  padding: clamp(32px, 6vw, 76px) 16px;
  max-width: 1120px;
  margin: 0 auto;
}
.sec-wall-header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 44px auto;
}
.sec-wall-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
@media (max-width: 960px) {
  .sec-wall-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 620px) {
  .sec-wall-grid { grid-template-columns: 1fr; }
}
.sec-wall-card {
  background-color: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg, 16px);
  padding: 24px;
  box-shadow: var(--shadow-xs);
  transition: transform 150ms var(--spring-hover), box-shadow 150ms var(--spring-hover), border-color 150ms ease;
}
.sec-wall-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
  border-color: color-mix(in srgb, var(--primary) 50%, var(--border));
}`,
    js: `// Category filter switcher for Wall of Love
const filterBtns = document.querySelectorAll('.sec-wall-filter-btn');
const cards = document.querySelectorAll('.sec-wall-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const filter = btn.dataset.filter;

    cards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});`
  }
];


