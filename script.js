// =========================
// ORIGINAL SEARCH FUNCTION
// =========================
const input = document.querySelector('input');
const games = document.querySelectorAll('#games img');

input.addEventListener('input', () => {
  const searchTerm = input.value.toLowerCase();
  games.forEach(game => {
    game.style.display = game.alt.toLowerCase().includes(searchTerm) ? 'block' : 'none';
  });
});

// =========================
// SETTINGS PANEL
// =========================

function openSettings() {
    document.getElementById("settingsPanel").classList.add("open");
    document.getElementById("settingsBackdrop").classList.add("open");
}

function closeSettings() {
    document.getElementById("settingsPanel").classList.remove("open");
    document.getElementById("settingsBackdrop").classList.remove("open");
}

function changeColor(color, element) {
    document.body.style.backgroundColor = color;
    localStorage.setItem("av-bg", color);

    document.querySelectorAll(".color-option").forEach(opt => opt.classList.remove("selected"));
    element.classList.add("selected");
}

// Restore color on load
window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("av-bg");
    if (saved) document.body.style.backgroundColor = saved;
});

// =========================
// WELCOME SCREEN
// =========================

window.addEventListener("DOMContentLoaded", () => {
    const welcome = document.getElementById("welcome-screen");
    const seen = localStorage.getItem("seen-welcome");

    if (!seen) {
        welcome.classList.add("show");

        setTimeout(() => {
            welcome.classList.remove("show");
            welcome.classList.add("fade-out");

            setTimeout(() => {
                welcome.style.display = "none";
                localStorage.setItem("seen-welcome", "true");
            }, 900);
        }, 2000);

    } else {
        welcome.style.display = "none";
    }
});
