function add(a, b) {
    // Converts the variable to a number, in case it comes in as a String.
    a = Number(a);
    b = Number(b);
    return Math.round(((a + b) + Number.EPSILON) * 100) / 100
    //return a + b;
}

function subtract(a, b) {
    a = Number(a);
    b = Number(b);
    return Math.round(((a - b) + Number.EPSILON) * 100) / 100
    //return a - b;
}

function multiply(a, b) {
    a = Number(a);
    b = Number(b);
    return Math.round(((a * b) + Number.EPSILON) * 100) / 100
    //return a * b;
}

function divide(a, b) {
    a = Number(a);
    b = Number(b);
    if (b == 0) {
        alert("You can't divide by zero!");
        // Reset display value
        displayValue = '';
        return '';
    }
    return Math.round(((a / b) + Number.EPSILON) * 100) / 100
    //return a / b;
}

// At this time, this function expects a string for the operator and will throw an error if a string isn't
// provided in the function-call.
function operate(operator, a, b) {
    if (operator == '+')
        return add(a, b);
    if (operator == '-')
        return subtract(a, b);
    if (operator == '*')
        return multiply(a, b);
    if (operator == '/')
        return divide(a, b);
}

function populateDisplay(a) {
    // Clears the display if a number is entered right after clicking on Equals.
    // This prevents adding onto the display value after performing an equal button-click.
    if(nextNumberClearDisplay) {
        displayValue = '';
        nextNumberClearDisplay = false;
    }
    // Prevents entering more than one decimal for a number.
    if(a == '.' && displayValue.includes('.')) {
        alert("You can't have more than one decimal.");
        return;
    }
    displayValue += a;
    display.textContent = displayValue;
}

// Stores the current operator (+, -, *, or /).
// Stores the first (left-side value into storedValue), and makes the displayValue = 0.
// Also clears the display.
function pressedOperator (a) {
    // '' = '0' so this if statement needs both conditions.
    if(displayValue == '' && displayValue != '0') {
        alert("You need to input a number first.");
        return;
    }
    if(storedValue != '') {
        equals();
    }
    currentOperator = a;
    storedValue = displayValue;
    displayValue = '';
    // display.textContent = '';
}

// Performs the applicable operation.
function equals () {
    if(currentOperator == '') {
        alert('You must choose an operator first.');
        return;
    }
    // '' = '0' so this if statement needs both conditions.
    if((displayValue == '' || storedValue == '') && (displayValue != '0' && storedValue != '0')) {
        alert('You must enter a value first.');
        return;
    }
    displayValue = operate(currentOperator, storedValue, displayValue);
    display.textContent = displayValue;
    storedValue = '';
    nextNumberClearDisplay = true;
}

// Clears the display and makes all values equal nothing.
function clear () {
    displayValue = '';
    storedValue = '';
    currentOperator = '';
    display.textContent = displayValue;
}

// Multiplies the displayValue number by -1. Makes it negative or positive.
function negative () {
    displayValue = displayValue * -1;
    display.textContent = displayValue;
}

// !!!!!!!!!!!!!!!!!!!!! //
// Found a new bug where '0' (zero) is the same thing as '', causing issues with my if statements.

let displayValue = '';
let storedValue = '';
let currentOperator = '';
const display = document.querySelector('#display');
let nextNumberClearDisplay = false;

// All numbered buttons below will add to the total variable like a string. i.e. pressing 1, then 2, then 3, will
// make total = '123'. 
const btnOne = document.querySelector('#one');
btnOne.addEventListener("click", function() {populateDisplay('1');});

const btnTwo = document.querySelector('#two');
btnTwo.addEventListener("click", function() {populateDisplay('2');});

const btnThree = document.querySelector('#three');
btnThree.addEventListener("click", function() {populateDisplay('3');});

const btnFour = document.querySelector('#four');
btnFour.addEventListener("click", function() {populateDisplay('4');});

const btnFive = document.querySelector('#five');
btnFive.addEventListener("click", function() {populateDisplay('5');});

const btnSix = document.querySelector('#six');
btnSix.addEventListener("click", function() {populateDisplay('6');});

const btnSeven = document.querySelector('#seven');
btnSeven.addEventListener("click", function() {populateDisplay('7');});

const btnEight = document.querySelector('#eight');
btnEight.addEventListener("click", function() {populateDisplay('8');});

const btnNine = document.querySelector('#nine');
btnNine.addEventListener("click", function() {populateDisplay('9');});

const btnZero = document.querySelector('#zero');
btnZero.addEventListener("click", function() {populateDisplay('0');});

// Decimal button
const btnDecimal = document.querySelector('#decimal');
btnDecimal.addEventListener("click", function() {populateDisplay('.');});

// Button that makes the display number positive or negative.
const btnNegative = document.querySelector('#negative');
btnNegative.addEventListener("click", function() {negative();});

// Operator buttons
const btnPlus = document.querySelector('#plus');
btnPlus.addEventListener("click", function() {pressedOperator('+');});

const btnMinus = document.querySelector('#minus');
btnMinus.addEventListener("click", function() {pressedOperator('-');});

const btnMultiply = document.querySelector('#multiply');
btnMultiply.addEventListener("click", function() {pressedOperator('*');});

const btnDivide = document.querySelector('#divide');
btnDivide.addEventListener("click", function() {pressedOperator('/');});

// Equals button
const btnEquals = document.querySelector('#equals');
btnEquals.addEventListener("click", function() {equals();});

// Clear button
const btnClear = document.querySelector('#clear');
btnClear.addEventListener("click", function() {clear();});