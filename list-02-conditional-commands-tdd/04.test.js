const getThePositiveSquareAndTheSquareRoot = require('./04');

test('the number 8 is positive and this number squared is 64 and its square root is 2.83', () => {
    expect(getThePositiveSquareAndTheSquareRoot(8)).toStrictEqual({square: 64, squareRoot: 2.83})
});