const countdownDisplay = document.getElementById('countdown-display');
const rocket = document.getElementById('rocket');
let timeRemaining = 60;

// Task:
// 1. Write the JavaScript to count down from 60 to 0 and display the remaining time
// 2. When the countdown reaches 0, launch the rocket with an animation

function countdown(time) {
  let timer = setInterval(() => {
    if (time > 0) {
      time--;
      countdownDisplay.textContent = `${time}`;
    } else {
      countdownDisplay.textContent = 'LIFT OFF!';
      rocket.classList.add('launched');
      clearInterval(timer);
    }
  }, 1000);
}

countdown(timeRemaining);

// Stretch goals:
// 1) Add fire under the rocket.
// 2) Randomly don’t launch the rocket when the timer reaches 0.
