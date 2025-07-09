// glitch.js
document.addEventListener("DOMContentLoaded", () => {
    const text = document.getElementById("text");
    if (!text) return;

    /*const original = text.textContent;
    /*const chars = "!@#$%^&*()_+1234567890";*/
    const originalSegments = ["Fa", "r", "ha", "n", "Mo", "ha", "mm", "ad"];
    const chars = ["ফা", "র", "হা", "ন", "মো", "হা", "ম্ম", "দ"]
    /*function glitch() {
        const glitched = original.split('').map(char => 
            Math.random() > 0.7 ? chars[Math.floor(Math.random() * chars.length)] : char
        ).join('');
        text.textContent = glitched;
        setTimeout(() => text.textContent = original, 1000);
    }

    setInterval(glitch, 2000); // glitch every second*/
    let working = original;     
        // Apply each segment transformation
        originalSegments.forEach((seg, i) => {
            if (Math.random() > 0.7) {
                // Replace only first instance of the segment to avoid over-replacement
                working = working.replace(seg, chars[i]);
            }
        });
        text.textContent = working;
        // Reset after a short delay
        setTimeout(() => text.textContent = original, 150);
    }
    setInterval(glitch, 1000); // Glitch every second
});

