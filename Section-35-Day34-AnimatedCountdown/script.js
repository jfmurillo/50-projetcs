const daysEl    = document.getElementById('days')
const hoursEl   = document.getElementById('hours')
const minsEl    = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')
const countdown = document.getElementById('countdown')
const finalEl   = document.getElementById('final')
const replayBtn = document.getElementById('replay-btn')

const currentYear = new Date().getFullYear()
const newYear     = new Date(`January 01 ${currentYear + 1} 00:00:00`)

function updateCountdown() {
  const now  = new Date()
  const diff = newYear - now

  if (diff <= 0) { showFinal(); return }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24))
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const s = Math.floor((diff % (1000 * 60)) / 1000)

  daysEl.innerHTML    = formatNum(d)
  hoursEl.innerHTML   = formatNum(h)
  minsEl.innerHTML    = formatNum(m)
  secondsEl.innerHTML = formatNum(s)
}

function formatNum(num) { return num < 10 ? `0${num}` : num }

function showFinal() {
  countdown.classList.add('hide')
  setTimeout(() => {
    countdown.style.display = 'none'
    finalEl.style.display   = 'block'
    finalEl.classList.remove('hide')
  }, 500)
}

replayBtn.addEventListener('click', () => {
  finalEl.classList.add('hide')
  setTimeout(() => {
    finalEl.style.display   = 'none'
    countdown.style.display = 'flex'
    countdown.classList.remove('hide')
  }, 500)
  updateCountdown()
})

setInterval(updateCountdown, 1000)
updateCountdown()
