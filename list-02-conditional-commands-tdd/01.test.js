const getTheHighestNumber = require('./01');

test('the highest number between 2 and 5 is 5', () => {
    expect(getTheHighestNumber(2, 5)).toBe(5);
});