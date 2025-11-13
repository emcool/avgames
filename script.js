// ===================================
// SEARCH
// ===================================
const input = document.querySelector(".search input");
const games = document.querySelectorAll("#games img");

if (input) {
    input.addEventListener("input", () => {
        const term = input.value.toLowerCase();
        games.forEach(img =>
            img.style.display = img.alt.toLowerCase().includes(term) ? "block" : "none"
        );
    });
}

// ===================================
// SETTINGS PANEL
// ===================================
function openSettings() {
    document.getElementById("settingsPanel").classList.add("open");
    document.getElementById("settingsBackdrop").classList.add("open");
    document.querySelector(".settings-btn").classList.add("spin");
}

function closeSettings() {
    document.getElementById("settingsPanel").classList.remove("open");
    document.getElementById("settingsBackdrop").classList.remove("open");
    document.querySelector(".settings-btn").classList.remove("spin");
}

// ===================================
// THEMES
// ===================================
function applyTheme(theme) {
    const themes = [
        "midnightplus",
        "cosmicdrift",
        "galaxyparallax",
        "warpcore",
        "neonpulse",
        "greyminimal",
        "eventhorizon"
    ];

    themes.forEach(t => document.body.classList.remove("theme-" + t));
    document.body.classList.add("theme-" + theme);

    localStorage.setItem("av-theme", theme);

    document.querySelectorAll(".theme-option").forEach(btn =>
        btn.classList.toggle("active", btn.dataset.theme === theme)
    );
}

// ===================================
// FONT
// ===================================
function applyFont(fontKey) {
    const fonts = {
        montserrat: "'Montserrat', sans-serif",
        orbitron: "'Orbitron', sans-serif",
        nunito: "'Nunito', sans-serif"
    };

    document.documentElement.style.setProperty("--font-family", fonts[fontKey]);
    localStorage.setItem("av-font", fontKey);

    document.querySelectorAll(".font-option").forEach(btn =>
        btn.classList.toggle("active", btn.dataset.font === fontKey)
    );
}

// ===================================
// GLOW
// ===================================
function applyGlow(level) {
    const levels = { low: 0.5, medium: 1, high: 1.6 };
    document.documentElement.style.setProperty("--glow-strength", levels[level]);
    localStorage.setItem("av-glow", level);

    document.querySelectorAll(".glow-option").forEach(btn =>
        btn.classList.toggle("active", btn.dataset.glow === level)
    );
}

// ===================================
// SHOOTING STAR
// ===================================
const shootingStar = document.getElementById("shooting-star");

function spawnShootingStar() {
    shootingStar.style.opacity = "1";
    shootingStar.style.animation = "shootingStar 1.2s linear forwards";

    setTimeout(() => {
        shootingStar.style.opacity = "0";
        shootingStar.style.animation = "none";
    }, 1200);
}

setInterval(spawnShootingStar, 10000); // Every 10 sec

// ===================================
// INIT
// ===================================
window.addEventListener("DOMContentLoaded", () => {
    applyTheme(localStorage.getItem("av-theme") || "midnightplus");
    applyFont(localStorage.getItem("av-font") || "montserrat");
    applyGlow(localStorage.getItem("av-glow") || "medium");

    document.querySelectorAll(".theme-option").forEach(btn =>
        btn.addEventListener("click", () => applyTheme(btn.dataset.theme))
    );

    document.querySelectorAll(".font-option").forEach(btn =>
        btn.addEventListener("click", () => applyFont(btn.dataset.font))
    );

    document.querySelectorAll(".glow-option").forEach(btn =>
        btn.addEventListener("click", () => applyGlow(btn.dataset.glow))
    );
});
