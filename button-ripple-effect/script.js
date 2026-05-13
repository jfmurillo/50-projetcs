const btn = document.querySelector('.ripple-btn')

btn.addEventListener('click', function(e) {
  const circle = document.createElement('span')
  circle.classList.add('circle')

  const rect = btn.getBoundingClientRect()
  circle.style.left = `${e.clientX - rect.left}px`
  circle.style.top = `${e.clientY - rect.top}px`

  this.appendChild(circle)

  setTimeout(() => circle.remove(), 600)
})
