// SEARCH
const input = document.querySelector(".search input");
const games = document.querySelectorAll("#games img");

input.addEventListener("input", () => {
    const searchTerm = input.value.toLowerCase();
    games.forEach(img => {
        img.style.display = img.alt.toLowerCase().includes(searchTerm)
            ? "block"
            : "none";
    });
});


// SETTINGS PANEL
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


// BACKGROUND COLOR
function changeColor(color, element) {
    document.body.style.background = color;
    localStorage.setItem("av-bg", color);

    document.querySelectorAll(".color-option").forEach(opt => 
        opt.classList.remove("selected")
    );
    element.classList.add("selected");
}


// RESTORE SAVED COLOR
window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("av-bg");
    if (saved) document.body.style.background = saved;
});
