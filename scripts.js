// glitch.js
document.addEventListener("DOMContentLoaded", () => {
    const text = document.getElementById("text");
    if (!text) return;

    const original = text.textContent;
    /*const chars = "!@#$%^&*()_+1234567890";*/
    const chars = "ফারহান01_#";
    function glitch() {
        const glitched = original.split('').map(char => 
            Math.random() > 0.7 ? chars[Math.floor(Math.random() * chars.length)] : char
        ).join('');
        text.textContent = glitched;
        setTimeout(() => text.textContent = original, 1000);
    }

    setInterval(glitch, 2000); // glitch every second
});

