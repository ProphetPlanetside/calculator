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

let total = '';
const display = document.querySelector('#display');

// All numbered buttons below will add to the total variable like a string. i.e. pressing 1, then 2, then 3, will
// make total = '123'.
const btnOne = document.querySelector('#one');
btnOne.addEventListener("click", function() {total += '1';});

const btnTwo = document.querySelector('#two');
btnTwo.addEventListener("click", function() {total += '2';});

const btnThree = document.querySelector('#three');
btnThree.addEventListener("click", function() {total += '3';});

const btnFour = document.querySelector('#four');
btnFour.addEventListener("click", function() {total += '4';});

const btnFive = document.querySelector('#five');
btnFive.addEventListener("click", function() {total += '5';});

const btnSix = document.querySelector('#six');
btnSix.addEventListener("click", function() {total += '6';});

const btnSeven = document.querySelector('#seven');
btnSeven.addEventListener("click", function() {total += '7';});

const btnEight = document.querySelector('#eight');
btnEight.addEventListener("click", function() {total += '8';});

const btnNine = document.querySelector('#nine');
btnNine.addEventListener("click", function() {total += '9';});

const btnZero = document.querySelector('#zero');
btnZero.addEventListener("click", function() {total += '0';});