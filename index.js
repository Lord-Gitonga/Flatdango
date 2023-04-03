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
                    runtime:movie.runtime,
                    showtime : movie.showtime,
                    tickets : movie.tickets_sold,
                    capacity : movie.capacity
                }
                return movieObj
            })

            moviesArr.map(movie => displayMovies(movie))
        })
}
        
function displayMovies(movieObj) {
    let card = `<li class="col-md-3">
      <div class="card my-4" style="width: 300px;">
         <img src="${movieObj.poster}" class="card-img-top" alt="${movieObj.title}">
        <div class="card-body">
        <medium class="card-title"><a class="title" href="#">${movieObj.title}</a></medium>
        <medium class="card-title"><p>Run Time :${movieObj.runtime}</p>
        <medium class="card-title"><p>Show Time :${movieObj.showtime}</p>
        <medium class="card-title"><p>Run Time :${movieObj.runtime}</p>
        <medium class="card-title"><p>Tickets Sold :${movieObj.tickets}</p>
        <button class="my-button">Buy Ticket: ${movieObj.capacity}</button>

        </div>
        </div>
    </li>
    `
//      const titleLink = card.querySelector('title');
//      titleLink.addEventListener('click', function(event){
//          event.preventDefault();
//       console.log(movieObj.description);
//  })

    
    return nowPlayingUl.innerHTML += card;
}



showMovies()





// const showContent = document.getElementById('my-content')
// showContent.addEventListener('click', displayContent)


// function displayContent(movieObj){
//     let HTMLTemplate = `<li class="col-md-3">
//     <div class="card my-4" style="width: 300px;">
//       <div class="card-body">
//       <p class="card-text">${movieObj.description}</p>
//       </div>
//       </div>
//   </li>
//   `
//     return showContent.innerHTML += HTMLTemplate;
// }

// nowPlayingUl.addEventListener('click', displayContent);

// function displayContent(event){
//     let clickedMovie = event.target.closest('.card')
//     let moviePoster = clickedMovie.querySelector('.card-img-top').getAttribute('src')
//     let movieRunTime = clickedMovie.querySelector('.runtime').textContent;
//     let details = `${moviePoster} + ${movieRunTime}`
//     console.log(details);
// }

