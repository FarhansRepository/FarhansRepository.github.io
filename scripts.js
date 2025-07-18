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
  const words = ["FARHAN :: SITE", "HE / HIM / সে", "বাঙ্গালী - AMERICAN", "مسلم ملحد", "B.S. in COMP-SCI"];
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

/*
document.addEventListener("DOMContentLoaded", () => {
  // Select the site-header element instead of matrixCanvas
  const siteHeader = document.querySelector('.site-header');
  
  // Create a canvas inside site-header (if needed)
  const canvas = document.createElement('canvas');
  siteHeader.appendChild(canvas);
  
  // Set canvas dimensions to match site-header
  canvas.width = siteHeader.clientWidth;
  canvas.height = siteHeader.clientHeight;
  
  const ctx = canvas.getContext('2d');

  // Katakana + Latin characters
  const chars = "ফারহানদ";

  // Column data
  const fontSize = 18;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array(columns).fill(1); // Tracks Y positions

  function draw() {
    // Semi-transparent black overlay (creates trails)
    ctx.fillStyle = 'rgba(29, 79, 40, 1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Bright green text
    ctx.fillStyle = '#52725b';
    ctx.font = `${fontSize}px monospace`;

    drops.forEach((drop, i) => {
      // Random character
      const text = chars[Math.floor(Math.random() * chars.length)];
      
      // Draw character
      ctx.fillText(text, i * fontSize, drop * fontSize);
      
      // Reset if at bottom + random chance
      if (drop * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    });
  }

  // Animation loop
  setInterval(draw, 33); // ~30fps
});
*/
