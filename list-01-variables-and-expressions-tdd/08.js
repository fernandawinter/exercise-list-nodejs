function convertKelvinIntoCelsius(kelvinDegree) {
    const celsius = (kelvinDegree - 273.15).toFixed(2);
    return parseFloat(celsius);
}
module.exports = convertKelvinIntoCelsius;
