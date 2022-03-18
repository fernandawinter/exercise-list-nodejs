function convertKelvinIntoCelsius(kelvintDegree) {
    const celsius = (kelvintDegree - 273.15).toFixed(2);
    return parseFloat(celsius);
}
module.exports = convertKelvinIntoCelsius;
