const slides = document.querySelectorAll('.slide')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const dotsContainer = document.getElementById('dots')

let current = 0

slides.forEach((_, i) => {
  const dot = document.createElement('div')
  dot.classList.add('dot')
  if (i === 0) dot.classList.add('active')
  dot.addEventListener('click', () => goTo(i))
  dotsContainer.appendChild(dot)
})

prevBtn.addEventListener('click', () => goTo(current === 0 ? slides.length - 1 : current - 1))
nextBtn.addEventListener('click', () => goTo(current === slides.length - 1 ? 0 : current + 1))

function goTo(index) {
  slides[current].classList.remove('active')
  document.querySelectorAll('.dot')[current].classList.remove('active')
  current = index
  slides[current].classList.add('active')
  document.querySelectorAll('.dot')[current].classList.add('active')
}

setInterval(() => goTo(current === slides.length - 1 ? 0 : current + 1), 4000)
