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

}); // ========== SETTINGS FUNCTIONALITY ==========

// Load saved background color when page loads
window.addEventListener('DOMContentLoaded', function() {
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
  // Change background color with smooth transition
  document.body.style.backgroundColor = color;
  
  // Save to localStorage so it persists
  localStorage.setItem('av-games-bg-color', color);
  
  // Update selected state visually
  document.querySelectorAll('.color-option').forEach(opt => {
    opt.classList.remove('selected');
  });
  element.classList.add('selected');
}

// Close settings when pressing Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeSettings();
  }
});

// ====== Welcome Screen Script (Only shows once) ======
window.addEventListener("load", () => {
  const welcomeScreen = document.getElementById("welcome-screen");
  if (!welcomeScreen) return;

  // Check if the user has already seen the welcome screen
  const seenWelcome = localStorage.getItem("seenWelcome");

  if (!seenWelcome) {
    // First time visiting — show the welcome animation
    setTimeout(() => {
      welcomeScreen.classList.add("fade-out");

      setTimeout(() => {
        welcomeScreen.style.display = "none";
        // Remember that they’ve seen it
        localStorage.setItem("seenWelcome", "true");
      }, 1000); // fade duration
    }, 2500); // how long it stays visible
  } else {
    // Already visited — hide instantly
    welcomeScreen.style.display = "none";
  }
});

