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
    NONE: 5
};

let prevNum = '';
let value2 = '';
let operator = operations.NONE; 
let answer = null;
let inputBuffer = '';
const calculator = document.getElementById("container");
const exprScreen = calculator.querySelector("#expression");
const answerScreen = calculator.querySelector("#answer");
//setup data buttons (the numbers)
const dataButtons = calculator.querySelectorAll(".number");
dataButtons.forEach(button => button.addEventListener('click', () =>{
    let intBuffer = parseInt(button.textContent);
    handleInput(button.textContent);
    //updateValues(intBuffer);
}));

//setup operator buttons
const opButtons = calculator.querySelectorAll(".operator");
opButtons.forEach(button => button.addEventListener('click', () => {
    let charBuffer = button.textContent;
    updateOperator(charBuffer);
}));

//setup equals button
const equalButton = calculator.querySelector("#equals");
equalButton.addEventListener('click', () =>{
    answer = operate(operator, prevNum, value2);
    console.log(answer);
    populateAnswer(answer)
});


//setup clear button
const clearButton = calculator.querySelector("#clear");
clearButton.addEventListener('click', clearAll);


/* DISPLAY FUNCTIONS */
function operate(operator, value1, value2){
    // if (!operator || !value1 || !value2) {
    //     alert("ERROR");
    //     return;
    // };

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
};


/*  DISPLAY FUNCTIONS */

function populateAnswer(answer){
    answerScreen.textContent = answer;
    prevNum = answer;
    value2 = '';
    operator = operations.NONE;
}

function handleInput(input){
    if(inputBuffer === ''){
        inputBuffer = input;
    }
    else{
        inputBuffer = inputBuffer + input;
    }
    console.log(inputBuffer);
    let intBuffer = inputBuffer;
    updateValues(intBuffer);
}

function updateValues(input){
    // console.log(input);
   // if(value1 && value2) return; 
    
    if (prevNum === ''){
        prevNum = input;
    }
    else{
        value2 = input;
    }
   // console.log(value1, value2);
   updateExpr();
}

function updateOperator(input){
    if(operator !== operations.NONE) return;
    switch (input) {
        case "/":
            operator = operations.DIVIDE;
            break;
        case "-":
            operator = operations.SUBTRACT;
            break;
        case "*":
            operator = operations.MULTIPLY;
            break;
        case "+":
            operator = operations.ADD;
            break;
        default:
            break;
    }

    updateExpr();
}

function updateExpr(){
    // value1 = 12;
    // value2 = 35;
    // operator = operations.ADD;
    // let opChar = '';
    switch (operator) {
        case operations.ADD:
            opChar = ' + ';
            break;
        case operations.SUBTRACT:
            opChar = ' - ';
            break;
        case operations.MULTIPLY:
            opChar = ' x ';
            break;
        case operations.DIVIDE:
            opChar = ' / ';
            break;
        case operations.NONE:
            opChar = '';
            break;
        default:
            opChar = '';
            break;
    }
    let exprString = prevNum + opChar + value2;
    console.log(exprString);
    exprScreen.textContent = exprString;
}

function clearAll(){
    prevNum = '';
    value2 = '';
    operator = operations.NONE;
    answer = '';
    updateExpr();
    populateAnswer(answer);

}
//populateAnswer(multiply(2,4));
updateExpr();