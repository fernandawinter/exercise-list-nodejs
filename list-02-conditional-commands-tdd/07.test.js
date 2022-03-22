const getTheHighestNumber = require('./07');

test('the num1 is 6 and the number 2 is 6', () => {
    expect(getTheHighestNumber(6, 6)).toEqual('Both numbers are the same');
});

test('the highest number between 3 and 1 is 3', () => {
    expect(getTheHighestNumber(3, 1)).toEqual(3);
});