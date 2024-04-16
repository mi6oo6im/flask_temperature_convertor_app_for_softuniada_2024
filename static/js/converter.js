// Get all button elements

// Calculate buttons:
const calculateCelsiusButton = document.getElementById('celsius-button');
const calculateFahrenheitButton = document.getElementById('fahrenheit-button');
const calculateKelvinButton = document.getElementById('kelvin-button');

// Calculate event listeners:
calculateCelsiusButton.addEventListener('click', changeNumberFromCelsius);
calculateFahrenheitButton.addEventListener('click', changeNumberFromFahrenheit);
calculateKelvinButton.addEventListener('click', changeNumberFromKelvin);

// Copy buttons:
const copyCelsiusButton = document.getElementById('copy-celsius');
const copyFahrenheitButton = document.getElementById('copy-fahrenheit');
const copyKelvinButton = document.getElementById('copy-kelvin');

// Copy event listeners:
copyCelsiusButton.addEventListener('click', copyCelsiusToClipboard);
copyFahrenheitButton.addEventListener('click', copyFahrenheitToClipboard);
copyKelvinButton.addEventListener('click', copyKelvinToClipboard);

// Get all input elements:
const inputCelsiusElement = document.getElementById('celsius-value');
const inputFahrenheitElement = document.getElementById('fahrenheit-value');
const inputKelvinElement = document.getElementById('kelvin-value');

// Select input element:
inputCelsiusElement.addEventListener('focus', (e) => e.target.setSelectionRange(0, 99999));
inputFahrenheitElement.addEventListener('focus', (e) => e.target.setSelectionRange(0, 99999));
inputKelvinElement.addEventListener('focus', (e) => e.target.setSelectionRange(0, 99999));



// Copy Celsius Value to Clipboard:
function copyCelsiusToClipboard() {

    // Select the text field
    inputCelsiusElement.select();
    inputCelsiusElement.setSelectionRange(0, 99999); // For mobile devices
    
    // Copy the text inside the text field
    navigator.clipboard.writeText(inputCelsiusElement.value);
}

// Copy Fahrenheit value to Clipboard:

function copyFahrenheitToClipboard() {

    // Select the text field
    inputFahrenheitElement.select();
    inputFahrenheitElement.setSelectionRange(0, 99999); // For mobile devices
    
    // Copy the text inside the text field
    navigator.clipboard.writeText(inputFahrenheitElement.value);
}

// Copy Kelvin value to Clipboard:

function copyKelvinToClipboard() {

    // Select the text field
    inputKelvinElement.select();
    inputKelvinElement.setSelectionRange(0, 99999); // For mobile devices
    
    // Copy the text inside the text field
    navigator.clipboard.writeText(inputKelvinElement.value);
}

// Convert values from Celsius:

function changeNumberFromCelsius(){
    // Get the element with id
    let numberCelsius = inputCelsiusElement;
    let numberFahrenheit = inputFahrenheitElement;
    let numberKelvin = inputKelvinElement;
    
    // Change the content of the element
    // TODO decimal separator handling , and .
    if (numberCelsius.value.includes(',')) {
        const newValue = numberCelsius.value.replace(',','.');
        numberCelsius.value = newValue;
    }
    let numericCelsius = Number(numberCelsius.value);
    numberFahrenheit.value = (numericCelsius * (9 / 5) + 32).toFixed(2);
    numberKelvin.value = (numericCelsius + 273.15).toFixed(2);
}

// Convert values from Fahrenheit:

function changeNumberFromFahrenheit(){
    
    // Get the element with id
    let numberCelsius = inputCelsiusElement;
    let numberFahrenheit = inputFahrenheitElement;
    let numberKelvin = inputKelvinElement;
    
    // Change the content of the element
    if (numberFahrenheit.value.includes(',')) {
        const newValue = numberFahrenheit.value.replace(',','.');
        numberFahrenheit.value = newValue;
    }
    let numericFahrenheit = Number(numberFahrenheit.value);
    numberCelsius.value = ((numericFahrenheit - 32) * (5 / 9)).toFixed(2);
    numberKelvin.value = (((numericFahrenheit  - 32) * (5 / 9)) + 273.15).toFixed(2);
}

// Convert values from Kelvin:

function changeNumberFromKelvin(){
    // Get the element with id
    let numberCelsius = inputCelsiusElement;
    let numberFahrenheit = inputFahrenheitElement;
    let numberKelvin = inputKelvinElement;
    
    // Change the content of the element
    if (numberKelvin.value.includes(',')) {
        const newValue = numberKelvin.value.replace(',','.');
        numberKelvin.value = newValue;
    }
    let numericKelvin = Number(numberKelvin.value);
    numberCelsius.value = (numericKelvin - 273.15).toFixed(2);
    numberFahrenheit.value = (numericKelvin * 9/5 - 459.67).toFixed(2);
}

// Listeners for 'Enter' on input elements:
// Get the input elements
let inputElementCelsius = inputCelsiusElement;
let inputElementFahrenheit = inputFahrenheitElement;
let inputElementKelvin = inputKelvinElement;

//listener for celsius input:

window.addEventListener("DOMContentLoaded", (event) => {
    const element = inputCelsiusElement;
    if (element) {
      element.addEventListener('keyup', function(event) {
        // Check if the pressed key is the Enter key
        if (event.key === 'Enter') {
            changeNumberFromCelsius();
        }
    });
    }
});

// Listener for Fahrenheit input:

window.addEventListener("DOMContentLoaded", (event) => {
    const element = inputFahrenheitElement;
    if (element) {
      element.addEventListener('keyup', function(event) {
        // Check if the pressed key is the Enter key
        if (event.key === 'Enter') {
            changeNumberFromFahrenheit();
        }
    });
    }
});

// Listener for Kelvin input:

window.addEventListener("DOMContentLoaded", (event) => {
    const element = inputKelvinElement;
    if (element) {
      element.addEventListener('keyup', function(event) {
        // Check if the pressed key is the Enter key
        if (event.key === 'Enter') {
            changeNumberFromKelvin();
        }
    });
    }
});