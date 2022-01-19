
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
        comment: comment
        }
        const response = await fetch("/comments", {
            method: "POST",
            body: JSON.stringify(data)
        })
        
    }
   
