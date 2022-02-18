const body = document.body
document.getElementById("btn").addEventListener("click", changeColor)

async function changeColor() {
  // 1. Call Scrimba's color API (https://apis.scrimba.com/hexcolors/) to retrieve one random color.
  // 2. Use that color to update the background color of the body.
  async function getColors() {
    const response = await fetch("https://apis.scrimba.com/hexcolors/?count=1")
    const data = await response.json()
    body.style.backgroundColor = data.colors[0].value
  }

  getColors()
}
