/*  DISPLAY VARIABLES */
//hacked together enum
const operations = {
    ADD: 1,
    SUBTRACT: 2,
    MULTIPLY: 3,
    DIVIDE: 4,
    NONE: 5
};

//constant vars (buttons/screens)
const calculator = document.getElementById("container");
const exprScreen = calculator.querySelector("#expression");
const answerScreen = calculator.querySelector("#answer");
let operator = operations.NONE; 
//setup data buttons (the numbers)
const dataButtons = calculator.querySelectorAll(".number");
dataButtons.forEach(button => button.addEventListener('click', () =>{
    appendNumber(button.textContent);
}));

//setup operator buttons
const opButtons = calculator.querySelectorAll(".operator");
opButtons.forEach(button => button.addEventListener('click', () => {
    let charBuffer = button.textContent;
    updateOperator(charBuffer);
    moveValues();
}));

//setup equals button
const equalButton = calculator.querySelector("#equals");
equalButton.addEventListener('click', () =>{
    equalsButtonPressed()
});


//setup clear button
const clearButton = calculator.querySelector("#clear");
clearButton.addEventListener('click', clearAll);

/* ARITHMETIC FUNCTIONS */
function add(value1, value2) {
    return value1 + value2;
}

function subtract(value1, value2){
    return value1 - value2;
}

function multiply(value1, value2){
    return value1 * value2;
}

function divide(value1, value2){
    return value1 / value2;
}

/* CALCULATOR FUNCTIONS */
function operate(operator){
    let value1 = parseInt(exprScreen.textContent);
    let value2 = parseInt(answerScreen.textContent);
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
        case operations.DIVIDE:
            return divide(value1, value2);
            break;
        default:
            break;
    }
}

function updateOperator(key){
    if (answerScreen.textContent === '') return;
    switch (key) {
        case "+":
            operator = operations.ADD;
            break;
        case "-":
            operator = operations.SUBTRACT;
            break;
        case "*":
            operator = operations.MULTIPLY;
            break;
        case "/":
            operator = operations.DIVIDE;
            break;
        default:
            break;
    }

    let stringBuffer = answerScreen.textContent;
    stringBuffer = stringBuffer + " " + key + " ";
    answerScreen.textContent = stringBuffer;
}

function equalsButtonPressed() {
    // let value1 = parseInt(exprScreen.textContent);
    // let value2 = parseInt(answerScreen.textContent);
    exprScreen.textContent = exprScreen.textContent + answerScreen.textContent;
    answerScreen.textContent = operate(operator);
    operator = operator.NONE;
}

function appendNumber(input){
    let stringBuffer = answerScreen.textContent;
    stringBuffer = stringBuffer + input;
    answerScreen.textContent = stringBuffer;
}

function moveValues() {
    const valueToMove = answerScreen.textContent;
    exprScreen.textContent = valueToMove;
    answerScreen.textContent = '';
}

function clearAll(){
    exprScreen.textContent = '';
    answerScreen.textContent = '';
    operator = operations.NONE;
}