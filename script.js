const input = document.querySelector('input');
const games = document.querySelectorAll('#games img');

input.addEventListener('input', () => {
  const searchTerm = input.value.toLowerCase();
  games.forEach(game => {
    if (game.alt.toLowerCase().includes(searchTerm)) {
      game.style.display = 'block';
    } else {
      game.style.display = 'none';
    }
  });
});

// SETTINGS PANEL
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

// Restore selected background
window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("av-bg");
    if (saved) document.body.style.backgroundColor = saved;
});
