/* ============================================
   SEARCH FUNCTIONALITY
============================================ */
const input = document.querySelector(".search input");
const games = document.querySelectorAll("#games img");

if (input) {
    input.addEventListener("input", () => {
        const searchTerm = input.value.toLowerCase();
        games.forEach((game) => {
            const alt = (game.alt || "").toLowerCase();
            game.style.display = alt.includes(searchTerm) ? "block" : "none";
        });
    });
}

/* ============================================
   SETTINGS PANEL OPEN/CLOSE
============================================ */
function openSettings() {
    document.getElementById("settingsPanel").classList.add("open");
    document.getElementById("settingsBackdrop").classList.add("open");
}

function closeSettings() {
    document.getElementById("settingsPanel").classList.remove("open");
    document.getElementById("settingsBackdrop").classList.remove("open");
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSettings();
});

/* ============================================
   SHOOTING STAR (EVERY 10s)
============================================ */
function createShootingStar() {
    const star = document.getElementById("shooting-star");
    if (!star) return;

    const startX = Math.random() * window.innerWidth * 0.5;
    const startY = Math.random() * window.innerHeight * 0.4;

    star.style.left = startX + "px";
    star.style.top = startY + "px";

    // reset animation
    star.style.animation = "none";
    requestAnimationFrame(() => {
        star.style.animation = "shootingStar 1s linear";
    });
}

setInterval(createShootingStar, 10000);

/* ============================================
   THEMES + FONTS
============================================ */

// All theme keys
const themes = [
    "midnightplus",
    "cosmicdrift",
    "galaxyparallax",
    "neonpulse",
    "greyminimal",
    "eventhorizon",
    "aurorapulse"
];

// Font mapping for CSS
const fonts = {
    montserrat: "'Montserrat', sans-serif",
    audiowide: "'Audiowide', cursive",
    orbitron: "'Orbitron', sans-serif",
    exo2: "'Exo 2', sans-serif",
    quicksand: "'Quicksand', sans-serif"
};

function applyTheme(themeKey) {
    const body = document.body;

    themes.forEach(t => body.classList.remove("theme-" + t));
    body.classList.add("theme-" + themeKey);

    localStorage.setItem("av-theme", themeKey);

    document.querySelectorAll(".theme-option").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.theme === themeKey);
    });
}

function applyFont(fontKey) {
    const fontValue = fonts[fontKey] || fonts.montserrat;
    document.documentElement.style.setProperty("--font-family", fontValue);

    localStorage.setItem("av-font", fontKey);

    document.querySelectorAll(".font-option").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.font === fontKey);
    });
}

/* ============================================
   INIT ON LOAD
============================================ */
window.addEventListener("DOMContentLoaded", () => {
    // Load saved theme + font
    const savedTheme = localStorage.getItem("av-theme") || "midnightplus";
    const savedFont  = localStorage.getItem("av-font")  || "montserrat";

    applyTheme(savedTheme);
    applyFont(savedFont);

    // Theme buttons
    document.querySelectorAll(".theme-option").forEach(btn => {
        btn.addEventListener("click", () => {
            const themeKey = btn.dataset.theme;
            applyTheme(themeKey);
        });
    });

    // Font buttons
    document.querySelectorAll(".font-option").forEach(btn => {
        btn.addEventListener("click", () => {
            const fontKey = btn.dataset.font;
            applyFont(fontKey);
        });
    });
});
