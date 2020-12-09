const btnRef = document.getElementById('btnGenre');
const listRef = document.getElementById('listGenre');

btnRef.addEventListener('click',function() {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=23de8fca6db455ca340aaec8144cf4a3&language=en-US`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        listRef.innerHTML = data.genres.map((genre)=>`<li>${genre.name}</li>`).join("")
      });
    });