let previousInput = '';
let currentOperation = '';
let currentInput = '';


const displayBtn = document.querySelector(".display p");
const numsBtns = document.querySelectorAll(".nums button");
const arithmeticBtn = document.querySelector(".arithmetic");
const clearBtn = document.querySelector(".clear");

clearBtn.addEventListener('click', (event) => {
	if (event.target.dataset.action === 'clear') {
		displayBtn.textContent = '';
		previousInput = '';
		currentInput = '';
		currentOperation = '';
	} else if (event.target.dataset.action === 'delete') {
		currentInput = currentInput.slice(0, -1);
		displayBtn.textContent = currentInput;
	}
});

numsBtns.forEach(button => {
	button.addEventListener("click", (event) => {
		currentInput += button.value;
		displayBtn.textContent = '';
		displayBtn.textContent = `${currentInput}`;
	});
});

arithmeticBtn.addEventListener('click', (event) => {
    if (event.target.tagName !== 'BUTTON') return;

    const action = event.target.dataset.action;

    if (action === "equals") {
    let result = calculate(currentOperation, Number(previousInput), Number(currentInput));
    displayBtn.textContent = result;
    previousInput = result;
    currentInput = '';
} else {
        if (previousInput !== '' && currentInput !== '') {
            previousInput = calculate(currentOperation, Number(previousInput), Number(currentInput));
            displayBtn.textContent = previousInput;
        } else {
            previousInput = currentInput;
        }
        currentOperation = action;
        currentInput = '';
    }
});

function calculate(operation, a, b) {
	switch (operation) {
		case "divide":
			if (b == 0) return "Error";
			return a / b;
		case "add": return a + b;
		case "subtract": return a - b;
		case "multiply": return a * b;
	}
}