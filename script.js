// ===== SEARCH FUNCTION =====
const input = document.querySelector('input');
const games = document.querySelectorAll('#games img, .games-grid img');

input.addEventListener('input', () => {
  const searchTerm = input.value.toLowerCase();
  games.forEach(game => {
    game.parentElement.style.display = game.alt.toLowerCase().includes(searchTerm) ? 'block' : 'none';
  });
});

// ===== SETTINGS =====
window.addEventListener('DOMContentLoaded', () => {
  const savedColor = localStorage.getItem('av-games-bg-color');
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    document.querySelectorAll('.color-option').forEach(option => {
      const color = option.getAttribute('onclick').match(/#[0-9a-fA-F]{6}/)[0];
      if (color === savedColor) option.classList.add('selected');
    });
  }
});

function openSettings() {
  document.getElementById('settingsPanel').classList.add('open');
  document.getElementById('settingsBackdrop').classList.add('open');
}

function closeSettings() {
  document.getElementById('settingsPanel').classList.remove('open');
  document.getElementById('settingsBackdrop').classList.remove('open');
}

function changeColor(color, element) {
  document.body.style.backgroundColor = color;
  localStorage.setItem('av-games-bg-color', color);
  document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
  element.classList.add('selected');
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeSettings();
});

// ===== WELCOME SCREEN =====
window.addEventListener("DOMContentLoaded", () => {
  const welcomeScreen = document.getElementById("welcome-screen");
  if (!welcomeScreen) return;
  const seen = localStorage.getItem("seenWelcome");

  if (!seen) {
    welcomeScreen.classList.add("show");
    setTimeout(() => {
      welcomeScreen.classList.remove("show");
      welcomeScreen.classList.add("fade-out");
      setTimeout(() => {
        welcomeScreen.style.display = "none";
        localStorage.setItem("seenWelcome", "true");
      }, 1000);
    }, 2000);
  } else {
    welcomeScreen.style.display = "none";
  }
});
