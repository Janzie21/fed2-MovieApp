const btnRef = document.getElementById('btnGenre');
const butRef = document.getElementById('btnTrending');
const btnDataRef = document.getElementById('btnData');
const listRef = document.getElementById('listGenre');
const lijstRef= document.getElementById('listTrending');
const listMovieRef = document.getElementById('filmInfo')

btnRef.addEventListener('click',function() {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=23de8fca6db455ca340aaec8144cf4a3&language=en-US`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        listRef.innerHTML = data.genres.map((genre)=>`<li>${genre.name}</li>`).join("")
      });
    });


btnDataRef.addEventListener('click',function() {
  fetch(`https://api.themoviedb.org/3/movie/264660?api_key=23de8fca6db455ca340aaec8144cf4a3&language=en-US
  `)
  .then(function(resp){
    return resp.json()
  })
  .then(function(data) {
    listMovieRef.innerHTML = `<h2>${data.original_title}</h2>
    <p><img src="https://image.tmdb.org/t/p/w500/${data.poster_path}"</p>
    <p>${data.overview}</p>
    `;
  })

});