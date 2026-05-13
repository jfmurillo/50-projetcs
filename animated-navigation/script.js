const burger = document.getElementById('burger')
const navLinks = document.querySelector('.nav-links')

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open')
  burger.classList.toggle('toggle')
})
