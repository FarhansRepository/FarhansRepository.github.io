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
*/
document.addEventListener("DOMContentLoaded", () => {
    const text = document.getElementById("text");
    if (!text) return;

    const original = text.textContent;
    /*const chars = "!@#$%^&*()_+1234567890";*/
    const chars = "01_#";
    function glitch() {
        const glitched = original.split('').map(char => 
            Math.random() > 0.7 ? chars[Math.floor(Math.random() * chars.length)] : char
        ).join('');
        text.textContent = glitched;
        setTimeout(() => text.textContent = original, 1000);
    }

    setInterval(glitch, 1000); // glitch every second
});
