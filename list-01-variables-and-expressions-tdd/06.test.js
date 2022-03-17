const convertCelsiusIntoFahrenheit = require('./06');

test('4 Celsius degrees is equal to 39.2 Fahrenheit', () => {
    expect(convertCelsiusIntoFahrenheit(4)).toBe(39.2);
});