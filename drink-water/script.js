const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => {
    highlightCups(idx)
  })
})

function highlightCups(idx) {
  if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling?.classList.contains('full')) {
    idx--
  }
  smallCups.forEach((cup, i) => {
    if (i <= idx) cup.classList.add('full')
    else cup.classList.remove('full')
  })
  updateBigCup()
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length
  const totalCups = smallCups.length

  const pct = (fullCups / totalCups) * 100
  percentage.style.height = `${pct}%`

  if (fullCups === 0) {
    percentage.innerText = ''
    remained.style.visibility = 'visible'
  } else {
    percentage.innerText = `${pct}%`
  }

  const litersRemained = ((totalCups - fullCups) * 250) / 1000
  if (litersRemained === 0) {
    remained.style.visibility = 'hidden'
  } else {
    remained.style.visibility = 'visible'
    liters.innerText = `${litersRemained}L`
  }
}
