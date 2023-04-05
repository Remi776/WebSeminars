function celsiusToFahrenheit(degreeCelsius){
    return ((9 / 5) * degreeCelsius + 32).toFixed(2);
}

const degreeCelsius = Number.parseFloat(prompt("Enter degrees Celsius"));

alert(`Celsius: ${degreeCelsius}, Fahrenheit: ${celsiusToFahrenheit(degreeCelsius)}`);
