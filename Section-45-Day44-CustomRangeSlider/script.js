const range = document.getElementById('range')
const rangeValue = document.getElementById('rangeValue')

// Set initial label position and value
setLabelPosition()

range.addEventListener('input', setLabelPosition)

function setLabelPosition() {
  const value = range.value
  const min = range.min || 0
  const max = range.max || 100

  // Calculate percentage for horizontal positioning
  const percent = ((value - min) / (max - min)) * 100

  rangeValue.textContent = value
  rangeValue.style.left = `calc(${percent}% + (${8 - percent * 0.16}px))`
}
