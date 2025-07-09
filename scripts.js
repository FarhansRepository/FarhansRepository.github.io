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
        text.classList.add("glitch-effect");

        setTimeout(() => { 
            text.textContent = original; 
            text.classList.remove("glitch-effect"); 
        }, 2000);
    }
    
    setInterval(glitch, 3000); //run glitch every 1000 seconds
});

