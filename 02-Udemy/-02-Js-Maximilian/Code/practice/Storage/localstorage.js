const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const userId = 'u390';
const user = {
    name: 'Amr',
    age: 20,
    hobbies: ['sports', 'cooking', 'coding']
}


storeBtn.addEventListener('click', () => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('user-id', userId);
});

retrBtn.addEventListener('click', () => {
    const extractedId = localStorage.getItem('user-id');
    const extractedUser = JSON.parse(localStorage.getItem('user'));
    console.log(extractedUser);
    if (extractedId) {
        console.log('Got the id - ' + extractedId);
    } else console.log(`Couldn't find the id - ${extractedId}`);
});
