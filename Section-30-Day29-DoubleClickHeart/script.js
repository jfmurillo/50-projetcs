const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

document.addEventListener('dblclick', (e) => {
  createHeart(e.clientX, e.clientY)
})

function createHeart(x, y) {
  const heart = document.createElement('div')
  heart.classList.add('heart')
  heart.style.color = colors[Math.floor(Math.random() * colors.length)]
  heart.style.fontSize = Math.floor(Math.random() * 20) + 20 + 'px'
  heart.style.left = x + 'px'
  heart.style.top  = y + 'px'
  heart.innerHTML = '&hearts;'
  document.body.appendChild(heart)
  setTimeout(() => heart.remove(), 1000)
}
