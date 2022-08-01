var num1 = prompt("Enter the first number");
var num2 = prompt("Enter the second number");
var operator = prompt("Enter the operator :");

switch(operator) {
    case '+':
        addNum();
        break;
    case '-':
        subNum();
        break;
    case '*':
        multiNum();
        break;
    case '/':
        divNum();
}

function addNum() {
    let result = num1 + num2;
    document.getElementById('result').innerHTML = "The addition of the numbers: " + result;
}

function subNum() {
    let result = num1 - num2;
    document.getElementById('result').innerHTML = "The subtraction of the numbers: " + result;
}

function multiNum() {
    let result = num1 * num2;
    document.getElementById('result').innerHTML = "The multiples of the numbers: " + result;
}

function divNum() {
    let result = num1 / num2;
    document.getElementById('result').innerHTML = "The divition of the numbers" + result;
}