document.getElementById("btn").addEventListener("click", filterDuplicates)

const emojis = [
  "💘",
  "💘",
  "🌞",
  "🧡",
  "🍇",
  "🧁",
  "⚡️",
  "💝",
  "🐱",
  "💘",
  "🧡",
  "💫",
  "🍓",
  "💜",
  "⚡️",
  "⚡️",
  "🐶",
  "💘",
  "🍇",
  "🐱",
  "💘",
  "💫",
  "🍓",
  "💜",
  "💕",
  "⚡️",
  "💘",
  "🌞",
  "🐱",
  "💘",
  "💫",
  "🍓",
  "💜",
  "⚡️",
  "🧡",
  "💕",
  "🍇",
  "💘",
]

const allEmojisP = document.getElementById("all-emojis-p")
const uniqueEmojisP = document.getElementById("unique-emojis-p")

for (let emoji of emojis) {
  allEmojisP.textContent += emoji
}

function filterDuplicates() {
  // 1. Filter out all duplicate emojis, leaving only one of each emoji.
  // 2. Render the unique emojis in uniqueEmojisP.
  // Just for fun: Replace them with your favourite emojis! 😃
  const uniqueEmojisArr = []
  emojis.forEach((e) => {
    if (!uniqueEmojisArr.includes(e)) {
      uniqueEmojisArr.push(e)
    }
  })

  uniqueEmojisP.textContent = uniqueEmojisArr.join("")
}
