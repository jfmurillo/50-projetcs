const navLinks = document.querySelectorAll('.nav-link.has-dropdown')

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    const dropdown = navLink.querySelector('.dropdown')

    // Close all other open dropdowns
    navLinks.forEach((link) => {
      if (link !== navLink) {
        link.classList.remove('open')
        link.querySelector('.dropdown').classList.remove('open')
      }
    })

    // Toggle current
    navLink.classList.toggle('open')
    dropdown.classList.toggle('open')
  })
})

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-link')) {
    navLinks.forEach((link) => {
      link.classList.remove('open')
      link.querySelector('.dropdown').classList.remove('open')
    })
  }
})
