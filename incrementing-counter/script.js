const counters = document.querySelectorAll('.counter-num')

counters.forEach(counter => {
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target')
    const c = +counter.innerText
    const increment = target / 200

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`
      setTimeout(updateCounter, 10)
    } else {
      counter.innerText = target.toLocaleString()
    }
  }
  updateCounter()
})
