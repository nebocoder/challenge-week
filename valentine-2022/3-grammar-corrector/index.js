const text = document.getElementById("paragraph")
document.getElementById("btn").addEventListener("click", correct)

function correct() {
  // Write the JavaScript to grab the message from the paragraph and correct its capitalisation.
  // It should read "Valentine's"
  // Render the corrected message to the DOM.
  const correctedText = text.textContent
    .split(" ")
    .map((word) => toTitleCase(word))
    .join(" ")

  text.textContent = correctedText
}

function toTitleCase(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase()
}
