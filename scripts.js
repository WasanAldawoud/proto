

document.addEventListener("DOMContentLoaded", () => {
    const phrases = [
      "I'm a Senior CS student",
      "Front-end developer",
      "Data analyst",
      "Back-end in progress",
    ];
  
    const targetElement = document.querySelector(".welcome-section > p");
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
  
    function typeAnimation() {
      const currentPhrase = phrases[phraseIndex];
      
      if (isDeleting) {
        targetElement.textContent = currentPhrase.slice(0, charIndex--);
      } else {
        targetElement.textContent = currentPhrase.slice(0, charIndex++);
      }
  
      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeAnimation, 2000);            // Pause before deleting
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;            // Move to the next phrase
        setTimeout(typeAnimation, 400);             // Pause before typing next phrase
      } else {
        setTimeout(typeAnimation, isDeleting ? 100 : 150);   // Adjust typing/deleting speed
      }
    }
  
    typeAnimation();
  });
  