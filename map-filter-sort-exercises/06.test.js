const getMultiplesOfFiveNumbers = require('./06');

test('should show multiples of five numbers', () => {
    expect(getMultiplesOfFiveNumbers([1,5,10,17])).toEqual([5,10]);
})