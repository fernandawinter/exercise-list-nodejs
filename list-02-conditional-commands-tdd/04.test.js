const getTheNumberAndCalculateItsSquareAndSquareRoot = require('./04');

test('the number 8 is positive and this number squared is 64 and its square root is 2.83', () => {
    expect(getTheNumberAndCalculateItsSquareAndSquareRoot(8)).toStrictEqual({square: 64, squareRoot: 2.83})
});