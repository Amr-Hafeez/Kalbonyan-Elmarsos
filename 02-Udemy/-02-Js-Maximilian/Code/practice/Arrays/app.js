const numbers = [1, 2, 4];
console.log(numbers);

const moreNumbers = new Array(5); // We can just use the Keyword Array()
console.log(moreNumbers);

const yetMoreNumbers = Array.of(1, 3, 9)

const yetMoreNumbers2 = Array.from('Hi!');
console.log(yetMoreNumbers2);

const hobbies = ['Sports', 'Cooking'];
hobbies.push('Reading'); // Adding Element From The End
hobbies.unshift('Coding'); // Adding Element At The Beginning
hobbies.pop(); // Removing The Last Element (It Returns The Deleted Element)
hobbies.shift(); // Removing The Last Element (It Returns The Deleted Element)
console.log(hobbies);

hobbies.splice(-1, 0, 'Eating'); // (It Returns The Deleted Elements)
console.log(hobbies);


const testResults = [1, 1.25, 10.99, 10, -5.77];
const storedResults = testResults.slice(); // Create A Copy version
const newArr = testResults.concat([8, 9, 0]); // Concat two Arrays

console.log(testResults.indexOf(10)); // Returns The Index Of Exists Element.
console.log(testResults.lastIndexOf(10)); // Returns The Index Of Exists Element.
console.log(testResults, storedResults, newArr);
console.log(testResults.includes(10.99));


const personData = [{name: 'Max'}, {name: 'Manuel'}];
console.log(personData.indexOf({name: 'Manuel'}));

const manuel = personData.find((person, index, persons) => {
    return person.name === 'Manuel';
}); // You Can Use The findIndex() Method In The Same Way.

manuel.name = 'Anna';

console.log(manuel, '\n', personData);


const prices = [8.99, 4.99, 3.00, 8.99];
const tax = 0.19;
const taxAdjustPrices = [];
prices.forEach((price, idx, prices) => {
    taxAdjustPrices.push(prices * tax);
})

console.log(taxAdjustPrices);


const prices2 = [8.99, 4.99, 3.00, 8.99];
const tax2 = 0.19;
const taxAdjustPrices2 = prices2.map((price, idx, prices) => {
    return (price * (1 + tax2));
});

// console.log(prices, taxAdjustPrices)

const sortedPrices = prices.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (a === b) {
        return 0;
    } else return -1;
});
console.log(sortedPrices);

const filteredArray = prices.filter(price => price > 6);
console.log(filteredArray);

const sum = prices.reduce((preValue, curValue) => preValue + curValue);
console.log(sum);


const data = 'New york;10.99;2000';
const transformedData = data.split(';');
console.log(data, transformedData);


const nameFragments = ['Amr', 'Khalid', 'Omar'];
const name = nameFragments.join(' ');
console.log(nameFragments, name);

const copiedNameFragments = [...nameFragments];
nameFragments.unshift('Mr');
console.log(nameFragments, copiedNameFragments);


console.log(Math.min(...prices));


const persons = [{name: 'Max', age: 30}, {name: 'Manuel', age: 31}];
const copiedPerson = persons.map(person => ({
    name: person.name,
    age: person.age
}));

persons.push({name: 'Anna', age: 20});
persons[0].age = 31;

console.log(persons, copiedPerson);


const nameData = ['Amr', 'khalid', 'Mr', 20];
// let firstName = nameData[0];
// let lastName  = nameData[1];

const [firstName, lastName, ...otherInformation] = nameData;
console.log(firstName, lastName, otherInformation);
