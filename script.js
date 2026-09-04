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

//a calculator operation will consist of a number, an operator and another number. For example, 3+5
//create 3 variables, one for each part of the operation

let firstNum =""; //initialising firstNum as it will now start as a string. Otherwise will show undefined once concatenated
let secondNum = "";
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


//ok, so now need to take the values in

const buttonClick = document.getElementById("seven");
buttonClick.addEventListener("click", storeValue);

function storeValue() {
    if (operator) {
        secondNum += "7";
        document.getElementById('display').textContent = secondNum;
    } else {
        firstNum += "7";
        document.getElementById('display').textContent = firstNum;
    }
    
    //if operator hasn't been pressed (i.e. undefined), then we're on the first number, if it has, we're on the second
    //this is a way to identify whether we're on first or second num as firstNum of course comes before the operator
}


const eightClick = document.getElementById("eight");
eightClick.addEventListener("click", storeValueEight);

function storeValueEight() {
    if (operator) {
        secondNum += "8";
        document.getElementById('display').textContent = secondNum;
    } else {
        firstNum += "8";
        document.getElementById('display').textContent = firstNum;
    }
         

}


const nineClick = document.getElementById("nine"); // we're just selecting the element in the index file here
nineClick.addEventListener("click", storeValueNine); // now listening for an event "click" and saying what to do with it - though haven't defined that function yet

function storeValueNine() {
    if(operator) {
        secondNum += "9";
        document.getElementById('display').textContent = secondNum;
    } else {
        firstNum += "9";
        document.getElementById("display").textContent = firstNum;
    }
}


const xClick = document.getElementById("multiply"); //selecting the element in the index file here
xClick.addEventListener("click", storeValueX); //listening for the event click

function storeValueX() {

    //need to chain calculations so will do this by checking if firstNum, operator and secondNum have all been pressed
    if (firstNum !== "" && operator && secondNum !=="") {
        firstNum = String(operate(Number(firstNum), operator, Number(secondNum)));
        secondNum = "";
    }
   operator = "*";
   document.getElementById('display').textContent = "x";

}


const fourClick = document.getElementById("four");
fourClick.addEventListener("click", storeValueFour);

function storeValueFour() {
    if(operator) {
        secondNum += "4";
        document.getElementById("display").textContent = secondNum;
    } else {
        firstNum += "4";
        document.getElementById("display").textContent = firstNum;
    }
}

const fiveClick = document.getElementById("five");
fiveClick.addEventListener("click", storeValueFive);

function storeValueFive() {
    if(operator) {
        secondNum += "5";
        document.getElementById("display").textContent = secondNum;
    } else {
        firstNum += "5";
        document.getElementById('display').textContent = firstNum;
    }
}

const sixClick = document.getElementById("six");
sixClick.addEventListener("click", storeValueSix);

function storeValueSix() {
    if(operator) {
        secondNum += "6";
        document.getElementById('display').textContent = secondNum;
    } else {
        firstNum += "6";
        document.getElementById('display').textContent = firstNum;
    }
}

const minusClick = document.getElementById("minus");
minusClick.addEventListener("click", storeValueMinus);



function storeValueMinus() {

    //need to chain calculations so will do this by checking if firstNum, operator and secondNum have all been pressed
    if (firstNum !== "" && operator && secondNum !=="") {
        firstNum = String(operate(Number(firstNum), operator, Number(secondNum)));
        secondNum = "";
    }
    operator ="-";
    document.getElementById("display").textContent= "-";

}

const oneClick = document.getElementById("one")
oneClick.addEventListener("click", storeValueOne)

function storeValueOne() {
 if (operator) {
    secondNum += "1";
    document.getElementById("display").textContent = secondNum;
 } else {
    firstNum += "1";
    document.getElementById("display").textContent = firstNum;
 }  

}

const twoClick = document.getElementById("two");
twoClick.addEventListener("click", storeValueTwo);

function storeValueTwo() {

     if(operator) {
        secondNum += "2";
        document.getElementById("display").textContent = secondNum;
    } else {
        firstNum += "2";
        document.getElementById("display").textContent = firstNum;
    }
}

const threeClick = document.getElementById("three");
threeClick.addEventListener("click", storeValueThree);

function storeValueThree() {
    if(operator) {
        secondNum += "3";
        document.getElementById("display").textContent = secondNum;
    } else {
        firstNum += "3";
        document.getElementById("display").textContent = firstNum;
    }
}


const divideClick = document.getElementById("divide");
divideClick.addEventListener("click", storeValueDivide);

function storeValueDivide() {

    //need to chain calculations so will do this by checking if firstNum, operator and secondNum have all been pressed
    if (firstNum !== "" && operator && secondNum !=="") {
        firstNum = String(operate(Number(firstNum), operator, Number(secondNum)));
        secondNum = "";
    }
    operator = "/";
    document.getElementById("display").textContent = "/"

    
}


const zeroClick = document.getElementById("zero");
zeroClick.addEventListener("click", storeValueZero);

function storeValueZero() {
    if(operator) {
        secondNum += "0";
        document.getElementById("display").textContent = secondNum;
    } else {
        firstNum += "0";
        document.getElementById("display").textContent = firstNum;
    }
}

const clearClick = document.getElementById("clear");
clearClick.addEventListener("click", storeValueClear);

function storeValueClear(){
    firstNum = "";
    secondNum = "";
    operator = undefined;
    document.getElementById("display").textContent = "0";
}


const equalsClick = document.getElementById("equals");
equalsClick.addEventListener("click", storeValueEquals);

function storeValueEquals() {

    //display snarky message is user tries to divide by zero!

    if (operator === "/" && Number(secondNum) === 0) {
        document.getElementById("display").textContent = "snarky message!"
        firstNum ="";
        secondNum = "";
        operator = undefined;
        return;
    }

    console.log(firstNum, operator, secondNum)
    const result = operate(Number(firstNum), operator, Number(secondNum));
    document.getElementById("display").textContent = result;
    firstNum = "";
    secondNum = "";
    operator = undefined;
}

const plusClick = document.getElementById("plus");
plusClick.addEventListener("click", storeValuePlus );

function storeValuePlus() {
    //need to chain calculations so will do this by checking if firstNum,operator and secondNum have all been pressed
    if (firstNum !== "" && operator && secondNum !=="") {
        firstNum = String(operate(Number(firstNum), operator, Number(secondNum)));
        secondNum = "";
    }
    operator = "+";
    document.getElementById("display").textContent = "+"
}

