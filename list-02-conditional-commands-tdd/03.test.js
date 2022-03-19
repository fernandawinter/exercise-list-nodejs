const getThePositiveOrNegativeRealNumber = require('./03');

test('the number 9 is positive and its square root is 3', () => {
    expect(getThePositiveOrNegativeRealNumber(9)).toBe(3);
});

test('the number -4 is negative and this number squared is 16', () => {
    expect(getThePositiveOrNegativeRealNumber(-4)).toBe(16);
});