// =======================
// 🌟 ULTIMATE WEB KIT 🌟
// =======================

// (1) PAGE LOAD ANIMATION
document.addEventListener("DOMContentLoaded", function () {
    console.log("🚀 Website Loaded Successfully!");
    document.body.style.transition = "opacity 1s";
    document.body.style.opacity = "1";
});

// (2) AUTO TEXT CHANGER
let phrases = ["Welcome to My Website!", "Enjoy the Magic of JavaScript!", "Coding is Fun!"];
let phraseIndex = 0;
function changeText() {
    document.getElementById("dynamic-text").innerText = phrases[phraseIndex];
    phraseIndex = (phraseIndex + 1) % phrases.length;
}
setInterval(changeText, 2000);

// (3) DARK MODE TOGGLE
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
document.addEventListener("DOMContentLoaded", () => {
    let darkModeBtn = document.createElement("button");
    darkModeBtn.innerText = "Toggle Dark Mode";
    darkModeBtn.onclick = toggleDarkMode;
    document.body.appendChild(darkModeBtn);
});

// (4) COUNTDOWN TIMER
function startCountdown(seconds) {
    let timer = document.getElementById("countdown");
    function updateTimer() {
        timer.innerText = `⏳ Countdown: ${seconds} sec`;
        if (seconds > 0) {
            seconds--;
            setTimeout(updateTimer, 1000);
        } else {
            timer.innerText = "🎉 Time's Up!";
        }
    }
    updateTimer();
}
startCountdown(10);

// (5) RANDOM QUOTE GENERATOR
let quotes = ["Keep going!", "Believe in yourself!", "Success is near!", "Hard work pays off!"];
function showRandomQuote() {
    document.getElementById("quote-box").innerText = quotes[Math.floor(Math.random() * quotes.length)];
}
document.addEventListener("DOMContentLoaded", () => {
    let quoteBtn = document.createElement("button");
    quoteBtn.innerText = "Show Random Quote";
    quoteBtn.onclick = showRandomQuote;
    document.body.appendChild(quoteBtn);
});

// (6) BUTTON CLICK ANIMATION
document.addEventListener("DOMContentLoaded", () => {
    let btn = document.createElement("button");
    btn.innerText = "Click Me!";
    btn.onclick = () => {
        btn.style.transform = "scale(1.1)";
        setTimeout(() => btn.style.transform = "scale(1)", 200);
    };
    document.body.appendChild(btn);
});
