async function newFormHandler(event) {
    event.preventDefault();
    const artist = document.getElementById('playlist-artist').value
    const song_title = document.getElementById('playlist-title').value
    const genre = document.getElementById('playlist-genre').value

    // successfully added song to DB - currently works for single artist/song/genre but future want to be able to add all songs as one playlist
 
    const response = await fetch(`/api/playlists`, {
        method: 'POST',
        body: JSON.stringify({
          artist,
          song_title,
          genre
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

