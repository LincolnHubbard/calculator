/*   ARITHMETIC FUNCTIONS  */

function add(value1, value2){
    return value1 + value2;
};

function subtract(value1, value2) {
    return value1 - value2;
}

function multiply(value1, value2){
    return value1 * value2;
}

function divide(value1, value2){
    return value1 / value2;
}

/*  DISPLAY VARIABLES */
//hacked together enum
const operations = {
    ADD: 1,
    SUBTRACT: 2,
    MULTIPLY: 3,
    DIVIDE: 4,
    DEFAULT: 5
};

let value1 = null;
let value2 = null;
let operator = operations.DEFAULT; 

function operate(operator, value1, value2){
    if (!operator || !value1 || !value2) {
        alert("ERROR");
        return;
    };

    switch (operator) {
        case operations.ADD:
            return add(value1, value2);
            break;
        case operations.SUBTRACT:
            return subtract(value1, value2);
            break;
        case operations.MULTIPLY:
            return multiply(value1, value2);
            break;
        case operations.SUBTRACT:
            return subtract;
            break;
        default:
            break;
    }
};
