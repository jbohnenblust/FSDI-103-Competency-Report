let num1=Number(prompt("Enter the 1st number:"));
let num2=Number(prompt("Enter the 2nd number:"));

function sum(num1,num2){
    console.log(`The result of ${num1} plus ${num2} equals ${num1 + num2}`);
}

sum(num1,num2);

function difference(num1,num2){
    console.log(`The result of ${num1} minus ${num2} equals ${num1 - num2}`);
}

difference(num1,num2);

function multiple(num1,num2){
    console.log(`The result of ${num1} multiplied by ${num2} equals ${num1 * num2}`);
}

multiple(num1,num2);

function divide(num1,num2){
    console.log(`The result of ${num1} divided by ${num2} equals ${num1 / num2}`);
}

divide(num1,num2);