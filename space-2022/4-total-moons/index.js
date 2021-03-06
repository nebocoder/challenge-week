const solarSystem = document.getElementById('solarSystem');
const planetsObj = [
  {
    name: 'π€ Mercury',
    moons: 0,
  },
  {
    name: 'π  Venus',
    moons: 0,
  },
  {
    name: 'π Earth',
    moons: 1,
  },
  {
    name: 'π΄ Mars',
    moons: 2,
  },
  {
    name: 'π‘ Jupiter',
    moons: 67,
  },
  {
    name: 'πͺ Saturn',
    moons: 62,
  },
  {
    name: 'βͺ Uranus',
    moons: 27,
  },
  {
    name: 'π΅ Neptune',
    moons: 14,
  },
];

// Task:
// 1. Display each planetβs name and number of moons in the DOM
// 2. Calculate and display the total number of moons in the solar system below

function moonCount(planets) {
  let planetsText = '';
  const totalMoons = planets.map((a) => a.moons).reduce((a, b) => a + b);

  for (let i = 0; i < planets.length; i++) {
    const planet = planets[i];

    planetsText += `<p><strong>${planet.name}</strong>: ${planet.moons}</p>`;
  }

  planetsText += `<hr><p class="total-moons-p"><strong>Total moons: ${totalMoons}<strong></p>`;

  solarSystem.innerHTML = planetsText;
}

moonCount(planetsObj);

// Stretch goals:
// - 1: Make the numbers count up on page load
// - 2: Make the planet names bold.
