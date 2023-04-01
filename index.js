
const nowPlayingUl = document.getElementById('now-playing')

// function show (){
//     fetch ('http://localhost:3000/films')
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(data){
//         console.log(data)
//     })
// }
// show();

function showMovies (){
    fetch('http://localhost:3000/films')
    .then(function(response){
         return response.json()
    })
    .then(function(data){
        const movies = data;
        let moviesArr = movies.map(movie =>{
            let movieObj = {
                title : movie.title,
                runtime : movie.runtime,
                showtime : movie.showtime,
                poster : movie.poster,
                description : movie.description
            }
            return movieObj
        }

        )
        //console.log(moviesArr);
        moviesArr.map(displayMovies)
        console.log(moviesArr[0])
    })
}
//showMovies()
function displayMovies() {
    let HTMLTemplate = `
    <li >
      <div class="card" style="width: 18rem;">
         <img src="${movieObj.poster}" class="card-img-top" alt="${movieObj.title}">
        <div class="card-body">
        <small class="card-title"><a class="title" href="#">${movieObj.title}</a></small>
        <p class="card-text">${movieObj.description}</p>
        </div>
        </div>
    </li>
    `
     return nowPlayingUl.innerHTML+=HTMLTemplate;
}
 showMovies()
