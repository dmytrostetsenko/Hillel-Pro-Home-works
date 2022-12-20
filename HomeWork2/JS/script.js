alert('Hello');

let firstNumber = prompt('Enter first number');
let secondNumber = prompt('Enter second number');

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

let summ = firstNumber + secondNumber;
let diff = firstNumber - secondNumber;
let mult = firstNumber * secondNumber;
let div = firstNumber / secondNumber;

alert(`Calculation finished!\nSum: ${firstNumber} + ${secondNumber} = ${summ}\nDiff: ${firstNumber} - ${secondNumber} = ${diff}\nMult: ${firstNumber} * ${secondNumber} = ${mult}\nDiv: ${firstNumber} / ${secondNumber} = ${div}`);
