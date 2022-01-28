
async function homeComments(event, id) {
    event.preventDefault();

    // empty array to hold comment data from front end
    const comments = []
    // for all comment inputs get the value and push to array container
    document.querySelectorAll("#comment-text").forEach(text => {
        var item = text.value;
        comments.push(item);
    })
   
    // filter the comments array and only return values that aren't empty strings
    const text = comments.filter(comment => {
        if(!""){
            return comment;
        }
    });

    // assign playlist_id value as the id 
    const playlist_id = id

    // convert text array value to a string  and assign it as comment_text
    const comment_text = text.toString();

    // post the values to server and reload document if values are okay to be added
    const response = await fetch ('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
            comment_text,
            playlist_id
        }),
        headers: { 'Content-Type': 'application/json' }
    })

    if(response.ok){
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}