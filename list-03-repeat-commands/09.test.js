const getFirstOddNaturalNumbers= require('./09');

test('should show the odd numbers before 8', () => {
    expect(getFirstOddNaturalNumbers(8)).toEqual([1, 3, 5, 7, 9, 11, 13, 15]);
});