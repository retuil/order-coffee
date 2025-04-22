function processingSubmit(event){
    document.querySelector('.modal-overlay').style.display = "block";
    event.preventDefault();
}

function closeModal(event){
    document.querySelector('.modal-overlay').style.display = "none";
}

for (const submitButton of document.getElementsByClassName("submit-button")){
    submitButton.addEventListener("click", processingSubmit);
}

document.querySelector('.close').addEventListener("click", closeModal);