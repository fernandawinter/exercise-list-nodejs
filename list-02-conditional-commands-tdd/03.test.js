const getTheRealSquareOrTheSquareRoot = require('./03');

test('the number 9 is positive and its square root is 3', () => {
    expect(getTheRealSquareOrTheSquareRoot(9)).toBe(3);
});

test('the number -4 is negative and this number squared is 16', () => {
    expect(getTheRealSquareOrTheSquareRoot(-4)).toBe(16);
});

test('the number -1.2  is negative and this number squared is 1.44', () => {
    expect(getTheRealSquareOrTheSquareRoot(-1.2)).toBe(1.44);
});