const getNumber = require('./01');

test('get number returns 1 when 1 is provided', () => {
    expect(getNumber(1)).toBe(1);
});