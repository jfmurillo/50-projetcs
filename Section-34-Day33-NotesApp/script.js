const addBtn = document.getElementById('add')
const notesContainer = document.getElementById('notes-container')

const notes = JSON.parse(localStorage.getItem('notes')) || []
notes.forEach(noteText => addNote(noteText))

addBtn.addEventListener('click', () => addNote())

function addNote(text = '') {
  const note = document.createElement('div')
  note.classList.add('note')

  const tools = document.createElement('div')
  tools.classList.add('tools')

  const editBtn = document.createElement('button')
  editBtn.innerHTML = '<i class="fas fa-edit"></i>'

  const deleteBtn = document.createElement('button')
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'

  const preview = document.createElement('div')
  preview.classList.add('preview')
  preview.innerHTML = marked(text)

  const textarea = document.createElement('textarea')
  textarea.placeholder = 'Take a note...'
  textarea.value = text
  textarea.style.display = 'none'

  editBtn.addEventListener('click', () => {
    if (textarea.style.display === 'none') {
      preview.style.display = 'none'
      textarea.style.display = 'block'
      textarea.focus()
      editBtn.innerHTML = '<i class="fas fa-eye"></i>'
    } else {
      preview.style.display = 'block'
      textarea.style.display = 'none'
      preview.innerHTML = marked(textarea.value)
      editBtn.innerHTML = '<i class="fas fa-edit"></i>'
      saveNotes()
    }
  })

  deleteBtn.addEventListener('click', () => {
    note.remove()
    saveNotes()
  })

  textarea.addEventListener('input', saveNotes)

  tools.appendChild(editBtn)
  tools.appendChild(deleteBtn)
  note.appendChild(tools)
  note.appendChild(textarea)
  note.appendChild(preview)
  notesContainer.appendChild(note)
}

function saveNotes() {
  const noteTextareas = document.querySelectorAll('.note textarea')
  const notesArray = [...noteTextareas].map(ta => ta.value)
  localStorage.setItem('notes', JSON.stringify(notesArray))
}
