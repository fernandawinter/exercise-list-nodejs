const getTheSquareOrTheSquareRoot = require('./02');

test('the number 4 is positive and its square root is 2', () => {
    expect(getTheSquareOrTheSquareRoot(4)).toBe(2);
});

test('the number -3 is negative and invalid', () => {
    expect(getTheSquareOrTheSquareRoot(-3)).toBe();
});