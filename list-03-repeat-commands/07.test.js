const getTheAverageFromPositiveNumbers = require('./07');

test('should get the average of the numbers 8, 17, 32, 23, 27, 9, 11, 14, 21, 22, -15 that is equal to 18.4', () => {
    expect(getTheAverageFromPositiveNumbers([8, 17, 32, 23, 27, 9, 11, 14, 21, 22, -15])).toEqual(18.4);
});