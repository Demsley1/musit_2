// handle upvotes – add to vote to playlist and add playlist to user
async function handleUpvote(e) {
    e.preventDefault;

    const idNeeded = e.target.parentNode.parentNode.parentNode;
    const playlistId = idNeeded.getAttribute('id');
    console.log(playlistId);

    const result = await fetch('/api/playlists/upvote', {
        method: 'PUT',
        body: JSON.stringify({
            playlist_id: playlistId
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (result.ok) {
        console.log('you liked!');
    } else {
        alert(result.statusText);
    }

};


document.querySelectorAll(".heart-btn").forEach(item => {
    item.addEventListener('click', handleUpvote)
});