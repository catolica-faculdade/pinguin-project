document.addEventListener('DOMContentLoaded', () => {
    const streakPopup = document.querySelector('.streakPopup');
    const openBtns = document.querySelectorAll('.openStreakPopup'); // Pega todos os botões
    const closeBtn = document.querySelector('.closeStreakPopup');
  
    openBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        streakPopup.style.display = 'block';
      });
    });
  
    closeBtn.addEventListener('click', () => {
      streakPopup.style.display = 'none';
    });
  
    window.addEventListener('click', (e) => {
      if (e.target === streakPopup) {
        streakPopup.style.display = 'none';
      }
    });
  });
  