function getMin(numbers) {
    if (!numbers.length) {
        throw new Error('Should not be an empty array!');
    }
    let currMin = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        currMin > numbers[i] ?
            currMin = numbers[i]
            : false;
    }

    return currMin;
}

const testingNumbers = [3, 1, 2];
const min = getMin(testingNumbers);

console.log(min);