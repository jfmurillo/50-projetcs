const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.rating-container')
const sendBtn = document.getElementById('send')
const panel = document.getElementById('panel')
const numberDisplay = document.getElementById('number-display')

let selectedRating = 'N/A'

ratings.forEach((rating) => {
  rating.querySelector('button').addEventListener('click', function () {
    // Remove active class from all buttons
    ratings.forEach((r) => r.querySelector('button').classList.remove('active'))

    // Add active class to clicked button
    this.classList.add('active')
    selectedRating = this.textContent
  })
})

sendBtn.addEventListener('click', () => {
  if (selectedRating !== 'N/A') {
    numberDisplay.textContent = `${selectedRating} / 10`
    ratingsContainer.style.display = 'none'
    panel.style.display = 'block'
  }
})
