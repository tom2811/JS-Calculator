const display = document.querySelector(".display");

function showDisplay(input) {
    display.value += input
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    display.value = eval(display.value);
}
