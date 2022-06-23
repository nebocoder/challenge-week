const solarSystem = document.getElementById('solarSystem');
const planetsObj = [
  {
    name: 'Mercury',
    moons: 0,
  },
  {
    name: 'Venus',
    moons: 0,
  },
  {
    name: 'Earth',
    moons: 1,
  },
  {
    name: 'Mars',
    moons: 2,
  },
  {
    name: 'Jupiter',
    moons: 67,
  },
  {
    name: 'Saturn',
    moons: 62,
  },
  {
    name: 'Uranus',
    moons: 27,
  },
  {
    name: 'Neptune',
    moons: 14,
  },
];

// Task:
// 1. Display each planet’s name and number of moons in the DOM
// 2. Calculate and display the total number of moons in the solar system below

function moonCount(planets) {
  let planetsText = '';
  const totalMoons = planets.map((a) => a.moons).reduce((a, b) => a + b);

  for (let i = 0; i < planets.length; i++) {
    const planet = planets[i];

    planetsText += `<p><strong>${planet.name}</strong>: ${planet.moons}</p>`;
  }

  planetsText += `<p class="total-moons-p">Total moons: ${totalMoons}</p>`;

  solarSystem.innerHTML = planetsText;
}

moonCount(planetsObj);

// Stretch goals:
// - 1: Make the numbers count up on page load
// - 2: Make the planet names bold.
