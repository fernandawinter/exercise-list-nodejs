const convertKilometersIntoMeters = require('./09');

test('4 Celsius degrees is equal to 277.15 Kelvin', () => {
    expect(convertKilometersIntoMeters(4)).toBe(277.15);
});