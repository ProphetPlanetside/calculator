function add(a, b) {
    // Converts the variable to a number, in case it comes in as a String.
    a = Number(a);
    b = Number(b);
    return a + b;
}

function subtract(a, b) {
    a = Number(a);
    b = Number(b);
    return a - b;
}

function multiply(a, b) {
    a = Number(a);
    b = Number(b);
    return a * b;
}

function divide(a, b) {
    a = Number(a);
    b = Number(b);
    if (b == 0) {
        alert("You can't divide by zero!");
        return;
    }
    return a / b;
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
    displayValue += a;
    display.textContent = displayValue;
}

// Stores the current operator (+, -, *, or /).
// Stores the first (left-side value into storedValue), and makes the displayValue = 0.
// Also clears the display.
function pressedOperator (a) {
    if(displayValue == '') {
        alert("You need to input a number first.");
        return;
    }
    currentOperator = a;
    storedValue = displayValue;
    displayValue = '';
    display.textContent = '';
}

function equals () {
    displayValue = operate(currentOperator, storedValue, displayValue);
    display.textContent = displayValue;
    storedValue = '';
}

function clear () {
    displayValue = '';
    storedValue = '';
    currentOperator = '';
    display.textContent = displayValue;
}

let displayValue = '';
let storedValue = '';
let currentOperator = '';
const display = document.querySelector('#display');

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