// rewrite this function as an arrow function

// function sayHello(name) {
//     console.log(`Hi ${name}`);
// }

const sayHello = name => console.log(`Hi ${name}`)

const sayHelloV2 = (name, phrase) => console.log(`${phrase} ${name}`);
const sayHelloV3 = () => console.log('Hi There');
const sayHelloV4 = name => 'Hi ' + name;

sayHello('Amr');
sayHelloV2('Max', 'Hello');
sayHelloV3();
console.log(sayHelloV4('Amr'));

const sayHelloV5 = (name, phrase = 'Hi') => console.log(`${phrase} ${name}`);

sayHelloV5('Kareem');
sayHelloV5('Kareem', 'Hello');

function checkInput(cb, ...strings) {
    let hasEmptyText = false;
    for (const text of strings) {
        if (!text) {
            hasEmptyText = true;
            break;
        }
    }
    if (!hasEmptyText) {
        cb();
    }
}

checkInput(
    () => {
        console.log('All not empty!');
    },
    'Hello',
    '12',
    'valor',
    'Not empty'
);