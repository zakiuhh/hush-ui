import './index.css';

import { initAccordions } from './components/accordion/accordion.js';
import { initDrawers } from './components/drawer/drawer.js';
import { initDropdowns } from './components/dropdown/dropdown.js';
import { initModals } from './components/modal/modal.js';
import { initPopovers } from './components/popover/popover.js';
import { initTabs } from './components/tabs/tabs.js';
import { showToast } from './components/toast/toast.js';
import { initCommandPalette } from './components/command/command.js';
import { initCombobox } from './components/combobox/combobox.js';
import { initCounters } from './components/counter/counter.js';
import { initCompare } from './components/compare/compare.js';
import { initMarquee } from './components/marquee/marquee.js';
import { initSpotlight } from './components/spotlight/spotlight.js';
import { initDock } from './components/dock/dock.js';
import { initSliders } from './components/slider/slider.js';
import { initDropzone } from './components/dropzone/dropzone.js';
import { initCodeBlocks } from './components/code-block/code-block.js';
import { initTickers } from './components/ticker/ticker.js';
import { initTreeViews } from './components/tree-view/tree-view.js';
import { initRatings } from './components/rating/rating.js';
import { initSegmentedControls } from './components/segmented/segmented.js';
import { initColorPickers } from './components/color-picker/color-picker.js';
import { initContextMenu } from './components/context-menu/context-menu.js';
import { initOtpInput } from './components/otp-input/otp-input.js';
import { initAudioPlayer } from './components/audio-player/audio-player.js';
import { initTagInput } from './components/tag-input/tag-input.js';
import { initPasswordMeter } from './components/password-meter/password-meter.js';
import { initDatePicker } from './components/date-picker/date-picker.js';
import { initInlineEdit } from './components/inline-edit/inline-edit.js';
import { initToc } from './components/toc/toc.js';
import { initPagination } from './components/pagination/pagination.js';
import { initSparkline } from './components/sparkline/sparkline.js';
import { initMetricTile } from './components/metric-tile/metric-tile.js';
import { initCarousel } from './components/carousel/carousel.js';
import { initTheme, toggleTheme } from './utils/theme.js';
import { copyToClipboard } from './utils/clipboard.js';
import { initMobileMenu } from './utils/dom.js';
import { escapeHtml, highlightCode } from './utils/highlight.js';

export {
  initTheme,
  toggleTheme,
  copyToClipboard,
  initMobileMenu,
  escapeHtml,
  highlightCode,
  initAccordions,
  initDrawers,
  initDropdowns,
  initModals,
  initPopovers,
  initTabs,
  initCommandPalette,
  initCombobox,
  initCounters,
  initCompare,
  initMarquee,
  initSpotlight,
  initDock,
  initSliders,
  initDropzone,
  initCodeBlocks,
  initTickers,
  initTreeViews,
  initRatings,
  initSegmentedControls,
  initColorPickers,
  initContextMenu,
  initOtpInput,
  initAudioPlayer,
  initTagInput,
  initPasswordMeter,
  initDatePicker,
  initInlineEdit,
  initToc,
  initPagination,
  initSparkline,
  initMetricTile,
  initCarousel,
  showToast
};

export function initHushUI() {
  initTheme();
  initAccordions();
  initDrawers();
  initDropdowns();
  initModals();
  initPopovers();
  initTabs();
  initCommandPalette();
  initCombobox();
  initCounters();
  initCompare();
  initMarquee();
  initSpotlight();
  initDock();
  initSliders();
  initDropzone();
  initCodeBlocks();
  initTickers();
  initTreeViews();
  initRatings();
  initSegmentedControls();
  initColorPickers();
  initContextMenu();
  initOtpInput();
  initAudioPlayer();
  initTagInput();
  initPasswordMeter();
  initDatePicker();
  initInlineEdit();
  initToc();
  initPagination();
  initSparkline();
  initMetricTile();
  initCarousel();
}
