//create basic functions of a calculator i.e. add, subtract, multiply, divide

const add = function(a,b) {
    return a + b; 
}

const subtract = function(a,b) {
    return a - b;
}

const multiply = function(a,b) {
    return a * b;
}

const divide = function(a,b) {
    return a / b
}


//a calculator operation will consist of a number, an operator and another number. For example, 3+5.
//create 3 variables, one for each part of the operation

let firstNum;
let secondNum;
let operator;

//for operate, will need to check which operator was passed in so that we know which function to use

function operate(a,b,c) {
    if (b === "-") {
       return subtract (a,c);
    } else if (b === "+") {
        return add(a,c);
    } else if (b === "*") {
        return multiply(a,c)
    }
      else if (b === "/") {
        return divide(a,c)
      }
      else {
        return "unknown operator"
      }

}