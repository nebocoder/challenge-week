document.getElementById("btn").addEventListener("click", calculate)
let costEl = document.getElementById("cost-el")
const foodSelect = document.getElementById("food-select")
const transportSelect = document.getElementById("transport-select")
const balloonCheckbox = document.getElementById("balloon-checkbox")

function calculate() {
  // 1. Write the JavaScript to calculate the total cost of the selected options from the form.
  // 2. Display the total cost in the cost-el span.
  const foodPrice = parseInt(foodSelect.value)
  const transportPrice = parseInt(transportSelect.value)
  const totalCost = foodPrice + transportPrice

  if (foodPrice && transportPrice) {
    if (balloonCheckbox.checked) {
      costEl.textContent = `${totalCost} + 🎈🎈🎈`
    } else {
      costEl.textContent = totalCost
    }
  } else {
    costEl.textContent = "Please select both options."
  }
}
