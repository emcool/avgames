// Search filtering
const input = document.querySelector('input');
const games = document.querySelectorAll('#games img');

if (input && games.length > 0) {
  input.addEventListener('input', () => {
    const term = input.value.toLowerCase();
    games.forEach(game => {
      game.parentElement.style.display = game.alt.toLowerCase().includes(term)
        ? 'inline-block'
        : 'none';
    });
  });
}

// Settings open/close
function openSettings() {
  document.getElementById('settingsPanel').classList.add('open');
  document.getElementById('settingsBackdrop').classList.add('open');
}
function closeSettings() {
  document.getElementById('settingsPanel').classList.remove('open');
  document.getElementById('settingsBackdrop').classList.remove('open');
}

// Change background + save
function setBackground(option, el) {
  let background = option;
  if (option === 'pattern') {
    document.body.style.background = "url('images/pattern-bg.png')";
    document.body.style.backgroundSize = "200px";
    document.body.style.backgroundRepeat = "repeat";
  } else {
    document.body.style.background = option;
  }
  localStorage.setItem('background', option);
  document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
  el.classList.add('selected');
}

// Load saved background
window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('background');
  if (saved === 'pattern') {
    document.body.style.background = "url('images/pattern-bg.png')";
    document.body.style.backgroundSize = "200px";
  } else if (saved) {
    document.body.style.background = saved;
  }
});
