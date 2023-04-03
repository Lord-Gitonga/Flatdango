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
    
    return nowPlayingUl.innerHTML += card;
}

//const myStuff = document.querySelector('.my-button')
//myStuff.addEventListener('click', handleEvent)

function handleEvent (event){
    const target = event.target;
    const tickets = parseInt(target.getAttribute('movieObj.tickets'));
    const capacity = parseInt(target.getAttribute('movieObj.capacity'));

    if(tickets<capacity){
        target.setAttribute('data-tickets', tickets + 1);
        target.innerHTML = `Buy Ticket: ${capacity - (tickets + 1)}`;
     } else {
        console.log('Sold Out')
     }
}

nowPlayingUl.addEventListener('click', handleEvent);
showMovies()





