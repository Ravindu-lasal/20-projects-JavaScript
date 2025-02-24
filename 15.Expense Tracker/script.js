const expencetracker = document.querySelector(".expence-tracker");
const addexpencebtn = document.querySelector(".add-expence-btn");
const totalexpances = document.querySelector(".total-expences h3");

let expences = [];
let total = 0;

function renderExpences() {
  let html = "";
  expences.forEach((expence) => {
    html += `
        <div class="expence-item">
            <div class="expence-item-description">${expence.description}</div>
            <div class="expence-item-amount">${expence.amount}</div>
            <button class="delete-expence-btn">Delete</button>
        </div>
        `;
  });

  expencetracker.innerHTML = html;
  totalexpances.innerHTML = `Total expences: $`;
}

function addExpences() {

    const description = prompt("Enter Expense Description:");
    const amount = prompt("Enter Expense Amount:");
    const expence = {
        description:description,
        amount:amount
    };

    expence.push(expence);
    total += amount;
    renderExpences();
}

addexpencebtn.addEventListener("click", addExpences);

function deleteExpences() {}
