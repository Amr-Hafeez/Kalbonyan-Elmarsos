const main = document.querySelector('.display');
const container = document.getElementById('container');
const addUserBtn = document.getElementById('add-user');
const doubleMoneyBtn = document.getElementById('double-money');
const showMillionairesBtn = document.getElementById('millionaires');
const sortBtn = document.getElementById('sort');
const calcWealthBtn = document.getElementById('calc-wealth');

let users = [];

getRandomUser();
getRandomUser();
getRandomUser();

function isWealthVisible() {
    const wealthEl = container.querySelector('.wealth');
    if (wealthEl) {
        container.removeChild(wealthEl);
    }
}

async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    const user = data.results[0];

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    };
    addData(newUser);
}

function doubleMoney() {
    users = users.map(user => {
        return {...user, money: user.money * 2};
    });
    updateDOM();
}

function showMillionaires() {
    users = users.filter(user => user.money > 1000000);

    updateDOM();
}

function sortByRichest() {
    // users = users.sort();
    users.sort((a, b) => b.money - a.money);

    updateDOM();
}

function addData(obj) {
    users.push(obj);
    updateDOM();
}

function calculateWealth() {
    const wealth = users.reduce((acc, user) => acc += user.money, 0);

    const wealthEl = document.createElement('div');
    wealthEl.classList.add('wealth');

    wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`;
    container.appendChild(wealthEl);
}

function updateDOM(data = users) {
    // users = [];
    main.innerHTML = `<h2><strong>Person</strong> Wealth </h2>`;

    data.forEach(user => {
        const person = document.createElement('div');
        person.classList.add('person');
        person.innerHTML = `<strong>${user.name}</strong> ${formatMoney(user.money)}`;

        main.appendChild(person);
    });

    isWealthVisible();
}

function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

addUserBtn.addEventListener('click', getRandomUser);
doubleMoneyBtn.addEventListener('click', doubleMoney);
showMillionairesBtn.addEventListener('click', showMillionaires);
sortBtn.addEventListener('click', sortByRichest);
calcWealthBtn.addEventListener('click', calculateWealth);