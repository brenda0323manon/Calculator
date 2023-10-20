function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display'); 
    display.value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        if(display.value.includes('%')) {
            const percentage = parseFloat(display.value) / 100;
            display.value = percentage;
    }   else {
        display.value = eval(display.value);
    }
    }   catch (error) {
        display.value = 'Error';
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach ((button) => {
    button.addEventListener('click', () => {
        if (button.textContent === 'C') {
            clearDisplay();
        }   else if (button.textContent === '=') {
            calculate();
        }   else {
            appendToDisplay(button.textContent);
        }   
    });
});

