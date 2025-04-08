const textDisplay = document.querySelector('.display p');
const buttons = document.querySelector('.buttons');

let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';

function operate() {
    const x = parseInt(firstNumber);
    const y = parseInt(secondNumber);
    if (operator === '+') {
        return x + y;
    } else if (operator === '-') {
        return x - y;
    } else if (operator === '*') {
        return x * y;
    } else if (operator === '/') {
        return x / y;
    };
};

function updateUI() {
    textDisplay.textContent = `${firstNumber} ${operator} ${secondNumber}`;
};

buttons.addEventListener('click', (e) => {
    const buttonText = e.target.textContent;
    const buttonClasses = e.target.classList;
    if (buttonClasses.contains('number')) {
        if (operator === '' && firstNumber === '') {
            firstNumber += buttonText;
        } else {
            secondNumber += buttonText;
        };
    } else if (buttonText === '-' || buttonText ===  '+' || buttonText ===  '*' || buttonText ===  '/') {
        if (operator !== '') {
            alert('There is already an operator!');
            return
        } else if (!firstNumber) {
            alert('You need a number to start with!');
            return
        } else {
            operator += buttonText;
        };
    } else if (buttonText === '=') {
        if (firstNumber !== '' && operator !== '' && secondNumber !== '') {
            result = operate();
            firstNumber = result;
            secondNumber = '';
            operator = '';
        } else {
            alert('I think you\'re missing something!');
        }
    };
    updateUI();
});