document.addEventListener('DOMContentLoaded', function() {
  const text = document.getElementById("text");
  const original = text.innerText;
  const chars = "!@#$%^&*()_+1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  function glitch() {
    let newText = "";
    for(let i = 0; i < original.length; i++) {
      if(Math.random() > 0.7) {
        newText += chars[Math.floor(Math.random() * chars.length)];
      } else {
        newText += original[i];
      }
    }
    text.innerText = newText;
  }
  
  setInterval(glitch, 100); // Speed in ms
});
