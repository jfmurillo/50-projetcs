const slides = document.querySelectorAll('.slide')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

let activeIndex = 0

next.addEventListener('click', () => changeSlide(1))
prev.addEventListener('click', () => changeSlide(-1))

function changeSlide(dir) {
  slides[activeIndex].classList.remove('active')
  activeIndex = (activeIndex + dir + slides.length) % slides.length
  slides[activeIndex].classList.add('active')
}
