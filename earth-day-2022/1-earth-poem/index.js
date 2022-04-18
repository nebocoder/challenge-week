// POEM: Forests are green, oceans are blue. Keep the earth clean, for me and for you

const obj = {
  color1: 'green',
  color2: 'blue',
  planet: 'Earth',
  adjective: 'clean',
  emojis: ['🚂', '🌍', '🛼', '🍩', '🏖', '🎠', '🔮'],
  sentence: function () {
    const { color1, color2, planet, adjective, emojis } = this;
    return `Forests are <strong style="color:green">${color1}</strong>, oceans are <strong style="color:purple">${color2}</strong>.
    Keep the <strong style="color:blue">${planet}</strong> ${emojis[1]} <strong>${adjective}</strong>, for me and for you.`;
  },
};

document.getElementById('poem').innerHTML = obj.sentence();

// Task: Changing only the code ABOVE (lines 1-15), complete the poem and render it on the page.

// stretch goal 1️⃣: Render the most suitable emoji from the emojis array in the object somewhere in our poem.

// stretch goal 2️⃣: Without changing the object declaration above, change sea color to purple!

// stretch goal 3️⃣: Without changing the CSS file, style the values added from the object.
