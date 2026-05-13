const API_KEY = '3fd2be6f0c70a2a598f084ddfb75487c'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`
const DISCOVER_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

getMovies(DISCOVER_URL)

async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()
  showMovies(data.results)
}

function showMovies(movies) {
  main.innerHTML = ''
  movies.forEach(movie => {
    const { title, poster_path, vote_average, overview } = movie
    const movieEl = document.createElement('div')
    movieEl.classList.add('movie')
    movieEl.innerHTML = `
      <img src="${IMG_PATH + poster_path}" alt="${title}" onerror="this.src='https://via.placeholder.com/200x300?text=No+Image'"/>
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average.toFixed(1)}</span>
      </div>
      <div class="overview"><h3>Overview</h3><p>${overview}</p></div>
    `
    main.appendChild(movieEl)
  })
}

function getClassByRate(vote) {
  if (vote >= 8) return 'green'
  if (vote >= 5) return 'orange'
  return 'red'
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const searchTerm = search.value.trim()
  if (searchTerm) {
    getMovies(SEARCH_API + encodeURIComponent(searchTerm))
    search.value = ''
  } else {
    getMovies(DISCOVER_URL)
  }
})
