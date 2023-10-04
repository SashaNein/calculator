let firstNumber = '';
let secondNumber = ''; 
let currentOperator = '';
let temporaryData = '';

const numberButtons = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operator')
const equalButton = document.getElementById('equals');
const deleteButton = document.getElementById('deleteBtn');
const clearButton = document.getElementById('clear');
const addPoint = document.getElementById('point');
const currentThing = document.getElementById('currentThing')
const lastThing = document.getElementById('lastThing')


equalButton.addEventListener('click', operate);
deleteButton.addEventListener('click', deleteNumber);
clearButton.addEventListener('click', clearScreen);
addPoint.addEventListener('click', appendPoint);


numberButtons.forEach((button) => 
	button.addEventListener('click', () => appendNumber(button.textContent))
)

operators.forEach((button) => 
	button.addEventListener('click', () => setOperation(button.textContent))
)


function appendNumber(number) {
lastThing.textContent = '';
currentThing.textContent+=number;
console.log(currentThing.textContent);
}

function setOperation(operator) {
if (currentOperator!== null) operate();
if (temporaryData !== '') { firstNumber = temporaryData;} 
else {firstNumber = currentThing.textContent}

currentOperator = operator;
currentThing.textContent='';
}

function operate() {
	secondNumber = currentThing.textContent;
	num1 = parseInt(firstNumber);
	num2 = parseInt(secondNumber);
	switch(currentOperator){
	case '+': 
		lastThing.textContent = add(num1, num2);
		temporaryData = lastThing.textContent;
		break;
	case '-':
		lastThing.textContent = subtract(num1, num2);
		temporaryData = lastThing.textContent;
		break;
	case 'x':
		lastThing.textContent = multiply(num1, num2);
		temporaryData = lastThing.textContent;
		break;
	case '/':
		lastThing.textContent = divide(num1, num2);
		temporaryData = lastThing.textContent;
		break;
	case 'AC':
		clearScreen();
		break;
	}

}



function deleteNumber() {
	currentThing.textContent = currentThing.textContent.slice(0,-1);
}

function clearScreen() {
lastThing.textContent = '0';
firstNumber = '';
secondNumber = ''; 
currentOperator = '';
temporaryData = '';
}
function appendPoint() {

}



let multiply = (a, b) => {
	return a*b;
} 

let divide = (a, b) => {
	return a/b;
} 

let add = (a, b) => {
	return a+b;
} 

let subtract = (a, b) => {
	return a-b;
} 