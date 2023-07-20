const defaultResult = 0
let currentResult = defaultResult;
let logEntries = [];

function getUserInput() {
    return parseInt(userInput.value);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserInput();

    if (
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE' ||
        !enteredNumber
    ) {
        return;
    }

    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+'
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }
    const initialResult = currentResult;
    getAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function getAndWriteOutput(operator, resultBefore, calcNumber) {
    const calcDescription = `${resultBefore} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription);

}

function writeToLog(
    operationIdentifier,
    preResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        operation: operationIdentifier,
        preResult: preResult,
        number: operationNumber,
        result: newResult,
    };
    logEntries.push(logEntry);
    console.log(logEntries);

}

function add() {
    calculateResult('ADD')

    // From version 1 //

    // const enteredNumber = getUserInput();
    // const initialResult = currentResult;
    // currentResult += enteredNumber;
    // // currentResult = currentResult + +userInput.value;
    // getAndWriteOutput('+', initialResult, enteredNumber);
    // writeToLog('+', initialResult, enteredNumber, currentResult);
}

function subtract() {
    calculateResult('SUBTRACT');

    // From version 1 //

    // const enteredNumber = getUserInput();
    // const initialResult = currentResult;
    // currentResult -= enteredNumber;
    // getAndWriteOutput('-', initialResult, enteredNumber);
    // writeToLog('-', initialResult, enteredNumber, currentResult);
}

function multiply() {
    calculateResult('MULTIPLY');

    // From version 1 //

    /* const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    getAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('*', initialResult, enteredNumber, currentResult); */
}

function divide() {
    calculateResult('DIVIDE');

    // From version 1 //

    /* const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    getAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('/', initialResult, enteredNumber, currentResult); */
}


addBtn.addEventListener('click', add);

subtractBtn.addEventListener('click', subtract);

multiplyBtn.addEventListener('click', multiply);

divideBtn.addEventListener('click', divide);
