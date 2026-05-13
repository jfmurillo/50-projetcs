const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', () => fill.classList.add('hold'))
fill.addEventListener('dragend',   () => fill.classList.remove('hold'))

empties.forEach(empty => {
  empty.addEventListener('dragover',  e => e.preventDefault())
  empty.addEventListener('dragenter', () => empty.classList.add('hovered'))
  empty.addEventListener('dragleave', () => empty.classList.remove('hovered'))
  empty.addEventListener('drop', () => {
    empty.classList.remove('hovered')
    empty.appendChild(fill)
  })
})
