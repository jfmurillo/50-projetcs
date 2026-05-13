const APIURL = 'https://api.github.com/users/'

const main   = document.getElementById('main')
const form   = document.getElementById('form')
const search = document.getElementById('search')

async function getUser(username) {
  try {
    const { data } = await axios.get(APIURL + username)
    createUserCard(data)
    getRepos(username)
  } catch (err) {
    if (err.response.status === 404) {
      createErrorCard('No profile with this username')
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios.get(
      APIURL + username + '/repos?sort=created'
    )
    addReposToCard(data)
  } catch (err) {
    createErrorCard('Problem fetching repos')
  }
}

function createUserCard(user) {
  const cardHTML = `
    <div class="card">
      <img src="${user.avatar_url}" alt="${user.name}" />
      <div class="card-info">
        <h2>${user.name || user.login}</h2>
        <p>${user.bio || 'No bio available'}</p>
        <div class="card-data">
          <div class="card-data-item">
            <h3>${user.followers}</h3>
            <p>Followers</p>
          </div>
          <div class="card-data-item">
            <h3>${user.following}</h3>
            <p>Following</p>
          </div>
          <div class="card-data-item">
            <h3>${user.public_repos}</h3>
            <p>Repos</p>
          </div>
        </div>
        <div id="repos" class="repos"></div>
      </div>
    </div>
  `
  main.innerHTML = cardHTML
}

function addReposToCard(repos) {
  const reposEl = document.getElementById('repos')
  repos.slice(0, 5).forEach(repo => {
    const repoEl = document.createElement('a')
    repoEl.classList.add('repo')
    repoEl.href   = repo.html_url
    repoEl.target = '_blank'
    repoEl.innerText = repo.name
    reposEl.appendChild(repoEl)
  })
}

function createErrorCard(msg) {
  main.innerHTML = `<div class="error-message"><h1>${msg}</h1></div>`
}

form.addEventListener('submit', e => {
  e.preventDefault()
  const user = search.value.trim()
  if (user) {
    getUser(user)
    search.value = ''
  }
})
