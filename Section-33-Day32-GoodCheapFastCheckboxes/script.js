const checkboxes = document.querySelectorAll('.item input[type="checkbox"]')

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => updateCheckboxes())
})

function updateCheckboxes() {
  const checkedBoxes = [...checkboxes].filter(cb => cb.checked)

  if (checkedBoxes.length === 2) {
    checkboxes.forEach(cb => {
      if (!cb.checked) cb.parentElement.classList.add('disabled')
    })
  } else {
    checkboxes.forEach(cb => cb.parentElement.classList.remove('disabled'))
  }
}
