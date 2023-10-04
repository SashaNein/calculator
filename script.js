let firstNumber = '';
let secondNumber = ''; 
let currentOperator = '';
let temporaryData = '';

const numberButtons = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operator')
const equalButton = document.getElementById('equals');
const deleteButton = document.getElementById('delete');
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
		console.log(firstNumber);
		console.log(secondNumber);
		break;
	case '-':
		lastThing.textContent = subtract(num1, num2);
		temporaryData = lastThing.textContent;
		break;
	case '*':
		lastThing.textContent = multiply(num1, num2);
		temporaryData = lastThing.textContent;
	case '/':
		lastThing.textContent = divide(num1, num2);
		temporaryData = lastThing.textContent;
	}

}

function storeData() {
 


}

function deleteNumber() {

}

function clearScreen() {

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