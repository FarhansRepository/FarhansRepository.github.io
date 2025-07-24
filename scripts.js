document.addEventListener('DOMContentLoaded', function() {
  const infoLink = document.getElementById('info-link');
  const aboutSection = document.getElementById('about-me-section');

  infoLink.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Toggle visibility
    aboutSection.classList.toggle('visible');
    
    // Scroll to top only when showing
    if (aboutSection.classList.contains('visible')) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("typewriter");
  const words = ["AM FARHAN", "GO BY HE/HIM/সে", "AM বাঙ্গালী - AMERICAN", "AM مسلم ملحد", "HAVE A B.S. in COMP-SCI"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 50;

  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      // Erase character
      element.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 10; // Faster erase
    } else {
      // Type character
      element.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 50; 
    }

    // Switch between typing/erasing
    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      typingSpeed = 1000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length; // Loop words
      typingSpeed = 100; // Pause before next word
    }

    setTimeout(type, typingSpeed);
  }

  // Start the effect
  type();
});
