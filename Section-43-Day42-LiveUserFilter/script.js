const result = document.getElementById('result')
const filter = document.getElementById('filter')

let data = []

// Fetch 50 random users from the randomuser.me API
async function getUsers(count) {
  const res = await fetch(`https://randomuser.me/api?results=${count}`)
  const { results } = await res.json()
  return results
}

// Populate the list with user items
async function showUsers() {
  data = await getUsers(50)

  result.innerHTML = data
    .map(
      (user) => `
    <li>
      <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}" />
      <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
    </li>
  `
    )
    .join('')
}

// Live filter
filter.addEventListener('input', (e) => {
  const filterValue = e.target.value.toLowerCase()
  const lis = result.querySelectorAll('li')

  lis.forEach((li, idx) => {
    const user = data[idx]
    const fullName = `${user.name.first} ${user.name.last}`.toLowerCase()
    const location = `${user.location.city}, ${user.location.country}`.toLowerCase()

    if (fullName.includes(filterValue) || location.includes(filterValue)) {
      li.classList.remove('hide')
    } else {
      li.classList.add('hide')
    }
  })
})

showUsers()
