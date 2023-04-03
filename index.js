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
    let HTMLTemplate = `<li class="col-md-3">
      <div class="card my-4" style="width: 300px;">
         <img src="${movieObj.poster}" class="card-img-top" alt="${movieObj.title}">
        <div class="card-body">
        <medium class="card-title"><a class="title" href="#">${movieObj.title}</a></medium>
        <p class="card-text"></p>
        </div>
        </div>
    </li>
    `
    return nowPlayingUl.innerHTML += HTMLTemplate;
}

// nowPlayingUl.addEventListener('click', displayContent);

// function displayContent(event){
//     let clickedMovie = event.target.closest('.card')
//     let moviePoster = clickedMovie.querySelector('.card-img-top').getAttribute('src')
//     let movieRunTime = clickedMovie.querySelector('.runtime').textContent;
//     let details = `${moviePoster} + ${movieRunTime}`
//     console.log(details);
// }

showMovies()