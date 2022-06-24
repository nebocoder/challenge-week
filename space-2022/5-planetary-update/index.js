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
  {
    name: 'Pluto',
    diameter: 2370,
    color: 'white',
  },
];

function renderPlanets() {
  const planetNine = {
    name: 'Spes',
    diameter: 70000,
    color: 'black',
  };

  planets.pop();
  planets.push(planetNine);

  for (let i = 0; i < planets.length; i++) {
    const planet = document.createElement('div');
    planet.style.minHeight = `${planets[i].diameter / 1000}px`;
    planet.style.minWidth = `${planets[i].diameter / 1000}px`;
    planet.style.background = `conic-gradient( 
            black 0deg 180deg, 
            var(--${planets[i].color}) 180deg 360deg)`;
    planet.classList.add('planet');
    solarSystem.appendChild(planet);
  }
}

renderPlanets();

// Task:
// 1. Remove Pluto from the planets array
// 2. Add a new planet to the planets array (invent one)

// NOTE: these should be done without changing the code above line 50

// Stretch goals:
// - 1. Add a new fact to one of the planets, e.g whether it has rings.
// - 2. Add the moons to each planet (see previous challenge for the numbers of moons required.)
