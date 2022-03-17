const getFloatNumber = require('./02');

test('get number returns 2.5 when 2.5 is provided', () => {
    expect(getFloatNumber(2.5)).toBe(2.5);
});