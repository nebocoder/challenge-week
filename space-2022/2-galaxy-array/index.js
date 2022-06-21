// Task:
// Write a function to display a galaxy of stars (at least 100) in the DOM.
// Note: This requires very little code!
const galaxy = document.getElementById('galaxy');

function renderStars() {
  for (let i = 0; i < 100; i++) {
    galaxy.innerHTML += `<p>⭐</p>`;
  }
}

renderStars();

// Stretch goals:
// - 1. Ensure that the stars always fill each line
// - 2. Add different sizes of star
