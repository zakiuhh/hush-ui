/**
 * Hush UI - Calm, Spring-Motion Hush UI design system
 * @version 1.1.0
 */

export interface ToastOptions {
  title?: string;
  message?: string;
  type?: 'default' | 'success' | 'destructive';
  duration?: number;
}

export declare function initTheme(): void;
export declare function toggleTheme(): void;
export declare function initAccordions(container?: HTMLElement | Document): void;
export declare function initDrawers(container?: HTMLElement | Document): void;
export declare function initDropdowns(container?: HTMLElement | Document): void;
export declare function initModals(container?: HTMLElement | Document): void;
export declare function initPopovers(container?: HTMLElement | Document): void;
export declare function initTabs(container?: HTMLElement | Document): void;
export declare function initCommandPalette(container?: HTMLElement | Document): void;
export declare function initCombobox(container?: HTMLElement | Document): void;
export declare function initCounters(container?: HTMLElement | Document): void;
export declare function initCompare(container?: HTMLElement | Document): void;
export declare function initMarquee(container?: HTMLElement | Document): void;
export declare function initSpotlight(container?: HTMLElement | Document): void;
export declare function initDock(container?: HTMLElement | Document): void;
export declare function initSliders(container?: HTMLElement | Document): void;
export declare function initDropzone(container?: HTMLElement | Document): void;
export declare function initCodeBlocks(container?: HTMLElement | Document): void;
export declare function initTickers(container?: HTMLElement | Document): void;
export declare function initTreeViews(container?: HTMLElement | Document): void;
export declare function initRatings(container?: HTMLElement | Document): void;
export declare function initSegmentedControls(container?: HTMLElement | Document): void;
export declare function initColorPickers(container?: HTMLElement | Document): void;
export declare function initContextMenu(container?: HTMLElement | Document): void;
export declare function showToast(titleOrOptions?: string | ToastOptions, message?: string, type?: 'default' | 'success' | 'destructive'): void;

/**
 * Initializes all Hush UI interactive components in the DOM.
 */
export declare function initHushUI(): void;


