function commentClickHandler(event) {
    event.preventDefault();

    const modal = document.querySelector(".modals");
    modal.style.display = "block";
}
document.querySelectorAll(".comment-btn").forEach(item => {
    item.addEventListener('click', commentClickHandler)
});

// Exit modal form handler
function commentExitHandler(event) {
    event.preventDefault();

    const modal= document.querySelector(".modals");
    modal.style.display = "none";

};

document.querySelectorAll(".close").forEach(x => {
    x.addEventListener('click', commentExitHandler)
});
