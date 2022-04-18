// POEM: Forests are green, oceans are blue. Keep the earth clean, for me and for you

const obj = {
  color1: 'green',
  color2: 'blue',
  planet: 'Earth',
  adjective: 'clean',
  emojis: ['🚂', '🌍', '🛼', '🍩', '🏖', '🎠', '🔮'],
  sentence: function () {
    const { color1, color2, planet, adjective } = this;
    return `Forests are ${color1}, oceans are ${color2}. Keep the ${planet} ${adjective}, for me and for you.`;
  },
};

document.getElementById('poem').textContent = obj.sentence();

// Task: Changing only the code ABOVE (lines 1-15), complete the poem and render it on the page.

// stretch goal 1️⃣: Render the most suitable emoji from the emojis array in the object somewhere in our poem.

// stretch goal 2️⃣: Without changing the object declaration above, change sea color to purple!

// stretch goal 3️⃣: Without changing the CSS file, style the values added from the object.
