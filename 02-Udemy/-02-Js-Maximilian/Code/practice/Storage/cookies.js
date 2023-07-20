const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');


storeBtn.addEventListener('click', () => {
    const userId = 'u999';
    const user = {name: 'Amr', age: 20};
    document.cookie = `uid=${userId}`;
    document.cookie = `user=${JSON.stringify(user)}`;
});

retrBtn.addEventListener('click', () => {
    console.log(document.cookie.split('; '));
});
