let lastDrinkNumber = 1;
let formCount = 1;

function addNewForm() {
    lastDrinkNumber++;
    formCount++;
    const form = document.querySelector('form');
    const newForm = form.cloneNode(true);
    newForm.querySelector('.beverage-count').textContent = `Напиток № ${lastDrinkNumber}`;

    newForm.reset();
    newForm.querySelector('.add-button').addEventListener('click', addNewForm);
    newForm.querySelector('.delete-button').addEventListener('click', deleteForm);
    form.parentNode.appendChild(newForm);

}

function deleteForm(e) {
    e.preventDefault();
    if (formCount === 1) {
        return;
    }
    formCount--;
    e.target.parentNode.parentNode.parentNode.remove();
}

document.querySelector('.add-button').addEventListener('click', addNewForm);
document.querySelector('.delete-button').addEventListener('click', deleteForm);

function processingSubmit(event){
    document.querySelector('.modal-overlay').style.display = "block";
    event.preventDefault();
}

function closeModal(event){
    document.querySelector('.modal-overlay').style.display = "none";
}

for (const form of document.querySelectorAll('form')){
    form.addEventListener("submit", processingSubmit);
}

document.querySelector('.close').addEventListener("click", closeModal);