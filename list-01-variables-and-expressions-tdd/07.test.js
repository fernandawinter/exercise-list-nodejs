const convertFahrenheitIntoCelsius = require('./07');

test('8 Fahrenheit degrees is equal to 39.2 Celsius', () => {
    expect(convertFahrenheitIntoCelsius(8)).toBe(-13.3);
});