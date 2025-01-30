// Прогресс-бар для курсов
document.querySelectorAll('.progress-bar').forEach(progressBar => {
    const progress = progressBar.querySelector('.progress');
    const progressPercentage = progress.style.width;
    // Можно добавить анимацию изменения прогресса, если это нужно
  });
  
  // Фильтрация курсов
  document.getElementById('category-filter').addEventListener('change', function() {
    const selectedCategory = this.value;
    const courseCards = document.querySelectorAll('.course-card');
  
    courseCards.forEach(card => {
      const category = card.dataset.category;
      if (selectedCategory === 'all' || selectedCategory === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
  