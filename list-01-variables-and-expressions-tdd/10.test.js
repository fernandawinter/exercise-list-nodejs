const convertKlsPerHourIntoMtsPerSecond = require('./10');

test('10 kilometers is equal to 2.78 meters', () => {
    expect(convertKlsPerHourIntoMtsPerSecond(10)).toBe(2.78);
});