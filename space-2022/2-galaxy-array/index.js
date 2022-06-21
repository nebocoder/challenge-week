// Task:
// Write a function to display a galaxy of stars (at least 100) in the DOM.
// Note: This requires very little code!
const galaxy = document.getElementById('galaxy');

function renderStars() {
  for (let i = 0; i < 200; i++) {
    galaxy.innerHTML += `<p style="font-size:${fontSize()}px">⭐</p>`;
  }
}

const fontSize = () => Math.floor(Math.random() * 32 + 4);

renderStars();

// Stretch goals:
// - 1. Ensure that the stars always fill each line
// - 2. Add different sizes of star
