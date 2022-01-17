
const textarea = document.querySelector('#textarea')
const commentBtn = document.querySelector('#comment-btn')
const commentBox = document.querySelector('.comment-box')

commentBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let comment = textarea.value
    if(!comment) {
        return
    }
    postComment(comment)
})

function postComment(comment) {
    let data ={
        username: username,
        comment: comment
    }
    appendToDom(data)
    textarea.value = ''
    broadcastComment(data)
    function appendToDom(data) {
        let commentData = document.createElement('li')
        commentData.classList.add('comment', 'mb-3' )

        let markup =`
        <div class="col-md-12">
                    <ul class="comment-box">
                        <li class="comment">
                            <div class="card border-light mb-3"></div>
                            <div class="card-body"
                            <h5>${data.username}</h5>
                            <p>${data.comment}</p>
                        </li>
                    </ul>
            </div>`
            commentBox.append(ltag)
    }

    function broadcastComment(data) {
        
}