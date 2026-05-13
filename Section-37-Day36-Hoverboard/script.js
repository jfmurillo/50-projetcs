const container = document.getElementById('container')
const SQUARES   = 500
const colors = ['#e74c3c','#e67e22','#f1c40f','#2ecc71','#1abc9c','#3498db','#9b59b6','#e91e63','#00bcd4']

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div')
  square.classList.add('square')
  square.addEventListener('mouseover', setColor)
  square.addEventListener('mouseout',  removeColor)
  container.appendChild(square)
}

function setColor(e) {
  const color = colors[Math.floor(Math.random() * colors.length)]
  e.target.style.background = color
  e.target.style.boxShadow  = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(e) {
  e.target.style.background = '#1a1a2e'
  e.target.style.boxShadow  = 'none'
}
