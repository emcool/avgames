/* ============================================
   SEARCH FUNCTIONALITY
============================================ */
const input = document.querySelector(".search input");
const games = document.querySelectorAll("#games img");

if (input) {
    input.addEventListener("input", () => {
        const searchTerm = input.value.toLowerCase();
        games.forEach((game) => {
            game.style.display = game.alt.toLowerCase().includes(searchTerm)
                ? "block"
                : "none";
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
   STAR SHOOTING (EVERY 10 SECONDS)
============================================ */
function createShootingStar() {
    const star = document.getElementById("shooting-star");

    if (!star) return;

    // Reset position each time
    const startX = Math.random() * window.innerWidth * 0.5;
    const startY = Math.random() * window.innerHeight * 0.4;

    star.style.left = startX + "px";
    star.style.top = startY + "px";

    star.style.animation = "none";

    // Restart animation
    requestAnimationFrame(() => {
        star.style.animation = "shootingStar 1s linear";
    });
}

// Trigger every 10 seconds
setInterval(createShootingStar, 10000);

/* ============================================
   THEME SWITCHING SYSTEM
============================================ */

// All supported themes
const themes = [
    "midnightplus",
    "cosmicdrift",
    "galaxyparallax",
    "neonpulse",
    "greyminimal",
    "eventhorizon",
    "aurorapulse"
];

// Load saved theme
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("av-theme");
    if (savedTheme && themes.includes(savedTheme)) {
        document.body.className = "theme-" + savedTheme;
    }
});

// Handle theme clicks
document.querySelectorAll(".theme-option").forEach(button => {
    button.addEventListener("click", () => {
        const selectedTheme = button.getAttribute("data-theme");

        // Remove old theme classes
        themes.forEach(t => {
            document.body.classList.remove("theme-" + t);
        });

        // Apply new
        document.body.classList.add("theme-" + selectedTheme);

        // Save to local storage
        localStorage.setItem("av-theme", selectedTheme);
    });
});
