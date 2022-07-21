const getMultipliedByFiveEvenNumbers= require('./11');

test('should show the even numbers multiplied by five', () => {
    expect(getMultipliedByFiveEvenNumbers([2,4,5,7,9])).toEqual([10,20]);
})