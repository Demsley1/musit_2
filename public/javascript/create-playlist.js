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
   
  // if response is okay change inner content of form container for title to just a text displaying the title
  if(response.ok){
    titleCon.innerHTML= "";
    titleCon.append("Title:  " + title);
    // get the json body of the response back from the server and add the id value to the form as data-id attribute
    response.json().then(data => {
       const id = data.id
       const x = document.querySelector(".new-playlist-form");
       x.setAttribute("data-id", id)
      });
    
  } else {
    alert(response.statusText);
  }

}

// using jquery, this is a function to handle displaying the text values for the inputted music genres, artists, and song-titles
const addMusic = (artist, title, genre) => {
  // display add playlist/ create palylist button after seven entries are entered into container
  if($(".show-music").find("ul").length > 6){
    $(".btn-playlist").removeClass("d-none").addClass("d-grid");

    $(".btn-playlist").click(function(event){
      event.preventDefault();
      document.location.replace("/dashboard");
    });
  }

  const songTitle = $(`<li>Song Title: ${title}</li>`).addClass("list-group-item col-3 text-center");
  const songArtist = $(`<li>Artist: ${artist}</li>`).addClass("list-group-item col-3 text-center");
  const songGenre = $(`<li>Genre: ${genre}</li>`).addClass("list-group-item col-3 text-center");
  // unordered list container to hold each element
  const musicCon = $("<ul></ul>").addClass("music-group list-group list-group-horizontal justify-content-center");

  $(songArtist).appendTo(musicCon);
  $(songTitle).appendTo(musicCon);
  $(songGenre).appendTo(musicCon);

  $(".show-music").append(musicCon);
}

async function newFormHandler(event) {
    event.preventDefault();
    
    const artist = document.getElementById('playlist-artist').value
    const song_title = document.getElementById('playlist-title').value
    const genre = document.getElementById('playlist-genre').value
    const playlist_id = document.querySelector(".new-playlist-form").getAttribute('data-id');

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
        addMusic(artist, song_title, genre);
      } else {
        alert(response.statusText);
      }
}