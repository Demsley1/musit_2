// handle upvotes – add to vote to playlist and add playlist to user
async function handleUpvote(e) {
    e.preventDefault;

    var idNeeded = e.target.parentNode.parentNode.parentNode;
    var playlistId = idNeeded.getAttribute('id');
    console.log(playlistId);
    //console.log('clicked! ' + playlist.id)

    const response = await fetch('/api/playlists/upvote', {
        method: 'PUT',
        body: JSON.stringify({
            playlist_id: playlistId
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        alert(response.statusTest);
    }
};


document.querySelectorAll(".heart-btn").forEach(item => {
    item.addEventListener('click', handleUpvote)
});