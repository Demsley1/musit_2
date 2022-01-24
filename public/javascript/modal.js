// get container data by id and send it in as comment data
function modalData(clicked_id) {
    
    // Select all elements of page with class of modal, and iterate through each one
    document.querySelectorAll(".modals").forEach(item => {
        // get the attribute value of "data-modal-id", and set it to const
       const id = item.getAttribute("data-modal-id").valueOf();

        if(clicked_id == id){
            item.style.display = "block"
        }
    });
};

// Exit modal form handler
function exitModal() {
    // Find all elements with modal class, and change the style display to none
    document.querySelectorAll(".modals").forEach(item => {
        
        item.style.display = "none"
    });
};
