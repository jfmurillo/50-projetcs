const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const speedDisplay = document.getElementById('speedDisplay')

const text = 'We Are Coders'
let idx = 1
let interval = 300 / speedEl.value

function writeText() {
  textEl.innerText = text.slice(0, idx)
  idx++
  if (idx > text.length) { idx = 1 }
  setTimeout(writeText, interval)
}

speedEl.addEventListener('input', (e) => {
  speedDisplay.innerText = e.target.value
  interval = 300 / e.target.value
})

writeText()
