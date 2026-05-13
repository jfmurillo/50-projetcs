const hourEl = document.getElementById('hour')
const minuteEl = document.getElementById('minute')
const secondEl = document.getElementById('second')
const timeEl = document.getElementById('time')
const dateEl = document.getElementById('date')
const toggle = document.querySelector('.toggle')

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

toggle.addEventListener('click', () => document.body.classList.toggle('dark'))

function setTime() {
  const now = new Date()
  const s = now.getSeconds()
  const m = now.getMinutes()
  const h = now.getHours()

  secondEl.style.transform = `translateX(-50%) rotate(${s * 6}deg)`
  minuteEl.style.transform = `translateX(-50%) rotate(${m * 6}deg)`
  hourEl.style.transform   = `translateX(-50%) rotate(${h * 30 + m * 0.5}deg)`

  timeEl.textContent = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`
  dateEl.textContent = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}`
}

setTime()
setInterval(setTime, 1000)
