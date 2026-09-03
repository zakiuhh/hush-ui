/**
 * Hush UI - Interactive Rating Widget Component
 */
export function initRatings(container = document) {
  const ratingWidgets = container.querySelectorAll('.ui-rating-card');

  const feedbackLabels = {
    1: 'Needs Improvement',
    2: 'Fair Experience',
    3: 'Good Quality',
    4: 'Great UI Component!',
    5: 'Exceptional Motion & Design!'
  };

  ratingWidgets.forEach((card) => {
    const stars = card.querySelectorAll('.ui-rating-star');
    const scoreChip = card.querySelector('.ui-rating-score-chip');
    const feedbackText = card.querySelector('.ui-rating-feedback-text');
    let currentRating = 5;

    function render(rating) {
      stars.forEach((star) => {
        const val = parseInt(star.getAttribute('data-rating-val') || '0', 10);
        star.classList.toggle('is-filled', val <= rating);
      });

      if (scoreChip) scoreChip.textContent = `${rating}.0 / 5.0`;
      if (feedbackText) feedbackText.textContent = feedbackLabels[rating] || 'Rated';
    }

    stars.forEach((star) => {
      const val = parseInt(star.getAttribute('data-rating-val') || '0', 10);

      star.addEventListener('mouseenter', () => render(val));
      star.addEventListener('click', () => {
        currentRating = val;
        render(currentRating);
      });
    });

    card.addEventListener('mouseleave', () => render(currentRating));

    render(currentRating);
  });
}
