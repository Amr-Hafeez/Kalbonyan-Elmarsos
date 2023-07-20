// Library Land

const uid = Symbol('uid');

const user = {
    // id: 'p1',
    [uid]: 'p2',
    name: 'Amr',
    age: 20,
    [Symbol.toStringTag]: 'user object'
};
user[uid] = 'p3';

// Posts Land Using The Library

user.id = 'p1';

console.log(user);
console.log(user.toString());

const company = {
    currEmployee: 0,
    employees: ['max', 'manu', 'anna'],

    // next() {
    //     if (this.currEmployee >= this.employees.length) {
    //         return {value: this.currEmployee, done: true};
    //     }
    //     const returnValue = {value: this.employees[this.currEmployee], done: false};
    //     this.currEmployee++;
    //     return returnValue;
    // },

    [Symbol.iterator]: function* employee() {
        let currentEmployee = 0;
        while (currentEmployee < this.employees.length) {
            yield this.employees[currentEmployee];
            currentEmployee++;
        }
    }
};

// console.log(company.next());

for (const employee of company) {
    console.log(employee);
}

// const it = company.getEmployee();
//
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());


// -----

const course = {
    title: 'JavaScript - The Complete Guide'
};

Reflect.setPrototypeOf(course, {
    toString() {
        return this.title;
    }
});

// Reflect.deleteProperty(course, 'title')

// console.log(course.toString());

const courseHandler = {
    get(obj, propertyName) {
        console.log(propertyName);
        if (propertyName === 'length') {
            return 0;
        }
        return obj[propertyName] || 'NOT FOUND';
    },
    set(obj, propName, newValue) {
        if (propName === 'rating') {
            return;
        }

        obj[propName] = newValue;
    }
}

const pCourse = new Proxy(course, courseHandler);
pCourse.rating = 5;

console.log(pCourse.title, pCourse.length, pCourse.rating);

