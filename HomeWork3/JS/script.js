alert('Hello!');

let firstNumber = prompt('Please enter first Number');
let secondNumber = prompt('Please enter second Number');
let option = prompt('Please choose option: \n1 - addition ( + ) \n2 - subtraction ( - ) \n3 - multiplication ( * ) \n4 - division ( / ) \n5 - exponentation');

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

let addition = firstNumber + secondNumber;
let subtraction = firstNumber - secondNumber;
let multiplication = firstNumber * secondNumber;
let division = firstNumber / secondNumber;
let exponentation = Math.pow(firstNumber, secondNumber);

if (option == 1 || option == '+') {
	alert(`${firstNumber} + ${secondNumber} = ${addition}`)
}else if (option == 2 || option == '-') {
	alert(`${firstNumber} - ${secondNumber} = ${subtraction}`)
} else if (option == 3 || option == '*') {
	alert(`${firstNumber} * ${secondNumber} = ${multiplication}`)	
} else if (option == 4 || option == '/' ) {
	alert(`${firstNumber} / ${secondNumber} = ${division}`)
} else if (option == 5){
	alert(`${firstNumber} to the power of ${secondNumber} = ${exponentation}`)
} else{
	alert('Error, incorrect option')
};

let thirdNumber = prompt('Please enter number for sine or cosine calculation');
let secondOption = prompt('Please choose option: \n1 - sin \n2 - cos');

thirdNumber = Number(thirdNumber);

let sinNumber = Math.sin(thirdNumber);
let cosNumber = Math.cos(thirdNumber);

if (secondOption == 1){
	alert(`sin number ${thirdNumber} = ${sinNumber}`)
} else if ( secondOption == 2){
	alert(` cos number ${thirdNumber} = ${cosNumber}`)
} else{
	alert('Error, incorrect option')
};