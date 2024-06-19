/*
//1
let name = "ranali";
//2 Do not use Var 
var address = "gampaha";
//3 Const is used like an Array
const age = 12;

console.log(typeof name);
console.log(typeof age);
console.log(typeof address);

// at the end ; Applying as is not essential 
let x = 10;
let y = 20;
let z = x+y;
console.log(z);*/

//   function calc(){
//     let number1=Number();
//     let number2=Number();
//     console.log(typeof number1);
//     console.log(typeof number2);
//     number1 = document.getElementById("number01").value;
//     number2 = document.getElementById("number02").value;
//     let op=document.getElementById("op").value;
//     let lblOutput = document.getElementById("output").value;

//     lblOutput.innerHTML=number1+number2;
//}

// function calc(){
// let number01;
// let number02;

// number01 = new Number(document.getElementById("number01"));
// number02 = new Number(document.getElementById("number02"));

// let op=document.getElementById("op");
// let lblOutput=document.getElementById("output");

// number01 = new Number(document.getElementById("number01"));
// number02 = new Number(document.getElementById("number02"));

// console.log(number01+number02);

// switch (op) {
//     case "+":lblOutput.innerHTML=number01+number02;
        
//         break;
// }

// console.log(typeof number01);
// console.log(typeof number02);

// }

document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    let number1 = parseFloat(document.getElementById('number1').value);
    let operator = document.getElementById('operator').value;
    let number2 = parseFloat(document.getElementById('number2').value);

    let output;

    switch (operator) {
        case '+':
            output = number1 + number2;
            break;
        case '-':
            output = number1 - number2;
            break;
        case '*':
            output = number1 * number2;
            break;
        case '/':
            output = number1 / number2;
            break;
        default:
            output = 'Invalid operator';
    }

    
    document.getElementById('output').innerText = `output: ${output}`;
});



