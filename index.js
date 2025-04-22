let lastDrinkNumber = 1;
let formCount = 1;

function numberStringForm(n) {
    if (n % 10 === 1 && n % 100 !== 11) {
        return 'напиток'
    }
    if ((n % 100 !== 12 && n % 100 !== 13 && n % 100 !== 14) &&
        (n % 10 === 2 || n % 10 === 3 || n % 10 === 4)) {
        return 'напитка';
    }
    return 'напитков';
}

function addNewForm() {
    lastDrinkNumber++;
    formCount++;
    const form = document.querySelector('form');
    const newForm = form.cloneNode(true);
    newForm.querySelector('.beverage-count').textContent = `Напиток № ${lastDrinkNumber}`;

    newForm.reset();
    newForm.querySelector('.add-button').addEventListener('click', addNewForm);
    newForm.querySelector('.delete-button').addEventListener('click', deleteForm);
    newForm.addEventListener("submit", processingSubmit);
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

function processingSubmit(event) {
    const modal = document.querySelector('.modal-overlay');
    modal.querySelector('h2').textContent = `Вы заказали ${formCount} ${numberStringForm(formCount)}`;
    modal.style.display = "block";
    event.preventDefault();
}

function closeModal(event) {
    document.querySelector('.modal-overlay').style.display = "none";
}

for (const form of document.querySelectorAll('form')){
    form.addEventListener("submit", processingSubmit);
}

document.querySelector('.close').addEventListener("click", closeModal);