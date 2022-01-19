async function editFormHandler(event) {
    event.preventDefault();
  
    const song_title = document.querySelector('input[name="song-title"]').value.trim();
    const artist = document.querySelector('input[name="artist"]').value;
    const genre = document.querySelector('input[name="genre"').value
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/playlists/${id}`, {
      method: 'PUT',
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
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-playlist-form').addEventListener('submit', editFormHandler);
  