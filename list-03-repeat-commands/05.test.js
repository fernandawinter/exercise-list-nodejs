const getTheSumOfTenNumbers = require('./05');

test('should sum the numbers 5, 1, 2, 3, 4, 7, 11, 13, 9, 0', () => {
    expect(getTheSumOfTenNumbers([5, 1, 2, 3, 4, 7, 11, 13, 9, 0])).toEqual(55);
});