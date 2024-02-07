function celciusToFahrenheit (deegreCelcius) {
// console.log(degrreCelcius);
const fahrenheit = deegreCelcius * 9/5 + 32;
return fahrenheit;
}
let celciusTemptareture = 0;
let FahrenheitTempareture = celciusToFahrenheit(celciusTemptareture);
console.log(FahrenheitTempareture);