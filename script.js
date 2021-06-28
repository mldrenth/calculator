let display = 0;
let a = 0;
let b = 0;
let operator = "";
let isPushed = 0;
let blocked = true;
let needsClear = false;
function add(a,b) {
    return displayOutput.textContent = a + b;
}

function subtract(a,b) {
    return displayOutput.textContent = a - b;
}

function multiply(a,b) {
    return displayOutput.textContent = a * b;
}

function divide(a,b) {
    if (b == 0) {
        alert ("Why are you tring to divide by 0?");
        clearData();
    }
    else {
    return displayOutput.textContent = a / b;}
}

function operate(operator,a,b) {
    if (operator === "add") {
        return add(a,b);
    }
    else if (operator === "subtract") {
        return subtract(a,b);
    }
    else if (operator === "multiply") {
        return multiply(a,b);
    }
    else if (operator === "divide") {
        return divide(a,b);
    }
}
const operateButton = document.querySelector("#button-operator");
let displayOutput = document.getElementById("display-p");
const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");

function updateDisplay(n) {
    if (needsClear == true) {
    clearDisplay();
    }
    displayOutput.textContent += n;
    blocked = false;
    
}
function clearDisplay(){
    displayOutput.textContent = "";
    needsClear = false;
}

digitButtons.forEach((button) =>
 button.addEventListener("click", () => updateDisplay(button.textContent))
)
operatorButtons.forEach((button) =>
 button.addEventListener("click", () => isChecked(isPushed))
 )
 operatorButtons.forEach((button) =>
 button.addEventListener("click", () => assignOperator(button.textContent))
 )

clearButton.addEventListener("click", function() {
    clearData();
});

function  clearData(){
    clearDisplay();
    operator = "";
    a = 0;
    b = 0;
    isPushed = 0;
    blocked = true;
    needsClear = false;
}


operateButton.addEventListener("click", function() {
    evaluate(operator,a)
});
function isChecked(isPushed) {
    if (blocked == false) {
    if (isPushed >= 1) {
        evaluate(operator,a);
        isPushed = 0;
        blocked = true;
    }}
}

function assignOperator(input) {
    isPushed += 1
    needsClear = true;
    if (input == "+") {
        operator = "add";
        a = parseFloat(displayOutput.textContent);
    }
    else if (input == "-") {
        operator = "subtract";
        a = parseFloat(displayOutput.textContent);
    }
    else if (input == "*") {
        operator = "multiply"; 
        a = parseFloat(displayOutput.textContent);
    }
    else if (input == "/") {
        operator = "divide";
        a = parseFloat(displayOutput.textContent);
    }
    return operator;
}
function evaluate(operator,a) {
    if (blocked == false) {
    b = parseFloat(displayOutput.textContent);
    operate(operator,a,b);
    blocked = true;}
    return parseFloat(displayOutput.textContent);
}