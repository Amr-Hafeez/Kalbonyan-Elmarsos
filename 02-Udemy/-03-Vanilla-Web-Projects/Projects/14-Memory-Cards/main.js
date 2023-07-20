const cardsBox = document.getElementById('cards');
const addCardBtn = document.getElementById('add-new');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentEl = document.getElementById('current-index');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const clearBtn = document.getElementById('clear-cards');
const form = document.getElementById('form');
const closeFormBtn = document.getElementById('form-close');

let activeCard = 0;

const cardsEl = [];

const cardsData = getCardsData();

// const cardsList = [
//     {
//         question: 'What must a variable begin with?',
//         answer: 'A letter, $ or _'
//     },
//     {
//         question: 'What is a variable?',
//         answer: 'Container for a piece of data'
//     },
//     {
//         question: 'Example of Case Sensitive Variable',
//         answer: 'thisIsAVariable'
//     }
// ];

function createCards() {
    cardsData.forEach((data, index) => createCard(data, index));
}

function createCard(data, index) {
    const card = document.createElement('div');
    card.classList.add('card');

    index === 0 ? card.classList.add('active') : false;

    card.innerHTML = `
        <div class="inner-card">
            <div class="inner-card-front">
                <p>${data.ques}</p>
            </div>
            <div class="inner-card-back">
                <p>${data.res}</p>
            </div>
        </div>
    `;

    card.addEventListener('click', () => card.classList.toggle('show-answer'));

    cardsEl.push(card);
    console.log(cardsEl);
    cardsBox.appendChild(card);

    updateCurrentText();
}

function updateCurrentText() {
    currentEl.innerText = `${activeCard + 1}/${cardsEl.length}`;
}

function getCardsData() {
    const cards = JSON.parse(localStorage.getItem('cards'));
    return cards === null ? [] : cards;
}

function setCardsData(cards) {
    localStorage.setItem('cards', JSON.stringify(cards));
    window.location.reload();
}

createCards();

nextBtn.addEventListener('click', () => {
    cardsEl[activeCard].className = 'card left'

    activeCard += 1;

    if (activeCard > cardsEl.length - 1) {
        activeCard = cardsEl.length - 1;
    }

    cardsEl[activeCard].className = 'card active';

    updateCurrentText();

});

prevBtn.addEventListener('click', () => {
    cardsEl[activeCard].className = 'card right';

    activeCard = activeCard - 1;

    if (activeCard < 0) {
        activeCard = 0;
    }

    cardsEl[activeCard].className = 'card active';

    updateCurrentText();
});

addCardBtn.addEventListener('click', () => form.style.display = 'flex');
closeFormBtn.addEventListener('click', () => form.style.display = 'none');

form.addEventListener('submit', e => {
    e.preventDefault();

    const question = questionEl.value;
    const answer = answerEl.value;

    if (question.trim() && answer.trim()) {
        const newCard = {
            ques: question,
            res: answer
        };

        createCard(newCard);

        questionEl.value = '';
        answerEl.value = '';

        form.style.display = 'none';

        cardsData.push(newCard);
        setCardsData(cardsData);
    }
});

clearBtn.addEventListener('click', () => {
    localStorage.clear();
    cardsBox.innerHTML = '';
    window.location.reload();
})