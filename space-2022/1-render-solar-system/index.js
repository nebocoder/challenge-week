const solarSystem = document.getElementById('solarSystem');
const planets = [
  {
    name: 'Mercury',
    diameter: 4879,
    color: '#97979f',
  },
  {
    name: 'Venus',
    diameter: 12104,
    color: '#d39c7e',
  },
  {
    name: 'Earth',
    diameter: 12742,
    color: '#8cb1de',
  },
  {
    name: 'Mars',
    diameter: 6779,
    color: '#c67b5c',
  },
  {
    name: 'Jupiter',
    diameter: 139822,
    color: '#d39c7e',
  },
  {
    name: 'Saturn',
    diameter: 116464,
    color: '#c5ab6e',
  },
  {
    name: 'Uranus',
    diameter: 50724,
    color: '#d5fbfc',
  },
  {
    name: 'Neptune',
    diameter: 49244,
    color: '#3e54e8',
  },
];

// Task:
// Write a function to render
// the planets from the planets array using JavaScript.

function renderPlanets() {
  for (let i = 0; i < planets.length; i++) {
    const element = planets[i];
    const planetEl = document.createElement('div');
    planetEl.classList.add('planet');
    planetEl.style.width = element.diameter;
    planetEl.style.background = `linear-gradient(90deg, ${element.color},#223 95%)`;
    solarSystem.appendChild(planetEl);
  }
}

renderPlanets();

// Stretch goals:
// - 1. Show planet facts on hover
// - 2. Make one side of the planets dark (you can do this with one CSS property!)
