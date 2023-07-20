const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

let db;

const dbRequest = indexedDB.open('DummyStorage', 1);

dbRequest.onsuccess = function (event) {
    db = event.target.result;
}

dbRequest.onupgradeneeded = function (event) {
    db = event.target.result;

    const objStore = db.createObjectStore('products', {keyPath: 'id'});

    objStore.transaction.oncomplete = function (event) {
        const productsStore = db.transaction('products', 'readwrite').objectStore('products');
        productsStore.add({
            'id': 'p1',
            title: 'The First Product',
            price: 12.99,
            tags: ['expensive', 'luxury']
        });
    }
};

dbRequest.onerror = function (event) {
    console.log('ERROR!');
};

storeBtn.addEventListener('click', () => {
    const productsStore = db.transaction('products', 'readwrite').objectStore('products');
    productsStore.add({
        'id': 'p2',
        title: 'The Second Product',
        price: 122.99,
        tags: ['expensive', 'luxury']
    });
});

retrBtn.addEventListener('click', () => {
    const productsStore = db.transaction('products', 'readwrite').objectStore('products');
    const request = productsStore.get('p2');
    request.onsuccess = function () {
        console.log(request.result);
    }
});

// Second
// const userId = 'u390';
// const user = {
//     name: 'Amr',
//     age: 20,
//     hobbies: ['sports', 'cooking', 'coding']
// }