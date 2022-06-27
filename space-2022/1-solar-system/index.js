const solarSystem = document.getElementById('solarSystem');
const planets = [
  {
    name: 'Mercury 🟤',
    diameter: 4879,
    color: '#97979f',
    fact: 'Mercury’s craters are named after famous artists, musicians and authors.',
  },
  {
    name: 'Venus 🟠',
    diameter: 12104,
    color: '#d39c7e',
    fact: 'Venus is the hottest planet in the solar system.',
  },
  {
    name: 'Earth 🌍',
    diameter: 12742,
    color: '#8cb1de',
    fact: 'Earth’s atmosphere protects us from meteoroids and radiation from the Sun.',
  },
  {
    name: 'Mars 🔴',
    diameter: 6779,
    color: '#c67b5c',
    fact: 'There have been more missions to Mars than any other planet. ',
  },
  {
    name: 'Jupiter 🟡',
    diameter: 139822,
    color: '#d39c7e',
    fact: 'Jupiter has more than double the mass of all the other planets combined.',
  },
  {
    name: 'Saturn 🪐',
    diameter: 116464,
    color: '#c5ab6e',
    fact: 'Saturn has more moons than any other planet in the Solar System. ',
  },
  {
    name: 'Uranus ⚪',
    diameter: 50724,
    color: '#d5fbfc',
    fact: 'Uranus has only been visited by a single spacecraft, Voyager 2. ',
  },
  {
    name: 'Neptune 🔵',
    diameter: 49244,
    color: '#3e54e8',
    fact: 'It takes more than 4 hours for light to reach Neptune from the Sun.',
  },
];

// Task:
// Write a function to render
// the planets from the planets array using JavaScript.

function renderPlanets() {
  for (let i = 0; i < planets.length; i++) {
    const planet = planets[i];
    const planetEl = document.createElement('div');
    planetEl.classList.add('planet');
    planetEl.style.width = `${planet.diameter}px`;
    planetEl.style.background = `linear-gradient(90deg, ${planet.color},#223 95%)`;
    solarSystem.appendChild(planetEl);
    planetEl.addEventListener('mouseover', () => renderFact(planet));
  }
}

renderPlanets();

// Stretch goals:
// - 1. Show planet facts on hover
// - 2. Make one side of the planets dark (you can do this with one CSS property!)

const facts = document.getElementById('facts');

function renderFact(planet) {
  facts.innerHTML = `
    <h2>${planet.name}</h2>
    <p>${planet.fact}</p>
  `;
}
