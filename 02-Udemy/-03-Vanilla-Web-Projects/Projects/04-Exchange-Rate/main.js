const currencyElOne = document.getElementById('currency-one');
const currencyElTwo = document.getElementById('currency-two');
const amountElOne = document.getElementById('amount-one');
const amountElTwo = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

async function calculate() {
    const currencyOne = currencyElOne.value;
    const currencyTwo = currencyElTwo.value;


    const res = await fetch(`https://open.er-api.com/v6/latest/${currencyOne}`)
    const data = await res.json();
    const rate = data.rates[currencyTwo];
    // console.log(data);

    rateEl.textContent = `1 ${currencyOne} = ${rate} ${currencyTwo}`;
    amountElTwo.value = (amountElOne.value * rate).toFixed(2);
}

currencyElOne.addEventListener('change', calculate);
amountElOne.addEventListener('change', calculate);
currencyElTwo.addEventListener('change', calculate);
amountElTwo.addEventListener('change', calculate);

swap.addEventListener('click', () => {
    const temp = currencyElOne.value;
    currencyElOne.value = currencyElTwo.value;
    currencyElTwo.value = temp;
    calculate();
})

calculate();