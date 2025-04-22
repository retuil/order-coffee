let formCount = 1;

function addNewForm() {
    formCount++;
    const form = document.querySelector('form');
    const newForm = form.cloneNode(true);
    newForm.querySelector('.beverage-count').textContent = `Напиток № ${formCount}`;

    newForm.reset();
    newForm.querySelector('.add-button').addEventListener('click', addNewForm);
    form.parentNode.appendChild(newForm);

}

document.querySelector('.add-button').addEventListener('click', addNewForm);