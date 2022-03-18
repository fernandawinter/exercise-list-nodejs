const convertKelvinIntoCelsius = require('./08');

test('20 Kelvin degrees is equal to -253.15 Celsius', () => {
    expect(convertKelvinIntoCelsius(20)).toBe(-253.15);
});