backToTopButton.addEventListener("click", () => {
    const startPosition = window.pageYOffset;
    const targetPosition = 0;
    const distance = targetPosition - startPosition;
    const duration = 500; // milliseconds
  
    let start = null;
  
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const ratio = Math.min(progress / duration, 1);
      window.scrollTo(0, startPosition + distance * ratio);
      if (progress < duration) {
        requestAnimationFrame(step);
      }
    }
  
    requestAnimationFrame(step);
  });

  window.addEventListener("scroll", () => {
    const currentPosition = window.pageYOffset;
    const triggerPosition = 100;
    const opacity = Math.min(currentPosition / triggerPosition, 1);
    backToTopButton.style.opacity = opacity;
  });
  

  
