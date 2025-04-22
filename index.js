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
const drinks = {
    espresso: "Эспрессо",
    capuccino:"Капучино",
    cacao: "Какао"
}
const milks = {
    usual: "обычное",
    "no-fat":"обезжиренное",
    soy: "соевое",
    coconut: "кокосовое"
}

const extraOptions = {
    "whipped cream": "взбитые сливки",
    marshmallow: "зефирки",
    chocolate: "шоколад",
    cinnamon: "корица"
}
function processingSubmit(event) {
    event.preventDefault();
    const modal = document.querySelector('.modal-overlay');
    modal.querySelector('h2').textContent = `Вы заказали ${formCount} ${numberStringForm(formCount)}`;
    modal.style.display = "block";
    const table = modal.querySelector('table');

    table.innerHTML = '<tr><th>Напиток</th><th>Молоко</th><th>Дополнительно</th><th>Пожелания</th></tr>';
    for (const form of document.querySelectorAll('form')){
        const data = new FormData(form);

        const row = document.createElement('tr');

        const drinkCell =  document.createElement('td');
        const milkCell =  document.createElement('td');
        const extraCell =  document.createElement('td');
        const wishesCell =  document.createElement('td');

        const drinkId = data.get('coffee');
        drinkCell.textContent = drinks[drinkId];

        const milkId = data.get('milk');

        milkCell.textContent = milks[milkId];

        const extras = data.getAll('options').map(opt=>extraOptions[opt]);

        extraCell.textContent = extras.join(', ');
        wishesCell.innerHTML = form.querySelector('.user-wishes-value').innerHTML;
        row.appendChild(drinkCell);
        row.appendChild(milkCell);
        row.appendChild(extraCell);
        row.appendChild(wishesCell);
        table.appendChild(row);
    }

}

function closeModal(event) {
    document.querySelector('.modal-overlay').style.display = "none";
}

function processUserWishes(event) {
    const value = event.target.value;
    event.target.parentNode.querySelector('.user-wishes-value').textContent = value;
}
for (const textArea of document.querySelectorAll(".user-wishes")){
    textArea.addEventListener('input', processUserWishes);
}



for (const form of document.querySelectorAll('form')){
    form.addEventListener("submit", processingSubmit);
}

document.querySelector('.close').addEventListener("click", closeModal);