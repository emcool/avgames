// ===== SEARCH FUNCTIONALITY =====
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

// ===== SETTINGS FUNCTIONALITY =====

// Load saved background color when page loads
window.addEventListener('DOMContentLoaded', () => {
  const savedColor = localStorage.getItem('av-games-bg-color');
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;

    // Mark the saved color as selected
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
      const colorValue = option.getAttribute('onclick').match(/#[0-9a-fA-F]{6}/)[0];
      if (colorValue === savedColor) {
        option.classList.add('selected');
      }
    });
  }
});

// Open settings panel
function openSettings() {
  document.getElementById('settingsPanel').classList.add('open');
  document.getElementById('settingsBackdrop').classList.add('open');
}

// Close settings panel
function closeSettings() {
  document.getElementById('settingsPanel').classList.remove('open');
  document.getElementById('settingsBackdrop').classList.remove('open');
}

// Change background color
function changeColor(color, element) {
  document.body.style.backgroundColor = color;
  localStorage.setItem('av-games-bg-color', color);

  // Update selected state visually
  document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
  element.classList.add('selected');
}

// Close settings when pressing Escape key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeSettings();
});

// ===== WELCOME SCREEN FUNCTIONALITY =====
window.addEventListener("DOMContentLoaded", () => {
  const welcomeScreen = document.getElementById("welcome-screen");
  if (!welcomeScreen) return;

  const seenWelcome = localStorage.getItem("seenWelcome");

  if (!seenWelcome) {
    // Show the welcome screen
    welcomeScreen.classList.add("show");

    // Fade out after 2.5 seconds
    setTimeout(() => {
      welcomeScreen.classList.remove("show");
      welcomeScreen.classList.add("fade-out");

      // Hide completely after fade-out duration
      setTimeout(() => {
        welcomeScreen.style.display = "none";
        localStorage.setItem("seenWelcome", "true");
      }, 1000); // match fade-out CSS transition
    }, 2500); // visible duration
  } else {
    // Already visited, hide instantly
    welcomeScreen.style.display = "none";
  }
});
