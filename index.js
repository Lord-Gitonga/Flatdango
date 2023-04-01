const nowPlayingUl = document.getElementById('now-playing')

function showMovies() {
    fetch('http://localhost:3000/films')
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            const movies = data;
            let moviesArr = movies.map(movie => {
                let movieObj = {
                    title: movie.title,
                    runtime: movie.runtime,
                    showtime: movie.showtime,
                    poster: movie.poster,
                    description: movie.description
                }
                return movieObj
            })

            moviesArr.map(movie => displayMovies(movie))
        })
}

function displayMovies(movieObj) {
    let HTMLTemplate = `<li class="mx-6" >
      <div class="card my-4" style="width: 150px;">
         <img src="${movieObj.poster}" class="card-img-top" alt="${movieObj.title}">
        <div class="card-body">
        <small class="card-title"><a class="title" href="#">${movieObj.title}</a></small>
         <p class="card-text">${movieObj.description}</p>
        </div>
        </div>
    </li>
    `
    return nowPlayingUl.innerHTML += HTMLTemplate;
}

showMovies()
