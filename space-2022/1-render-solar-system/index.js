const solarSystem = document.getElementById('solarSystem');
const planets = [
  {
    name: 'Mercury',
    diameter: 4879,
    color: 'grey',
  },
  {
    name: 'Venus',
    diameter: 12104,
    color: 'yellow',
  },
  {
    name: 'Earth',
    diameter: 12742,
    color: 'green',
  },
  {
    name: 'Mars',
    diameter: 6779,
    color: 'pink',
  },
  {
    name: 'Jupiter',
    diameter: 139822,
    color: 'yellow',
  },
  {
    name: 'Saturn',
    diameter: 116464,
    color: 'orange',
  },
  {
    name: 'Uranus',
    diameter: 50724,
    color: 'grey',
  },
  {
    name: 'Neptune',
    diameter: 49244,
    color: 'blue',
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
    planetEl.style.background = element.color;
    solarSystem.appendChild(planetEl);
  }
}

renderPlanets();

// Stretch goals:
// - 1. Show planet facts on hover
// - 2. Make one side of the planets dark (you can do this with one CSS property!)
