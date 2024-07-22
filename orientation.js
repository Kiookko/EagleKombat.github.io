document.addEventListener('DOMContentLoaded', () => {
  function adjustLayout() {
    const width = window.innerWidth;
    const container = document.querySelector('.container');
    
    if (width <= 660) {
      container.style.padding = '20px';
      container.style.width = '90%';
      document.body.style.background = 'linear-gradient(135deg, #0a0a1a, #232355, #1b1b2b)';
    } else if (width > 660 && width <= 1024) {
      container.style.padding = '25px';
      container.style.width = '80%';
    } else {
      container.style.padding = '30px';
      container.style.width = '100%';
      document.body.style.background = 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)';
    }
  }

  window.addEventListener('resize', adjustLayout);
  adjustLayout(); // Initial call to set up layout based on current width
});
