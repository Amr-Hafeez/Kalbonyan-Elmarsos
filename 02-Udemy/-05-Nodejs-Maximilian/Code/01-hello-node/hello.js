const fs = require('fs');
console.log('hello from node run time');

// Destructuring

const person = {
    name: 'Amr',
    age: 21,
    greet: () => {
        console.log(`Hello ${this.name}`);
    },
};

const {name, age: userAge} = person;

console.log(name, userAge);