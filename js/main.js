"use strict";

const a = parseInt(prompt("Input A:"));
const operation = prompt("Input Operation:");
const b = parseInt(prompt("Input B:"));
let result;
if (operation == "+") {
    result = a + b;
} else if (operation == "-") {
    result = a - b;
} else if (operation == "*") {
    result = a * b;
} else if (operation == "/") {
    result = a / b;
}

document.querySelector("#result").insertAdjacentHTML('afterbegin', `Result = ${result}`);