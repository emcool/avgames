// =====================
// SEARCH FUNCTION
// =====================
const input = document.querySelector('input');
const games = document.querySelectorAll('#games img');

input.addEventListener('input', () => {
    const searchTerm = input.value.toLowerCase();
    games.forEach(game => {
        game.style.display =
            game.alt.toLowerCase().includes(searchTerm) ? 'block' : 'none';
    });
});

// =====================
// SETTINGS PANEL
// =====================
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

    document.querySelectorAll(".color-option").forEach(opt =>
        opt.classList.remove("selected")
    );

    element.classList.add("selected");
}

// Restore chosen color
window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("av-bg");
    if (saved) {
        document.body.style.backgroundColor = saved;

        document.querySelectorAll(".color-option").forEach(opt => {
            if (opt.innerHTML.includes(saved)) {
                opt.classList.add("selected");
            }
        });
    }
});
