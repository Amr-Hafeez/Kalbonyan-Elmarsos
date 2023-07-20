class AgePerson {
    printAge() {
        console.log(this.age);
    }
}

class Person extends AgePerson {
    name = 'Amr';

    constructor() {
        super();
        this.age = 20;
    }

    greet() {
        console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' Years old');
    }
}


// Using a Constructor Function.
// function Person() {
//     this.name = 'Amr';
//     this.age = 20;
//     this.greet = function () {
//         console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' Years old');
//     }
// }

// console.dir(Person);
// const person = new Person();
// person.greet();
// person.printAge();
// console.log(person.__proto__);

// const p = new Person();
// console.log(p);


const course = { // new Object
    title: 'JavaScript Course',
    rating: 5
}

// console.log(Object.getPrototypeOf(course));

Object.setPrototypeOf(course, {
    // ...Object.getPrototypeOf(course);
    printRating() {
        console.log(this.rating + '/5');
    }
});
console.log(course.printRating());

// This Notation Accept An Object As A Prototype
const student = Object.create({
    printProgress: function () {
        console.log(this.progress);
    }
});

console.log(student);
