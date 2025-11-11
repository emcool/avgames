// Search functionality
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

// SETTINGS FUNCTIONALITY
window.addEventListener('DOMContentLoaded', function() {
  const savedColor = localStorage.getItem('av-games-bg-color');
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    document.querySelectorAll('.color-option').forEach(option => {
      const colorValue = option.getAttribute('onclick').match(/#[0-9a-fA-F]{6}/)[0];
      if (colorValue === savedColor) option.classList.add('selected');
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

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') closeSettings();
});

// WELCOME SCREEN
window.addEventListener("load", () => {
  const welcomeScreen = document.getElementById("welcome-screen");
  if (!welcomeScreen) return;

  const seenWelcome = localStorage.getItem("seenWelcome");

  if (!seenWelcome) {
    welcomeScreen.classList.add("show");
    setTimeout(() => {
      welcomeScreen.classList.add("fade-out");
      setTimeout(() => {
        welcomeScreen.style.display = "none";
        localStorage.setItem("seenWelcome", "true");
      }, 1000);
    }, 2500);
  } else {
    welcomeScreen.style.display = "none";
  }
});
