const getTheHighestAndTheDifferenceBetweenTwoIntegerNumbers = require('./06');

test('the highest number is 7 and the difference between 7 and 2 is 5', () => {
    expect(getTheHighestAndTheDifferenceBetweenTwoIntegerNumbers(7, 2)).toEqual({theHigherOne: 7.0 , theDifferenceBetweenThem: 5.0});
});
