function convertCelsiusIntoKelvin(celsiusDegree) {
    const kelvin = (celsiusDegree + 273.15).toFixed(2);
    return parseFloat(kelvin);
}
module.exports = convertCelsiusIntoKelvin;
