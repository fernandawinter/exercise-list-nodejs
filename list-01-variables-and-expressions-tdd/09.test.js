const convertCelsiusIntoKelvin = require('./09');

test('4 Celsius degrees is equal to 277.15 Kelvin', () => {
    expect(convertCelsiusIntoKelvin(4)).toBe(277.15);
});