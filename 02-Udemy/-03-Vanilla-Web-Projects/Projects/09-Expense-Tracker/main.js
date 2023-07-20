const balanceNum = document.getElementById('balance-number');
const income = document.getElementById('income');
const expense = document.getElementById('expense');
const historyList = document.getElementById('list');
const form = document.getElementById('form');
const transactionText = document.getElementById('transaction-text');
const transactionAmount = document.getElementById('transaction-amount');
const deleteTransaction = document.querySelectorAll('.list-item button');
const temp = document.getElementById('item');


const localStorageTransactions = JSON.parse(
    localStorage.getItem('transactions-z')
);

let transactions = localStorage.getItem('transactions-z') !== null ? localStorageTransactions : [];

function updateValues() {
    const amounts = transactions.map(transaction => +transaction.number);

    const plus = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const minus = amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    income.textContent = `$${plus}`;
    expense.textContent = `$${minus}`;
    balanceNum.textContent = `$${+plus + +minus}`;
}

function addTransaction(text, amount, options = true) {

    const transactionEl = document.importNode(temp.content, true);
    const li = transactionEl.querySelector('li');


    const button = li.querySelector('button');
    const svg = li.querySelector('svg');
    button.addEventListener('click', e => {
        const itemId = +e.currentTarget.parentElement.id;

        if (e.currentTarget === button) {
            transactions = transactions.filter(item => item.id !== itemId);
            historyList.removeChild(document.getElementById(e.currentTarget.parentElement.id));
            updateLocalStorage();
            updateValues();
        }
    });


    li.className = amount >= 0 ? 'list-item' : 'list-item ex';

    const name = transactionEl.querySelector('.name');
    const number = transactionEl.querySelector('.number');
    name.textContent = text;
    number.textContent = amount < 0 ? `${amount}` : `+${amount}`;

    const transaction = {
        id: Math.floor(Math.random() * 100000000),
        name: text,
        number: amount,
    }

    li.id = `${transaction.id}`;
    historyList.appendChild(transactionEl);
    options === true ? transactions.push(transaction) : false;
    options === true ? updateLocalStorage() : false;
    options === true ? updateValues() : false;

}

function updateLocalStorage() {
    localStorage.setItem('transactions-z', JSON.stringify(transactions));
}

function init() {
    historyList.innerHTML = ``;

    // Display The History List
    transactions.forEach(transaction => {
        addTransaction(transaction.name, transaction.number, false);
    });

    updateValues();
}

init();

form.addEventListener('submit', e => {
    e.preventDefault();
    const text = transactionText.value;
    const amount = +transactionAmount.value;

    addTransaction(text, amount);

    transactionText.value = '';
    transactionAmount.value = '';
});
