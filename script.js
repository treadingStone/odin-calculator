const textDisplay = document.querySelector('.display p');
const buttons = document.querySelector('.buttons');

let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';

function operate() {
    let x = 0;
    let y = 0;
    if (firstNumber.includes('.')) {
        x = parseFloat(firstNumber);
    } else {
        x = parseInt(firstNumber);
    };
    if (secondNumber.includes('.')) {
        y = parseFloat(secondNumber);
    } else {
        y = parseInt(secondNumber);
    };
    if (operator === '+') {
        return (x + y);
    } else if (operator === '-') {
        return (x - y);
    } else if (operator === '*') {
        return (x * y);
    } else if (operator === '/') {
        if (y === 0) {
            alert('Are you trying to destroy the universe!?');
            return 'ERROR';
        } else {
            return (x / y);
        };
    };
};

function reset() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    result = '';
    updateUI();
};

function updateUI() {
    textDisplay.textContent = `${firstNumber !== '' ? firstNumber : '0'} ${operator} ${secondNumber}`;
};

buttons.addEventListener('click', (e) => {
    const buttonText = e.target.textContent;
    const buttonClasses = e.target.classList;
    if (buttonText === 'C') {
        reset();
    } else {
        if (buttonClasses.contains('number')) {
            if (operator === '') {
                firstNumber += buttonText;
            } else {
                secondNumber += buttonText;
            };
        } else if (buttonText === '.') {
            if (operator === '') {
                if (!firstNumber.includes(buttonText)) {
                    firstNumber += buttonText;
                };
            } else if (!secondNumber.includes(buttonText)) {
                secondNumber += buttonText;
            } else {
                alert('There is already a decimal!');
            }
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
                if (operate() !== 'ERROR') {
                    result = operate().toFixed(2);
                    firstNumber = result;
                    secondNumber = '';
                    operator = '';
                } else {
                    reset();
                }
            } else {
                alert('I think you\'re missing something!');
            };
        };
        updateUI();
    };
});