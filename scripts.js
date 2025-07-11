/*
document.addEventListener("DOMContentLoaded", () => {
    const text = document.getElementById("text");
    if (!text) return;

    const original = text.textContent;

    const originalSegments = ["Fa", "r", "ha", "n", " ", "Mo", "ha", "mm", "ad"];
    const chars = ["ফা", "র", "হা", "ন", " ", "মো", "হা", "ম্ম", "দ"];

    function glitch() {
        let working = original;
        
        originalSegments.forEach((seg, i) => {
            if (Math.random() > 0.7) {
                working = working.replace(seg, chars[i]);
            }
        });

        text.textContent = working;

        setTimeout(() => { 
            text.textContent = original; 
        }, 100);
    }
    
    setInterval(glitch, 1000); //run glitch every 1000 seconds
});

document.addEventListener("DOMContentLoaded", () => {
    const text = document.getElementById("name-container");
    if (!text) return;

    const original = text.textContent;
    /*const chars = "!@#$%^&*()_+1234567890";*/
/*
    const chars = "01_#";
    function glitch() {
        const glitched = original.split('').map(char => 
            Math.random() > 0.7 ? chars[Math.floor(Math.random() * chars.length)] : char
        ).join('');
        text.textContent = glitched;
        setTimeout(() => text.textContent = original, 150);
    }

    setInterval(glitch, 1000); // glitch every second
}); */

document.addEventListener("DOMContentLoaded", () => {
    // Target both name elements
    const firstName = document.querySelector(".first-name");
    const lastName = document.querySelector(".last-name");
    
    if (!firstName || !lastName) return;

    const originalFirst = firstName.textContent;
    const originalLast = lastName.textContent;
    const chars = "01_#";
    
    function glitch() {
        // Glitch first name
        const glitchedFirst = originalFirst.split('').map(char => 
            Math.random() > 0.85 ? chars[Math.floor(Math.random() * chars.length)] : char
        ).join('');
        
        // Glitch last name
        const glitchedLast = originalLast.split('').map(char => 
            Math.random() > 0.85 ? chars[Math.floor(Math.random() * chars.length)] : char
        ).join('');
        
        // Apply glitch
        firstName.textContent = glitchedFirst;
        lastName.textContent = glitchedLast;
        
        // Reset after short delay
        setTimeout(() => {
            firstName.textContent = originalFirst;
            lastName.textContent = originalLast;
        }, 150);
    }

    setInterval(glitch, 1000); // Glitch every second
});


document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("typewriter");
  const words = ["farhan's", "him/সে"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 150;

  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      // Erase character
      element.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50; // Faster erase
    } else {
      // Type character
      element.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 150; // Normal speed
    }

    // Switch between typing/erasing
    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      typingSpeed = 1000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length; // Loop words
      typingSpeed = 500; // Pause before next word
    }

    setTimeout(type, typingSpeed);
  }

  // Start the effect
  type();
});
