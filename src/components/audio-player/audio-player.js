/**
 * Hush UI - Audio & Waveform Player Widget Controller
 * Manages play/pause state simulation, scrubbing through waveform bars, and time formatting.
 */
export function initAudioPlayer(container = document) {
  const players = container.querySelectorAll
    ? container.querySelectorAll('.ui-audio-player')
    : document.querySelectorAll('.ui-audio-player');

  players.forEach((player) => {
    if (player.dataset.audioInitialized === 'true') return;
    player.dataset.audioInitialized = 'true';

    const playBtn = player.querySelector('.ui-audio-play-btn');
    const waveform = player.querySelector('.ui-audio-waveform-wrap');
    const timeDisplay = player.querySelector('.ui-audio-timestamps');
    const bars = Array.from(player.querySelectorAll('.ui-waveform-bar'));

    let isPlaying = false;
    let progressPercent = 35; // default 35%
    let durationSeconds = 198; // 3:18
    let interval = null;

    function formatTime(sec) {
      const m = Math.floor(sec / 60);
      const s = Math.floor(sec % 60);
      return `${m}:${s < 10 ? '0' : ''}${s}`;
    }

    function updateView() {
      const playedCount = Math.round((progressPercent / 100) * bars.length);
      bars.forEach((bar, idx) => {
        if (idx < playedCount) {
          bar.classList.add('is-played');
        } else {
          bar.classList.remove('is-played');
        }
      });

      if (timeDisplay) {
        const currentSec = (progressPercent / 100) * durationSeconds;
        timeDisplay.textContent = `${formatTime(currentSec)} / ${formatTime(durationSeconds)}`;
      }
    }

    if (playBtn) {
      playBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        player.classList.toggle('is-playing', isPlaying);

        if (isPlaying) {
          interval = setInterval(() => {
            progressPercent += 0.8;
            if (progressPercent >= 100) {
              progressPercent = 100;
              isPlaying = false;
              player.classList.remove('is-playing');
              clearInterval(interval);
            }
            updateView();
          }, 300);
        } else {
          clearInterval(interval);
        }
      });
    }

    if (waveform) {
      waveform.addEventListener('click', (e) => {
        const rect = waveform.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        progressPercent = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
        updateView();
      });
    }

    updateView();
  });
}
