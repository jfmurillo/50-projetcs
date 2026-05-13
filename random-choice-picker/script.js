const textarea = document.getElementById('textarea')
const tagsEl = document.getElementById('tags')
const pickBtn = document.getElementById('pickBtn')
const resultEl = document.getElementById('result')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)
})

pickBtn.addEventListener('click', pickRandom)

function createTags(input) {
  const tags = input.split(',').filter(tag => tag.trim() !== '')
  tagsEl.innerHTML = ''
  tags.forEach(tag => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag.trim()
    tagsEl.appendChild(tagEl)
  })
}

function pickRandom() {
  const tags = document.querySelectorAll('.tag')
  if (tags.length === 0) return

  const randomIndex = Math.floor(Math.random() * tags.length)

  tags.forEach(tag => tag.classList.remove('highlight'))
  tags[randomIndex].classList.add('highlight')
  resultEl.innerText = `🎉 ${tags[randomIndex].innerText}`
}
