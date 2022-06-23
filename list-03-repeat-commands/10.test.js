const getSumOfTheFirstFiftyEvenNumbers= require('./10');

test('should show the sum of the first fifty even numbers', () => {
    expect(getSumOfTheFirstFiftyEvenNumbers()).toEqual(2550);
});