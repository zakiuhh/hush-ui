/**
 * Hush UI - Touch-Swipeable Carousel & Card Reel
 */

export function initCarousel(container = document) {
  const carousels = container.querySelectorAll
    ? container.querySelectorAll('.ui-carousel')
    : document.querySelectorAll('.ui-carousel');

  carousels.forEach((carousel) => {
    if (carousel.dataset.carouselInitialized === 'true') return;
    carousel.dataset.carouselInitialized = 'true';

    const track = carousel.querySelector('.ui-carousel-track');
    const slides = carousel.querySelectorAll('.ui-carousel-slide');
    if (!track || slides.length === 0) return;

    const prevBtn = carousel.querySelector('.ui-carousel-btn--prev');
    const nextBtn = carousel.querySelector('.ui-carousel-btn--next');
    const indicatorsWrap = carousel.querySelector('.ui-carousel-indicators');
    const counterEl = carousel.querySelector('.ui-carousel-counter');

    const totalSlides = slides.length;
    let currentIndex = parseInt(carousel.dataset.startIndex || '0', 10);
    if (isNaN(currentIndex) || currentIndex < 0 || currentIndex >= totalSlides) {
      currentIndex = 0;
    }

    const isLoop = carousel.dataset.loop === 'true';
    const isAutoplay = carousel.dataset.autoplay === 'true';
    const autoplayInterval = parseInt(carousel.dataset.interval || '4000', 10);
    let autoplayTimer = null;

    // Build indicator dots if wrapper is empty
    if (indicatorsWrap && indicatorsWrap.children.length === 0) {
      for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = `ui-carousel-dot ${i === currentIndex ? 'is-active' : ''}`;
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.dataset.slideIndex = i;
        dot.addEventListener('click', () => goToSlide(i));
        indicatorsWrap.appendChild(dot);
      }
    }

    function updateIndicators() {
      if (indicatorsWrap) {
        const dots = indicatorsWrap.querySelectorAll('.ui-carousel-dot');
        dots.forEach((d, idx) => {
          d.classList.toggle('is-active', idx === currentIndex);
        });
      }
      if (counterEl) {
        counterEl.textContent = `${currentIndex + 1} / ${totalSlides}`;
      }
      if (prevBtn && !isLoop) {
        prevBtn.disabled = currentIndex === 0;
      }
      if (nextBtn && !isLoop) {
        nextBtn.disabled = currentIndex === totalSlides - 1;
      }
    }

    function goToSlide(index) {
      if (index < 0) {
        index = isLoop ? totalSlides - 1 : 0;
      } else if (index >= totalSlides) {
        index = isLoop ? 0 : totalSlides - 1;
      }

      currentIndex = index;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      updateIndicators();

      carousel.dispatchEvent(new CustomEvent('carousel:change', {
        bubbles: true,
        detail: { currentIndex, totalSlides }
      }));
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        goToSlide(currentIndex - 1);
        resetAutoplay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        goToSlide(currentIndex + 1);
        resetAutoplay();
      });
    }

    // Touch & Mouse Drag Physics
    let startX = 0;
    let currentDeltaX = 0;
    let isDragging = false;
    let startPos = 0;

    function onDragStart(clientX) {
      isDragging = true;
      startX = clientX;
      currentDeltaX = 0;
      startPos = -currentIndex * carousel.offsetWidth;
      track.classList.add('is-dragging');
      stopAutoplay();
    }

    function onDragMove(clientX) {
      if (!isDragging) return;
      currentDeltaX = clientX - startX;
      const currentTranslate = startPos + currentDeltaX;
      track.style.transform = `translateX(${currentTranslate}px)`;
    }

    function onDragEnd() {
      if (!isDragging) return;
      isDragging = false;
      track.classList.remove('is-dragging');

      const width = carousel.offsetWidth;
      const threshold = Math.min(width * 0.18, 60);

      if (currentDeltaX < -threshold) {
        goToSlide(currentIndex + 1);
      } else if (currentDeltaX > threshold) {
        goToSlide(currentIndex - 1);
      } else {
        goToSlide(currentIndex); // Snap back
      }

      startAutoplay();
    }

    // Touch events
    carousel.addEventListener('touchstart', (e) => onDragStart(e.touches[0].clientX), { passive: true });
    carousel.addEventListener('touchmove', (e) => onDragMove(e.touches[0].clientX), { passive: true });
    carousel.addEventListener('touchend', onDragEnd);

    // Mouse drag events
    carousel.addEventListener('mousedown', (e) => {
      if (e.target.closest('.ui-carousel-btn') || e.target.closest('.ui-carousel-dot')) return;
      onDragStart(e.clientX);
    });
    window.addEventListener('mousemove', (e) => {
      if (isDragging) onDragMove(e.clientX);
    });
    window.addEventListener('mouseup', () => {
      if (isDragging) onDragEnd();
    });

    // Keyboard support
    carousel.setAttribute('tabindex', '0');
    carousel.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToSlide(currentIndex - 1);
        resetAutoplay();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToSlide(currentIndex + 1);
        resetAutoplay();
      }
    });

    // Autoplay functionality
    function startAutoplay() {
      if (!isAutoplay || autoplayTimer) return;
      autoplayTimer = setInterval(() => {
        goToSlide(currentIndex + 1);
      }, autoplayInterval);
    }

    function stopAutoplay() {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    }

    function resetAutoplay() {
      stopAutoplay();
      startAutoplay();
    }

    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);

    // Initialize initial state
    goToSlide(currentIndex);
    if (isAutoplay) startAutoplay();
  });
}
