const greetingDisplay = document.getElementById("greeting-display")
const form = document.getElementById("form")
const recipientInput = document.getElementById("recipient-input")
const greetingSelect = document.getElementById("greeting-select")
const senderInput = document.getElementById("sender-input")

form.addEventListener("input", writeGreeting)

function writeGreeting() {
  // Write a function update the message in the greeting-display paragraph each time the form is updated.
  greetingDisplay.innerText = `From: ${recipientInput.value}
  To: ${senderInput.value}

  ${greetingSelect.value}
  `
}
