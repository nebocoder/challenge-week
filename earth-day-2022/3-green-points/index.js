const pointsEl = document.getElementById('points-p');
const btnsContainer = document.getElementById('btns-container');

let score = 0;
let activities = 0;

const actionsArr = [
  {
    name: 'recycledPaper',
    emoji: 'π',
    text: 'recycled paper',
    good: true,
  },
  {
    name: 'boughtSecondHand',
    emoji: 'π',
    text: 'bought 2nd hand',
    good: true,
  },
  {
    name: 'tookTrain',
    emoji: 'π',
    text: 'took train',
    good: true,
  },
  {
    name: 'leftLightsOn',
    emoji: 'π‘',
    text: 'left lights on',
    good: false,
  },
  {
    name: 'drippingTap',
    emoji: 'π°',
    text: 'let tap drip',
    good: false,
  },
  {
    name: 'leftCarRunningWhileDucksCrossed',
    emoji: 'π¦',
    text: 'left car running while ducks crossed road',
    good: false,
  },
];

function renderBtns() {
  // 1. Render buttons onto page
  actionsArr.forEach((a) => {
    const element = a.good
      ? `<div class="btn btn-good">${a.emoji} ${a.text}</div>`
      : `<div class="btn btn-bad">${a.emoji} ${a.text}</div>`;

    btnsContainer.innerHTML += element;
  });
}

renderBtns();

document.querySelectorAll('.btn').forEach((e) => {
  e.addEventListener('click', () => {
    e.classList.contains('btn-good') ? (score += 5) : (score -= 5);
    activities++;
    pointsEl.textContent = `Points: ${score}, Activities: ${activities}`;
  });
});

// Task: For each action in actionsArr, render a button on the page which matches the design on the slide.
// The button should show:
// 1. the emoji
// 2. the action name
// 3. Add +5 points to the userβs score for good actions, and -5 for bad actions on click
// 4. Update the points total in the DOM on click

// stretch goal 1οΈβ£: Change each button color, green for good activities, red for bad.

// stretch goal 2οΈβ£: Change the background color to reflect the user's total points. 0 or above = green, below 0 = red.

// stretch goal 3οΈβ£: Add an activity count.
