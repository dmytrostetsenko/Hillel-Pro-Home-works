let isAgree, firstNumber, secondNumber, thirdNumber, result;
const history = [];

function enterNumber (massege){
	do{
		number = prompt(massege)
	} while (!isNaN(+number) || number === '');
	number = Number(number);
	return number;
};	

function getAddition (num1, num2) { return num1 + num2; };
function getSubstraction (num1, num2) { return num1 - num2; };
function getMultiplication (num1, num2) { return num1 * num2; };
function getDivision (num1, num2) { return num1 / num2; };
function getPow (num1, num2) { return Math.pow(num1, num2); };
function getSin (num) { return Math.sin(num); };
function getCos (num) { return Math.cos(num); };


alert('Hello user');
do{
	let choose = +prompt('Please choose operation: \n1 - addition ( + ); \n2 - subtraction ( - ); \n3 - multiplication ( * ); \n4 - division ( / ); \n5 - exponentiation; \n6 - sin (number); \n7 - cos (number); \n8 - history;')
	
	switch (true){
		case (choose > 0 && choose < 6):
			firstNumber = enterNumber('Enter First number');
			secondNumber = enterNumber('Enter Second number');
			break;
		case (choose === 6 || choose === 7):
			thirdNumber = enterNumber('Enter number');
			break;
		case (choose === 8):
			alert(history.join('\n'));
			break;
		default:
			alert('Incorrect operation')
			break;
	}

	switch (choose){
		case 1:
			result = `${firstNumber} + ${secondNumber} = ${getAddition(firstNumber, secondNumber)}`;
			history.push(result);
			alert(result);
			break;
		case 2:
			result = `${firstNumber} - ${secondNumber} = ${getSubstraction(firstNumber, secondNumber)}`;
			history.push(result);
			alert(result);
			break;
		case 3:
			result = `${firstNumber} * ${secondNumber} = ${getMultiplication(firstNumber, secondNumber)}`;
			history.push(result);
			alert(result);
			break;
		case 4:
			result = `${firstNumber} / ${secondNumber} = ${getDivision(firstNumber, secondNumber)}`;
			history.push(result);
			alert(result);
			break;
		case 5:
			result = `Number ${firstNumber} to the power of ${secondNumber} = ${getPow(firstNumber, secondNumber)}`;
			history.push(result);
			alert(result);
			break;
		case 6:
			result = `Sin ${thirdNumber} = ${getSin(thirdNumber)}`;
			history.push(result);
			alert(result);
			break;
		case 7:
			result = `Cos ${thirdNumber} = ${getCos(thirdNumber)}`;
			history.push(result);
			alert(result);
			break;
	};

	isAgree = confirm(`Do you want calculate one more time?`);
} while (isAgree);


