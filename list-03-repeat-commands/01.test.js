const getMultiplesOfThree = require('./01');

test('should return first five multiples of 3', () => {
    expect(getMultiplesOfThree()).toEqual([3, 6, 9, 12, 15]);
});