function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
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
