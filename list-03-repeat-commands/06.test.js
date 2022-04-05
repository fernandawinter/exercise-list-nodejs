const getTheAverage = require('./06');

test('should get the average of the numbers 4, 3, 2, 7, 9, 11, 13, 15, 5, 6', () => {
    expect(getTheAverage([4, 3, 2, 7, 9, 11, 13, 15, 5, 6])).toEqual(7.5);
});