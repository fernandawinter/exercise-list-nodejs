function convertFahrenheitIntoCelsius(fahrenheitDegree) {
    const celsius = (5.0 * (fahrenheitDegree - 32.0) / 9.0).toFixed(1);
    return parseFloat(celsius);
}
module.exports = convertFahrenheitIntoCelsius;
