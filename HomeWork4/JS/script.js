let isAgree, firstNumber, secondNumber, thirdNumber, result;
const history = [];

alert('Hello user');
do{
	let choose = +prompt('Please choose operation: \n1 - addition ( + ); \n2 - subtraction ( - ); \n3 - multiplication ( * ); \n4 - division ( / ); \n5 - exponentiation; \n6 - sin (number); \n7 - cos (number); \n8 - history;')
	
	switch (true){
		case (choose > 0 && choose < 6):
			do{
				firstNumber = +prompt('Enter first number')
			} while (isNaN(firstNumber));
	
			do{
				secondNumber = +prompt('Enter second number')
			} while (isNaN(secondNumber));
			break;
		case (choose === 6 || choose === 7):
			do{
				thirdNumber = +prompt('Enter number')
			} while (isNaN(thirdNumber));
			break;
		case (choose === 8):
			alert(history.join('\n'));
			break;
		default:
			alert('Incorrect operation')
			break;
	}

	let addition = firstNumber + secondNumber;
	let subtraction = firstNumber - secondNumber;
	let multiplication = firstNumber * secondNumber;
	let division = firstNumber / secondNumber;
	let exponentiation = Math.pow(firstNumber, secondNumber);
	let sin = Math.sin(thirdNumber);
	let cos = Math.cos(thirdNumber);

	switch (choose){
		case 1:
			result = `${firstNumber} + ${secondNumber} = ${addition}`;
			history.push(result);
			alert(result);
			break;
		case 2:
			result = `${firstNumber} - ${secondNumber} = ${subtraction}`;
			history.push(result);
			alert(result);
			break;
		case 3:
			result = `${firstNumber} * ${secondNumber} = ${multiplication}`;
			history.push(result);
			alert(result);
			break;
		case 4:
			result = `${firstNumber} / ${secondNumber} = ${division}`;
			history.push(result);
			alert(result);
			break;
		case 5:
			result = `Number ${firstNumber} to the power of ${secondNumber} = ${exponentiation}`;
			history.push(result);
			alert(result);
			break;
		case 6:
			result = `Sin ${thirdNumber} = ${sin}`;
			history.push(result);
			alert(result);
			break;
		case 7:
			result = `Cos ${thirdNumber} = ${cos}`;
			history.push(result);
			alert(result);
			break;
	};

	isAgree = confirm(`Do you want calculate one more time?`);
} while (isAgree);


