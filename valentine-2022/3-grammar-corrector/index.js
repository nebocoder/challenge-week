const text = document.getElementById("paragraph").textContent
document.getElementById("btn").addEventListener("click", correct)

function correct() {
  // Write the JavaScript to grab the message from the paragraph and correct its capitalisation.
  // It should read "Valentine's"
  // Render the corrected message to the DOM.
  document.getElementById("paragraph").textContent =
    text[0].toUpperCase() + text.slice(1).toLowerCase()
}
