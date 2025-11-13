// =====================
// SEARCH
// =====================
const input = document.querySelector(".search input");
const games = document.querySelectorAll("#games img");

if (input) {
  input.addEventListener("input", () => {
    const searchTerm = input.value.toLowerCase();
    games.forEach((img) => {
      const alt = (img.alt || "").toLowerCase();
      img.style.display = alt.includes(searchTerm) ? "block" : "none";
    });
  });
}

// =====================
// SETTINGS PANEL
// =====================
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

// =====================
// THEME HANDLING
// =====================
function applyTheme(theme) {
  const body = document.body;
  const themes = [
    "midnightplus",
    "cosmicdrift",
    "galaxyparallax",
    "warpcore",
    "neonpulse",
    "greyminimal"
  ];

  themes.forEach((t) => body.classList.remove("theme-" + t));
  body.classList.add("theme-" + theme);

  localStorage.setItem("av-theme", theme);

  document.querySelectorAll(".theme-option").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.theme === theme);
  });
}

// =====================
// FONT HANDLING
// =====================
function applyFont(fontKey) {
  const fonts = {
    montserrat: "'Montserrat', sans-serif",
    orbitron: "'Orbitron', sans-serif",
    nunito: "'Nunito', sans-serif"
  };

  const selected = fonts[fontKey] || fonts.montserrat;
  document.documentElement.style.setProperty("--font-family", selected);
  localStorage.setItem("av-font", fontKey);

  document.querySelectorAll(".font-option").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.font === fontKey);
  });
}

// =====================
// GLOW HANDLING
// =====================
function applyGlow(level) {
  let strength = 1;

  if (level === "low") strength = 0.5;
  if (level === "medium") strength = 1;
  if (level === "high") strength = 1.6;

  document.documentElement.style.setProperty("--glow-strength", strength);
  localStorage.setItem("av-glow", level);

  document.querySelectorAll(".glow-option").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.glow === level);
  });
}

// =====================
// INIT ON LOAD
// =====================
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("av-theme") || "midnightplus";
  const savedFont = localStorage.getItem("av-font") || "montserrat";
  const savedGlow = localStorage.getItem("av-glow") || "medium";

  applyTheme(savedTheme);
  applyFont(savedFont);
  applyGlow(savedGlow);

  // Hook theme buttons
  document.querySelectorAll(".theme-option").forEach((btn) => {
    btn.addEventListener("click", () => applyTheme(btn.dataset.theme));
  });

  // Hook font buttons
  document.querySelectorAll(".font-option").forEach((btn) => {
    btn.addEventListener("click", () => applyFont(btn.dataset.font));
  });

  // Hook glow buttons
  document.querySelectorAll(".glow-option").forEach((btn) => {
    btn.addEventListener("click", () => applyGlow(btn.dataset.glow));
  });
});
