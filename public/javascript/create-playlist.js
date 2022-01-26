async function playlistHandler(e) {
  e.preventDefault();

  const titleCon = document.querySelector(".add-title")
  const title = document.getElementById("playlist-title").value;

  const response = await fetch ('/api/playlists', {
    method: 'POST',
    body: JSON.stringify({
      title
    }),
    headers: {'Content-Type': 'application/json'}
  })
   

  if(response.ok){
    titleCon.innerHTML= "";
    titleCon.append(title);
    response.json().then(data => {
       const id = data.id
       const x = document.querySelector(".music-form");
       x.setAttribute("data-id", id)
      });
    
  } else {
    alert(response.statusText);
  }

}



async function newFormHandler(event) {
    event.preventDefault();
    const artist = document.getElementById('playlist-artist').value
    const song_title = document.getElementById('playlist-title').value
    const genre = document.getElementById('playlist-genre').value
    const playlist_id = document.querySelector('.music-form').getAttribute('data-id');

    // successfully added song to DB - currently works for single artist/song/genre but future want to be able to add all songs as one playlist
 
    const response = await fetch(`/api/music`, {
        method: 'POST',
        body: JSON.stringify({
          artist,
          song_title,
          genre,
          playlist_id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
    
    document.querySelector('.new-playlist-form').addEventListener('submit', newFormHandler);

