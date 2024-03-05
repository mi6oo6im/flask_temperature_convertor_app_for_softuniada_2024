// Copy Celsius Value to Clipboard:
function copyCelsiusToClipboard() {
    // Get the text field
    let copyText = document.getElementById("celsius-value");
    
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
    // Alert the copied text
    alert("Copied value: " + copyText.value);
}

// Copy Fahrenheit value to Clipboard:

function copyFahrenheitToClipboard() {
    // Get the text field
    let copyText = document.getElementById("fahrenheit-value");
    
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
    // Alert the copied text
    alert("Copied value: " + copyText.value);
}

// Copy Kelvin value to Clipboard:

function copyKelvinToClipboard() {
    // Get the text field
    let copyText = document.getElementById("kelvin-value");
    
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
    // Alert the copied text
    alert("Copied value: " + copyText.value);
}

// Convert values from Celsius:

function changeNumberFromCelsius(){
    // Get the element with id
    let numberCelsius = document.getElementById("celsius-value");
    let numberFahrenheit = document.getElementById("fahrenheit-value");
    let numberKelvin = document.getElementById("kelvin-value");
    
    // Change the content of the element
    let numericCelsius = Number(numberCelsius.value);
    numberFahrenheit.value = (numericCelsius * (9 / 5) + 32).toFixed(2);
    numberKelvin.value = (numericCelsius + 273.15).toFixed(2);
}

// Convert values from Fahrenheit:

function changeNumberFromFahrenheit(){
    // Get the element with id
    let numberCelsius = document.getElementById("celsius-value");
    let numberFahrenheit = document.getElementById("fahrenheit-value");
    let numberKelvin = document.getElementById("kelvin-value");
    
    // Change the content of the element
    let numericFahrenheit = Number(numberFahrenheit.value);
    numberCelsius.value = ((numericFahrenheit - 32) * (5 / 9)).toFixed(2);
    numberKelvin.value = (((numericFahrenheit  - 32) * (5 / 9)) + 273.15).toFixed(2);
}

// Convert values from Kelvin:

function changeNumberFromKelvin(){
    // Get the element with id
    let numberCelsius = document.getElementById("celsius-value");
    let numberFahrenheit = document.getElementById("fahrenheit-value");
    let numberKelvin = document.getElementById("kelvin-value");
    
    // Change the content of the element
    let numericKelvin = Number(numberKelvin.value);
    numberCelsius.value = (numericKelvin - 273.15).toFixed(2);
    numberFahrenheit.value = (numericKelvin * 9/5 - 459.67).toFixed(2);
}