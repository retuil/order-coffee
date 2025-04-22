function processingSubmit(e){
    e.preventDefault();
    console.log('111')
    document.querySelector('.modal-overlay').style.display = "block";

}

function closeModal(event){
    document.querySelector('.modal-overlay').style.display = "none";
}

for (const form of document.querySelectorAll('form')){
    console.log(form);
    form.addEventListener("submit", processingSubmit);
}

document.querySelector('.close').addEventListener("click", closeModal);