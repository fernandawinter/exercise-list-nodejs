const getSumOfNumbers = require('./03');

test('the sum of 3 plus 2 plus 1 is equal to 6', () => {
    expect(getSumOfNumbers(3, 2, 1)).toBe(6);
});